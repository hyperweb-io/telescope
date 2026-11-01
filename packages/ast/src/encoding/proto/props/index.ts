import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@cosmology/types';
import { getAminoTypeName, getTypeUrl } from '../../amino';

export const createTypeUrlProperty = (
    context: ProtoParseContext,
    proto: ProtoType
) => {
    const typeUrl = getTypeUrl(context.ref.proto, proto);
    if (!typeUrl) return;
    return t.objectProperty(
        t.identifier('typeUrl'),
        t.tsAsExpression(t.stringLiteral(typeUrl), t.tsTypeReference(t.identifier('const')))
    )
};

export const createAminoTypeProperty = (
    context: ProtoParseContext,
    proto: ProtoType
) => {
    const str = getAminoTypeName(context, context.ref.proto, proto);
    if (!str || str.startsWith('/')) return;
    return t.objectProperty(
        t.identifier('aminoType'),
        t.tsAsExpression(t.stringLiteral(str), t.tsTypeReference(t.identifier('const')))
    )
};