import * as _156 from "./claims/v1/claims";
import * as _157 from "./claims/v1/genesis";
import * as _158 from "./claims/v1/query";
import * as _159 from "./epochs/v1/genesis";
import * as _160 from "./epochs/v1/query";
import * as _161 from "./erc20/v1/erc20";
import * as _162 from "./erc20/v1/genesis";
import * as _163 from "./erc20/v1/query";
import * as _164 from "./erc20/v1/tx";
import * as _165 from "./fees/v1/fees";
import * as _166 from "./fees/v1/genesis";
import * as _167 from "./fees/v1/query";
import * as _168 from "./fees/v1/tx";
import * as _169 from "./incentives/v1/genesis";
import * as _170 from "./incentives/v1/incentives";
import * as _171 from "./incentives/v1/query";
import * as _172 from "./inflation/v1/genesis";
import * as _173 from "./inflation/v1/inflation";
import * as _174 from "./inflation/v1/query";
import * as _175 from "./recovery/v1/genesis";
import * as _176 from "./recovery/v1/query";
import * as _177 from "./vesting/v1/query";
import * as _178 from "./vesting/v1/tx";
import * as _179 from "./vesting/v1/vesting";
import * as _544 from "./erc20/v1/tx.amino";
import * as _545 from "./fees/v1/tx.amino";
import * as _546 from "./vesting/v1/tx.amino";
import * as _547 from "./erc20/v1/tx.registry";
import * as _548 from "./fees/v1/tx.registry";
import * as _549 from "./vesting/v1/tx.registry";
import * as _550 from "./claims/v1/query.lcd";
import * as _551 from "./epochs/v1/query.lcd";
import * as _552 from "./erc20/v1/query.lcd";
import * as _553 from "./fees/v1/query.lcd";
import * as _554 from "./incentives/v1/query.lcd";
import * as _555 from "./inflation/v1/query.lcd";
import * as _556 from "./recovery/v1/query.lcd";
import * as _557 from "./vesting/v1/query.lcd";
import * as _558 from "./claims/v1/query.rpc.func";
import * as _559 from "./epochs/v1/query.rpc.func";
import * as _560 from "./erc20/v1/query.rpc.func";
import * as _561 from "./fees/v1/query.rpc.func";
import * as _562 from "./incentives/v1/query.rpc.func";
import * as _563 from "./inflation/v1/query.rpc.func";
import * as _564 from "./recovery/v1/query.rpc.func";
import * as _565 from "./vesting/v1/query.rpc.func";
import * as _566 from "./claims/v1/query.rpc.Query";
import * as _567 from "./epochs/v1/query.rpc.Query";
import * as _568 from "./erc20/v1/query.rpc.Query";
import * as _569 from "./fees/v1/query.rpc.Query";
import * as _570 from "./incentives/v1/query.rpc.Query";
import * as _571 from "./inflation/v1/query.rpc.Query";
import * as _572 from "./recovery/v1/query.rpc.Query";
import * as _573 from "./vesting/v1/query.rpc.Query";
import * as _574 from "./erc20/v1/tx.rpc.func";
import * as _575 from "./fees/v1/tx.rpc.func";
import * as _576 from "./vesting/v1/tx.rpc.func";
import * as _577 from "./erc20/v1/tx.rpc.msg";
import * as _578 from "./fees/v1/tx.rpc.msg";
import * as _579 from "./vesting/v1/tx.rpc.msg";
import * as _580 from "./erc20/v1/query.pinia.store";
import * as _744 from "./lcd";
import * as _745 from "./custom-lcd-client";
import * as _746 from "./rpc.query";
import * as _747 from "./evmos-rpc-client.query";
import * as _748 from "./rpc.tx";
import * as _749 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._550,
      ..._558,
      ..._566
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._159,
      ..._160,
      ..._551,
      ..._559,
      ..._567
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._544,
      ..._547,
      ..._552,
      ..._560,
      ..._568,
      ..._574,
      ..._577,
      ..._580
    };
  }
  export namespace fees {
    export const v1 = {
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._545,
      ..._548,
      ..._553,
      ..._561,
      ..._569,
      ..._575,
      ..._578
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._554,
      ..._562,
      ..._570
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._555,
      ..._563,
      ..._571
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._175,
      ..._176,
      ..._556,
      ..._564,
      ..._572
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._177,
      ..._178,
      ..._179,
      ..._546,
      ..._549,
      ..._557,
      ..._565,
      ..._573,
      ..._576,
      ..._579
    };
  }
  export const ClientFactory = {
    ..._744,
    ..._745,
    ..._746,
    ..._747,
    ..._748,
    ..._749
  };
}