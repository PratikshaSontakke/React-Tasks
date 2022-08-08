import React from 'react';
import Header from "./Components/Header";
import NewItem from "./Components/NewItem/NewItem";

import "./index.css";
//import ItemList from "./Components/Items";
function App() {

  const addItemHandler = item =>{
    console.log('In app.js');
    console.log(item);
  };
  return (
    <>
      <Header/>
      <NewItem onAddItem={addItemHandler}/>
      
      
    </>
  );
}
export default App;