import * as _55 from "./app/v1alpha1/config.js";
import * as _56 from "./app/v1alpha1/module.js";
import * as _57 from "./app/v1alpha1/query.js";
import * as _58 from "./auth/v1beta1/auth.js";
import * as _59 from "./auth/v1beta1/genesis.js";
import * as _60 from "./auth/v1beta1/query.js";
import * as _61 from "./authz/v1beta1/authz.js";
import * as _62 from "./authz/v1beta1/genesis.js";
import * as _63 from "./authz/v1beta1/query.js";
import * as _64 from "./authz/v1beta1/tx.js";
import * as _65 from "./bank/v1beta1/authz.js";
import * as _66 from "./bank/v1beta1/bank.js";
import * as _67 from "./bank/v1beta1/genesis.js";
import * as _68 from "./bank/v1beta1/query.js";
import * as _69 from "./bank/v1beta1/tx.js";
import * as _70 from "./base/abci/v1beta1/abci.js";
import * as _71 from "./base/kv/v1beta1/kv.js";
import * as _72 from "./base/query/v1beta1/pagination.js";
import * as _73 from "./base/reflection/v1beta1/reflection.js";
import * as _74 from "./base/reflection/v2alpha1/reflection.js";
import * as _75 from "./base/snapshots/v1beta1/snapshot.js";
import * as _76 from "./base/store/v1beta1/commit_info.js";
import * as _77 from "./base/store/v1beta1/listening.js";
import * as _78 from "./base/tendermint/v1beta1/query.js";
import * as _79 from "./base/v1beta1/coin.js";
import * as _80 from "./capability/v1beta1/capability.js";
import * as _81 from "./capability/v1beta1/genesis.js";
import * as _82 from "./crisis/v1beta1/genesis.js";
import * as _83 from "./crisis/v1beta1/tx.js";
import * as _84 from "./crypto/ed25519/keys.js";
import * as _85 from "./crypto/hd/v1/hd.js";
import * as _86 from "./crypto/keyring/v1/record.js";
import * as _87 from "./crypto/multisig/keys.js";
import * as _88 from "./crypto/secp256k1/keys.js";
import * as _89 from "./crypto/secp256r1/keys.js";
import * as _90 from "./distribution/v1beta1/distribution.js";
import * as _91 from "./distribution/v1beta1/genesis.js";
import * as _92 from "./distribution/v1beta1/query.js";
import * as _93 from "./distribution/v1beta1/tx.js";
import * as _94 from "./evidence/v1beta1/evidence.js";
import * as _95 from "./evidence/v1beta1/genesis.js";
import * as _96 from "./evidence/v1beta1/query.js";
import * as _97 from "./evidence/v1beta1/tx.js";
import * as _98 from "./feegrant/v1beta1/feegrant.js";
import * as _99 from "./feegrant/v1beta1/genesis.js";
import * as _100 from "./feegrant/v1beta1/query.js";
import * as _101 from "./feegrant/v1beta1/tx.js";
import * as _102 from "./genutil/v1beta1/genesis.js";
import * as _103 from "./gov/v1/genesis.js";
import * as _104 from "./gov/v1/gov.js";
import * as _105 from "./gov/v1/query.js";
import * as _106 from "./gov/v1/tx.js";
import * as _107 from "./gov/v1beta1/genesis.js";
import * as _108 from "./gov/v1beta1/gov.js";
import * as _109 from "./gov/v1beta1/query.js";
import * as _110 from "./gov/v1beta1/tx.js";
import * as _111 from "./group/v1/events.js";
import * as _112 from "./group/v1/genesis.js";
import * as _113 from "./group/v1/query.js";
import * as _114 from "./group/v1/tx.js";
import * as _115 from "./group/v1/types.js";
import * as _116 from "./mint/v1beta1/genesis.js";
import * as _117 from "./mint/v1beta1/mint.js";
import * as _118 from "./mint/v1beta1/query.js";
import * as _119 from "./msg/v1/msg.js";
import * as _120 from "./nft/v1beta1/event.js";
import * as _121 from "./nft/v1beta1/genesis.js";
import * as _122 from "./nft/v1beta1/nft.js";
import * as _123 from "./nft/v1beta1/query.js";
import * as _124 from "./nft/v1beta1/tx.js";
import * as _125 from "./orm/module/v1alpha1/module.js";
import * as _126 from "./orm/v1/orm.js";
import * as _127 from "./orm/v1alpha1/schema.js";
import * as _128 from "./params/v1beta1/params.js";
import * as _129 from "./params/v1beta1/query.js";
import * as _130 from "./slashing/v1beta1/genesis.js";
import * as _131 from "./slashing/v1beta1/query.js";
import * as _132 from "./slashing/v1beta1/slashing.js";
import * as _133 from "./slashing/v1beta1/tx.js";
import * as _134 from "./staking/v1beta1/authz.js";
import * as _135 from "./staking/v1beta1/genesis.js";
import * as _136 from "./staking/v1beta1/query.js";
import * as _137 from "./staking/v1beta1/staking.js";
import * as _138 from "./staking/v1beta1/tx.js";
import * as _139 from "./tx/signing/v1beta1/signing.js";
import * as _140 from "./tx/v1beta1/service.js";
import * as _141 from "./tx/v1beta1/tx.js";
import * as _142 from "./upgrade/v1beta1/query.js";
import * as _143 from "./upgrade/v1beta1/tx.js";
import * as _144 from "./upgrade/v1beta1/upgrade.js";
import * as _145 from "./vesting/v1beta1/tx.js";
import * as _146 from "./vesting/v1beta1/vesting.js";
import * as _369 from "./authz/v1beta1/tx.amino.js";
import * as _370 from "./bank/v1beta1/tx.amino.js";
import * as _371 from "./crisis/v1beta1/tx.amino.js";
import * as _372 from "./distribution/v1beta1/tx.amino.js";
import * as _373 from "./evidence/v1beta1/tx.amino.js";
import * as _374 from "./feegrant/v1beta1/tx.amino.js";
import * as _375 from "./gov/v1/tx.amino.js";
import * as _376 from "./gov/v1beta1/tx.amino.js";
import * as _377 from "./group/v1/tx.amino.js";
import * as _378 from "./nft/v1beta1/tx.amino.js";
import * as _379 from "./slashing/v1beta1/tx.amino.js";
import * as _380 from "./staking/v1beta1/tx.amino.js";
import * as _381 from "./upgrade/v1beta1/tx.amino.js";
import * as _382 from "./vesting/v1beta1/tx.amino.js";
import * as _383 from "./authz/v1beta1/tx.registry.js";
import * as _384 from "./bank/v1beta1/tx.registry.js";
import * as _385 from "./crisis/v1beta1/tx.registry.js";
import * as _386 from "./distribution/v1beta1/tx.registry.js";
import * as _387 from "./evidence/v1beta1/tx.registry.js";
import * as _388 from "./feegrant/v1beta1/tx.registry.js";
import * as _389 from "./gov/v1/tx.registry.js";
import * as _390 from "./gov/v1beta1/tx.registry.js";
import * as _391 from "./group/v1/tx.registry.js";
import * as _392 from "./nft/v1beta1/tx.registry.js";
import * as _393 from "./slashing/v1beta1/tx.registry.js";
import * as _394 from "./staking/v1beta1/tx.registry.js";
import * as _395 from "./upgrade/v1beta1/tx.registry.js";
import * as _396 from "./vesting/v1beta1/tx.registry.js";
import * as _397 from "./auth/v1beta1/query.lcd.js";
import * as _398 from "./authz/v1beta1/query.lcd.js";
import * as _399 from "./bank/v1beta1/query.lcd.js";
import * as _400 from "./base/reflection/v1beta1/reflection.lcd.js";
import * as _401 from "./base/reflection/v2alpha1/reflection.lcd.js";
import * as _402 from "./base/tendermint/v1beta1/query.lcd.js";
import * as _403 from "./distribution/v1beta1/query.lcd.js";
import * as _404 from "./evidence/v1beta1/query.lcd.js";
import * as _405 from "./feegrant/v1beta1/query.lcd.js";
import * as _406 from "./gov/v1/query.lcd.js";
import * as _407 from "./gov/v1beta1/query.lcd.js";
import * as _408 from "./group/v1/query.lcd.js";
import * as _409 from "./mint/v1beta1/query.lcd.js";
import * as _410 from "./nft/v1beta1/query.lcd.js";
import * as _411 from "./params/v1beta1/query.lcd.js";
import * as _412 from "./slashing/v1beta1/query.lcd.js";
import * as _413 from "./staking/v1beta1/query.lcd.js";
import * as _414 from "./tx/v1beta1/service.lcd.js";
import * as _415 from "./upgrade/v1beta1/query.lcd.js";
import * as _416 from "./app/v1alpha1/query.rpc.func.js";
import * as _417 from "./auth/v1beta1/query.rpc.func.js";
import * as _418 from "./authz/v1beta1/query.rpc.func.js";
import * as _419 from "./bank/v1beta1/query.rpc.func.js";
import * as _420 from "./base/reflection/v1beta1/reflection.rpc.func.js";
import * as _421 from "./base/reflection/v2alpha1/reflection.rpc.func.js";
import * as _422 from "./base/tendermint/v1beta1/query.rpc.func.js";
import * as _423 from "./distribution/v1beta1/query.rpc.func.js";
import * as _424 from "./evidence/v1beta1/query.rpc.func.js";
import * as _425 from "./feegrant/v1beta1/query.rpc.func.js";
import * as _426 from "./gov/v1/query.rpc.func.js";
import * as _427 from "./gov/v1beta1/query.rpc.func.js";
import * as _428 from "./group/v1/query.rpc.func.js";
import * as _429 from "./mint/v1beta1/query.rpc.func.js";
import * as _430 from "./nft/v1beta1/query.rpc.func.js";
import * as _431 from "./params/v1beta1/query.rpc.func.js";
import * as _432 from "./slashing/v1beta1/query.rpc.func.js";
import * as _433 from "./staking/v1beta1/query.rpc.func.js";
import * as _434 from "./tx/v1beta1/service.rpc.func.js";
import * as _435 from "./upgrade/v1beta1/query.rpc.func.js";
import * as _436 from "./app/v1alpha1/query.rpc.Query.js";
import * as _437 from "./auth/v1beta1/query.rpc.Query.js";
import * as _438 from "./authz/v1beta1/query.rpc.Query.js";
import * as _439 from "./bank/v1beta1/query.rpc.Query.js";
import * as _440 from "./base/reflection/v1beta1/reflection.rpc.ReflectionService.js";
import * as _441 from "./base/reflection/v2alpha1/reflection.rpc.ReflectionService.js";
import * as _442 from "./base/tendermint/v1beta1/query.rpc.Service.js";
import * as _443 from "./distribution/v1beta1/query.rpc.Query.js";
import * as _444 from "./evidence/v1beta1/query.rpc.Query.js";
import * as _445 from "./feegrant/v1beta1/query.rpc.Query.js";
import * as _446 from "./gov/v1/query.rpc.Query.js";
import * as _447 from "./gov/v1beta1/query.rpc.Query.js";
import * as _448 from "./group/v1/query.rpc.Query.js";
import * as _449 from "./mint/v1beta1/query.rpc.Query.js";
import * as _450 from "./nft/v1beta1/query.rpc.Query.js";
import * as _451 from "./params/v1beta1/query.rpc.Query.js";
import * as _452 from "./slashing/v1beta1/query.rpc.Query.js";
import * as _453 from "./staking/v1beta1/query.rpc.Query.js";
import * as _454 from "./tx/v1beta1/service.rpc.Service.js";
import * as _455 from "./upgrade/v1beta1/query.rpc.Query.js";
import * as _456 from "./authz/v1beta1/tx.rpc.func.js";
import * as _457 from "./bank/v1beta1/tx.rpc.func.js";
import * as _458 from "./crisis/v1beta1/tx.rpc.func.js";
import * as _459 from "./distribution/v1beta1/tx.rpc.func.js";
import * as _460 from "./evidence/v1beta1/tx.rpc.func.js";
import * as _461 from "./feegrant/v1beta1/tx.rpc.func.js";
import * as _462 from "./gov/v1/tx.rpc.func.js";
import * as _463 from "./gov/v1beta1/tx.rpc.func.js";
import * as _464 from "./group/v1/tx.rpc.func.js";
import * as _465 from "./nft/v1beta1/tx.rpc.func.js";
import * as _466 from "./slashing/v1beta1/tx.rpc.func.js";
import * as _467 from "./staking/v1beta1/tx.rpc.func.js";
import * as _468 from "./upgrade/v1beta1/tx.rpc.func.js";
import * as _469 from "./vesting/v1beta1/tx.rpc.func.js";
import * as _470 from "./authz/v1beta1/tx.rpc.msg.js";
import * as _471 from "./bank/v1beta1/tx.rpc.msg.js";
import * as _472 from "./crisis/v1beta1/tx.rpc.msg.js";
import * as _473 from "./distribution/v1beta1/tx.rpc.msg.js";
import * as _474 from "./evidence/v1beta1/tx.rpc.msg.js";
import * as _475 from "./feegrant/v1beta1/tx.rpc.msg.js";
import * as _476 from "./gov/v1/tx.rpc.msg.js";
import * as _477 from "./gov/v1beta1/tx.rpc.msg.js";
import * as _478 from "./group/v1/tx.rpc.msg.js";
import * as _479 from "./nft/v1beta1/tx.rpc.msg.js";
import * as _480 from "./slashing/v1beta1/tx.rpc.msg.js";
import * as _481 from "./staking/v1beta1/tx.rpc.msg.js";
import * as _482 from "./upgrade/v1beta1/tx.rpc.msg.js";
import * as _483 from "./vesting/v1beta1/tx.rpc.msg.js";
import * as _632 from "./lcd.js";
import * as _633 from "./rpc.query.js";
import * as _634 from "./cosmos-rpc-client.query.js";
import * as _635 from "./rpc.tx.js";
import * as _636 from "./cosmos-rpc-client.tx.js";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._416,
      ..._436
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._397,
      ..._417,
      ..._437
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._369,
      ..._383,
      ..._398,
      ..._418,
      ..._438,
      ..._456,
      ..._470
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._370,
      ..._384,
      ..._399,
      ..._419,
      ..._439,
      ..._457,
      ..._471
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
        ..._400,
        ..._420,
        ..._440
      };
      export const v2alpha1 = {
        ..._74,
        ..._401,
        ..._421,
        ..._441
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
        ..._402,
        ..._422,
        ..._442
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
      ..._371,
      ..._385,
      ..._458,
      ..._472
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
      ..._372,
      ..._386,
      ..._403,
      ..._423,
      ..._443,
      ..._459,
      ..._473
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._373,
      ..._387,
      ..._404,
      ..._424,
      ..._444,
      ..._460,
      ..._474
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._374,
      ..._388,
      ..._405,
      ..._425,
      ..._445,
      ..._461,
      ..._475
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
      ..._375,
      ..._389,
      ..._406,
      ..._426,
      ..._446,
      ..._462,
      ..._476
    };
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._376,
      ..._390,
      ..._407,
      ..._427,
      ..._447,
      ..._463,
      ..._477
    };
  }
  export namespace group {
    export const v1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._377,
      ..._391,
      ..._408,
      ..._428,
      ..._448,
      ..._464,
      ..._478
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._409,
      ..._429,
      ..._449
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
      ..._378,
      ..._392,
      ..._410,
      ..._430,
      ..._450,
      ..._465,
      ..._479
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
      ..._411,
      ..._431,
      ..._451
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._379,
      ..._393,
      ..._412,
      ..._432,
      ..._452,
      ..._466,
      ..._480
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._380,
      ..._394,
      ..._413,
      ..._433,
      ..._453,
      ..._467,
      ..._481
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
      ..._414,
      ..._434,
      ..._454
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._381,
      ..._395,
      ..._415,
      ..._435,
      ..._455,
      ..._468,
      ..._482
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._382,
      ..._396,
      ..._469,
      ..._483
    };
  }
  export const ClientFactory = {
    ..._632,
    ..._633,
    ..._634,
    ..._635,
    ..._636
  };
}