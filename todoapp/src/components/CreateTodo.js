import React, {useState} from "react";
import "../styles/Styles.css";
//
function Createtodo() {
//Two useStates for title and done property

const[todo, setTodo]=useState({title: "",  done: false})
const[todoArr, setTodoArr]= useState([])

// to get todo's from local storage

let todos=localStorage.hasOwnProperty("todos")? JSON.parse(localStorage.getItem("todos")):[]

// function for change in adding todo in the list

const onChange(event)=>{
    //destructuring objects in an event

    let {value}=event.target 
    let obj={}
    obj["title"]=value
    obj["done"]= false
    setTodo(obj)
}

//Function which will work when add todo will be clicked
const createTodo(event)=>{}
  return (
    <div className="box">
      <div className="text-end">
        <h2> Add ToDo!!!</h2>
      </div>

      <div className="text-addTodo">
        <input type="text" name="todo" placeholder="Write here..." onChange={onChange}/>
        <button className="btn-addTodo" type="button" name="addTodo">
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default Createtodo;
