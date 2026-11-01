import generate from '@babel/generator';
import * as t from '@babel/types';
import * as ts from 'typescript';
import { getNestedProto } from '@cosmology/utils';
import { ProtoType } from '@cosmology/types';
import { defaultTelescopeOptions, getTestProtoStore } from '../../../../../test-utils';
import { ProtoParseContext } from '../../../context';
import { createAminoTypeProperty, createTypeUrlProperty } from '..';

const store = getTestProtoStore();
store.traverseAll();
const ref = store.findProto('cosmos/bank/v1beta1/tx.proto');
const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
const proto: ProtoType = getNestedProto(ref.traversed).MsgSend;

// Compile generated code to declarations to check the type consumers receive.
const declarationFor = (property: t.ObjectProperty) => {
    const code = generate(t.exportNamedDeclaration(t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier('Codec'), t.objectExpression([property]))
    ]))).code;
    const options: ts.CompilerOptions = {
        declaration: true,
        emitDeclarationOnly: true,
        types: [],
        skipLibCheck: true
    };
    const host = ts.createCompilerHost(options);
    const getSourceFile = host.getSourceFile.bind(host);
    host.getSourceFile = (fileName, languageVersion, onError, shouldCreateNewSourceFile) =>
        fileName === 'codec.ts'
            ? ts.createSourceFile(fileName, code, languageVersion, true)
            : getSourceFile(fileName, languageVersion, onError, shouldCreateNewSourceFile);
    let declaration = '';
    host.writeFile = (fileName, text) => {
        if (fileName === 'codec.d.ts') declaration = text;
    };
    const program = ts.createProgram(['codec.ts'], options, host);
    expect(ts.getPreEmitDiagnostics(program)).toEqual([]);
    expect(program.emit().diagnostics).toEqual([]);
    return declaration;
};

describe('codec identifier properties', () => {
    it('preserves the typeUrl literal in declarations', () => {
        expect(declarationFor(createTypeUrlProperty(context, proto)))
            .toContain('typeUrl: "/cosmos.bank.v1beta1.MsgSend";');
    });

    it('preserves the aminoType literal in declarations', () => {
        expect(declarationFor(createAminoTypeProperty(context, proto)))
            .toContain('aminoType: "cosmos-sdk/MsgSend";');
    });

    it('uses the original protobuf name for typeUrl', () => {
        expect(declarationFor(createTypeUrlProperty(context, {
            ...proto, name: 'RenamedMsgSend', originalName: 'MsgSend'
        }))).toContain('typeUrl: "/cosmos.bank.v1beta1.MsgSend";');
    });

    it('omits typeUrl when neither name is present', () => {
        expect(createTypeUrlProperty(context, {
            ...proto, name: undefined, originalName: undefined
        })).toBeUndefined();
    });

    it('omits aminoType when no name is present', () => {
        expect(createAminoTypeProperty(context, {
            ...proto, name: undefined
        })).toBeUndefined();
    });

    it('omits aminoType values that start with a slash', () => {
        const unknown = {
            ...proto, name: 'Unknown', originalName: 'Unknown',
            options: { '(amino.name)': '/custom.Unknown' }
        };
        expect(createAminoTypeProperty(context, unknown)).toBeUndefined();
    });
});
