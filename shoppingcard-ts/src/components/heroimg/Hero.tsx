import React, { useEffect, Dispatch } from "react";
import "./Hero.css";
import img from "../../images/shop.gif";
import { getProducts } from "../../redux/actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";

function Hero() {
  const dispatch: Dispatch<any> = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <div>
      <div className="hero-image">
        <img src={img} alt="" width="100%" height="500" />
        <div className="hero-text">
          <h1> Treat Yourself :) </h1>
          <p>
            Girls have always wanted to be pretty, even in Egyptian times.
            Cleopatra wore all the eyeliner, you know...!!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
