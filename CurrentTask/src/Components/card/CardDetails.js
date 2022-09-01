import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ItemList from "../Items";

const CardDetails = () => {
  const param = useParams();
  const productInfo = ItemList[param.idOfProd];

  return (
    <>
      <div style={{ marginTop: "12px", display: "flex" }}>
        <div style={{ marginLeft: "12px" }}>
          <img src={productInfo.image} height="auto" max-width="50%" alt="" />
          <h1>{productInfo.title}</h1>
          <h2>{productInfo.desc}</h2>
          <h3>{productInfo.price}</h3>
        </div>
      </div>
    </>
  );
};
export default CardDetails;
