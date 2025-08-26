import * as _233 from "./applications/transfer/v1/genesis";
import * as _234 from "./applications/transfer/v1/query";
import * as _235 from "./applications/transfer/v1/transfer";
import * as _236 from "./applications/transfer/v1/tx";
import * as _237 from "./applications/transfer/v1/authz";
import * as _238 from "./applications/transfer/v2/packet";
import * as _239 from "./applications/fee/v1/ack";
import * as _240 from "./applications/fee/v1/fee";
import * as _241 from "./applications/fee/v1/genesis";
import * as _242 from "./applications/fee/v1/metadata";
import * as _243 from "./applications/fee/v1/query";
import * as _244 from "./applications/fee/v1/tx";
import * as _245 from "./applications/interchain_accounts/controller/v1/controller";
import * as _246 from "./applications/interchain_accounts/controller/v1/query";
import * as _247 from "./applications/interchain_accounts/controller/v1/tx";
import * as _248 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _249 from "./applications/interchain_accounts/host/v1/host";
import * as _250 from "./applications/interchain_accounts/host/v1/query";
import * as _251 from "./applications/interchain_accounts/v1/account";
import * as _252 from "./applications/interchain_accounts/v1/metadata";
import * as _253 from "./applications/interchain_accounts/v1/packet";
import * as _254 from "./core/channel/v1/channel";
import * as _255 from "./core/channel/v1/genesis";
import * as _256 from "./core/channel/v1/query";
import * as _257 from "./core/channel/v1/tx";
import * as _258 from "./core/client/v1/client";
import * as _259 from "./core/client/v1/genesis";
import * as _260 from "./core/client/v1/query";
import * as _261 from "./core/client/v1/tx";
import * as _262 from "./core/commitment/v1/commitment";
import * as _263 from "./core/connection/v1/connection";
import * as _264 from "./core/connection/v1/genesis";
import * as _265 from "./core/connection/v1/query";
import * as _266 from "./core/connection/v1/tx";
import * as _267 from "./core/port/v1/query";
import * as _268 from "./core/types/v1/genesis";
import * as _269 from "./lightclients/localhost/v1/localhost";
import * as _270 from "./lightclients/localhost/v2/localhost";
import * as _271 from "./lightclients/solomachine/v1/solomachine";
import * as _272 from "./lightclients/solomachine/v2/solomachine";
import * as _273 from "./lightclients/solomachine/v3/solomachine";
import * as _274 from "./lightclients/tendermint/v1/tendermint";
import * as _581 from "./applications/transfer/v1/tx.amino";
import * as _582 from "./core/channel/v1/tx.amino";
import * as _583 from "./core/client/v1/tx.amino";
import * as _584 from "./core/connection/v1/tx.amino";
import * as _585 from "./applications/fee/v1/tx.amino";
import * as _586 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _587 from "./applications/transfer/v1/tx.registry";
import * as _588 from "./core/channel/v1/tx.registry";
import * as _589 from "./core/client/v1/tx.registry";
import * as _590 from "./core/connection/v1/tx.registry";
import * as _591 from "./applications/fee/v1/tx.registry";
import * as _592 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _593 from "./applications/transfer/v1/query.lcd";
import * as _594 from "./core/channel/v1/query.lcd";
import * as _595 from "./core/client/v1/query.lcd";
import * as _596 from "./core/connection/v1/query.lcd";
import * as _597 from "./applications/fee/v1/query.lcd";
import * as _598 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _599 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _600 from "./applications/transfer/v1/query.rpc.func";
import * as _601 from "./core/channel/v1/query.rpc.func";
import * as _602 from "./core/client/v1/query.rpc.func";
import * as _603 from "./core/connection/v1/query.rpc.func";
import * as _604 from "./core/port/v1/query.rpc.func";
import * as _605 from "./applications/fee/v1/query.rpc.func";
import * as _606 from "./applications/interchain_accounts/controller/v1/query.rpc.func";
import * as _607 from "./applications/interchain_accounts/host/v1/query.rpc.func";
import * as _608 from "./applications/transfer/v1/query.rpc.Query";
import * as _609 from "./core/channel/v1/query.rpc.Query";
import * as _610 from "./core/client/v1/query.rpc.Query";
import * as _611 from "./core/connection/v1/query.rpc.Query";
import * as _612 from "./core/port/v1/query.rpc.Query";
import * as _613 from "./applications/fee/v1/query.rpc.Query";
import * as _614 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _615 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _616 from "./applications/transfer/v1/tx.rpc.func";
import * as _617 from "./core/channel/v1/tx.rpc.func";
import * as _618 from "./core/client/v1/tx.rpc.func";
import * as _619 from "./core/connection/v1/tx.rpc.func";
import * as _620 from "./applications/fee/v1/tx.rpc.func";
import * as _621 from "./applications/interchain_accounts/controller/v1/tx.rpc.func";
import * as _622 from "./applications/transfer/v1/tx.rpc.msg";
import * as _623 from "./core/channel/v1/tx.rpc.msg";
import * as _624 from "./core/client/v1/tx.rpc.msg";
import * as _625 from "./core/connection/v1/tx.rpc.msg";
import * as _626 from "./applications/fee/v1/tx.rpc.msg";
import * as _627 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _750 from "./lcd";
import * as _751 from "./rpc.query";
import * as _752 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._233,
        ..._234,
        ..._235,
        ..._236,
        ..._237,
        ..._581,
        ..._587,
        ..._593,
        ..._600,
        ..._608,
        ..._616,
        ..._622
      };
      export const v2 = {
        ..._238
      };
    }
    export namespace fee {
      export const v1 = {
        ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._243,
        ..._244,
        ..._585,
        ..._591,
        ..._597,
        ..._605,
        ..._613,
        ..._620,
        ..._626
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._245,
          ..._246,
          ..._247,
          ..._586,
          ..._592,
          ..._598,
          ..._606,
          ..._614,
          ..._621,
          ..._627
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._248
        };
      }
      export namespace host {
        export const v1 = {
          ..._249,
          ..._250,
          ..._599,
          ..._607,
          ..._615
        };
      }
      export const v1 = {
        ..._251,
        ..._252,
        ..._253
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._254,
        ..._255,
        ..._256,
        ..._257,
        ..._582,
        ..._588,
        ..._594,
        ..._601,
        ..._609,
        ..._617,
        ..._623
      };
    }
    export namespace client {
      export const v1 = {
        ..._258,
        ..._259,
        ..._260,
        ..._261,
        ..._583,
        ..._589,
        ..._595,
        ..._602,
        ..._610,
        ..._618,
        ..._624
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._262
      };
    }
    export namespace connection {
      export const v1 = {
        ..._263,
        ..._264,
        ..._265,
        ..._266,
        ..._584,
        ..._590,
        ..._596,
        ..._603,
        ..._611,
        ..._619,
        ..._625
      };
    }
    export namespace port {
      export const v1 = {
        ..._267,
        ..._604,
        ..._612
      };
    }
    export namespace types {
      export const v1 = {
        ..._268
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._269
      };
      export const v2 = {
        ..._270
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._271
      };
      export const v2 = {
        ..._272
      };
      export const v3 = {
        ..._273
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._274
      };
    }
  }
  export const ClientFactory = {
    ..._750,
    ..._751,
    ..._752
  };
}