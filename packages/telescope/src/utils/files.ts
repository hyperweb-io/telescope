import * as t from "@babel/types";
import { parse, ParserPlugin } from "@babel/parser";
import { TelescopeOptions } from "@cosmology/types";
import { mkdirp } from "mkdirp";
import { writeFileSync } from "fs";
import { dirname } from "path";
import minimatch from "minimatch";
import generate from "@babel/generator";
import { unused } from "./unused";
import { typeOnlyImports } from "./type-only-imports";
import traverse from "@babel/traverse";
import { toPosixPath } from "@cosmology/utils";

export interface ExportedNames {
  names: string[];
  typeNames: string[];
}

const TYPE_ONLY_DECLARATIONS = ["TSTypeAliasDeclaration", "TSInterfaceDeclaration"];

export function getExportedNames(program: t.Statement[]): ExportedNames {
  const names: string[] = [];
  const typeNames: string[] = [];
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
      const isTypeExport = node.exportKind === "type";

      if (node.declaration) {
        const decl = node.declaration;
        const isTypeOnlyDecl = TYPE_ONLY_DECLARATIONS.includes(decl.type);
        const isTypeDecl = isTypeOnlyDecl || decl.type === "TSEnumDeclaration";

        if (isTypeExport || isTypeDecl) {
          if ("id" in decl && decl.id?.type === "Identifier") {
            names.push(decl.id.name);
            if (isTypeOnlyDecl || (isTypeExport && decl.type !== "TSEnumDeclaration")) {
              typeNames.push(decl.id.name);
            }
          }
        }

        if (decl.type === "VariableDeclaration" && decl.kind === "const") {
          decl.declarations.forEach((declarator) => {
            if (declarator.id?.type === "Identifier") {
              names.push(declarator.id.name);
            }
          });
        }
      }

      if (node.specifiers && node.specifiers.length > 0 && isTypeExport) {
        node.specifiers.forEach((spec) => {
          if (
            spec.type === "ExportSpecifier" &&
            spec.exported.type === "Identifier"
          ) {
            names.push(spec.exported.name);
            typeNames.push(spec.exported.name);
          }
        });
      }
    },
  });

  return { names, typeNames };
}

export const writeAstToFile = (
  outPath: string,
  options: TelescopeOptions,
  program: t.Statement[],
  filename: string
) => {
  const ast = t.program(program);
  const plugins: ParserPlugin[] = ["typescript"];
  const newAst = parse(generate(ast).code, {
    sourceType: "module",
    plugins,
  });
  if (options.removeUnusedImports) {
    traverse(newAst, unused);
  }
  traverse(newAst, typeOnlyImports);
  writeContentToFile(
    toPosixPath(outPath),
    options,
    generate(newAst).code,
    toPosixPath(filename)
  );
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
