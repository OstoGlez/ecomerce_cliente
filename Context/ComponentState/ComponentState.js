import React, { useReducer, useCallback } from "react";
import ComponentContext from "./ComponentContext";
import ComponentReducer from "./ComponentReducer";

//import { CART_PRODUCTOS } from "../type";
const ComponentState = (props) => {
  // State de Pedidos
  const initialState = {
    cartproductcounter: 1,
    productSelectedByCustomer: [],
    totalcountProductSelct: 0,
    totalcost: 0,
  };

  const [state, dispatch] = useReducer(ComponentReducer, initialState);
  console.log(state.productSelectedByCustomer);
  //+++++++++++ Codigo de estados para el componente CardProduct ++++++++++++++++

  //let count = state.cartproductcounter;
  const countUp = () => {
    dispatch({
      type: "PRODUCT_INCREMENT_COUNTER",
      payload: state.cartproductcounter + 1,
    });
  };

  const countDown = () => {
    const count = state.cartproductcounter;
    const decrement = count > 1 ? count - 1 : 1;
    dispatch({
      type: "PRODUCT_DECREMENT_COUNTER",
      payload: decrement,
    });
  };
  //Resetea el contador cuando se añade un producto
  const resetCount = () => {
    console.log("reset");
    dispatch({
      type: "PRODUCT_RESET_COUNTER",
      payload: 1,
    });
  };

  const addSelectedProducts = (product) => {
    const { id, name, price, image } = product;
    // Se toma muestra del contador de cantidad de producto
    const count = state.cartproductcounter;
    // cada vez que se selecciona un producto se comprueba si ya existe en el array de productos seleccionados
    const foundItem = state.productSelectedByCustomer.find(
      (item) => item.id === id
    );
    //
    const countItem = foundItem ? foundItem : null;
    const payloadCart = {
      id,
      name,
      count: countItem ? countItem.count + count : count,
      image,
      price,
      partial: price * (countItem ? countItem.count + count : count),
    };
    console.log(payloadCart);
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

  const totalCosto = state.productSelectedByCustomer.reduce((acum, actual) => {
    return acum + actual.partial;
  }, 0);

  const reducecount = state.productSelectedByCustomer.reduce((acum, actual) => {
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
        resetCount,
        reducecount,
        totalCosto,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};

export default ComponentState;
