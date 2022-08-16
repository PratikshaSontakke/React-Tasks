import React, { useState, useRef } from "react";
import "./Itemform.css";

const ItemForm = (props) => {
  const testInputRef = useRef("React test");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const imageChangehandler = (event) => {
    setEnteredImage(event.target.value);
          }

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() === "" ||
      enteredImage.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredPrice.trim() === ""
    ) {
      alert("Form fields cannot be empty");
      return;
    }
    console.log(testInputRef.current.value);
    const testReact = testInputRef.current.value;

    const itemData = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      desc: enteredDesc,
      test: testReact,
    };

    //console.log(itemData);
    props.onSaveItemData(itemData);
    setEnteredTitle("");
    setEnteredImage("");
    setEnteredDesc("");
    setEnteredPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Image </label>
          <input
            type="file"
            accept="image/*"
            value={enteredImage}
            onChange={imageChangehandler}
          />
          <img id="output"/>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input type="text" value={enteredDesc} onChange={descChangeHandler} />
        </div>
      </div>
      <div className="new-expense__control">
        <button type="submit">Add Item</button>

        <div className="new-expense__control">
          <input
            type="text"
            value="React test"
            readOnly
            disabled
            ref={testInputRef}
          ></input>
        </div>
      </div>
    </form>
  );
};

export default ItemForm;
