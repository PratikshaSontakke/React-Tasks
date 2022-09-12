import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Itemform.css";

const ItemForm = (props) => {
  const testInputRef = useRef("React Test");
  const input = useParams();
  const { products, setProducts } = props;
  const { setFormDetails } = props;
  console.log(props);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [value, setValue] = useState();

  //logic for disabled field where it takes user's email
  useEffect(() => {
    setValue(input.email);
  }, [input.email]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const imageChangehandler = (event) => {
    var fread = new FileReader();
    fread.readAsDataURL(event.target.files[0]);
    fread.onloadend = function (event) {
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

    const obj = {
      id: products.length + 1,
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      desc: enteredDesc,
    };

    if (
      enteredTitle.trim() === "" ||
      enteredImage.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredPrice.trim() === ""
    ) {
      alert("Form fields cannot be empty");
      return;
    }

    if (input.email === undefined) {
      testInputRef.current.value = "React Test";
    } else {
      testInputRef.current.value = input.email;
    }
    setFormDetails([obj]);
    setProducts([...products, obj]);
    alert("Item added to home and shop");

    // if (
    //   enteredTitle.trim() === "" ||
    //   enteredImage.trim() === "" ||
    //   enteredDesc.trim() === "" ||
    //   enteredPrice.trim() === ""
    // ) {
    //   alert("Form fields cannot be empty");
    //   return;
    // }

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
            <input type="file" accept="image/*" onChange={imageChangehandler} />
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
            <input type="text" onChange={descChangeHandler} />
          </div>
        </div>

        <div className="new-expense__control">
          <button type="submit">Add Item</button>
        </div>

        <div className="new-expense__control">
          <input type="text" value={value} ref={testInputRef} disabled></input>
        </div>
      </form>
      <img src={enteredImage} alt="" height="100" width="100" />
    </>
  );
};

export default ItemForm;
