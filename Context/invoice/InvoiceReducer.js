import { CART_PRODUCTOS } from "../type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case CART_PRODUCTOS:
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    default:
      return state;
  }
};
