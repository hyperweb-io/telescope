import { prompt } from '../src/prompt';

describe('prompt', () => {
  it('fills positional answers from argv._ and strips them', async () => {
    const argv = { _: ['transpile', 'extra'] };
    const { cmd } = await prompt(
      [
        {
          _: true,
          type: 'fuzzy',
          name: 'cmd',
          message: 'what do you want to do?',
          choices: ['transpile', 'install'],
        },
      ],
      argv
    );
    expect(cmd).toBe('transpile');
    expect(argv._).toEqual(['extra']);
  });

  it('keeps named argv values for path/string questions', async () => {
    const answers = await prompt(
      [
        { _: true, type: 'path', name: 'protoDirs', message: 'protos?' },
        { _: true, type: 'path', name: 'outPath', message: 'out?' },
      ],
      { _: [], protoDirs: './protos', outPath: './src/codegen', useDefaults: true }
    );
    expect(answers).toMatchObject({
      protoDirs: './protos',
      outPath: './src/codegen',
      useDefaults: true,
    });
  });

  it('resolves checkbox argv values to option values', async () => {
    const { pkg } = await prompt(
      [
        {
          type: 'checkbox',
          name: 'pkg',
          message: 'packages?',
          choices: ['akash', 'osmosis'].map((name) => ({
            name,
            value: `@protobufs/${name}`,
          })),
        },
      ],
      { pkg: ['osmosis'] }
    );
    expect(pkg).toEqual(['@protobufs/osmosis']);
  });

  it('resolves fuzzy:objects argv values to option values', async () => {
    const { chain } = await prompt(
      [
        {
          type: 'fuzzy:objects',
          name: 'chain',
          message: 'chain?',
          choices: [{ name: 'osmosis', value: 'osmo-1' }],
        },
      ],
      { chain: 'osmosis' }
    );
    expect(chain).toBe('osmo-1');
  });
});
