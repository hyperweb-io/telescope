import generate from '@babel/generator';
import * as t from '@babel/types';
import * as ts from 'typescript';
import { getNestedProto } from '@cosmology/utils';
import { ProtoType } from '@cosmology/types';
import {
    defaultTelescopeOptions,
    getTestProtoStore
} from '../../../../test-utils';
import { ProtoParseContext } from '../../context';
import { createProtoTypeComparison, isMethod } from '.';

const store = getTestProtoStore();
store.traverseAll();
const ref = store.findProto('google/api/servicecontrol/v1/log_entry.proto');
const proto: ProtoType = getNestedProto(ref.traversed).LogEntry;

const contextFor = (timestamp: 'date' | 'timestamp') =>
    new ProtoParseContext(ref, store, {
        ...defaultTelescopeOptions,
        prototypes: {
            ...defaultTelescopeOptions.prototypes,
            typingsFormat: {
                ...defaultTelescopeOptions.prototypes.typingsFormat,
                timestamp,
                duration: 'duration'
            }
        }
    });

describe('timestamp type comparisons', () => {
    it('accepts repeated Date values in a generated message type guard', () => {
        const context = contextFor('date');
        const method = isMethod({
            context,
            name: 'TimestampList',
            proto: {
                ...proto,
                name: 'TimestampList',
                fields: {
                    timestamps: {
                        ...proto.fields.timestamp,
                        name: 'timestamps',
                        rule: 'repeated'
                    }
                }
            }
        });
        const code = generate(
            t.objectExpression([
                t.objectProperty(
                    t.identifier('typeUrl'),
                    t.stringLiteral('/example.TimestampList')
                ),
                method
            ])
        ).code;
        const emitted = ts.transpile(`const TimestampList = ${code};`);
        const check = new Function(`${emitted}; return TimestampList.is;`)();
        expect(check({ timestamps: [new Date(0)] })).toBe(true);
        expect(check({ timestamps: [] })).toBe(true);
        expect(check({ timestamps: ['1970-01-01T00:00:00Z'] })).toBe(false);
        expect(check({ timestamps: [{ seconds: 0n, nanos: 0 }] })).toBe(false);
    });

    it.each([
        ['Timestamp', 'is'],
        ['google.protobuf.Timestamp', 'is'],
        ['Timestamp', 'isSDK'],
        ['google.protobuf.Timestamp', 'isSDK']
    ])(
        'accepts Date values for %s in %s with date typings',
        (type, methodName) => {
            const context = contextFor('date');
            const expression = createProtoTypeComparison({
                context,
                methodName,
                fieldName: t.memberExpression(
                    t.identifier('o'),
                    t.identifier('timestamp')
                ),
                field: { ...proto.fields.timestamp, type }
            });
            const code = generate(expression).code;
            // Evaluate the emitted check without a Timestamp codec in scope: Date
            // representations must not need a protobuf decoder/type guard.
            const check = new Function('o', `return ${code};`);
            expect(check({ timestamp: new Date(0) })).toBe(true);
            expect(check({ timestamp: '1970-01-01T00:00:00Z' })).toBe(false);
            expect(check({ timestamp: { seconds: 0n, nanos: 0 } })).toBe(false);
            expect(check({ timestamp: null })).toBe(false);
        }
    );

    it('keeps the Timestamp codec check for timestamp typings', () => {
        const context = contextFor('timestamp');
        const expression = createProtoTypeComparison({
            context,
            methodName: 'is',
            fieldName: t.memberExpression(
                t.identifier('o'),
                t.identifier('timestamp')
            ),
            field: proto.fields.timestamp
        });
        expect(generate(expression).code).toBe('Timestamp.is(o.timestamp)');
    });

    it('does not apply Date checks to Amino timestamp representations', () => {
        const context = contextFor('date');
        const expression = createProtoTypeComparison({
            context,
            methodName: 'isAmino',
            fieldName: t.memberExpression(
                t.identifier('o'),
                t.identifier('timestamp')
            ),
            field: proto.fields.timestamp
        });
        expect(generate(expression).code).toBe(
            'Timestamp.isAmino(o.timestamp)'
        );
    });

    it.each(['Duration', 'google.protobuf.Duration'])(
        'does not apply date timestamp typings to %s fields',
        (type) => {
            const context = contextFor('date');
            const durationRef = store.findProto('osmosis/lockup/tx.proto');
            const durationProto: ProtoType = getNestedProto(
                durationRef.traversed
            ).MsgLockTokens;
            const expression = createProtoTypeComparison({
                context,
                methodName: 'is',
                fieldName: t.memberExpression(
                    t.identifier('o'),
                    t.identifier('duration')
                ),
                field: { ...durationProto.fields.duration, type }
            });
            expect(generate(expression).code).toBe('Duration.is(o.duration)');
        }
    );
});
