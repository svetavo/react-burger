//для заказов авторизованного пользователя
export const WS_AUTH_CONNECTION_SUCCESS= 'WS_AUTH_CONNECTION_SUCCESS';
export const WS_AUTH_CONNECTION_ERROR = 'WS_AUTH_CONNECTION_ERROR';
export const WS_AUTH_CONNECTION_OPEN = 'WS_AUTH_CONNECTION_OPEN';
export const WS_AUTH_CONNECTION_CLOSED = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_GET_ORDERS = 'WS_AUTH_GET_ORDERS';
export const WS_AUTH_SEND_DATA= 'WS_AUTH_SEND_DATA';

export const wsAuthActions = {
  wsInit: WS_AUTH_CONNECTION_SUCCESS,
  onError: WS_AUTH_CONNECTION_ERROR,
  onOpen: WS_AUTH_CONNECTION_OPEN,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onMessage: WS_AUTH_GET_ORDERS,
  wsSendData: WS_AUTH_SEND_DATA,
};

export const wsConnectionInitAuth = () => {
	return {
	  type: WS_AUTH_CONNECTION_SUCCESS,
	};
  };
  
  export const wsConnectionOpenAuth = () => {
	return {
	  type: WS_AUTH_CONNECTION_OPEN,
	};
  };
  
  export const wsConnectionCloseAuth = () => {
	return {
	  type: WS_AUTH_CONNECTION_CLOSED,
	};
  };
  
  export const wsConnectionErrorAuth = () => {
	return {
	  type: WS_AUTH_CONNECTION_ERROR,
	};
  };
  
  export const wsGetOrdersAuth = (data) => {
	return {
	  type: WS_AUTH_GET_ORDERS,
	  payload: data,
	};
  };
  
  export const wsSendDataAuth = (data) => {
	return {
	  type: WS_AUTH_SEND_DATA,
	  payload: data,
	};
  };
