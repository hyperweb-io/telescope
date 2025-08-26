import * as _275 from "./claim/v1beta1/claim";
import * as _276 from "./claim/v1beta1/genesis";
import * as _277 from "./claim/v1beta1/params";
import * as _278 from "./claim/v1beta1/query";
import * as _279 from "./epochs/genesis";
import * as _280 from "./epochs/query";
import * as _281 from "./gamm/pool-models/balancer/balancerPool";
import * as _282 from "./gamm/v1beta1/genesis";
import * as _283 from "./gamm/v1beta1/query";
import * as _284 from "./gamm/v1beta1/tx";
import * as _285 from "./gamm/v1beta1/gov";
import * as _286 from "./gamm/pool-models/balancer/tx/tx";
import * as _287 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _288 from "./gamm/pool-models/stableswap/tx";
import * as _289 from "./gamm/v2/query";
import * as _290 from "./ibc-rate-limit/v1beta1/params";
import * as _291 from "./ibc-rate-limit/v1beta1/query";
import * as _292 from "./ibc-rate-limit/v1beta1/genesis";
import * as _293 from "./incentives/gauge";
import * as _294 from "./incentives/genesis";
import * as _295 from "./incentives/params";
import * as _296 from "./incentives/query";
import * as _297 from "./incentives/tx";
import * as _298 from "./lockup/genesis";
import * as _299 from "./lockup/lock";
import * as _300 from "./lockup/params";
import * as _301 from "./lockup/query";
import * as _302 from "./lockup/tx";
import * as _303 from "./mint/v1beta1/genesis";
import * as _304 from "./mint/v1beta1/mint";
import * as _305 from "./mint/v1beta1/query";
import * as _306 from "./pool-incentives/v1beta1/genesis";
import * as _307 from "./pool-incentives/v1beta1/gov";
import * as _308 from "./pool-incentives/v1beta1/incentives";
import * as _309 from "./pool-incentives/v1beta1/query";
import * as _310 from "./sumtree/v1beta1/tree";
import * as _311 from "./superfluid/genesis";
import * as _312 from "./superfluid/params";
import * as _313 from "./superfluid/query";
import * as _314 from "./superfluid/superfluid";
import * as _315 from "./superfluid/tx";
import * as _316 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _317 from "./tokenfactory/v1beta1/genesis";
import * as _318 from "./tokenfactory/v1beta1/params";
import * as _319 from "./tokenfactory/v1beta1/query";
import * as _320 from "./tokenfactory/v1beta1/tx";
import * as _321 from "./twap/v1beta1/genesis";
import * as _322 from "./twap/v1beta1/query";
import * as _323 from "./twap/v1beta1/twap_record";
import * as _324 from "./txfees/v1beta1/feetoken";
import * as _325 from "./txfees/v1beta1/genesis";
import * as _326 from "./txfees/v1beta1/gov";
import * as _327 from "./txfees/v1beta1/query";
import * as _328 from "./accum/v1beta1/accum";
import * as _329 from "./concentrated-liquidity/params";
import * as _330 from "./cosmwasmpool/v1beta1/genesis";
import * as _331 from "./cosmwasmpool/v1beta1/model/pool";
import * as _332 from "./cosmwasmpool/v1beta1/model/tx";
import * as _333 from "./cosmwasmpool/v1beta1/query";
import * as _334 from "./cosmwasmpool/v1beta1/tx";
import * as _335 from "./downtime-detector/v1beta1/downtime_duration";
import * as _336 from "./downtime-detector/v1beta1/genesis";
import * as _337 from "./downtime-detector/v1beta1/query";
import * as _338 from "./poolmanager/v1beta1/genesis";
import * as _339 from "./poolmanager/v1beta1/module_route";
import * as _340 from "./poolmanager/v1beta1/query";
import * as _341 from "./poolmanager/v1beta1/swap_route";
import * as _342 from "./poolmanager/v1beta1/tx";
import * as _343 from "./protorev/v1beta1/genesis";
import * as _344 from "./protorev/v1beta1/gov";
import * as _345 from "./protorev/v1beta1/params";
import * as _346 from "./protorev/v1beta1/protorev";
import * as _347 from "./protorev/v1beta1/query";
import * as _348 from "./protorev/v1beta1/tx";
import * as _349 from "./valset-pref/v1beta1/query";
import * as _350 from "./valset-pref/v1beta1/state";
import * as _351 from "./valset-pref/v1beta1/tx";
import * as _628 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _629 from "./gamm/pool-models/stableswap/tx.amino";
import * as _630 from "./gamm/v1beta1/tx.amino";
import * as _631 from "./incentives/tx.amino";
import * as _632 from "./lockup/tx.amino";
import * as _633 from "./superfluid/tx.amino";
import * as _634 from "./tokenfactory/v1beta1/tx.amino";
import * as _635 from "./concentrated-liquidity/tx.amino";
import * as _636 from "./poolmanager/v1beta1/tx.amino";
import * as _637 from "./protorev/v1beta1/tx.amino";
import * as _638 from "./valset-pref/v1beta1/tx.amino";
import * as _639 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _640 from "./gamm/pool-models/stableswap/tx.registry";
import * as _641 from "./gamm/v1beta1/tx.registry";
import * as _642 from "./incentives/tx.registry";
import * as _643 from "./lockup/tx.registry";
import * as _644 from "./superfluid/tx.registry";
import * as _645 from "./tokenfactory/v1beta1/tx.registry";
import * as _646 from "./concentrated-liquidity/tx.registry";
import * as _647 from "./poolmanager/v1beta1/tx.registry";
import * as _648 from "./protorev/v1beta1/tx.registry";
import * as _649 from "./valset-pref/v1beta1/tx.registry";
import * as _650 from "./claim/v1beta1/query.lcd";
import * as _651 from "./epochs/query.lcd";
import * as _652 from "./gamm/v1beta1/query.lcd";
import * as _653 from "./gamm/v2/query.lcd";
import * as _654 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _655 from "./incentives/query.lcd";
import * as _656 from "./lockup/query.lcd";
import * as _657 from "./mint/v1beta1/query.lcd";
import * as _658 from "./pool-incentives/v1beta1/query.lcd";
import * as _659 from "./superfluid/query.lcd";
import * as _660 from "./tokenfactory/v1beta1/query.lcd";
import * as _661 from "./twap/v1beta1/query.lcd";
import * as _662 from "./txfees/v1beta1/query.lcd";
import * as _663 from "./concentrated-liquidity/pool-model/query.lcd";
import * as _664 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _665 from "./downtime-detector/v1beta1/query.lcd";
import * as _666 from "./poolmanager/v1beta1/query.lcd";
import * as _667 from "./protorev/v1beta1/query.lcd";
import * as _668 from "./valset-pref/v1beta1/query.lcd";
import * as _669 from "./claim/v1beta1/query.rpc.func";
import * as _670 from "./epochs/query.rpc.func";
import * as _671 from "./gamm/v1beta1/query.rpc.func";
import * as _672 from "./gamm/v2/query.rpc.func";
import * as _673 from "./ibc-rate-limit/v1beta1/query.rpc.func";
import * as _674 from "./incentives/query.rpc.func";
import * as _675 from "./lockup/query.rpc.func";
import * as _676 from "./mint/v1beta1/query.rpc.func";
import * as _677 from "./pool-incentives/v1beta1/query.rpc.func";
import * as _678 from "./superfluid/query.rpc.func";
import * as _679 from "./tokenfactory/v1beta1/query.rpc.func";
import * as _680 from "./twap/v1beta1/query.rpc.func";
import * as _681 from "./txfees/v1beta1/query.rpc.func";
import * as _682 from "./concentrated-liquidity/pool-model/query.rpc.func";
import * as _683 from "./cosmwasmpool/v1beta1/query.rpc.func";
import * as _684 from "./downtime-detector/v1beta1/query.rpc.func";
import * as _685 from "./poolmanager/v1beta1/query.rpc.func";
import * as _686 from "./protorev/v1beta1/query.rpc.func";
import * as _687 from "./valset-pref/v1beta1/query.rpc.func";
import * as _688 from "./claim/v1beta1/query.rpc.Query";
import * as _689 from "./epochs/query.rpc.Query";
import * as _690 from "./gamm/v1beta1/query.rpc.Query";
import * as _691 from "./gamm/v2/query.rpc.Query";
import * as _692 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _693 from "./incentives/query.rpc.Query";
import * as _694 from "./lockup/query.rpc.Query";
import * as _695 from "./mint/v1beta1/query.rpc.Query";
import * as _696 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _697 from "./superfluid/query.rpc.Query";
import * as _698 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _699 from "./twap/v1beta1/query.rpc.Query";
import * as _700 from "./txfees/v1beta1/query.rpc.Query";
import * as _701 from "./concentrated-liquidity/pool-model/query.rpc.Query";
import * as _702 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _703 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _704 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _705 from "./protorev/v1beta1/query.rpc.Query";
import * as _706 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _707 from "./gamm/pool-models/balancer/tx/tx.rpc.func";
import * as _708 from "./gamm/pool-models/stableswap/tx.rpc.func";
import * as _709 from "./gamm/v1beta1/tx.rpc.func";
import * as _710 from "./incentives/tx.rpc.func";
import * as _711 from "./lockup/tx.rpc.func";
import * as _712 from "./superfluid/tx.rpc.func";
import * as _713 from "./tokenfactory/v1beta1/tx.rpc.func";
import * as _714 from "./concentrated-liquidity/tx.rpc.func";
import * as _715 from "./poolmanager/v1beta1/tx.rpc.func";
import * as _716 from "./protorev/v1beta1/tx.rpc.func";
import * as _717 from "./valset-pref/v1beta1/tx.rpc.func";
import * as _718 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _719 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _720 from "./gamm/v1beta1/tx.rpc.msg";
import * as _721 from "./incentives/tx.rpc.msg";
import * as _722 from "./lockup/tx.rpc.msg";
import * as _723 from "./superfluid/tx.rpc.msg";
import * as _724 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _725 from "./concentrated-liquidity/tx.rpc.msg";
import * as _726 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _727 from "./protorev/v1beta1/tx.rpc.msg";
import * as _728 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _729 from "./gamm/v1beta1/query.pinia.store";
import * as _730 from "./gamm/v2/query.pinia.store";
import * as _753 from "./lcd";
import * as _754 from "./custom-lcd-client";
import * as _755 from "./rpc.query";
import * as _756 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._650,
      ..._669,
      ..._688
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._279,
      ..._280,
      ..._651,
      ..._670,
      ..._689
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._630,
      ..._641,
      ..._652,
      ..._671,
      ..._690,
      ..._709,
      ..._720,
      ..._729
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._286,
          ..._628,
          ..._639,
          ..._707,
          ..._718
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._287,
          ..._288,
          ..._629,
          ..._640,
          ..._708,
          ..._719
        };
      }
    }
    export const v2 = {
      ..._289,
      ..._653,
      ..._672,
      ..._691,
      ..._730
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._290,
      ..._291,
      ..._292,
      ..._654,
      ..._673,
      ..._692
    };
  }
  export const incentives = {
    ..._293,
    ..._294,
    ..._295,
    ..._296,
    ..._297,
    ..._631,
    ..._642,
    ..._655,
    ..._674,
    ..._693,
    ..._710,
    ..._721
  };
  export const lockup = {
    ..._298,
    ..._299,
    ..._300,
    ..._301,
    ..._302,
    ..._632,
    ..._643,
    ..._656,
    ..._675,
    ..._694,
    ..._711,
    ..._722
  };
  export namespace mint {
    export const v1beta1 = {
      ..._303,
      ..._304,
      ..._305,
      ..._657,
      ..._676,
      ..._695
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._306,
      ..._307,
      ..._308,
      ..._309,
      ..._658,
      ..._677,
      ..._696
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._310
    };
  }
  export const superfluid = {
    ..._311,
    ..._312,
    ..._313,
    ..._314,
    ..._315,
    ..._633,
    ..._644,
    ..._659,
    ..._678,
    ..._697,
    ..._712,
    ..._723
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._320,
      ..._634,
      ..._645,
      ..._660,
      ..._679,
      ..._698,
      ..._713,
      ..._724
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._321,
      ..._322,
      ..._323,
      ..._661,
      ..._680,
      ..._699
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._324,
      ..._325,
      ..._326,
      ..._327,
      ..._662,
      ..._681,
      ..._700
    };
  }
  export namespace accum {
    export const v1beta1 = {
      ..._328
    };
  }
  export const concentratedliquidity = {
    ..._329,
    v1beta1: {
      ..._635,
      ..._646,
      ..._663,
      ..._682,
      ..._701,
      ..._714,
      ..._725
    }
  };
  export namespace cosmwasmpool {
    export const v1beta1 = {
      ..._330,
      ..._331,
      ..._332,
      ..._333,
      ..._334,
      ..._664,
      ..._683,
      ..._702
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._335,
      ..._336,
      ..._337,
      ..._665,
      ..._684,
      ..._703
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._338,
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._636,
      ..._647,
      ..._666,
      ..._685,
      ..._704,
      ..._715,
      ..._726
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._343,
      ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._348,
      ..._637,
      ..._648,
      ..._667,
      ..._686,
      ..._705,
      ..._716,
      ..._727
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._349,
      ..._350,
      ..._351,
      ..._638,
      ..._649,
      ..._668,
      ..._687,
      ..._706,
      ..._717,
      ..._728
    };
  }
  export const ClientFactory = {
    ..._753,
    ..._754,
    ..._755,
    ..._756
  };
}