const initialState = {
  orderNumber: 0,
  orderRequest: false,
  orderFail: false,
};

const orderNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER_OK":
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false,
        orderFail: false,
      };
    case "GET_ORDER_REQUEST":
      return {
        ...state,
        orderRequest: true,
        orderFail: false,
      };
    case "GET_ORDER_FAIL":
      return {
        ...state,
        orderRequest: false,
        orderFail: true,
      };
    default:
      return state;
  }
};

export default orderNumberReducer;
