import { useState } from "react";
import "./Head.css";
import { Route, Link, Switch} from "react-router-dom";
import ItemForm from "../Components/NewItem/Itemform";
import ShowItem from "./ItemView";
//import WishList from './Wishlist';
import Delete from "./Delete";
import React from "react";
import ItemList from "./Items";
import Hero from "./Hero";


const Header = (props) => {
  const [deleteIcon, setDeleteIcon] = useState(false);
  const [deleteIconForCard, setDeleteIconForCard] = useState(false);
  const SelectAllCards = () => {
    if (deleteIconForCard === false) setDeleteIconForCard(true);
    else setDeleteIconForCard(false);
  };

  return (
    <>    
    <Hero/>
      
      <Switch> 
   <Route path="/">  <Delete cardSelect={SelectAllCards} />
          <ShowItem
        products={props.products}
        setProducts={props.setProducts}
        deleteicon={deleteIcon}
        setDelete={setDeleteIcon}
        deleteiconforCard={deleteIconForCard}
       
      /> </Route></Switch>
      
        
      
    </>
  );
};

export default Header;
