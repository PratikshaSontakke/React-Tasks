import React from 'react';

import ExpenseForm from './Itemform';
import './NewItem.css';

const NewItem = (props) => {
const onSaveItemDataHandler=(enteredItemData)=>{
  const itemData={
    ...enteredItemData, 
    id:Math.random().toString()
  }
  //console.log(itemData);
  props.onAddItem(itemData);
};

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveItemData={onSaveItemDataHandler}/>
    </div>
  );
};

export default NewItem;