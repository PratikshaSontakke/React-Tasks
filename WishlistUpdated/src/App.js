import React, {useState} from "react";
import Header from "./Components/Header";
import NewItem from "./Components/NewItem/NewItem";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ItemList from "./Components/Items";
import ItemForm from "./Components/NewItem/Itemform";




import "./index.css";
import Demo from "./Components/Demo";
//import ItemList from "./Components/Items";

function App() {
  var [products, setProducts] = useState(ItemList);

  const addItemHandler = ItemList =>{

    console.log("In app.js");
    console.log(ItemList);
    setProducts(state=>{
      return state.concat([ItemList])
      
    })

  };
  
  return (
    <>
    
      <Navbar> </Navbar> 
         
        <Switch> 
       <Route path="/admin"> <NewItem onAddItem={addItemHandler}/> </Route>
       <Route path="/shop"> <Header products={products} setProducts={setProducts}/> </Route>
       <Route path="/" exact > <Header products={products} setProducts={setProducts}/> </Route>
       <Route path="/cart"> <Demo/> </Route> </Switch>
       
              
         
    </>
  );
}
export default App;
