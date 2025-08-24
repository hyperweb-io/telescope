import { TelescopeBuilder } from "../builder";
import { writeContentToFile } from "../utils/files";
import { join, basename } from "path";
import { makeAliasNameWithPackageAtEnd } from "@cosmology/utils";

/**
 * Gets the aliased function name if it's duplicated across multiple files
 */
function getAliasedFunctionName(
  builder: TelescopeBuilder,
  functionName: string,
  packageName: string
): string {
  const duplicatedHelperFuncs = builder.store.getHelperFuncsInMultipleFiles();
  const isDuplicated = duplicatedHelperFuncs.includes(functionName);

  if (isDuplicated) {
    return makeAliasNameWithPackageAtEnd({
      package: packageName,
      name: functionName,
    });
  }

  return functionName;
}

/**
 * Cleans up comments by removing lint directives and technical annotations
 */
function cleanComment(comment: string): string {
  if (!comment) return comment;

  // Remove lint directives and technical annotations
  const cleanedComment = comment
    // Remove buf:lint:ignore directives
    .replace(/buf:lint:ignore\s+[A-Z_]+/gi, "")
    // Remove other common lint directives
    .replace(/lint:ignore[:\s]+[A-Z_]+/gi, "")
    // Remove protolint directives
    .replace(/protolint:disable[:\s]+[A-Z_]+/gi, "")
    // Remove eslint directives
    .replace(/eslint-disable[:\s-]+[a-z-]+/gi, "")
    // Remove multiple consecutive spaces
    .replace(/\s+/g, " ")
    // Remove leading/trailing whitespace
    .trim();

  return cleanedComment;
}

/**
 * Gets the project name from the output path
 */
function getProjectName(outPath: string): string {
  return basename(outPath);
}

/**
 * Gets the appropriate import path for a function, considering bundle exports
 */
function getImportPath(
  builder: TelescopeBuilder,
  functionName: string,
  packageName: string,
  projectName: string,
  sourceFilename?: string
): string {
  const duplicatedHelperFuncs = builder.store.getHelperFuncsInMultipleFiles();
  const isDuplicated = duplicatedHelperFuncs.includes(functionName);

  // If the function is duplicated (and thus potentially aliased), it should be available in the bundle
  if (isDuplicated) {
    // Check the aliased function name to see if it would be different
    const aliasedName = getAliasedFunctionName(
      builder,
      functionName,
      packageName
    );
    if (aliasedName !== functionName) {
      // Extract the top-level package name (e.g., 'akash' from 'akash.audit.v1beta2')
      const topLevelPackage = packageName.split(".")[0];

      // Function is aliased and should be available in bundle
      return `${projectName}/${topLevelPackage}/bundle`;
    }
  }

  // If we have source filename info, use the full file path
  // This handles all functions with specific file locations
  if (sourceFilename) {
    // Remove .ts extension and convert to proper import path
    const filePath = sourceFilename.replace(/\.ts$/, "");
    return `${projectName}/${filePath}`;
  }

  // Fallback: import from the specific package path
  return `${projectName}/${packageName.replace(/\./g, "/")}`;
}

/**
 * Gets all types for a package by looking at export objects and filtering out extended forms
 */
function getTypesForPackage(
  builder: TelescopeBuilder,
  packageName: string
): Array<{ name: string; sourceFile: string }> {
  const types: Array<{ name: string; sourceFile: string }> = [];

  // Get all contexts for this package
  const packageContexts = builder.contexts.filter(
    (ctx) => ctx.ref.proto.package === packageName
  );

  packageContexts.forEach((context) => {
    // Get types from this context
    const contextTypes = context.types.filter((type) => !type.isNested);

    contextTypes.forEach((typeInfo) => {
      const typeName = typeInfo.name;
      // Filter out extended forms (these are created during code generation but not in the types array)
      if (
        !typeName.endsWith("ProtoMsg") &&
        !typeName.endsWith("Amino") &&
        !typeName.endsWith("AminoMsg") &&
        !typeName.endsWith("Encoded") &&
        !typeName.endsWith("SDKType")
      ) {
        // Get the actual source file from the store mapping
        const typeFiles = builder.store.getTypeFilesMapping(typeName);
        let sourceFile: string;

        if (typeFiles && typeFiles.length > 0) {
          // Use the first (or most relevant) file where this type is defined
          sourceFile = typeFiles[0];
        } else {
          // Fallback to context ref filename if not in mapping
          sourceFile = context.ref.filename.replace(/\.proto$/, ".ts");
        }

        types.push({
          name: typeName,
          sourceFile,
        });
      }
    });
  });

  // Remove duplicates and sort
  const uniqueTypes = types.filter(
    (type, index, self) => index === self.findIndex((t) => t.name === type.name)
  );

  return uniqueTypes.sort((a, b) => a.name.localeCompare(b.name));
}

export const plugin = (builder: TelescopeBuilder) => {
  if (
    !builder.options?.readme?.enabled &&
    !builder.options?.mcpServer?.enabled
  ) {
    return;
  }

  const readmePath = join(builder.outPath, "README.md");
  const projectName = getProjectName(builder.outPath);

  // Get function mappings from builder
  const functionMappings = builder.getFunctionMappings();

  // Generate package documentation
  let packageDocs = "";

  Object.keys(functionMappings)
    .sort()
    .forEach((packageName) => {
      const packageServices = functionMappings[packageName];

      // Check if package has any methods before adding it
      const hasQueryMethods =
        packageServices.Query && Object.keys(packageServices.Query).length > 0;
      const hasMsgMethods =
        packageServices.Msg && Object.keys(packageServices.Msg).length > 0;

      if (!hasQueryMethods && !hasMsgMethods) {
        return; // Skip empty packages
      }

      packageDocs += `## ${packageName}\n\n`;

      // Types section
      const types = getTypesForPackage(builder, packageName);
      if (types && types.length > 0) {
        packageDocs += `### Types\n\n`;
        packageDocs += `| Type | Name | Source |\n`;
        packageDocs += `| --- | --- | --- |\n`;
        types.forEach((type) => {
          packageDocs += `| Type | \`${type.name}\` | [View source ↗](${type.sourceFile}) |\n`;
        });
        packageDocs += "\n";
      }

      // Query section
      if (packageServices.Query) {
        packageDocs += `### Query Methods\n\n`;
        const queryMethods = Object.keys(packageServices.Query);
        queryMethods.forEach((methodName, index) => {
          const method = packageServices.Query[methodName];

          // Get the aliased function name using the same logic as bundler
          const aliasedFunctionName = getAliasedFunctionName(
            builder,
            method.functionName,
            packageName
          );
          const aliasedHookName = getAliasedFunctionName(
            builder,
            method.hookName,
            packageName
          );

          packageDocs += `**${methodName}**\n\n`;

          // Add comment directly after title (if exists)
          if (method.comment) {
            packageDocs += `${cleanComment(method.comment)}\n\n`;
          }

          // Add import code block
          const functionImportPath = getImportPath(
            builder,
            method.functionName,
            packageName,
            projectName,
            method.sourceFilename
          );
          const hookImportPath = method.hookName
            ? getImportPath(
                builder,
                method.hookName,
                packageName,
                projectName,
                method.hookSourceFilename
              )
            : functionImportPath;

          packageDocs += `\`\`\`ts\n`;
          packageDocs += `import { ${aliasedFunctionName} } from '${functionImportPath}'\n`;
          if (method.hookName && aliasedHookName !== aliasedFunctionName) {
            packageDocs += `import { ${aliasedHookName} } from '${hookImportPath}'\n`;
          }
          packageDocs += `\`\`\`\n\n`;

          // Add function details in organized format
          packageDocs += `| Field | Value | Source |\n`;
          packageDocs += `| --- | --- | --- |\n`;

          // Function source
          const functionSourcePath =
            method.sourceFilename ||
            `${packageName.replace(/\./g, "/")}/query.rpc.func.ts`;
          packageDocs += `| Function | \`${aliasedFunctionName}\` | [View source ↗](${functionSourcePath}) |\n`;

          // Hook source (React)
          if (method.hookName && aliasedHookName !== aliasedFunctionName) {
            const hookSourcePath =
              method.hookSourceFilename ||
              `${packageName.replace(/\./g, "/")}/query.rpc.react.ts`;
            packageDocs += `| Hook | \`${aliasedHookName}\` | [View source ↗](${hookSourcePath}) |\n`;
          }

          // Request type source
          if (method.requestType) {
            const requestSourcePath =
              method.typeSourceFilename ||
              `${packageName.replace(/\./g, "/")}/query.ts`;
            packageDocs += `| Request | \`${method.requestType}\` | [View source ↗](${requestSourcePath}) |\n`;
          }

          // Response type source
          if (method.responseType) {
            const responseSourcePath =
              method.typeSourceFilename ||
              `${packageName.replace(/\./g, "/")}/query.ts`;
            packageDocs += `| Response | \`${method.responseType}\` | [View source ↗](${responseSourcePath}) |\n`;
          }

          // Add spacing between methods (but not after the last one)
          if (index < queryMethods.length - 1) {
            packageDocs += "\n---\n\n";
          } else {
            packageDocs += "\n";
          }
        });
      }

      // Transaction section
      if (packageServices.Msg) {
        packageDocs += `### Transaction Methods\n\n`;
        const msgMethods = Object.keys(packageServices.Msg);
        msgMethods.forEach((methodName, index) => {
          const method = packageServices.Msg[methodName];

          // Get the aliased function name using the same logic as bundler
          const aliasedFunctionName = getAliasedFunctionName(
            builder,
            method.functionName,
            packageName
          );
          const aliasedHookName = getAliasedFunctionName(
            builder,
            method.hookName,
            packageName
          );

          packageDocs += `**${methodName}**\n\n`;

          // Add comment directly after title (if exists)
          if (method.comment) {
            packageDocs += `${cleanComment(method.comment)}\n\n`;
          }

          // Add import code block
          const functionImportPath = getImportPath(
            builder,
            method.functionName,
            packageName,
            projectName,
            method.sourceFilename
          );
          const hookImportPath = method.hookName
            ? getImportPath(
                builder,
                method.hookName,
                packageName,
                projectName,
                method.hookSourceFilename
              )
            : functionImportPath;

          packageDocs += `\`\`\`ts\n`;
          packageDocs += `import { ${aliasedFunctionName} } from '${functionImportPath}'\n`;
          if (method.hookName && aliasedHookName !== aliasedFunctionName) {
            packageDocs += `import { ${aliasedHookName} } from '${hookImportPath}'\n`;
          }
          packageDocs += `\`\`\`\n\n`;

          // Add function details in organized format
          packageDocs += `| Field | Value | Source |\n`;
          packageDocs += `| --- | --- | --- |\n`;

          // Function source
          const functionSourcePath =
            method.sourceFilename ||
            `${packageName.replace(/\./g, "/")}/tx.rpc.func.ts`;
          packageDocs += `| Function | \`${aliasedFunctionName}\` | [View source ↗](${functionSourcePath}) |\n`;

          // Hook source (React)
          if (method.hookName && aliasedHookName !== aliasedFunctionName) {
            const hookSourcePath =
              method.hookSourceFilename ||
              `${packageName.replace(/\./g, "/")}/tx.rpc.react.ts`;
            packageDocs += `| Hook | \`${aliasedHookName}\` | [View source ↗](${hookSourcePath}) |\n`;
          }

          // Request type source
          if (method.requestType) {
            const requestSourcePath =
              method.typeSourceFilename ||
              `${packageName.replace(/\./g, "/")}/tx.ts`;
            packageDocs += `| Request | \`${method.requestType}\` | [View source ↗](${requestSourcePath}) |\n`;
          }

          // Response type source
          if (method.responseType) {
            const responseSourcePath =
              method.typeSourceFilename ||
              `${packageName.replace(/\./g, "/")}/tx.ts`;
            packageDocs += `| Response | \`${method.responseType}\` | [View source ↗](${responseSourcePath}) |\n`;
          }

          // Add spacing between methods (but not after the last one)
          if (index < msgMethods.length - 1) {
            packageDocs += "\n---\n\n";
          } else {
            packageDocs += "\n";
          }
        });
      }

      // Add spacing between packages
      packageDocs += "\n";
    });

  const readmeContent = `# Package Documentation
${packageDocs}`;

  writeContentToFile(
    builder.outPath,
    builder.options,
    readmeContent,
    readmePath
  );
};
