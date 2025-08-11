import * as t from "@babel/types";
import { parse, ParserPlugin } from "@babel/parser";
import { TelescopeOptions } from "@cosmology/types";
import { mkdirp } from "mkdirp";
import { writeFileSync } from "fs";
import { dirname } from "path";
import { minimatch } from "minimatch";
import generate from "@babel/generator";
import { unused } from "./unused";
import traverse from "@babel/traverse";
import { toPosixPath } from "@cosmology/utils";

export function getExportedTypeNames(program: t.Statement[]): string[] {
  const exportedNames: string[] = [];
  const ast = t.program(program);
  const content = generate(ast).code;
  const plugins: ParserPlugin[] = ["typescript"];
  const newAst = parse(content, {
    sourceType: "module",
    plugins,
  });

  traverse(newAst, {
    ExportNamedDeclaration(path) {
      const node = path.node;

      // Handle direct declarations (type aliases, interfaces, enums)
      if (node.declaration) {
        const decl = node.declaration;
        const isTypeExport = node.exportKind === "type";
        const isTypeDecl = [
          "TSTypeAliasDeclaration",
          "TSInterfaceDeclaration",
          "TSEnumDeclaration",
        ].includes(decl.type);

        if (isTypeExport || isTypeDecl) {
          if ("id" in decl && decl.id?.type === "Identifier") {
            exportedNames.push(decl.id.name);
          }
        }

        // Handle const declarations that might be types (e.g., const schemas)
        if (decl.type === "VariableDeclaration" && decl.kind === "const") {
          decl.declarations.forEach((declarator) => {
            if (declarator.id?.type === "Identifier") {
              exportedNames.push(declarator.id.name);
            }
          });
        }
      }

      // Handle export specifiers (e.g., export { SomeType })
      if (node.specifiers && node.specifiers.length > 0) {
        const isTypeExport = node.exportKind === "type";
        if (isTypeExport) {
          node.specifiers.forEach((spec) => {
            if (spec.type === "ExportSpecifier" && spec.exported.type === "Identifier") {
              exportedNames.push(spec.exported.name);
            }
          });
        }
      }
    },
  });

  return exportedNames;
}

export const writeAstToFile = (
  outPath: string,
  options: TelescopeOptions,
  program: t.Statement[],
  filename: string
) => {
  const ast = t.program(program);
  const content = generate(ast).code;

  if (options.removeUnusedImports) {
    const plugins: ParserPlugin[] = ["typescript"];
    const newAst = parse(content, {
      sourceType: "module",
      plugins,
    });
    traverse(newAst, unused);
    const content2 = generate(newAst).code;
    writeContentToFile(
      toPosixPath(outPath),
      options,
      content2,
      toPosixPath(filename)
    );
  } else {
    writeContentToFile(
      toPosixPath(outPath),
      options,
      content,
      toPosixPath(filename)
    );
  }
};

export const writeContentToFile = (
  outPath: string,
  options: TelescopeOptions,
  content: string,
  filename: string
) => {
  let esLintPrefix = "";
  let tsLintPrefix = "";

  let nameWithoutPath = filename.replace(outPath, "");
  // strip off leading slash
  if (nameWithoutPath.startsWith("/"))
    nameWithoutPath = nameWithoutPath.replace(/^\//, "");

  options.tsDisable.patterns.forEach((pattern) => {
    if (minimatch(nameWithoutPath, pattern)) {
      tsLintPrefix = `//@ts-nocheck\n`;
    }
  });
  options.eslintDisable.patterns.forEach((pattern) => {
    if (minimatch(nameWithoutPath, pattern)) {
      esLintPrefix = `/* eslint-disable */\n`;
    }
  });

  if (
    options.tsDisable.files.includes(nameWithoutPath) ||
    options.tsDisable.disableAll
  ) {
    tsLintPrefix = `//@ts-nocheck\n`;
  }

  if (
    options.eslintDisable.files.includes(nameWithoutPath) ||
    options.eslintDisable.disableAll
  ) {
    esLintPrefix = `/* eslint-disable */\n`;
  }

  const text = tsLintPrefix + esLintPrefix + content;
  mkdirp.sync(dirname(filename));
  writeFileSync(filename, text);
};
