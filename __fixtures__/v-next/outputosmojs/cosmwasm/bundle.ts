import * as _149 from "./wasm/v1/genesis";
import * as _150 from "./wasm/v1/ibc";
import * as _151 from "./wasm/v1/proposal";
import * as _152 from "./wasm/v1/query";
import * as _153 from "./wasm/v1/tx";
import * as _154 from "./wasm/v1/types";
import * as _155 from "./wasm/v1/authz";
import * as _537 from "./wasm/v1/tx.amino";
import * as _538 from "./wasm/v1/tx.registry";
import * as _539 from "./wasm/v1/query.lcd";
import * as _540 from "./wasm/v1/query.rpc.func";
import * as _541 from "./wasm/v1/query.rpc.Query";
import * as _542 from "./wasm/v1/tx.rpc.func";
import * as _543 from "./wasm/v1/tx.rpc.msg";
import * as _741 from "./lcd";
import * as _742 from "./rpc.query";
import * as _743 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._537,
      ..._538,
      ..._539,
      ..._540,
      ..._541,
      ..._542,
      ..._543
    };
  }
  export const ClientFactory = {
    ..._741,
    ..._742,
    ..._743
  };
}