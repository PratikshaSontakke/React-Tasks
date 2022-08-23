import React, {useState} from "react";
import { NavLink } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
var Card = (props) => {
  var idOfProd = props.idOfItemInArr;
  const [buttonText, setButtonText] = useState('Add to cart');

  return (
    <>
      <div className="card">
        <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />

        {props.dltIcon === true ? (
          <svg
            onClick={() => {
              props.deleteFromscreen(props.uniqProductId);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-x-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          ""
        )}

        <NavLink
          to={"shop/CardDetails/" + idOfProd}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div>
            <img src={props.item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Title: {props.item.title}</h5>
              <h5 className="size"> Description: {props.item.desc}</h5>
              <h5 className="cost"> Price: {props.item.price}</h5>
            </div>
          </div>
        </NavLink>

        {/* <div>
         // onClick={() => {
        // props.deleteFunc(props.item);
          //}}
        >
          {/* <img src={props.item.image} className="card-img-top" alt="..." />
          
          <div className="card-body">
            <h5 className="card-title">{props.item.title}</h5>
            <h5 className="desc">{props.item.desc}</h5>
            <h5 className="price">{props.item.price}</h5>
          </div>
        </div> */}

        
        <button
          onClick={() => {
            props.addedToCart(props.item);
            setButtonText('Added to cart');
          }}
        > {buttonText}
        </button>
      </div>
    </>
  );
};

export default Card;
