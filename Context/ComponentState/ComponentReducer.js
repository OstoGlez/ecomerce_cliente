import { PRODUCT_INCREMENT_COUNTER } from "../type";
import { PRODUCT_DECREMENT_COUNTER } from "../type";
import { PRODUCTS_SELECTED_BY_CUSTOMER } from "../type";
import { PRODUCT_RESET_COUNTER } from "../type";
import { PRE_PRODUCT_OBJECT } from "../type";

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

    case PRODUCTS_SELECTED_BY_CUSTOMER:
      return {
        ...state,
        productSelectedByCustomer: payload,
      };
    case PRODUCT_RESET_COUNTER:
      return {
        ...state,
        cartproductcounter: payload,
      };

    default:
      return state;
  }
};
