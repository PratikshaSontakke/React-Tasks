import React, {useState} from "react";
import Header from "./Components/Header";
import NewItem from "./Components/NewItem/NewItem";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import NotFound from "./Components/NotFound";
import CardDetails from "./Components/CardDetails";
import Cart from "./Components/Cart";
import ItemList from "./Components/Items";
import FallbackError from "./FallbackError";


const App = () => {
  
  const [products, setProducts] = useState(ItemList);

  return (
    <>
   
      <div> 
     
      <FallbackError>
       <Navbar /> 

        <Switch>
          <Route path="/admin/:email?">
            <NewItem />
          </Route>

          <Route path="/shop" exact>
            <Header products={products} setProducts={setProducts}/>
          </Route>

          <Route path="/shop/cardDetails/:idOfProd" exact>
            <CardDetails />
          </Route>

          <Route path="/" exact>
            <Hero /> <Header products={products} setProducts={setProducts}/>
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </FallbackError>

        
        
      </div>  
      
      
    </>
  );
};
export default App;
