import React, { useState } from "react";

import "./Itemform.css";

const ExpenseForm = () => 
{
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredImage, setEnteredImage]= useState('');
  const [enteredPrice, setEnteredPrice]= useState('');
  const [enteredDesc, setEnteredDesc]= useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const imageChangehandler= (event) => {

    setEnteredImage(event.target.value);
    };

  const priceChangeHandler= (event) => {
    setEnteredPrice(event.target.value);
  };

  const descChangeHandler= (event) =>{
    setEnteredDesc(event.target.value);
  };
  const submitHandler = (event) =>{

    event.preventDefault();

    const itemData={
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      desc: enteredDesc
    };
    console.log(itemData);
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Image </label>
          <input type="file" onChange={imageChangehandler}/>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input type="text" onChange={descChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__control">
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};
};
export default ExpenseForm;
