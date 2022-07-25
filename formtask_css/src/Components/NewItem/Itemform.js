import React, { useState } from "react";

import "./Itemform.css";

const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredImage, setEnteredImage] = useState("");
  //const [enteredPrice, setEnteredPrice]= useState('');
  //const [enteredDesc, setEnteredDesc]= useState('');
  //Isvalid state is responsible to check field validity
  const [isValid, setIsValid] = useState(true);

  const [fieldClear, setFieldClear] = useState({
    title: "",
    desc: "",
    price: "",
  });

  //const fieldClearHandler=(event)=>{

  //event.preventDefault();

  //}

  const titleChangeHandler = (event) => {
    setFieldClear(event.target.value);
    //setFieldClear(fieldClear.title);
  };

  const imageChangehandler = (event) => {
    //This if block is responsible to re-set the image field to transperant color
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredImage(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setFieldClear(event.target.value);
    //setEnteredPrice(event.target.value);
  };

  const descChangeHandler = (event) => {
    setFieldClear(event.target.value);
    //setEnteredDesc(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      title: fieldClear,
      image: enteredImage,
      price: fieldClear,
      desc: fieldClear,
    };
    //Avoids empty field of image
    if (enteredImage.trim().length === 0) {
      setIsValid(false);
      return;
    }

    console.log(itemData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{ color: !isValid ? "red" : "black" }}> Image </label>
          <input
            style={{
              borderColor: !isValid ? "red" : "black",
              background: !isValid ? "salmon" : "transparent",
            }}
            type="file"
            value={enteredImage}
            onChange={imageChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={fieldClear.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={fieldClear.price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            value={fieldClear.desc}
            onChange={descChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <button type="submit">Add Item</button>

        <div>
          <button
            onClick={() => {
              setFieldClear(() => {
                return {
                  title: "",
                  desc: "",
                  price: "",
                };
              });
            }}
          >
            {" "}
            Clear{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
