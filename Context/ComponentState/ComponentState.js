import React, { useReducer } from "react";
import ComponentContext from "./ComponentContext";
import ComponentReducer from "./ComponentReducer";
//import { CART_PRODUCTOS } from "../type";
const ComponentState = (props) => {
  // State de Pedidos
  const initialState = {
    cartproductcounter: 1,
  };

  const [state, dispatch] = useReducer(ComponentReducer, initialState);

  //+++++++++++ Codigo de estados para el componente CardProduct ++++++++++++++++
  let count = state.cartproductcounter;
  const countUp = () => {
    dispatch({
      type: "PRODUCT_INCREMENT_COUNTER",
      payload: state.cartproductcounter + 1,
    });
  };

  const countDown = () => {
    const decrement = count > 1 ? count - 1 : 1;
    dispatch({
      type: "PRODUCT_DECREMENT_COUNTER",
      payload: decrement,
    });
  };
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
    <ComponentContext.Provider
      value={{
        cartproductcounter: 1,
        cartproductcounter: state.cartproductcounter,
        countUp,
        countDown,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};

export default ComponentState;
