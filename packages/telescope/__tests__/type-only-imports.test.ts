import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';
import { exportTypesWithAlias } from '@cosmology/ast';
import { typeOnlyImports } from '../src/utils/type-only-imports';

const transform = (code: string) => {
  const ast = parse(code, { sourceType: 'module', plugins: ['typescript'] });
  traverse(ast, typeOnlyImports);
  return generate(ast).code;
};

describe('typeOnlyImports', () => {
  it('marks fully type-only declarations with import type', () => {
    expect(
      transform(`import { A, B } from "./a";\nexport const x: A = {} as B;`)
    ).toContain('import type { A, B } from "./a";');
  });

  it('marks type-only specifiers inline when mixed with runtime values', () => {
    expect(
      transform(
        `import { C, D } from "./c";\nexport const c: D = C.create();`
      )
    ).toContain('import { C, type D } from "./c";');
  });

  it('treats typeof, generics, heritage and casts as type positions', () => {
    const out = transform(
      [
        `import { E, F, G, H } from "./e";`,
        `export interface I extends F {}`,
        `export type J = typeof E;`,
        `export const k = new Map<string, G>();`,
        `export const l = k as unknown as H;`,
      ].join('\n')
    );
    expect(out).toContain('import type { E, F, G, H } from "./e";');
  });

  it('keeps runtime, unused, namespace and mixed default imports as values', () => {
    const out = transform(
      [
        `import Long, { M } from "long";`,
        `import * as N from "./n";`,
        `import { O } from "./o";`,
        `import { P } from "./p";`,
        `export const q: Long = new N.Q() as M;`,
        `export { P };`,
      ].join('\n')
    );
    expect(out).toContain('import Long, { type M } from "long";');
    expect(out).toContain('import * as N from "./n";');
    expect(out).toContain('import { O } from "./o";');
    expect(out).toContain('import { P } from "./p";');
  });
});

describe('exportTypesWithAlias', () => {
  it('marks type-only re-exports', () => {
    const node = exportTypesWithAlias(
      [
        { name: 'Msg', alias: 'Msg', isType: false },
        { name: 'MsgAmino', alias: 'MsgAmino_alias', isType: true },
      ],
      './msg'
    );
    expect(generate(t.program([node])).code).toBe(
      'export { Msg, type MsgAmino as MsgAmino_alias } from "./msg";'
    );
  });
});
