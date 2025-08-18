import { TSBuilderInput } from "@cosmwasm/ts-codegen";
import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake, camel } from "case";
import { Operation } from "fast-json-patch";

/**
 * Log levels for Telescope code generation
 */
export enum TelescopeLogLevel {
  None = 0,
  Info,
  Warn,
  Error,
  Debug,
}

/**
 * The name mappers for helper functions.
 */
export interface HelperFuncNameMappersRule {
  funcBody: "unchanged" | "get" | ((ctx: AliasNameMappersContext) => string);
  hookPrefix?: string;
}

export interface AliasNameMappersContext {
  name: string;
  package: string;
}

export interface AliasNameMappers {
  [key: string]: string | ((ctx: AliasNameMappersContext) => string);
}

/**
 * The name mappers for helper functions.
 */
export interface HelperFuncNameMappers {
  /**
   * the key is a pattern to apply rules of followed body and prefix. case insensitive
   * .e.g: cosmos.gov.v1beta1.*Vote*
   */
  [key: string]: {
    // change the method name to a new name to make the body part without the prefix, if pattern matched.
    // Otherwise, see defaults in Query and Msg.
    funcBody: "unchanged" | "get" | ((ctx: AliasNameMappersContext) => string);
    // prefix for the hook function, if pattern matched. Otherwise, default to "use"
    hookPrefix?: string;
  };
}

/**
 * Main Telescope configuration options
 */
export interface TelescopeOpts {
  /**
   * Environment preset for code generation
   * @default "default"
   */
  env?: "default" | "v-next";

  /**
   * Use InterchainJS for signing clients instead of CosmJS
   * @default false
   */
  useInterchainJs?: boolean;

  /**
   * Is generating InterchainJS Cosmos-Types
   * @default false
   */
  isGeneratingCosmosTypes?: boolean;

  /**
   * Remove unused imports from generated files
   * @default true
   */
  removeUnusedImports?: boolean;

  /**
   * Use arrow functions for class methods
   * @default false
   */
  classesUseArrowFunctions?: boolean;

  /**
   * Use Cosmos SDK types (like Dec) instead of native types
   * @default true
   */
  useSDKTypes?: boolean;

  /**
   * Include external helper functions
   * @default false
   */
  includeExternalHelpers?: boolean;

  /**
   * Restore import extensions (e.g., '.js')
   * @default undefined
   */
  restoreImportExtension?: string;

  /**
   * Generate README files
   * @default { enabled: false }
   */
  readme?: {
    enabled: boolean;
  };

  /**
   * Logging level for code generation
   * @default TelescopeLogLevel.None
   */
  logLevel?: TelescopeLogLevel;

  /**
   * Interface generation options
   */
  interfaces?: {
    /**
     * Enable converters between Any type and specific implemented interfaces
     * @default true
     */
    enabled?: boolean;

    /**
     * Enable GlobalDecoderRegistry and related functions
     * @default false
     */
    useGlobalDecoderRegistry?: boolean;

    /**
     * Automatically register all decoders to the global registry
     * @default true
     */
    registerAllDecodersToGlobal?: boolean;

    /**
     * Add useInterfaces argument to decode and toAmino functions
     * @default false
     */
    useUseInterfacesParams?: boolean;

    /**
     * Use interface decoders by default
     * @default true
     */
    useByDefault?: boolean;

    /**
     * Use interface decoders by default in RPC clients
     * @default true
     */
    useByDefaultRpc?: boolean;

    /**
     * Generate Any type as union types instead of intersection types
     * @default false
     */
    useUnionTypes?: boolean;
  };

  /**
   * Prototypes generation options
   */
  prototypes?: {
    /**
     * Enable generation of proto encoding methods
     * @default true
     */
    enabled?: boolean;

    /**
     * Alias mapping for type names
     */
    alias?: AliasNameMappers;

    /**
     * Protobuf parser options
     */
    parser?: {
      /**
       * Keep original casing when parsing
       * @default false
       */
      keepCase?: boolean;

      /**
       * Use alternate comment mode
       * @default true
       */
      alternateCommentMode?: boolean;

      /**
       * Prefer trailing comments
       * @default false
       */
      preferTrailingComment?: boolean;
    };

    /**
     * Methods to generate for each type
     */
    methods?: {
      /** Generate encode method */
      encode?: boolean;
      /** Generate decode method */
      decode?: boolean;
      /** Generate fromJSON method */
      fromJSON?: boolean;
      /** Generate toJSON method */
      toJSON?: boolean;
      /**
       * Generate fromPartial method
       * @deprecated The 'fromPartial' option will be deprecated in a future version. Encoder objects need fromPartial to be a creator function to create instance of the type. So it should always be left on.
       */
      fromPartial?: boolean;
      /** Generate toSDK method */
      toSDK?: boolean;
      /** Generate fromSDK method */
      fromSDK?: boolean;
      /** Generate fromSDKJSON method */
      fromSDKJSON?: boolean;
      /** Generate toAmino method */
      toAmino?: boolean;
      /** Generate fromAmino method */
      fromAmino?: boolean;
      /** Generate toProto method */
      toProto?: boolean;
      /** Generate fromProto method */
      fromProto?: boolean;
    };

    /**
     * Enable strict null checks for prototype methods
     * @default false
     */
    strictNullCheckForPrototypeMethods?: boolean;

    /**
     * Set default values for pagination in fromPartial methods
     * @default false
     */
    paginationDefaultFromPartial?: boolean;

    /**
     * Export a protoPackage variable to indicate package name
     * @default false
     */
    includePackageVar?: boolean;

    /**
     * Set default optionality of fields
     * @default false
     */
    fieldDefaultIsOptional?: boolean;

    /**
     * Use (gogoproto.nullable) values in determining optionality
     * @default true
     */
    useOptionalNullable?: boolean;

    /**
     * Allow Types to be undefined
     * @default false
     */
    allowUndefinedTypes?: boolean;

    /**
     * Allow encoders to encode default values of scalar types
     * @default false
     */
    allowEncodeDefaultScalars?: boolean;

    /**
     * Determine whether scalar types are nullable by default
     * @default false
     */
    isScalarDefaultToNullable?: boolean;

    /**
     * Enforce checking that required scalar fields are not null/undefined
     * @default false
     */
    enforceNullCheck?: boolean;

    /**
     * Make query parameters optional
     * @default false
     */
    optionalQueryParams?: boolean;

    /**
     * Make PageRequest fields optional
     * @default false
     */
    optionalPageRequests?: boolean;

    /**
     * Add $typeUrl field to generated interfaces
     * @default true
     */
    addTypeUrlToObjects?: boolean;

    /**
     * Add aminoType field to generated Decoders
     * @default false
     */
    addAminoTypeToObjects?: boolean;

    /**
     * Add typeUrl field to generated Decoders
     * @default true
     */
    addTypeUrlToDecoders?: boolean;

    /**
     * Generate Registry loader in *.registry.ts files
     * @default true
     */
    enableRegistryLoader?: boolean;

    /**
     * Generate MessageComposer in *.registry.ts files
     * @default true
     */
    enableMessageComposer?: boolean;

    /**
     * Exclude specific packages and protos from generation
     */
    excluded?: {
      /** Packages to exclude */
      packages?: string[];
      /** Proto files to exclude (can be overridden by dependencies) */
      protos?: string[];
      /** Proto files to exclude (cannot be overridden) */
      hardProtos?: string[];
    };

    /**
     * Include specific packages and protos in generation
     */
    includes?: {
      /** Packages to include */
      packages?: string[];
      /** Proto files to include */
      protos?: string[];
    };

    /**
     * Type formatting options
     */
    typingsFormat?: {
      /**
       * Custom type handling options
       */
      customTypes?: {
        /** Enable handling of cosmos.Dec proto custom type */
        useCosmosSDKDec?: boolean;
        /** Use enhanced decimal instead of @cosmjs/math decimal */
        useEnhancedDecimal?: boolean;
        /** Use @endo/base64 library */
        base64Lib?: "@endo/base64";
      };

      /** Format for 64-bit numbers */
      num64?: "long" | "bigint";
      /** Use DeepPartial instead of Partial */
      useDeepPartial?: boolean;
      /** Use Exact TS type */
      useExact?: boolean;
      /** Use any for toJSON methods instead of JsonSafe */
      toJsonUnknown?: boolean;
      /** Format for Timestamp proto type */
      timestamp?: "date" | "timestamp";
      /** Format for Duration proto type */
      duration?: "duration" | "string";

      /** Set default enum value to unrecognized */
      setDefaultEnumToUnrecognized?: boolean;
      /** Auto-fix undefined enum defaults */
      autoFixUndefinedEnumDefault?: boolean;
      /** Set default custom types to undefined */
      setDefaultCustomTypesToUndefined?: boolean;

      /** temporary field to avoid breaking changes */
      updatedDuration?: boolean;

      /** Use TelescopeGeneratedType instead of CosmJS GeneratedType */
      useTelescopeGeneratedType?: boolean;
    };

    /**
     * JSON patch operations to apply to proto files
     */
    patch?: {
      [key: string]: Operation[];
    };
  };

  /**
   * Enum generation options
   */
  enums?: {
    /**
     * Use custom names from proto options
     * @default false
     */
    useCustomNames?: boolean;
  };

  /**
   * TypeScript disable options
   */
  tsDisable?: {
    /** Files to disable TypeScript checking */
    files?: string[];
    /** Disable all TypeScript checking */
    disableAll?: boolean;
    /** Patterns to match files for disabling */
    patterns?: string[];
  };

  /**
   * ESLint disable options
   */
  eslintDisable?: {
    /** Files to disable ESLint */
    files?: string[];
    /** Disable all ESLint checking */
    disableAll?: boolean;
    /** Patterns to match files for disabling */
    patterns?: string[];
  };

  /**
   * Bundle generation options
   */
  bundle?: {
    /**
     * Enable bundling all files into a scoped index file
     * @default true
     */
    enabled: boolean;
    /**
     * Bundle type
     * @default "namespace"
     */
    type?: "namespace" | "module";
  };

  /**
   * CosmWasm code generation options
   * See @cosmwasm/ts-codegen for documentation
   */
  cosmwasm?: TSBuilderInput;

  /**
   * Aggregated LCD client options
   */
  aggregatedLCD?: {
    /** Directory to place aggregated LCD client */
    dir: string;
    /** Filename for aggregated LCD client */
    filename: string;
    /** Packages to include */
    packages: string[];
    /** Proto files to include */
    protos?: string[];
    /** Add to bundle */
    addToBundle: boolean;
  };

  /**
   * Stargate client options
   */
  stargateClients?: {
    /**
     * Enable stargate client generation
     * @default true
     */
    enabled: boolean;
    /**
     * Include CosmJS default types
     * @default true (except cosmos package)
     */
    includeCosmosDefaultTypes?: boolean;
    /**
     * Add getSigningTxRpc to clients
     * @default false
     */
    addGetTxRpc?: boolean;
  };

  /**
   * Amino encoding options
   */
  aminoEncoding?: {
    /**
     * Enable amino types and converters generation
     * @default true
     */
    enabled: boolean;

    /**
     * Custom type handling options
     */
    customTypes?: {
      /**
       * Use Cosmos SDK Dec type
       * @default false
       */
      useCosmosSDKDec?: boolean;
    };

    /**
     * Tags that determine field omission in JSON
     * @default ["omitempty", "dont_omitempty"]
     */
    omitEmptyTags?: ("omitempty" | "dont_omitempty")[];

    /**
     * Use proto optionality for determining required fields
     * @default false
     */
    useProtoOptionality?: boolean;

    /**
     * Disable generating AminoMsg types
     * @default false
     */
    disableMsgTypes?: boolean;

    /**
     * Casing function for amino field names
     * @default snake
     */
    casingFn?: Function;

    /**
     * Amino type name exceptions
     */
    exceptions?: AminoExceptions;

    /**
     * Function to map type URLs to amino types
     */
    typeUrlToAmino?: (typeUrl: string) => string | undefined;

    /**
     * Use legacy inline encoding
     * @deprecated The logic of useLegacyInlineEncoding will be deprecated in the future.
     * @default false
     */
    useLegacyInlineEncoding?: boolean;

    /**
     * Legacy amino converter options
     */
    legacy?: {
      /** Handle null cases in legacy converters */
      useNullHandling?: boolean;
      /** Handle omit empty in legacy converters */
      useOmitEmpty?: boolean;
    };
  };

  /**
   * LCD client generation options
   */
  lcdClients?: {
    /**
     * Enable LCD client generation
     * @default true
     */
    enabled: boolean;

    /**
     * Make scoped clients exclusive
     * @default true
     */
    scopedIsExclusive?: boolean;

    /**
     * Generate factory bundle aggregate
     * @default true
     */
    bundle?: boolean;

    /**
     * Scoped LCD client configuration
     */
    scoped?: {
      /** Directory for scoped clients */
      dir: string;
      /** Filename for scoped client */
      filename?: string;
      /** Packages to include */
      packages: string[];
      /** Proto files to include */
      protos?: string[];
      /** Add to bundle */
      addToBundle: boolean;
      /** Method name for the scoped client */
      methodName?: string;
    }[];
  };

  /**
   * RPC client generation options
   */
  rpcClients?: {
    /**
     * RPC client type
     * @default "tendermint"
     */
    type?: "tendermint" | "grpc-web" | "grpc-gateway";

    /**
     * Client style options
     */
    clientStyle?: {
      /**
       * Use updated client style
       * @default false
       */
      useUpdatedClientStyle?: boolean;

      /**
       * Client types to generate
       */
      type?: ("all-client" | "sdk-module-client" | "custom-client")[];

      /**
       * Custom client options
       */
      customClientOption?: {
        /** Client name */
        name: string;
        /** Output filename */
        fileName: string;
        /** Include patterns */
        include?: {
          patterns?: string[];
        };
      }[];

      /**
       * SDK module client options
       */
      sdkModuleClientOption?: string[];
    };

    /**
     * Enable RPC client generation
     * @default true
     */
    enabled: boolean;

    /**
     * Inline all RPC methods into single file
     * @default false
     */
    inline?: boolean;

    /**
     * Enable extensions
     * @default true
     */
    extensions?: boolean;

    /**
     * Use camel case for method names
     * @default true
     */
    camelCase?: boolean;

    /**
     * Make scoped clients exclusive
     * @default true
     */
    scopedIsExclusive?: boolean;

    /**
     * Generate factory bundle aggregate
     * @default true
     */
    bundle?: boolean;

    /**
     * Service implementation mapping
     */
    serviceImplement?: {
      [
      key:
        | "Msg"
        | "Query"
        | "Service"
        | "ReflectionService"
        | "ABCIApplication"
        | string
      ]: {
        include?: {
          patterns?: string[];
        };
        type: "Query" | "Tx" | string;
      };
    };

    /**
     * Enabled services
     * @default ["Msg", "Query", "Service"]
     */
    enabledServices?: (
      | "Msg"
      | "Query"
      | "Service"
      | "ReflectionService"
      | "ABCIApplication"
      | string
    )[];

    /**
     * Scoped RPC client configuration
     */
    scoped?: {
      /** Directory for scoped clients */
      dir: string;
      /** Filename for scoped client */
      filename?: string;
      /** Packages to include */
      packages: string[];
      /** Proto files to include */
      protos?: string[];
      /** Add to bundle */
      addToBundle: boolean;
      /** Method name for query client */
      methodNameQuery?: string;
      /** Method name for tx client */
      methodNameTx?: string;
    }[];

    /**
     * Instant operations configuration
     */
    instantOps?: {
      /** Class name for instant ops */
      className: string;
      /** Include configuration */
      include?: {
        /** Service types to include */
        serviceTypes?: ("Query" | "Tx" | string)[];
        /** Pattern matching */
        patterns?: string[];
      };
      /** Name mapping configuration */
      nameMapping?: {
        All: {
          [key: string]: string;
        };
        Query?: {
          [key: string]: string;
        };
        Msg?: {
          [key: string]: string;
        };
      };
    }[];

    /**
     * Use connectComet function
     * @default false
     */
    useConnectComet?: boolean;

    /**
     * Allow custom query client resolver
     * @default false
     */
    useMakeClient?: boolean;
  };
  /**
   * Helper function generation options
   */
  helperFunctions?: {
    /**
     * Enable helper function generation
     * @default false
     */
    enabled: boolean;

    /**
     * Use global decoder registry
     * @default false
     */
    useGlobalDecoderRegistry?: boolean;

    /**
     * Hook generation options
     */
    hooks?: {
      /** Generate React hooks */
      react: boolean;
      /** Generate Vue hooks */
      vue?: boolean;
    };

    /**
     * Include configuration
     */
    include?: {
      /** Service types to include */
      serviceTypes?: ("Query" | "Tx")[];
      /** Pattern matching (case insensitive) */
      patterns?: string[];
    };

    /**
     * Name mapping configuration
     */
    nameMappers?: {
      /**
       * Map method names for all services
       * funcBody defaults to "unchanged"
       */
      All?: HelperFuncNameMappers;
      /**
       * Map method names for Query services
       * Overrides All rules if pattern exists
       * funcBody defaults to "get"
       */
      Query?: HelperFuncNameMappers;
      /**
       * Map method names for Msg services
       * Overrides All rules if pattern exists
       * funcBody defaults to "unchanged"
       */
      Msg?: HelperFuncNameMappers;
    };
  };

  /**
   * React Query generation options
   */
  reactQuery?: {
    /**
     * Enable React Query hooks generation
     * @default false
     */
    enabled: boolean;

    /**
     * Allow extra query key parameter
     * @default false
     */
    needExtraQueryKey?: boolean;

    /**
     * Include configuration
     */
    include?: {
      /**
       * Pattern matching
       * @deprecated in favor of packages and protos supporting minimatch
       */
      patterns?: string[];
      /** Packages to include */
      packages?: string[];
      /** Proto files to include */
      protos?: string[];
    };

    /**
     * Instant export configuration
     */
    instantExport?: {
      /** Include patterns */
      include: {
        patterns?: string[];
      };
      /** Name mapping for exports */
      nameMapping?: {
        [key: string]: string;
      };
    };
  };

  /**
   * MobX generation options
   */
  mobx?: {
    /**
     * Enable MobX store generation
     * @default false
     */
    enabled: boolean;

    /**
     * Include configuration
     */
    include?: {
      /**
       * Pattern matching
       * @deprecated in favor of packages and protos supporting minimatch
       */
      patterns?: string[];
      /** Packages to include */
      packages?: string[];
      /** Proto files to include */
      protos?: string[];
    };
  };

  /**
   * Pinia generation options
   */
  pinia?: {
    /**
     * Enable Pinia store generation
     * @default false
     */
    enabled: boolean;

    /**
     * Include configuration
     */
    include?: {
      /**
       * Pattern matching
       * @deprecated in favor of packages and protos supporting minimatch
       */
      patterns?: string[];
      /** Packages to include */
      packages?: string[];
      /** Proto files to include */
      protos?: string[];
    };
  };

  /**
   * MCP Server generation options
   */
  mcpServer?: {
    /**
     * Generate MCP (Model Context Protocol) servers for AI agent integration
     * @default false
     */
    enabled: boolean;
  };
}

/**
 * Package-specific option overrides
 */
interface TelescopePackageOpts {
  /**
   * Package-specific configuration overrides
   * Keys are package names, values are partial TelescopeOpts
   */
  packages?: Record<string, any>;
}

/**
 * Complete Telescope configuration options
 * Combines general options with package-specific overrides
 */
export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

/**
 * Individual Telescope option keys
 */
export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
  // global options (can be overridden through plugins)

  env: "default",
  removeUnusedImports: true,
  classesUseArrowFunctions: false,
  useSDKTypes: true,
  includeExternalHelpers: false,
  logLevel: TelescopeLogLevel.None,
  readme: { enabled: false },

  interfaces: {
    enabled: true,
    registerAllDecodersToGlobal: true,
    useByDefault: true,
    useByDefaultRpc: true,
    useUnionTypes: false,
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

    enableRegistryLoader: true,
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
    enabled: true,
    includeCosmosDefaultTypes: true,
  },

  aminoEncoding: {
    enabled: true,
    customTypes: {
      useCosmosSDKDec: false,
    },
    omitEmptyTags: ["omitempty", "dont_omitempty"],
    casingFn: snake,
    exceptions: {
      ...DEFAULT_AMINO_EXCEPTIONS,
    },
  },
  lcdClients: {
    bundle: true,
    enabled: true,
    scopedIsExclusive: true,
  },
  rpcClients: {
    type: "tendermint",
    clientStyle: {
      useUpdatedClientStyle: false,
    },
    enabled: true,
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
  },
};
