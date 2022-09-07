import React, { useState, useEffect } from "react";
import { getSingleProduct } from "../../helper/api-helper";

const CardDetails = (props) => {
  // const param = useParams();
  //const productInfo = ItemList[param.idOfProd];

  const [singleProd, setSingleProd] = useState([]);

  useEffect(() => {
    getSingleProduct().then((data) => setSingleProd(data));
  }, []);

  return (
    <>
      <div style={{ marginTop: "12px", display: "flex" }}>
        <div style={{ marginLeft: "12px" }}>
          <img src={singleProd.image} height="auto" max-width="50%" alt="" />
          <h1>{singleProd.title}</h1>
          <h2>{singleProd.desc}</h2>
          <h3>{singleProd.price}</h3>
        </div>
      </div>
    </>
  );
};
export default CardDetails;
