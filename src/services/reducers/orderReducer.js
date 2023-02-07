import {
  GET_ORDER_OK,
  GET_ORDER_REQUEST,
  GET_ORDER_ERROR,
} from "../actions/orderActions";

const initialStateNumber = {
  orderNumber: 0,
  orderRequest: false,
  orderFail: false,
};

export const orderNumberReducer = (state = initialStateNumber, action) => {
  switch (action.type) {
    case GET_ORDER_OK:
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false,
        infoRequest: false,
        orderFail: false,
        infoFail: false,
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        infoRequest: false,
        orderFail: false,
        infoFail: false,
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

