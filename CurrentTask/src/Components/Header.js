import { useState,useContext } from "react";
import "./Head.css";
import { Route, Switch } from "react-router-dom";
import ShowItem from "./ItemView";
import Delete from "./Delete";
import React from "react";
import {CartContext} from "../context/CartContext";
//import {ProductContext} from "../context/ProductContext";
import ItemList from "./Items";
import FallbackError from "../FallbackError";


const Header = () => {
  // const [cartArr, setCartArr] = useState([]);
const {cartArr, setCartArr} = useContext(CartContext);

//const {products, setProducts} = useContext(ProductContext);
const [products, setProducts] = useState(ItemList);

const [deleteIcon, setDeleteIcon] = useState(false);
const [deleteIconForCard, setDeleteIconForCard] = useState(false);
  
const SelectAllCards = () => {
  if (deleteIconForCard === false) setDeleteIconForCard(true);
  else setDeleteIconForCard(false);
};

  const addCartData = (item) => {
    const updatedValue = [...cartArr, item];
    setCartArr(updatedValue);
    localStorage.setItem("users", JSON.stringify(updatedValue));
    alert(` Items added To Cart`);
  };

  return (
    <>
    <FallbackError> 
      <Switch>
     
        <Route path="/">
          {" "}
          <Delete cardSelect={SelectAllCards} />
          <ShowItem
            products={products}
            setProducts={setProducts}
            deleteicon={deleteIcon}
            setDelete={setDeleteIcon}
            deleteiconforCard={deleteIconForCard}
            addToCart={addCartData}
          />
        </Route>
       
      </Switch>
      </FallbackError>
     
    </>
  );
};

export default Header;
