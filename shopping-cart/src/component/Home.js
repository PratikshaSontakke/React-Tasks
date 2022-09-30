import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/bg2.jpg"
          className="card-img"
          alt="..."
          height="750px"
        />
        <div className="card-img-overlay">
          <h5 className="card-title display-5 fw-bolder ">New arrivals</h5>
          <p className="card-text">CHECKOUT ALL THE NEW ARRIVALS</p>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}

export default Home;
