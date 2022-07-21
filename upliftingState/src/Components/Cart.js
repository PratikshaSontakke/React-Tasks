import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }
      return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          
          <div>
            
            <button onClick={() => handleRemove(item.id)}>Delete Item</button>
          </div>
        </div>
      ))}
      
    </article>
  );
};

export default Cart;