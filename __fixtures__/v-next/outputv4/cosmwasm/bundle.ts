import * as _147 from "./wasm/v1/genesis.js";
import * as _148 from "./wasm/v1/ibc.js";
import * as _149 from "./wasm/v1/proposal.js";
import * as _150 from "./wasm/v1/query.js";
import * as _151 from "./wasm/v1/tx.js";
import * as _152 from "./wasm/v1/types.js";
import * as _484 from "./wasm/v1/tx.amino.js";
import * as _485 from "./wasm/v1/tx.registry.js";
import * as _486 from "./wasm/v1/query.lcd.js";
import * as _487 from "./wasm/v1/query.rpc.func.js";
import * as _488 from "./wasm/v1/query.rpc.Query.js";
import * as _489 from "./wasm/v1/tx.rpc.func.js";
import * as _490 from "./wasm/v1/tx.rpc.msg.js";
import * as _637 from "./lcd.js";
import * as _638 from "./rpc.query.js";
import * as _639 from "./rpc.tx.js";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._484,
      ..._485,
      ..._486,
      ..._487,
      ..._488,
      ..._489,
      ..._490
    };
  }
  export const ClientFactory = {
    ..._637,
    ..._638,
    ..._639
  };
}