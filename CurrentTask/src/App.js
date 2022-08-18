import React, { useState } from "react";
import Header from "./Components/Header";
import NewItem from "./Components/NewItem/NewItem";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ItemList from "./Components/Items";
import ItemForm from "./Components/NewItem/Itemform";
import Demo from "./Components/Demo";
import Hero from "./Components/Hero";
import NotFound from "./Components/NotFound";
import CardDetails from "./Components/CardDetails";
import Cart from "./Components/Cart";

function App() {
  var [products, setProducts] = useState(ItemList);
  

  // const addItemHandler = (ItemList) => {
  //   console.log("In app.js");
  //   console.log(ItemList);
  //   setProducts((state) => {
  //     return state.concat([ItemList]);
  //   });
  // };
 

  return (
    <>
      <Navbar> </Navbar>

      <Switch>
       
        <Route path="/admin/:email?" >
          <NewItem/>
        </Route>

        <Route path="/shop" exact>
          <Header products={products} setProducts={setProducts} />
          </Route>

          <Route path="/shop/CardDetails/:idOfProd" exact>
         
            <CardDetails />
          </Route>

        <Route path="/" exact>
          <Hero /> <Header products={products} setProducts={setProducts} />
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
    </>
  );
}
export default App;
