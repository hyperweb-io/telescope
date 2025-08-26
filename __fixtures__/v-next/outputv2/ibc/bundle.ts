import * as _230 from "./applications/transfer/v1/genesis";
import * as _231 from "./applications/transfer/v1/query";
import * as _232 from "./applications/transfer/v1/transfer";
import * as _233 from "./applications/transfer/v1/tx";
import * as _234 from "./applications/transfer/v2/packet";
import * as _235 from "./core/channel/v1/channel";
import * as _236 from "./core/channel/v1/genesis";
import * as _237 from "./core/channel/v1/query";
import * as _238 from "./core/channel/v1/tx";
import * as _239 from "./core/client/v1/client";
import * as _240 from "./core/client/v1/genesis";
import * as _241 from "./core/client/v1/query";
import * as _242 from "./core/client/v1/tx";
import * as _243 from "./core/commitment/v1/commitment";
import * as _244 from "./core/connection/v1/connection";
import * as _245 from "./core/connection/v1/genesis";
import * as _246 from "./core/connection/v1/query";
import * as _247 from "./core/connection/v1/tx";
import * as _248 from "./core/port/v1/query";
import * as _249 from "./core/types/v1/genesis";
import * as _250 from "./lightclients/localhost/v1/localhost";
import * as _251 from "./lightclients/solomachine/v1/solomachine";
import * as _252 from "./lightclients/solomachine/v2/solomachine";
import * as _253 from "./lightclients/tendermint/v1/tendermint";
import * as _492 from "./applications/transfer/v1/tx.amino";
import * as _493 from "./core/channel/v1/tx.amino";
import * as _494 from "./core/client/v1/tx.amino";
import * as _495 from "./core/connection/v1/tx.amino";
import * as _496 from "./applications/transfer/v1/tx.registry";
import * as _497 from "./core/channel/v1/tx.registry";
import * as _498 from "./core/client/v1/tx.registry";
import * as _499 from "./core/connection/v1/tx.registry";
import * as _500 from "./applications/transfer/v1/query.rpc.func";
import * as _501 from "./core/channel/v1/query.rpc.func";
import * as _502 from "./core/client/v1/query.rpc.func";
import * as _503 from "./core/connection/v1/query.rpc.func";
import * as _504 from "./core/port/v1/query.rpc.func";
import * as _505 from "./applications/transfer/v1/query.rpc.Query";
import * as _506 from "./core/channel/v1/query.rpc.Query";
import * as _507 from "./core/client/v1/query.rpc.Query";
import * as _508 from "./core/connection/v1/query.rpc.Query";
import * as _509 from "./core/port/v1/query.rpc.Query";
import * as _510 from "./applications/transfer/v1/tx.rpc.func";
import * as _511 from "./core/channel/v1/tx.rpc.func";
import * as _512 from "./core/client/v1/tx.rpc.func";
import * as _513 from "./core/connection/v1/tx.rpc.func";
import * as _514 from "./applications/transfer/v1/tx.rpc.msg";
import * as _515 from "./core/channel/v1/tx.rpc.msg";
import * as _516 from "./core/client/v1/tx.rpc.msg";
import * as _517 from "./core/connection/v1/tx.rpc.msg";
import * as _581 from "./rpc.query";
import * as _582 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._492,
        ..._496,
        ..._500,
        ..._505,
        ..._510,
        ..._514
      };
      export const v2 = {
        ..._234
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._493,
        ..._497,
        ..._501,
        ..._506,
        ..._511,
        ..._515
      };
    }
    export namespace client {
      export const v1 = {
        ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._494,
        ..._498,
        ..._502,
        ..._507,
        ..._512,
        ..._516
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._243
      };
    }
    export namespace connection {
      export const v1 = {
        ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._495,
        ..._499,
        ..._503,
        ..._508,
        ..._513,
        ..._517
      };
    }
    export namespace port {
      export const v1 = {
        ..._248,
        ..._504,
        ..._509
      };
    }
    export namespace types {
      export const v1 = {
        ..._249
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._250
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._251
      };
      export const v2 = {
        ..._252
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._253
      };
    }
  }
  export const ClientFactory = {
    ..._581,
    ..._582
  };
}