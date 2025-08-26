import * as _254 from "./claim/v1beta1/claim";
import * as _255 from "./claim/v1beta1/genesis";
import * as _256 from "./claim/v1beta1/params";
import * as _257 from "./claim/v1beta1/query";
import * as _258 from "./epochs/genesis";
import * as _259 from "./epochs/query";
import * as _260 from "./gamm/pool-models/balancer/balancerPool";
import * as _261 from "./gamm/v1beta1/genesis";
import * as _262 from "./gamm/v1beta1/query";
import * as _263 from "./gamm/v1beta1/tx";
import * as _264 from "./gamm/pool-models/balancer/tx/tx";
import * as _265 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _266 from "./gamm/pool-models/stableswap/tx";
import * as _267 from "./gamm/v2/query";
import * as _268 from "./ibc-rate-limit/v1beta1/params";
import * as _269 from "./ibc-rate-limit/v1beta1/query";
import * as _270 from "./incentives/gauge";
import * as _271 from "./incentives/genesis";
import * as _272 from "./incentives/params";
import * as _273 from "./incentives/query";
import * as _274 from "./incentives/tx";
import * as _275 from "./lockup/genesis";
import * as _276 from "./lockup/lock";
import * as _277 from "./lockup/params";
import * as _278 from "./lockup/query";
import * as _279 from "./lockup/tx";
import * as _280 from "./mint/v1beta1/genesis";
import * as _281 from "./mint/v1beta1/mint";
import * as _282 from "./mint/v1beta1/query";
import * as _283 from "./pool-incentives/v1beta1/genesis";
import * as _284 from "./pool-incentives/v1beta1/gov";
import * as _285 from "./pool-incentives/v1beta1/incentives";
import * as _286 from "./pool-incentives/v1beta1/query";
import * as _287 from "./sumtree/v1beta1/tree";
import * as _288 from "./superfluid/genesis";
import * as _289 from "./superfluid/params";
import * as _290 from "./superfluid/query";
import * as _291 from "./superfluid/superfluid";
import * as _292 from "./superfluid/tx";
import * as _293 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _294 from "./tokenfactory/v1beta1/genesis";
import * as _295 from "./tokenfactory/v1beta1/params";
import * as _296 from "./tokenfactory/v1beta1/query";
import * as _297 from "./tokenfactory/v1beta1/tx";
import * as _298 from "./twap/v1beta1/genesis";
import * as _299 from "./twap/v1beta1/query";
import * as _300 from "./twap/v1beta1/twap_record";
import * as _301 from "./txfees/v1beta1/feetoken";
import * as _302 from "./txfees/v1beta1/genesis";
import * as _303 from "./txfees/v1beta1/gov";
import * as _304 from "./txfees/v1beta1/query";
import * as _518 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _519 from "./gamm/pool-models/stableswap/tx.amino";
import * as _520 from "./gamm/v1beta1/tx.amino";
import * as _521 from "./incentives/tx.amino";
import * as _522 from "./lockup/tx.amino";
import * as _523 from "./superfluid/tx.amino";
import * as _524 from "./tokenfactory/v1beta1/tx.amino";
import * as _525 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _526 from "./gamm/pool-models/stableswap/tx.registry";
import * as _527 from "./gamm/v1beta1/tx.registry";
import * as _528 from "./incentives/tx.registry";
import * as _529 from "./lockup/tx.registry";
import * as _530 from "./superfluid/tx.registry";
import * as _531 from "./tokenfactory/v1beta1/tx.registry";
import * as _532 from "./claim/v1beta1/query.rpc.func";
import * as _533 from "./epochs/query.rpc.func";
import * as _534 from "./gamm/v1beta1/query.rpc.func";
import * as _535 from "./gamm/v2/query.rpc.func";
import * as _536 from "./ibc-rate-limit/v1beta1/query.rpc.func";
import * as _537 from "./incentives/query.rpc.func";
import * as _538 from "./lockup/query.rpc.func";
import * as _539 from "./mint/v1beta1/query.rpc.func";
import * as _540 from "./pool-incentives/v1beta1/query.rpc.func";
import * as _541 from "./superfluid/query.rpc.func";
import * as _542 from "./tokenfactory/v1beta1/query.rpc.func";
import * as _543 from "./twap/v1beta1/query.rpc.func";
import * as _544 from "./txfees/v1beta1/query.rpc.func";
import * as _545 from "./claim/v1beta1/query.rpc.Query";
import * as _546 from "./epochs/query.rpc.Query";
import * as _547 from "./gamm/v1beta1/query.rpc.Query";
import * as _548 from "./gamm/v2/query.rpc.Query";
import * as _549 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _550 from "./incentives/query.rpc.Query";
import * as _551 from "./lockup/query.rpc.Query";
import * as _552 from "./mint/v1beta1/query.rpc.Query";
import * as _553 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _554 from "./superfluid/query.rpc.Query";
import * as _555 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _556 from "./twap/v1beta1/query.rpc.Query";
import * as _557 from "./txfees/v1beta1/query.rpc.Query";
import * as _558 from "./gamm/pool-models/balancer/tx/tx.rpc.func";
import * as _559 from "./gamm/pool-models/stableswap/tx.rpc.func";
import * as _560 from "./gamm/v1beta1/tx.rpc.func";
import * as _561 from "./incentives/tx.rpc.func";
import * as _562 from "./lockup/tx.rpc.func";
import * as _563 from "./superfluid/tx.rpc.func";
import * as _564 from "./tokenfactory/v1beta1/tx.rpc.func";
import * as _565 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _566 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _567 from "./gamm/v1beta1/tx.rpc.msg";
import * as _568 from "./incentives/tx.rpc.msg";
import * as _569 from "./lockup/tx.rpc.msg";
import * as _570 from "./superfluid/tx.rpc.msg";
import * as _571 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _583 from "./rpc.query";
import * as _584 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._532,
      ..._545
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._533,
      ..._546
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._520,
      ..._527,
      ..._534,
      ..._547,
      ..._560,
      ..._567
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._264,
          ..._518,
          ..._525,
          ..._558,
          ..._565
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._265,
          ..._266,
          ..._519,
          ..._526,
          ..._559,
          ..._566
        };
      }
    }
    export const v2 = {
      ..._267,
      ..._535,
      ..._548
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._536,
      ..._549
    };
  }
  export const incentives = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._521,
    ..._528,
    ..._537,
    ..._550,
    ..._561,
    ..._568
  };
  export const lockup = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._522,
    ..._529,
    ..._538,
    ..._551,
    ..._562,
    ..._569
  };
  export namespace mint {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._539,
      ..._552
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._540,
      ..._553
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._287
    };
  }
  export const superfluid = {
    ..._288,
    ..._289,
    ..._290,
    ..._291,
    ..._292,
    ..._523,
    ..._530,
    ..._541,
    ..._554,
    ..._563,
    ..._570
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._524,
      ..._531,
      ..._542,
      ..._555,
      ..._564,
      ..._571
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._543,
      ..._556
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._544,
      ..._557
    };
  }
  export const ClientFactory = {
    ..._583,
    ..._584
  };
}