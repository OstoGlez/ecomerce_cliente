import React, { useReducer, useCallback } from "react";
import InvoiceContext from "../invoice/InvoiceContext";
import InvoiceReducer from "../invoice/InvoiceReducer";
//import { CART_PRODUCTOS } from "../type";
const InvoiceState = (props) => {
  // State de Pedidos
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(InvoiceReducer, initialState);

  const touchCard = (e, product) => {
    if (e.target.tagName !== "BUTTON") {
      // Simulando una operación asíncrona
      dispatch({
        type: "CART_PRODUCTOS",
        payload: product,
      });
    }
  };

  return (
    <InvoiceContext.Provider
      value={{
        cart: state.cart,
        touchCard,
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceState;
