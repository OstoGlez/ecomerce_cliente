import React, { useReducer, useCallback } from "react";
import ComponentContext from "./ComponentContext";
import ComponentReducer from "./ComponentReducer";

//import { CART_PRODUCTOS } from "../type";
const ComponentState = (props) => {
  // State de Pedidos
  const initialState = {
    cartproductcounter: 0,
    productSelectedByCustomer: [],
    totalcountProductSelct: 0,
  };

  const [state, dispatch] = useReducer(ComponentReducer, initialState);
  console.log(state.productSelectedByCustomer);
  //+++++++++++ Codigo de estados para el componente CardProduct ++++++++++++++++

  //let count = state.cartproductcounter;
  const countUp = (product) => {
    dispatch({
      type: "PRODUCT_INCREMENT_COUNTER",
      payload: state.cartproductcounter + 1,
    });
  };

  const countDown = (product) => {
    const count = state.cartproductcounter;
    const decrement = count > 1 ? count - 1 : 1;
    dispatch({
      type: "PRODUCT_DECREMENT_COUNTER",
      payload: decrement,
    });
  };

  const resetCount = () => {
    dispatch({
      type: "PRODUCT_RESET_COUNTER",
      payload: 0,
    });
  };

  const addSelectedProducts = (product) => {
    const { id, name } = product;
    const count = state.cartproductcounter;
    const foundItem = state.productSelectedByCustomer.find(
      (item) => item.id === id
    );
    const countItem = foundItem ? foundItem : null;
    const payloadCart = {
      id,
      name,
      count: countItem ? countItem.count + count : count,
    };

    dispatch({
      type: "PRODUCTS_SELECTED_BY_CUSTOMER",
      payload: !countItem
        ? [...state.productSelectedByCustomer, payloadCart]
        : [...state.productSelectedByCustomer].map((e) =>
            e.id != payloadCart.id ? e : { ...e, count: payloadCart.count }
          ),
    });
    resetCount();
  };

  const reducecount = state.productSelectedByCustomer.reduce((acum, actual) => {
    console.log("Valor de acum:", acum);
    console.log("Valor de actual:", actual.count);
    console.log("Valor de la devolucion:", acum + actual.count);
    return acum + actual.count;
  }, 0);

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
    <ComponentContext.Provider
      value={{
        cartproductcounter: state.cartproductcounter,
        productSelectedByCustomer: state.productSelectedByCustomer,
        totalcountProductSelct: state.totalcountProductSelct,

        countUp,
        countDown,
        addSelectedProducts,
        reducecount,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};

export default ComponentState;
