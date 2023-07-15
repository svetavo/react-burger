//для заказов авторизованного пользователя
import {
  WsAuthTypes,
  IWsAuthConnectionClosed,
  IWsAuthConnectionErr,
  IWsAuthConnectionOpen,
  IWsAuthConnectionSuccess,
  IWsAuthGetOrders,
  IWsAuthSendData,
} from "../../utils/types/ws_auth_connection_types";
import { TWsOrders } from "../../utils/types/types";

export const wsAuthActions = {
  wsInit: WsAuthTypes.WS_AUTH_CONNECTION_SUCCESS,
  onError: WsAuthTypes.WS_AUTH_CONNECTION_ERROR,
  onOpen: WsAuthTypes.WS_AUTH_CONNECTION_OPEN,
  onClose: WsAuthTypes.WS_AUTH_CONNECTION_CLOSED,
  onMessage: WsAuthTypes.WS_AUTH_GET_ORDERS,
  wsSendData: WsAuthTypes.WS_AUTH_SEND_DATA,
};

export const wsConnectionInitAuth = () : IWsAuthConnectionSuccess => {
  return {
    type: WsAuthTypes.WS_AUTH_CONNECTION_SUCCESS,
  };
};

export const wsConnectionOpenAuth = () : IWsAuthConnectionOpen => {
  return {
    type: WsAuthTypes.WS_AUTH_CONNECTION_OPEN,
  };
};

export const wsConnectionCloseAuth = () : IWsAuthConnectionClosed=> {
  return {
    type: WsAuthTypes.WS_AUTH_CONNECTION_CLOSED,
  };
};

export const wsConnectionErrorAuth = (error: string) : IWsAuthConnectionErr=> {
  return {
    type: WsAuthTypes.WS_AUTH_CONNECTION_ERROR,
	payload: error
  };
};

// DATA TYPES!!!

export const wsGetOrdersAuth = (data: TWsOrders) : IWsAuthGetOrders => {
  return {
    type: WsAuthTypes.WS_AUTH_GET_ORDERS,
    payload: data,
  };
};

export const wsSendDataAuth = (data: object) : IWsAuthSendData => {
  return {
    type: WsAuthTypes.WS_AUTH_SEND_DATA,
    payload: data,
  };
};
