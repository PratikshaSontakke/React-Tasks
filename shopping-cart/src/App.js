import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/shop" exact element={<Products />}></Route>
        <Route path="/shop/:id" exact element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
