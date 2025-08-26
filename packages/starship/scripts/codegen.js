import { join } from 'path';
import telescope from '@hyperweb/telescope';
import { rimrafSync as rimraf } from 'rimraf';
import { snake, camel } from "case";

const protoDirs = [join(__dirname, '/../../../__fixtures__/chain1')];
const outPath = join(__dirname, '/../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    env: "v-next",
    useInterchainJs: true,
    removeUnusedImports: true,
    classesUseArrowFunctions: false,
    useSDKTypes: true,
    includeExternalHelpers: false,
    logLevel: 0,
    readme: { enabled: false },

    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      registerAllDecodersToGlobal: false,
      useByDefault: true,
      useByDefaultRpc: true,
      useUnionTypes: true,
    },

    prototypes: {
      enabled: true,
      parser: {
        keepCase: false,
        alternateCommentMode: true,
        preferTrailingComment: false,
      },
      methods: {
        encode: true,
        decode: true,
        fromJSON: false,
        toJSON: false,
        fromPartial: true,
        toSDK: false,
        fromSDK: false,
        fromSDKJSON: false,
        toAmino: true,
        fromAmino: true,
        toProto: true,
        fromProto: true,
      },
      strictNullCheckForPrototypeMethods: false,
      includePackageVar: false,
      fieldDefaultIsOptional: false,
      allowUndefinedTypes: false,
      useOptionalNullable: true,

      addTypeUrlToObjects: true,
      addAminoTypeToObjects: false,
      addTypeUrlToDecoders: true,

      enableRegistryLoader: false,
      enableMessageComposer: true,

      optionalQueryParams: false,
      optionalPageRequests: false,

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

    enums: {
      useCustomNames: false,
    },

    bundle: {
      enabled: true,
      type: "namespace",
    },

    tsDisable: {
      files: [],
      patterns: [],
      disableAll: false,
    },

    eslintDisable: {
      files: [],
      patterns: [],
      disableAll: false,
    },

    stargateClients: {
      enabled: false,
      includeCosmosDefaultTypes: true,
    },

    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false,
      customTypes: {
        useCosmosSDKDec: true,
      },
      omitEmptyTags: ["omitempty", "dont_omitempty"],
      casingFn: snake,
    },
    lcdClients: {
      bundle: true,
      enabled: false,
      scopedIsExclusive: true,
    },
    rpcClients: {
      type: "tendermint",
      clientStyle: {
        useUpdatedClientStyle: false,
      },
      enabled: false,
      extensions: true,
      inline: false,
      bundle: true,
      camelCase: true,
      enabledServices: ["Msg", "Query", "Service"],
      scopedIsExclusive: true,
    },

    reactQuery: {
      enabled: false,
      include: {
        patterns: [],
        packages: [],
        protos: [],
      },
    },

    mobx: {
      enabled: false,
      include: {
        patterns: [],
        packages: [],
        protos: [],
      },
    },

    pinia: {
      enabled: false,
      include: {
        patterns: [],
        packages: [],
        protos: [],
      },
    },

    helperFunctions: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      hooks: {
        react: false,
        vue: false
      }
    },

    mcpServer: {
      enabled: false,
    },

    // packages
    packages: {
      cosmos: {
        stargateClients: {
          includeCosmosDefaultTypes: false,
        },
      },
      osmosis: {
        aminoEncoding: {
          casingFn: camel,
        },
      },
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
