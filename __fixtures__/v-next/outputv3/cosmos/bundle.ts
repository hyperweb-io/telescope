import * as _55 from "./app/v1alpha1/config";
import * as _56 from "./app/v1alpha1/module";
import * as _57 from "./app/v1alpha1/query";
import * as _58 from "./auth/v1beta1/auth";
import * as _59 from "./auth/v1beta1/genesis";
import * as _60 from "./auth/v1beta1/query";
import * as _61 from "./authz/v1beta1/authz";
import * as _62 from "./authz/v1beta1/genesis";
import * as _63 from "./authz/v1beta1/query";
import * as _64 from "./authz/v1beta1/tx";
import * as _65 from "./bank/v1beta1/authz";
import * as _66 from "./bank/v1beta1/bank";
import * as _67 from "./bank/v1beta1/genesis";
import * as _68 from "./bank/v1beta1/query";
import * as _69 from "./bank/v1beta1/tx";
import * as _70 from "./base/abci/v1beta1/abci";
import * as _71 from "./base/kv/v1beta1/kv";
import * as _72 from "./base/query/v1beta1/pagination";
import * as _73 from "./base/reflection/v1beta1/reflection";
import * as _74 from "./base/reflection/v2alpha1/reflection";
import * as _75 from "./base/snapshots/v1beta1/snapshot";
import * as _76 from "./base/store/v1beta1/commit_info";
import * as _77 from "./base/store/v1beta1/listening";
import * as _78 from "./base/tendermint/v1beta1/query";
import * as _79 from "./base/v1beta1/coin";
import * as _80 from "./capability/v1beta1/capability";
import * as _81 from "./capability/v1beta1/genesis";
import * as _82 from "./crisis/v1beta1/genesis";
import * as _83 from "./crisis/v1beta1/tx";
import * as _84 from "./crypto/ed25519/keys";
import * as _85 from "./crypto/hd/v1/hd";
import * as _86 from "./crypto/keyring/v1/record";
import * as _87 from "./crypto/multisig/keys";
import * as _88 from "./crypto/secp256k1/keys";
import * as _89 from "./crypto/secp256r1/keys";
import * as _90 from "./distribution/v1beta1/distribution";
import * as _91 from "./distribution/v1beta1/genesis";
import * as _92 from "./distribution/v1beta1/query";
import * as _93 from "./distribution/v1beta1/tx";
import * as _94 from "./evidence/v1beta1/evidence";
import * as _95 from "./evidence/v1beta1/genesis";
import * as _96 from "./evidence/v1beta1/query";
import * as _97 from "./evidence/v1beta1/tx";
import * as _98 from "./feegrant/v1beta1/feegrant";
import * as _99 from "./feegrant/v1beta1/genesis";
import * as _100 from "./feegrant/v1beta1/query";
import * as _101 from "./feegrant/v1beta1/tx";
import * as _102 from "./genutil/v1beta1/genesis";
import * as _103 from "./gov/v1/genesis";
import * as _104 from "./gov/v1/gov";
import * as _105 from "./gov/v1/query";
import * as _106 from "./gov/v1/tx";
import * as _107 from "./gov/v1beta1/genesis";
import * as _108 from "./gov/v1beta1/gov";
import * as _109 from "./gov/v1beta1/query";
import * as _110 from "./gov/v1beta1/tx";
import * as _111 from "./group/v1/events";
import * as _112 from "./group/v1/genesis";
import * as _113 from "./group/v1/query";
import * as _114 from "./group/v1/tx";
import * as _115 from "./group/v1/types";
import * as _116 from "./mint/v1beta1/genesis";
import * as _117 from "./mint/v1beta1/mint";
import * as _118 from "./mint/v1beta1/query";
import * as _119 from "./msg/v1/msg";
import * as _120 from "./nft/v1beta1/event";
import * as _121 from "./nft/v1beta1/genesis";
import * as _122 from "./nft/v1beta1/nft";
import * as _123 from "./nft/v1beta1/query";
import * as _124 from "./nft/v1beta1/tx";
import * as _125 from "./orm/module/v1alpha1/module";
import * as _126 from "./orm/v1/orm";
import * as _127 from "./orm/v1alpha1/schema";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./slashing/v1beta1/genesis";
import * as _131 from "./slashing/v1beta1/query";
import * as _132 from "./slashing/v1beta1/slashing";
import * as _133 from "./slashing/v1beta1/tx";
import * as _134 from "./staking/v1beta1/authz";
import * as _135 from "./staking/v1beta1/genesis";
import * as _136 from "./staking/v1beta1/query";
import * as _137 from "./staking/v1beta1/staking";
import * as _138 from "./staking/v1beta1/tx";
import * as _139 from "./tx/signing/v1beta1/signing";
import * as _140 from "./tx/v1beta1/service";
import * as _141 from "./tx/v1beta1/tx";
import * as _142 from "./upgrade/v1beta1/query";
import * as _143 from "./upgrade/v1beta1/tx";
import * as _144 from "./upgrade/v1beta1/upgrade";
import * as _145 from "./vesting/v1beta1/tx";
import * as _146 from "./vesting/v1beta1/vesting";
import * as _364 from "./authz/v1beta1/tx.amino";
import * as _365 from "./bank/v1beta1/tx.amino";
import * as _366 from "./crisis/v1beta1/tx.amino";
import * as _367 from "./distribution/v1beta1/tx.amino";
import * as _368 from "./evidence/v1beta1/tx.amino";
import * as _369 from "./feegrant/v1beta1/tx.amino";
import * as _370 from "./gov/v1/tx.amino";
import * as _371 from "./gov/v1beta1/tx.amino";
import * as _372 from "./group/v1/tx.amino";
import * as _373 from "./nft/v1beta1/tx.amino";
import * as _374 from "./slashing/v1beta1/tx.amino";
import * as _375 from "./staking/v1beta1/tx.amino";
import * as _376 from "./upgrade/v1beta1/tx.amino";
import * as _377 from "./vesting/v1beta1/tx.amino";
import * as _378 from "./authz/v1beta1/tx.registry";
import * as _379 from "./bank/v1beta1/tx.registry";
import * as _380 from "./crisis/v1beta1/tx.registry";
import * as _381 from "./distribution/v1beta1/tx.registry";
import * as _382 from "./evidence/v1beta1/tx.registry";
import * as _383 from "./feegrant/v1beta1/tx.registry";
import * as _384 from "./gov/v1/tx.registry";
import * as _385 from "./gov/v1beta1/tx.registry";
import * as _386 from "./group/v1/tx.registry";
import * as _387 from "./nft/v1beta1/tx.registry";
import * as _388 from "./slashing/v1beta1/tx.registry";
import * as _389 from "./staking/v1beta1/tx.registry";
import * as _390 from "./upgrade/v1beta1/tx.registry";
import * as _391 from "./vesting/v1beta1/tx.registry";
import * as _392 from "./app/v1alpha1/query.rpc.func";
import * as _393 from "./auth/v1beta1/query.rpc.func";
import * as _394 from "./authz/v1beta1/query.rpc.func";
import * as _395 from "./bank/v1beta1/query.rpc.func";
import * as _396 from "./base/reflection/v1beta1/reflection.rpc.func";
import * as _397 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _398 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _399 from "./distribution/v1beta1/query.rpc.func";
import * as _400 from "./evidence/v1beta1/query.rpc.func";
import * as _401 from "./feegrant/v1beta1/query.rpc.func";
import * as _402 from "./gov/v1/query.rpc.func";
import * as _403 from "./gov/v1beta1/query.rpc.func";
import * as _404 from "./group/v1/query.rpc.func";
import * as _405 from "./mint/v1beta1/query.rpc.func";
import * as _406 from "./nft/v1beta1/query.rpc.func";
import * as _407 from "./params/v1beta1/query.rpc.func";
import * as _408 from "./slashing/v1beta1/query.rpc.func";
import * as _409 from "./staking/v1beta1/query.rpc.func";
import * as _410 from "./tx/v1beta1/service.rpc.func";
import * as _411 from "./upgrade/v1beta1/query.rpc.func";
import * as _412 from "./app/v1alpha1/query.rpc.Query";
import * as _413 from "./auth/v1beta1/query.rpc.Query";
import * as _414 from "./authz/v1beta1/query.rpc.Query";
import * as _415 from "./bank/v1beta1/query.rpc.Query";
import * as _416 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _417 from "./distribution/v1beta1/query.rpc.Query";
import * as _418 from "./evidence/v1beta1/query.rpc.Query";
import * as _419 from "./feegrant/v1beta1/query.rpc.Query";
import * as _420 from "./gov/v1/query.rpc.Query";
import * as _421 from "./gov/v1beta1/query.rpc.Query";
import * as _422 from "./group/v1/query.rpc.Query";
import * as _423 from "./mint/v1beta1/query.rpc.Query";
import * as _424 from "./nft/v1beta1/query.rpc.Query";
import * as _425 from "./params/v1beta1/query.rpc.Query";
import * as _426 from "./slashing/v1beta1/query.rpc.Query";
import * as _427 from "./staking/v1beta1/query.rpc.Query";
import * as _428 from "./tx/v1beta1/service.rpc.Service";
import * as _429 from "./upgrade/v1beta1/query.rpc.Query";
import * as _430 from "./authz/v1beta1/tx.rpc.func";
import * as _431 from "./bank/v1beta1/tx.rpc.func";
import * as _432 from "./crisis/v1beta1/tx.rpc.func";
import * as _433 from "./distribution/v1beta1/tx.rpc.func";
import * as _434 from "./evidence/v1beta1/tx.rpc.func";
import * as _435 from "./feegrant/v1beta1/tx.rpc.func";
import * as _436 from "./gov/v1/tx.rpc.func";
import * as _437 from "./gov/v1beta1/tx.rpc.func";
import * as _438 from "./group/v1/tx.rpc.func";
import * as _439 from "./nft/v1beta1/tx.rpc.func";
import * as _440 from "./slashing/v1beta1/tx.rpc.func";
import * as _441 from "./staking/v1beta1/tx.rpc.func";
import * as _442 from "./upgrade/v1beta1/tx.rpc.func";
import * as _443 from "./vesting/v1beta1/tx.rpc.func";
import * as _444 from "./authz/v1beta1/tx.rpc.msg";
import * as _445 from "./bank/v1beta1/tx.rpc.msg";
import * as _446 from "./crisis/v1beta1/tx.rpc.msg";
import * as _447 from "./distribution/v1beta1/tx.rpc.msg";
import * as _448 from "./evidence/v1beta1/tx.rpc.msg";
import * as _449 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _450 from "./gov/v1/tx.rpc.msg";
import * as _451 from "./gov/v1beta1/tx.rpc.msg";
import * as _452 from "./group/v1/tx.rpc.msg";
import * as _453 from "./nft/v1beta1/tx.rpc.msg";
import * as _454 from "./slashing/v1beta1/tx.rpc.msg";
import * as _455 from "./staking/v1beta1/tx.rpc.msg";
import * as _456 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _457 from "./vesting/v1beta1/tx.rpc.msg";
import * as _575 from "./rpc.query";
import * as _576 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._392,
      ..._412
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._393,
      ..._413
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._364,
      ..._378,
      ..._394,
      ..._414,
      ..._430,
      ..._444
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._365,
      ..._379,
      ..._395,
      ..._415,
      ..._431,
      ..._445
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._70
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._71
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._72
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._73,
        ..._396
      };
      export const v2alpha1 = {
        ..._74,
        ..._397
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._75
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._76,
        ..._77
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._78,
        ..._398,
        ..._416
      };
    }
    export const v1beta1 = {
      ..._79
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._80,
      ..._81
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._366,
      ..._380,
      ..._432,
      ..._446
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._84
    };
    export namespace hd {
      export const v1 = {
        ..._85
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._86
      };
    }
    export const multisig = {
      ..._87
    };
    export const secp256k1 = {
      ..._88
    };
    export const secp256r1 = {
      ..._89
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._367,
      ..._381,
      ..._399,
      ..._417,
      ..._433,
      ..._447
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._368,
      ..._382,
      ..._400,
      ..._418,
      ..._434,
      ..._448
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._369,
      ..._383,
      ..._401,
      ..._419,
      ..._435,
      ..._449
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._102
    };
  }
  export namespace gov {
    export const v1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._370,
      ..._384,
      ..._402,
      ..._420,
      ..._436,
      ..._450
    };
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._371,
      ..._385,
      ..._403,
      ..._421,
      ..._437,
      ..._451
    };
  }
  export namespace group {
    export const v1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._372,
      ..._386,
      ..._404,
      ..._422,
      ..._438,
      ..._452
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._405,
      ..._423
    };
  }
  export namespace msg {
    export const v1 = {
      ..._119
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._373,
      ..._387,
      ..._406,
      ..._424,
      ..._439,
      ..._453
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._125
      };
    }
    export const v1 = {
      ..._126
    };
    export const v1alpha1 = {
      ..._127
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._407,
      ..._425
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._374,
      ..._388,
      ..._408,
      ..._426,
      ..._440,
      ..._454
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._375,
      ..._389,
      ..._409,
      ..._427,
      ..._441,
      ..._455
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._139
      };
    }
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._410,
      ..._428
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._376,
      ..._390,
      ..._411,
      ..._429,
      ..._442,
      ..._456
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._377,
      ..._391,
      ..._443,
      ..._457
    };
  }
  export const ClientFactory = {
    ..._575,
    ..._576
  };
}