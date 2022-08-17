import "./Head.css";
import React from "react";
import Header from "./Header";
import { Route, Link } from "react-router-dom";


function Navbar() {
  return (
    <>
       <div className="header">
          <h1> Cosmetics </h1>
          <div class="topnav" id="myTopnav">
        <Link to="/" class="active">
          {" "}
          Home{" "}
        </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
        <i class="fa fa-bars"></i>

        



         
      </div>
        
        </div>
    </>
  );
}
export default Navbar;
