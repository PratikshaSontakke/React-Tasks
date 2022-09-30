import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import NewItem from "./Components/NewItem/NewItem";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/heroImg/Hero";
import NotFound from "./Components/NotFound";
import CardDetails from "./Components/card/CardDetails.js";
import Cart from "./Components/cart/Cart";
import FallbackError from "./FallbackError";
import { getProducts } from "./helper/api-helper";

const App = () => {
  const [singleProd, setSingleProd] = useState([]);
  const [products, setProducts] = useState([]);
  const [formDetails, setFormDetails] = useState([]);

  useEffect(() => {
    if (!formDetails.length) {
      getProducts().then((data) => setProducts([...data, ...formDetails]));
    } else {
      getProducts().then((data) => setProducts(data));
    }
  }, []);

  return (
    <>
      <div>
        <FallbackError>
          <Navbar />
          <Switch>
            <Route path="/admin/:email?">
              <NewItem
                products={products}
                setProducts={setProducts}
                formDetails={formDetails}
                setFormDetails={setFormDetails}
              />
            </Route>

            <Route path="/shop" exact>
              <Header products={products} setProducts={setProducts} />
            </Route>

            <Route path="/shop/cardDetails/:idOfProd" exact>
              <CardDetails
                singleProd={singleProd}
                setSingleProd={setSingleProd}
                products={products}
                setProducts={setProducts}
              />
            </Route>

            <Route path="/" exact>
              <Hero /> <Header products={products} setProducts={setProducts} />
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
