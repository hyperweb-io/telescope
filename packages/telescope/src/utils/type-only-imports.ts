import type { NodePath, Visitor } from "@babel/traverse";

const isTypePosition = (path: NodePath): boolean =>
  path.findParent(
    (parent) =>
      parent.isTSType() ||
      parent.isTSTypeAnnotation() ||
      parent.isTSExpressionWithTypeArguments()
  ) !== null;

export const typeOnlyImports: Visitor = {
  Program(path) {
    path.scope.crawl();
    path.get("body").forEach((stmt) => {
      if (!stmt.isImportDeclaration() || stmt.node.importKind === "type") {
        return;
      }
      const specifiers = stmt.get("specifiers");
      const typeOnly = specifiers.map((spec) => {
        if (spec.isImportNamespaceSpecifier()) {
          return false;
        }
        const binding = stmt.scope.getBinding(spec.node.local.name);
        return (
          !!binding &&
          binding.referencePaths.length > 0 &&
          binding.referencePaths.every(isTypePosition)
        );
      });
      if (!typeOnly.some(Boolean)) {
        return;
      }
      const hasDefault = specifiers.some((spec) =>
        spec.isImportDefaultSpecifier()
      );
      if (typeOnly.every(Boolean) && !(hasDefault && specifiers.length > 1)) {
        stmt.node.importKind = "type";
        return;
      }
      specifiers.forEach((spec, i) => {
        if (typeOnly[i] && spec.isImportSpecifier()) {
          spec.node.importKind = "type";
        }
      });
    });
  },
};
