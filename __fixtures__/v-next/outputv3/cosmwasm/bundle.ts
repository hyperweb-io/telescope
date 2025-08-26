import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _458 from "./wasm/v1/tx.amino";
import * as _459 from "./wasm/v1/tx.registry";
import * as _460 from "./wasm/v1/query.rpc.func";
import * as _461 from "./wasm/v1/query.rpc.Query";
import * as _462 from "./wasm/v1/tx.rpc.func";
import * as _463 from "./wasm/v1/tx.rpc.msg";
import * as _577 from "./rpc.query";
import * as _578 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._458,
      ..._459,
      ..._460,
      ..._461,
      ..._462,
      ..._463
    };
  }
  export const ClientFactory = {
    ..._577,
    ..._578
  };
}