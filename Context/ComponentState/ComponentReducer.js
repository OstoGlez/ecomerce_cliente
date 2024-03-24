import { PRODUCT_INCREMENT_COUNTER } from "../type";
import { PRODUCT_DECREMENT_COUNTER } from "../type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case PRODUCT_INCREMENT_COUNTER:
      return {
        ...state,
        cartproductcounter: payload,
      };
    case PRODUCT_DECREMENT_COUNTER:
      return {
        ...state,
        cartproductcounter: payload,
      };
    default:
      return state;
  }
};
