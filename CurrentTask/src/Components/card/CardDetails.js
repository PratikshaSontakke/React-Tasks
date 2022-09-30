import React, { useState, useEffect } from "react";
import { getSingleProduct } from "../../helper/api-helper";

const CardDetails = (props) => {
  const { products, setProducts } = props;
  const [singleProd, setSingleProd] = useState([]);

  useEffect(() => {
    getSingleProduct().then((data) => setSingleProd(data));
  }, []);

  return (
    <>
      <div style={{ marginTop: "12px", display: "flex" }}>
        <div style={{ marginLeft: "12px" }}>
          <img src={singleProd.image} height="auto" max-width="50%" alt="" />
          <h2> Title: {singleProd.title}</h2>
          <h5>Desc: {singleProd.description}</h5>
          <h5> Price: {singleProd.price}</h5>
          <h5> Category: {singleProd.category}</h5>
        </div>
      </div>
    </>
  );
};
export default CardDetails;
