import { extname } from "path";
import * as t from "@babel/types";
import { TelescopeOptions } from "@cosmology/types";

export const recursiveModuleBundle = (options: TelescopeOptions, obj) => {
    return Object.keys(obj).map((key) => {
        if (obj[key]?.__export) {
            // get exported parts inside the package.
            const properties: (
                | t.SpreadElement
                | t.ObjectProperty
                | t.ObjectMethod
            )[] = Object.keys(obj[key])
                .filter((a) => a !== "__export")
                .filter((a) => a.startsWith("_"))
                .map((a) => t.spreadElement(t.identifier(a)));

            // see if there's recursive package inside.
            const others = Object.keys(obj[key])
                .filter((a) => a !== "__export")
                .filter((a) => !a.startsWith("_"))
                .map((otherKey) => ({
                    key: otherKey,
                    value: obj[key][otherKey],
                }));

            if (others.length) {
                // export recursive package through object properties
                properties.push(...recursiveOtherNameSpaces(others));
            }

            const nmspc = t.variableDeclaration("const", [
                t.variableDeclarator(
                    t.identifier(key),
                    t.objectExpression(properties)
                ),
            ]);

            // return nmspc;
            return t.exportNamedDeclaration(nmspc, []);
        } else {
            // you can make a namespace for obj[key]
            // e.g. libs
            return t.exportNamedDeclaration(
                t.tsModuleDeclaration(
                    t.identifier(key),
                    t.tsModuleBlock(recursiveModuleBundle(options, obj[key]))
                )
            );
        }
    });
};

export const recursiveOtherNameSpaces = (objs): t.ObjectProperty[] => {
    return objs.map((obj) => {
        const properties: (
            | t.SpreadElement
            | t.ObjectProperty
            | t.ObjectMethod
        )[] = Object.keys(obj.value)
            .filter((a) => a !== "__export")
            .filter((a) => a.startsWith("_"))
            .map((a) => t.spreadElement(t.identifier(a)));

        const others = Object.keys(obj.value)
            .filter((a) => a !== "__export")
            .filter((a) => !a.startsWith("_"))
            .map((otherKey) => ({ key: otherKey, value: obj.value[otherKey] }));

        if (others.length) {
            properties.push(...recursiveOtherNameSpaces(others));
        }

        return t.objectProperty(
            t.identifier(obj.key),
            t.objectExpression(properties)
        );
    });
};

export const importNamespace = (ident: string, path: string) =>
    t.importDeclaration(
        [t.importNamespaceSpecifier(t.identifier(ident))],
        t.stringLiteral(path.replace(extname(path), ""))
    );

export const exportAllFromImportDeclarations = (
    importDeclarations: t.ImportDeclaration[]
) => {
    return importDeclarations.map((importDeclaration) => {
        return t.exportAllDeclaration(
            t.stringLiteral(importDeclaration.source.value)
        );
    });
};

export const exportAllFromRelPath = (relPath: string) => {
    return t.exportAllDeclaration(t.stringLiteral(relPath));
};

/**
 * e.g. export { MsgCreatePost, MsgUpdatePost as aliasMsgUpdatePost} from "./msg";
 * @param types
 * @param relPath
 */
export const exportTypesWithAlias = (
    types: { name: string; alias: string; isType?: boolean }[],
    relPath: string
) => {
    const exportSpecifiers = types.map((type) => {
        const specifier = t.exportSpecifier(
            t.identifier(type.name),
            t.identifier(type.alias)
        );
        if (type.isType) {
            specifier.exportKind = "type";
        }
        return specifier;
    });
    return t.exportNamedDeclaration(
        null,
        exportSpecifiers,
        t.stringLiteral(relPath)
    );
};
