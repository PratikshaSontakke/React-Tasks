import React from 'react';
import {useState} from 'react';

const Wishlist = () => {
  const [buttonText, setButtonText] = useState('Wishlist');

  function handleClick() {
    setButtonText('Added to wishlist');
  }

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default Wishlist;


