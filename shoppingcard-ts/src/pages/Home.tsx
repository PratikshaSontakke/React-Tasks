import React from "react";
import Hero from "../components/heroimg/Hero";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import { Dispatch, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../redux/store";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default Home;
