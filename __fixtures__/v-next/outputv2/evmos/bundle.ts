import * as _153 from "./claims/v1/claims";
import * as _154 from "./claims/v1/genesis";
import * as _155 from "./claims/v1/query";
import * as _156 from "./epochs/v1/genesis";
import * as _157 from "./epochs/v1/query";
import * as _158 from "./erc20/v1/erc20";
import * as _159 from "./erc20/v1/genesis";
import * as _160 from "./erc20/v1/query";
import * as _161 from "./erc20/v1/tx";
import * as _162 from "./fees/v1/fees";
import * as _163 from "./fees/v1/genesis";
import * as _164 from "./fees/v1/query";
import * as _165 from "./fees/v1/tx";
import * as _166 from "./incentives/v1/genesis";
import * as _167 from "./incentives/v1/incentives";
import * as _168 from "./incentives/v1/query";
import * as _169 from "./inflation/v1/genesis";
import * as _170 from "./inflation/v1/inflation";
import * as _171 from "./inflation/v1/query";
import * as _172 from "./recovery/v1/genesis";
import * as _173 from "./recovery/v1/query";
import * as _174 from "./vesting/v1/query";
import * as _175 from "./vesting/v1/tx";
import * as _176 from "./vesting/v1/vesting";
import * as _464 from "./erc20/v1/tx.amino";
import * as _465 from "./fees/v1/tx.amino";
import * as _466 from "./vesting/v1/tx.amino";
import * as _467 from "./erc20/v1/tx.registry";
import * as _468 from "./fees/v1/tx.registry";
import * as _469 from "./vesting/v1/tx.registry";
import * as _470 from "./claims/v1/query.rpc.func";
import * as _471 from "./epochs/v1/query.rpc.func";
import * as _472 from "./erc20/v1/query.rpc.func";
import * as _473 from "./fees/v1/query.rpc.func";
import * as _474 from "./incentives/v1/query.rpc.func";
import * as _475 from "./inflation/v1/query.rpc.func";
import * as _476 from "./recovery/v1/query.rpc.func";
import * as _477 from "./vesting/v1/query.rpc.func";
import * as _478 from "./claims/v1/query.rpc.Query";
import * as _479 from "./epochs/v1/query.rpc.Query";
import * as _480 from "./erc20/v1/query.rpc.Query";
import * as _481 from "./fees/v1/query.rpc.Query";
import * as _482 from "./incentives/v1/query.rpc.Query";
import * as _483 from "./inflation/v1/query.rpc.Query";
import * as _484 from "./recovery/v1/query.rpc.Query";
import * as _485 from "./vesting/v1/query.rpc.Query";
import * as _486 from "./erc20/v1/tx.rpc.func";
import * as _487 from "./fees/v1/tx.rpc.func";
import * as _488 from "./vesting/v1/tx.rpc.func";
import * as _489 from "./erc20/v1/tx.rpc.msg";
import * as _490 from "./fees/v1/tx.rpc.msg";
import * as _491 from "./vesting/v1/tx.rpc.msg";
import * as _579 from "./rpc.query";
import * as _580 from "./rpc.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._470,
      ..._478
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._156,
      ..._157,
      ..._471,
      ..._479
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._464,
      ..._467,
      ..._472,
      ..._480,
      ..._486,
      ..._489
    };
  }
  export namespace fees {
    export const v1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._465,
      ..._468,
      ..._473,
      ..._481,
      ..._487,
      ..._490
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._474,
      ..._482
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._475,
      ..._483
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._172,
      ..._173,
      ..._476,
      ..._484
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._466,
      ..._469,
      ..._477,
      ..._485,
      ..._488,
      ..._491
    };
  }
  export const ClientFactory = {
    ..._579,
    ..._580
  };
}