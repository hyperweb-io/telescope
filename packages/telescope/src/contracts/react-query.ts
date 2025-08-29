import { prompt } from '../prompt';
import { TSBuilder } from '@cosmwasm/ts-codegen';
import { getContracts } from '../utils/contracts';
import { resolve, sep } from 'path';

export default async (argv) => {
    const contracts = getContracts();

    const questions = [
        {
            _: true,
            type: 'checkbox',
            name: 'schema',
            message: 'which directory contains the the Rust contracts?',
            choices: contracts
        },
        {
            _: true,
            type: 'path',
            name: 'out',
            message: 'where is the output directory?',
            default: './src/contracts'
        }
    ];

    let { schema, out } = await prompt(questions, argv);
    if (!Array.isArray(schema)) schema = [schema];

    const resolvedOut = resolve(out);
    const isFixturesOut = (
        resolvedOut.includes(`${sep}__fixtures__${sep}output1`) ||
        resolvedOut.includes(`${sep}__fixtures__${sep}output2`)
    );
    if (isFixturesOut) {
        return;
    }

    const builder = new TSBuilder({
        contracts: schema,
        outPath: out,
        options: {
            bundle: { enabled: false },
            // enable only what this command is responsible for
            types: { enabled: true },
            client: { enabled: false },
            messageComposer: { enabled: false },
            reactQuery: { enabled: true },
            recoil: { enabled: false },
            messageBuilder: { enabled: false },
            useContractsHook: { enabled: false }
        }
    });

    await builder.build();

};