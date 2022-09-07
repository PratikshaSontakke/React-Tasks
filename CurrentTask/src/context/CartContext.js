import React, { createContext, useState } from "react";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [cartArr, setCartArr] = useState([]);

  const addCartData = (item) => {
    const updatedValue = [...cartArr, item];
    setCartArr(updatedValue);
    localStorage.setItem("users", JSON.stringify(updatedValue));
    alert(` Items added To Cart`);
  };

  return (
    <CartContext.Provider value={{ cartArr, setCartArr, addCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
