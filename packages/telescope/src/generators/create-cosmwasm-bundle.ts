import { TelescopeBuilder } from '../builder';
import { TSBuilder } from '@cosmwasm/ts-codegen';
import { resolve, sep } from 'path';

export const plugin = async (
    builder: TelescopeBuilder
) => {

    if (!builder.options.cosmwasm) {
        return;
    }

    const input = builder.options.cosmwasm;

    // Safety guard: never allow emitting into fixtures outputs
    const resolvedOut = resolve(input.outPath);
    const isFixturesOut = (
        resolvedOut.includes(`${sep}__fixtures__${sep}output1`) ||
        resolvedOut.includes(`${sep}__fixtures__${sep}output2`)
    );
    if (isFixturesOut) {
        return;
    }

    const cosmWasmBuilder = new TSBuilder(input);
    await cosmWasmBuilder.build();
    const file = input.options.bundle.bundleFile;
    builder.files.push(file);
};