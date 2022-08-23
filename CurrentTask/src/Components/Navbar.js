import "./Head.css";
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
       <div className="header">
       <h1> Cosmetics </h1> 
          <div className="topnav" id="myTopnav">
        <Link to="/" className="active">
          {" "}
          Home{" "}
        </Link> 
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
        <i className="fa fa-bars"></i>

                
      </div>
        
        </div>
    </>
  );
}
export default Navbar;
