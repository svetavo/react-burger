import { TWsOrders } from "../../utils/types/types";
import {
  WsAuthTypes,
  IWsAuthConnectionClosed,
  IWsAuthConnectionErr,
  IWsAuthConnectionOpen,
  IWsAuthConnectionSuccess,
  IWsAuthGetOrders,
  IWsAuthSendData,
} from "../../utils/types/ws_auth_connection_types";

interface IWsAuthState {
  wsConnected: boolean;
  ordersAuth: null | TWsOrders;
  error: undefined | string;
}

export type TWsAuthActions =
  | IWsAuthConnectionClosed
  | IWsAuthConnectionErr
  | IWsAuthConnectionOpen
  | IWsAuthConnectionSuccess
  | IWsAuthGetOrders
  | IWsAuthSendData;

const initialState: IWsAuthState = {
  wsConnected: false,
  ordersAuth: null,
  error: undefined,
};

export const wsReducerAuth = (
  state = initialState,
  action: TWsAuthActions
): IWsAuthState => {
  switch (action.type) {
    case WsAuthTypes.WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WsAuthTypes.WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WsAuthTypes.WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WsAuthTypes.WS_AUTH_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        ordersAuth: action.payload,
      };
    default:
      return state;
  }
};
