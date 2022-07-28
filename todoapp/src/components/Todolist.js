import React from "react";
import "../styles/Styles.css";

function Todolist(props) {
  const { completeTodo, deleteTodo } = props;
  let todoArr =
    props.todoArr.length > 0
      ? props.todoArr
      : JSON.parse(localStorage.getItem("todos"));
  return (
    <div className="todo-list">
      <div style={{ masHeight: "210px", overflowY: "auto" }}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {todoArr && todoArr.length > 0
            ? todoArr.map((el, i) => (
                <li key={i}>
                  <div className={el["done"] ? "line-through" : null}>
                    {" "}
                    {el.title}{" "}
                  </div>
                  <div className="icon">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "50px",
                      }}
                    >
                    <button> Edit </button>
                      <i
                        title="Complete"
                        onClick={() => completeTodo(i)}
                        className={`fas fa-check-circle pointer ${
                          el["done"] ? "green" : "blue"
                        }`}
                      />
                      
                      
                      <i title="Delete" onClick={()=> deleteTodo(i)} className="fas fa-trash-alt pointer" />
                    
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
