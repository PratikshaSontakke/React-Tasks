import React from "react";
import ItemForm from "./Itemform";
import "./NewItem.css";

const NewItem = (props) => {
  const { products, setProducts } = props;
  const { formDetails, setFormDetails } = props;

  const onSaveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      id: Math.random().toString(),
    };
    //console.log(itemData);
    props.onAddItem(itemData);
  };

  return (
    <div className="new-expense">
      <ItemForm
        products={products}
        setProducts={setProducts}
        onSaveItemData={onSaveItemDataHandler}
        formDetails={formDetails}
        setFormDetails={setFormDetails}
      />
    </div>
  );
};

export default NewItem;
