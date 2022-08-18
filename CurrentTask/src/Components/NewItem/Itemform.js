import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation} from "react-router-dom";
import ItemList from "../Items";
import "./Itemform.css";

const ItemForm = () => {
  const testInputRef = useRef("React Test");
  const input = useParams();

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [value, setValue] = useState();

  console.log(input);
  useEffect(() => {
  setValue( input.email);
  // String(new URLSearchParams(new URL(window.location.href).search).get("q"))
  // );
    }, [input.email]);

    const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const imageChangehandler = (event) => {
    var fread = new FileReader();
    fread.readAsDataURL(event.target.files[0]);
    fread.onloadend = function(event) {
      setEnteredImage(event.target.result);
    };
  };


  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    ItemList.push({
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      desc: enteredDesc,
    });

    //console.log(testInputRef.current.value)

    if (input.email === undefined) 
    {
      testInputRef.current.value = "React Test";
      //setValue("React Test")
    } 
    else {
      testInputRef.current.value = input.email;
    }
    //console.log(testInputRef.current.value);
    alert("Item added to home and shop");

    if (
      enteredTitle.trim() === "" ||
      enteredImage.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredPrice.trim() === ""
    ) {
      alert("Form fields cannot be empty");
      return;
    }

    //console.log(testInputRef.current.value);

    //console.log(itemData);
    //props.onSaveItemData(itemData);
    setEnteredTitle("");
    setEnteredImage("");
    setEnteredDesc("");
    setEnteredPrice("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label> Image </label>
            <input
              type="file"
              accept="image/*"
              //value={enteredImage}
              onChange={imageChangehandler}
            />
            {/* <img id="output" /> */}
          </div>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              //value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              //value={enteredPrice}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Description</label>
            <input
              type="text"
              // value={enteredDesc}
              onChange={descChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Item</button>
</div>
          <div className="new-expense__control">
            <input type="text" value={value} ref={testInputRef} disabled></input>
          </div>
        
      </form>
      {enteredImage && <img src={enteredImage} alt="" height="100" width="100" /> }

    </>
  );
};

export default ItemForm;
