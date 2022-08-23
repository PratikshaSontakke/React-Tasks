import { useParams } from "react-router-dom";
import React from "react";
import ItemList from "./Items";
const CardDetails=()=>{
    const param=useParams()
    var productInfo=ItemList[param.idOfProd]
    console.log(productInfo.image)
    return(
        <>
      <div style={{marginTop:"12px",display:"flex"}}>
      <div style={{marginLeft:"12px"}}>
      <img src={productInfo.image} width="300%" height="50vh" alt=""/>
      <h1 >{productInfo.title}</h1>
      <h2 >{productInfo.desc}</h2>
      <h3 >{productInfo.price}</h3>
      
        </div>
      </div>
        </>
    )
}
export default CardDetails;