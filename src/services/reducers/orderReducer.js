import {
  GET_ORDER_OK,
  GET_ORDER_REQUEST,
  GET_ORDER_ERROR,
} from "../actions/orderActions";

const initialState = {
  orderNumber: 0,
  orderRequest: false,
  orderFail: false,
};

export const orderNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_OK:
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false,
        orderFail: false,
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFail: false,
      };
    case GET_ORDER_ERROR:
      return {
        ...state,
        orderRequest: false,
        orderFail: true,
      };
    default:
      return state;
  }
};
