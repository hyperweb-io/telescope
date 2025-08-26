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
import * as _80 from "./base/node/v1beta1/query";
import * as _81 from "./capability/v1beta1/capability";
import * as _82 from "./capability/v1beta1/genesis";
import * as _83 from "./crisis/v1beta1/genesis";
import * as _84 from "./crisis/v1beta1/tx";
import * as _85 from "./crypto/ed25519/keys";
import * as _86 from "./crypto/hd/v1/hd";
import * as _87 from "./crypto/keyring/v1/record";
import * as _88 from "./crypto/multisig/keys";
import * as _89 from "./crypto/secp256k1/keys";
import * as _90 from "./crypto/secp256r1/keys";
import * as _91 from "./distribution/v1beta1/distribution";
import * as _92 from "./distribution/v1beta1/genesis";
import * as _93 from "./distribution/v1beta1/query";
import * as _94 from "./distribution/v1beta1/tx";
import * as _95 from "./evidence/v1beta1/evidence";
import * as _96 from "./evidence/v1beta1/genesis";
import * as _97 from "./evidence/v1beta1/query";
import * as _98 from "./evidence/v1beta1/tx";
import * as _99 from "./feegrant/v1beta1/feegrant";
import * as _100 from "./feegrant/v1beta1/genesis";
import * as _101 from "./feegrant/v1beta1/query";
import * as _102 from "./feegrant/v1beta1/tx";
import * as _103 from "./genutil/v1beta1/genesis";
import * as _104 from "./gov/v1/genesis";
import * as _105 from "./gov/v1/gov";
import * as _106 from "./gov/v1/query";
import * as _107 from "./gov/v1/tx";
import * as _108 from "./gov/v1beta1/genesis";
import * as _109 from "./gov/v1beta1/gov";
import * as _110 from "./gov/v1beta1/query";
import * as _111 from "./gov/v1beta1/tx";
import * as _112 from "./group/v1/events";
import * as _113 from "./group/v1/genesis";
import * as _114 from "./group/v1/query";
import * as _115 from "./group/v1/tx";
import * as _116 from "./group/v1/types";
import * as _117 from "./mint/v1beta1/genesis";
import * as _118 from "./mint/v1beta1/mint";
import * as _119 from "./mint/v1beta1/query";
import * as _120 from "./msg/v1/msg";
import * as _121 from "./nft/v1beta1/event";
import * as _122 from "./nft/v1beta1/genesis";
import * as _123 from "./nft/v1beta1/nft";
import * as _124 from "./nft/v1beta1/query";
import * as _125 from "./nft/v1beta1/tx";
import * as _126 from "./orm/module/v1alpha1/module";
import * as _127 from "./orm/v1/orm";
import * as _128 from "./orm/v1alpha1/schema";
import * as _129 from "./params/v1beta1/params";
import * as _130 from "./params/v1beta1/query";
import * as _131 from "./slashing/v1beta1/genesis";
import * as _132 from "./slashing/v1beta1/query";
import * as _133 from "./slashing/v1beta1/slashing";
import * as _134 from "./slashing/v1beta1/tx";
import * as _135 from "./staking/v1beta1/authz";
import * as _136 from "./staking/v1beta1/genesis";
import * as _137 from "./staking/v1beta1/query";
import * as _138 from "./staking/v1beta1/staking";
import * as _139 from "./staking/v1beta1/tx";
import * as _140 from "./tx/signing/v1beta1/signing";
import * as _141 from "./tx/v1beta1/service";
import * as _142 from "./tx/v1beta1/tx";
import * as _143 from "./upgrade/v1beta1/query";
import * as _144 from "./upgrade/v1beta1/tx";
import * as _145 from "./upgrade/v1beta1/upgrade";
import * as _146 from "./vesting/v1beta1/tx";
import * as _147 from "./vesting/v1beta1/vesting";
import * as _148 from "./ics23/v1/proofs";
import * as _419 from "./authz/v1beta1/tx.amino";
import * as _420 from "./bank/v1beta1/tx.amino";
import * as _421 from "./crisis/v1beta1/tx.amino";
import * as _422 from "./distribution/v1beta1/tx.amino";
import * as _423 from "./evidence/v1beta1/tx.amino";
import * as _424 from "./feegrant/v1beta1/tx.amino";
import * as _425 from "./gov/v1/tx.amino";
import * as _426 from "./gov/v1beta1/tx.amino";
import * as _427 from "./group/v1/tx.amino";
import * as _428 from "./nft/v1beta1/tx.amino";
import * as _429 from "./slashing/v1beta1/tx.amino";
import * as _430 from "./staking/v1beta1/tx.amino";
import * as _431 from "./upgrade/v1beta1/tx.amino";
import * as _432 from "./vesting/v1beta1/tx.amino";
import * as _433 from "./authz/v1beta1/tx.registry";
import * as _434 from "./bank/v1beta1/tx.registry";
import * as _435 from "./crisis/v1beta1/tx.registry";
import * as _436 from "./distribution/v1beta1/tx.registry";
import * as _437 from "./evidence/v1beta1/tx.registry";
import * as _438 from "./feegrant/v1beta1/tx.registry";
import * as _439 from "./gov/v1/tx.registry";
import * as _440 from "./gov/v1beta1/tx.registry";
import * as _441 from "./group/v1/tx.registry";
import * as _442 from "./nft/v1beta1/tx.registry";
import * as _443 from "./slashing/v1beta1/tx.registry";
import * as _444 from "./staking/v1beta1/tx.registry";
import * as _445 from "./upgrade/v1beta1/tx.registry";
import * as _446 from "./vesting/v1beta1/tx.registry";
import * as _447 from "./auth/v1beta1/query.lcd";
import * as _448 from "./authz/v1beta1/query.lcd";
import * as _449 from "./bank/v1beta1/query.lcd";
import * as _450 from "./base/reflection/v1beta1/reflection.lcd";
import * as _451 from "./base/reflection/v2alpha1/reflection.lcd";
import * as _452 from "./base/tendermint/v1beta1/query.lcd";
import * as _453 from "./distribution/v1beta1/query.lcd";
import * as _454 from "./evidence/v1beta1/query.lcd";
import * as _455 from "./feegrant/v1beta1/query.lcd";
import * as _456 from "./gov/v1/query.lcd";
import * as _457 from "./gov/v1beta1/query.lcd";
import * as _458 from "./group/v1/query.lcd";
import * as _459 from "./mint/v1beta1/query.lcd";
import * as _460 from "./nft/v1beta1/query.lcd";
import * as _461 from "./params/v1beta1/query.lcd";
import * as _462 from "./slashing/v1beta1/query.lcd";
import * as _463 from "./staking/v1beta1/query.lcd";
import * as _464 from "./tx/v1beta1/service.lcd";
import * as _465 from "./upgrade/v1beta1/query.lcd";
import * as _466 from "./base/node/v1beta1/query.lcd";
import * as _467 from "./app/v1alpha1/query.rpc.func";
import * as _468 from "./auth/v1beta1/query.rpc.func";
import * as _469 from "./authz/v1beta1/query.rpc.func";
import * as _470 from "./bank/v1beta1/query.rpc.func";
import * as _471 from "./base/reflection/v1beta1/reflection.rpc.func";
import * as _472 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _473 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _474 from "./distribution/v1beta1/query.rpc.func";
import * as _475 from "./evidence/v1beta1/query.rpc.func";
import * as _476 from "./feegrant/v1beta1/query.rpc.func";
import * as _477 from "./gov/v1/query.rpc.func";
import * as _478 from "./gov/v1beta1/query.rpc.func";
import * as _479 from "./group/v1/query.rpc.func";
import * as _480 from "./mint/v1beta1/query.rpc.func";
import * as _481 from "./nft/v1beta1/query.rpc.func";
import * as _482 from "./params/v1beta1/query.rpc.func";
import * as _483 from "./slashing/v1beta1/query.rpc.func";
import * as _484 from "./staking/v1beta1/query.rpc.func";
import * as _485 from "./tx/v1beta1/service.rpc.func";
import * as _486 from "./upgrade/v1beta1/query.rpc.func";
import * as _487 from "./base/node/v1beta1/query.rpc.func";
import * as _488 from "./app/v1alpha1/query.rpc.Query";
import * as _489 from "./auth/v1beta1/query.rpc.Query";
import * as _490 from "./authz/v1beta1/query.rpc.Query";
import * as _491 from "./bank/v1beta1/query.rpc.Query";
import * as _492 from "./base/reflection/v1beta1/reflection.rpc.ReflectionService";
import * as _493 from "./base/reflection/v2alpha1/reflection.rpc.ReflectionService";
import * as _494 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _495 from "./distribution/v1beta1/query.rpc.Query";
import * as _496 from "./evidence/v1beta1/query.rpc.Query";
import * as _497 from "./feegrant/v1beta1/query.rpc.Query";
import * as _498 from "./gov/v1/query.rpc.Query";
import * as _499 from "./gov/v1beta1/query.rpc.Query";
import * as _500 from "./group/v1/query.rpc.Query";
import * as _501 from "./mint/v1beta1/query.rpc.Query";
import * as _502 from "./nft/v1beta1/query.rpc.Query";
import * as _503 from "./params/v1beta1/query.rpc.Query";
import * as _504 from "./slashing/v1beta1/query.rpc.Query";
import * as _505 from "./staking/v1beta1/query.rpc.Query";
import * as _506 from "./tx/v1beta1/service.rpc.Service";
import * as _507 from "./upgrade/v1beta1/query.rpc.Query";
import * as _508 from "./base/node/v1beta1/query.rpc.Service";
import * as _509 from "./authz/v1beta1/tx.rpc.func";
import * as _510 from "./bank/v1beta1/tx.rpc.func";
import * as _511 from "./crisis/v1beta1/tx.rpc.func";
import * as _512 from "./distribution/v1beta1/tx.rpc.func";
import * as _513 from "./evidence/v1beta1/tx.rpc.func";
import * as _514 from "./feegrant/v1beta1/tx.rpc.func";
import * as _515 from "./gov/v1/tx.rpc.func";
import * as _516 from "./gov/v1beta1/tx.rpc.func";
import * as _517 from "./group/v1/tx.rpc.func";
import * as _518 from "./nft/v1beta1/tx.rpc.func";
import * as _519 from "./slashing/v1beta1/tx.rpc.func";
import * as _520 from "./staking/v1beta1/tx.rpc.func";
import * as _521 from "./upgrade/v1beta1/tx.rpc.func";
import * as _522 from "./vesting/v1beta1/tx.rpc.func";
import * as _523 from "./authz/v1beta1/tx.rpc.msg";
import * as _524 from "./bank/v1beta1/tx.rpc.msg";
import * as _525 from "./crisis/v1beta1/tx.rpc.msg";
import * as _526 from "./distribution/v1beta1/tx.rpc.msg";
import * as _527 from "./evidence/v1beta1/tx.rpc.msg";
import * as _528 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _529 from "./gov/v1/tx.rpc.msg";
import * as _530 from "./gov/v1beta1/tx.rpc.msg";
import * as _531 from "./group/v1/tx.rpc.msg";
import * as _532 from "./nft/v1beta1/tx.rpc.msg";
import * as _533 from "./slashing/v1beta1/tx.rpc.msg";
import * as _534 from "./staking/v1beta1/tx.rpc.msg";
import * as _535 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _536 from "./vesting/v1beta1/tx.rpc.msg";
import * as _736 from "./lcd";
import * as _737 from "./rpc.query";
import * as _738 from "./cosmos-rpc-client.query";
import * as _739 from "./rpc.tx";
import * as _740 from "./cosmos-rpc-client.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._467,
      ..._488
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._447,
      ..._468,
      ..._489
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._419,
      ..._433,
      ..._448,
      ..._469,
      ..._490,
      ..._509,
      ..._523
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._420,
      ..._434,
      ..._449,
      ..._470,
      ..._491,
      ..._510,
      ..._524
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
        ..._450,
        ..._471,
        ..._492
      };
      export const v2alpha1 = {
        ..._74,
        ..._451,
        ..._472,
        ..._493
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
        ..._452,
        ..._473,
        ..._494
      };
    }
    export const v1beta1 = {
      ..._79
    };
    export namespace node {
      export const v1beta1 = {
        ..._80,
        ..._466,
        ..._487,
        ..._508
      };
    }
  }
  export namespace capability {
    export const v1beta1 = {
      ..._81,
      ..._82
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._421,
      ..._435,
      ..._511,
      ..._525
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._85
    };
    export namespace hd {
      export const v1 = {
        ..._86
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._87
      };
    }
    export const multisig = {
      ..._88
    };
    export const secp256k1 = {
      ..._89
    };
    export const secp256r1 = {
      ..._90
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._422,
      ..._436,
      ..._453,
      ..._474,
      ..._495,
      ..._512,
      ..._526
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._423,
      ..._437,
      ..._454,
      ..._475,
      ..._496,
      ..._513,
      ..._527
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._424,
      ..._438,
      ..._455,
      ..._476,
      ..._497,
      ..._514,
      ..._528
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._103
    };
  }
  export namespace gov {
    export const v1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._425,
      ..._439,
      ..._456,
      ..._477,
      ..._498,
      ..._515,
      ..._529
    };
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._426,
      ..._440,
      ..._457,
      ..._478,
      ..._499,
      ..._516,
      ..._530
    };
  }
  export namespace group {
    export const v1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._427,
      ..._441,
      ..._458,
      ..._479,
      ..._500,
      ..._517,
      ..._531
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._459,
      ..._480,
      ..._501
    };
  }
  export namespace msg {
    export const v1 = {
      ..._120
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._428,
      ..._442,
      ..._460,
      ..._481,
      ..._502,
      ..._518,
      ..._532
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._126
      };
    }
    export const v1 = {
      ..._127
    };
    export const v1alpha1 = {
      ..._128
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._129,
      ..._130,
      ..._461,
      ..._482,
      ..._503
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._429,
      ..._443,
      ..._462,
      ..._483,
      ..._504,
      ..._519,
      ..._533
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._430,
      ..._444,
      ..._463,
      ..._484,
      ..._505,
      ..._520,
      ..._534
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._140
      };
    }
    export const v1beta1 = {
      ..._141,
      ..._142,
      ..._464,
      ..._485,
      ..._506
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._431,
      ..._445,
      ..._465,
      ..._486,
      ..._507,
      ..._521,
      ..._535
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._432,
      ..._446,
      ..._522,
      ..._536
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._148
    };
  }
  export const ClientFactory = {
    ..._736,
    ..._737,
    ..._738,
    ..._739,
    ..._740
  };
}