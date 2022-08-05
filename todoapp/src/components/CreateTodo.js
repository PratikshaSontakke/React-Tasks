import React, { useState, useEffect } from "react";
import Todolist from "./Todolist";
import swal from "sweetalert";
//import "../styles/Styles.css";

function Createtodo() {
  //Two useStates for title and done property

  const [todo, setTodo] = useState({ title: "", done: false });
  const [todoArr, setTodoArr] = useState([]);

  // to get todo's from local storage
  let todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  // function for change in adding todo in the list

  const onChange = (event) => {
    //destructuring objects in an event

    let { value } = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setTodo(obj);
  };

  //Function which will work when add todo will be clicked
  const createTodo = (event) => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "addTodo") {
      if (todo.title !== "") {
        todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo({ title: "", done: false });
      } else {
        swal("Please write todo first", "error");
      }
    }
  };

  //for making done property true
  const completeTodo = (i) => {
    if (todos[i]["done"] !== true) {
      todos[i]["done"] = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
      swal("Good job", "Todo completed", "sucess");
    }
  };
  //function for deleting todo
  const deleteTodo = (i) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        todos.splice(i, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodoArr(todos);
      }
    });
  };

  useEffect(() => {
    console.log("inside effect");

    return () => {
      console.log("inside cleanup");
    };
  }, []);

  return (
    <>
      <div className="box">
        <div className="text-end">
          <h2> Add ToDo!!!</h2>
        </div>

        <div className="text-addTodo">
          <input
            type="text"
            name="todo"
            placeholder="Write here..."
            value={todo.title}
            onKeyPress={createTodo}
            onChange={onChange}
          />
          <button
            className="btn-addTodo"
            type="button"
            name="addTodo"
            onClick={createTodo}
          >
            Add ToDo
          </button>
        </div>
      </div>
      <Todolist
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default Createtodo;
