import React from 'react';
import "./Hero.css";
import Background from './background.jpg';
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div>
    <img src= {Background} width="1500" height="500"/>
    
    
    <div class="hero-image">
    <div class="hero-text">
    
      <h1> Treat Yourself :) </h1>
      <p>Girls have always wanted to be pretty, even in Egyptian times. Cleopatra wore all the eyeliner, you know...!!!</p>
       <Link to='/admin'> <button class= "button-1"> Add new item </button> </Link>
      
    </div>
  </div></div>
  )
}

export default Hero;