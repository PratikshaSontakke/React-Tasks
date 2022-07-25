import React from 'react';

import ExpenseForm from './Itemform';
import './NewItem.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;