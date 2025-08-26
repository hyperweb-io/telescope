import { prompt } from '../prompt';
import telescope from '../index';
import { writeFileSync, readFileSync } from 'fs';
import { defaultTelescopeOptions } from '@cosmology/types';
import * as path from 'path'
import * as dotty from 'dotty';
import deepmerge from 'deepmerge';

export default async (argv: {
  [key: string]: string | string[]
}) => {
  let options: {
    [key: string]: unknown
  } = {}
  let protoDirs;
  let outPath;
  let data: any;
  let overrideConfig = true;

  if (argv.useDefaults) {
    const defaultOptions = { ...defaultTelescopeOptions };

    dotty.remove(defaultOptions, "aminoEncoding");
    dotty.remove(defaultOptions, "packages");

    options = defaultOptions;
  } else {
    options = {
      // global options (can be overridden through plugins)
      useInterchainJs: true,
      interfaces: {
        enabled: true,
        useByDefault: true,
        useUnionTypes: true,
      },

      prototypes: {
        enabled: true,
        parser: {
          keepCase: false
        },
        methods: {
          fromJSON: false,
          toJSON: false,
          encode: true,
          decode: true,
          fromPartial: true,
          toAmino: true,
          fromAmino: true,
          fromProto: true,
          toProto: true
        },
        addTypeUrlToObjects: true,
        addTypeUrlToDecoders: true,

        typingsFormat: {
          customTypes: {
            useCosmosSDKDec: true,
          },
          num64: "bigint",
          useDeepPartial: false,
          useExact: false,
          toJsonUnknown: false,
          timestamp: "date",
          duration: "duration",
          updatedDuration: false,
          useTelescopeGeneratedType: true,
          setDefaultEnumToUnrecognized: true,
          autoFixUndefinedEnumDefault: false,
        },
      },

      bundle: {
        enabled: true,
        type: "namespace",
      },

      stargateClients: {
        enabled: false,
        includeCosmosDefaultTypes: true
      },

      aminoEncoding: {
        enabled: true,
        useLegacyInlineEncoding: false,
      },

      lcdClients: {
        enabled: false
      },

      rpcClients: {
        enabled: false,
      }
    }

  }

  const questions = [
    {
      _: true,
      type: 'path',
      name: 'protoDirs',
      message: 'where is the proto directory?',
      default: './protos'
    },
    {
      _: true,
      type: 'path',
      name: 'outPath',
      message: 'where is the output directory?',
      default: './src/codegen'
    }
  ];

  if (argv.config) {
    overrideConfig = false;
    const { config } = argv;
    const configs = Array.isArray(config) ? config : [config];
    const inputConfigFullPaths = configs.map(c => path.resolve(c));
    let configJson;

    for (const inputConfigPath of inputConfigFullPaths) {
      try {
        const configText = readFileSync(inputConfigPath, {
          encoding: 'utf8'
        })
        if (configJson) {
          configJson = deepmerge(configJson, JSON.parse(configText));
        } else {
          configJson = JSON.parse(configText);
        }
      } catch (ex) {
        console.log(ex);
        throw new Error("Must provide a .json file for --config.");
      }
    }

    // append protoDirs in config to argv.protoDirs
    argv.protoDirs = [
      ...(argv.protoDirs
        ? Array.isArray(argv.protoDirs)
          ? argv.protoDirs
          : [argv.protoDirs]
        : []),
      ...(configJson.protoDirs ?? []),
    ];

    if (configJson.outPath) {
      argv.outPath = configJson.outPath;
    }

    // For now, useDefaults will be override by --config
    if (configJson.options) {
      options = configJson.options;
    }
  }

  if (!argv.config && !argv.useDefaults) {
    try {
      //check if there's valid .telescope.json file to use
      data = JSON.parse(readFileSync('./.telescope.json', {
        encoding: 'utf8'
      }))
    } catch (e) { }

    //if there's existing valid .telescope.json, use and keep the file
    if (data?.protoDirs && data?.outPath && data?.options) {
      overrideConfig = false
      protoDirs = data.protoDirs
      outPath = data.outPath
      options = data.options
    }
  }
  if (!protoDirs || !outPath) {
    ({ protoDirs, outPath } = await prompt(questions, argv));
  }

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }

  // remove any duplicate protodirs
  protoDirs = [...new Set(protoDirs)];

  if (overrideConfig) {
    writeFileSync(
      process.cwd() + '/.telescope.json',
      JSON.stringify(
        {
          protoDirs,
          outPath,
          options
        }, null, 2)
    );
  }

  await telescope({
    protoDirs,
    outPath,
    options
  });

  console.log(`✨ transpilation successful!`);
};