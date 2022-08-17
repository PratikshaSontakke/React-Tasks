import { useEffect } from "react";
import CartItem from "./CartItem";
import React from "react";
var arr;
const Cart = (props) => {
  arr = JSON.parse(localStorage.getItem("users"));
  return (
    <>
      
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {arr != null ? (
          arr.map((val, index) => {
            return <CartItem item={val} key={index} />;
          })
        ) : (
          <>
            <br />
            <h1>You havn't Added any Item to cart</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
