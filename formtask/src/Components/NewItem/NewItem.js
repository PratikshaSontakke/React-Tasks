import React from 'react';

import ItemForm from './Itemform';
import './NewItem.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ItemForm />
    </div>
  );
};

export default NewExpense;