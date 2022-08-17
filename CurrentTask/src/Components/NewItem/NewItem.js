import React from 'react';
import ItemForm from './Itemform';
import './NewItem.css';
import {Route} from "react-router-dom";

const NewItem = (props) => {
const onSaveItemDataHandler=(enteredItemData)=>{
  const itemData={
    ...enteredItemData,   
    id:Math.random().toString()
  };
  //console.log(itemData);
  props.onAddItem(itemData);
};

  return (
    <div className='new-expense'>
      <ItemForm onSaveItemData={onSaveItemDataHandler}/>  
    </div>
  );
};

export default NewItem;