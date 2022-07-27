import React, { useState } from "react";
import { PRIORITIES_KEY_VALUE_MAP, PRIORITIES_OPTIONS } from "../constants";

const TodoForm = (props) => {
  const { onAddTodo } = props;
  const [todoDetails, setTodoDetails] = useState({
    title: "",
    description: "",
    priority: PRIORITIES_KEY_VALUE_MAP.HIGH.id,
    done: false
  });

  const onFieldChange = (e) => {
    const { id, value } = e.target;
    setTodoDetails({ ...todoDetails, [id]: value });
  };

  return (
    <div className={"flex_col"}>
      <div className={"mt-10"}>
        <input
          placeholder={"Enter todo title"}
          id={"title"}
          onChange={onFieldChange}
          value={todoDetails.title || ""}
        />
      </div>
      <div className={"mt-10"}>
        <textarea
          id={"description"}
          placeholder={"Enter description"}
          onChange={onFieldChange}
          value={todoDetails.description || ""}
        />
      </div>
      <div className={"mt-10"}>
        <select
          id={"priority"}
          onChange={onFieldChange}
          value={todoDetails.priority || 1}
        >
          {PRIORITIES_OPTIONS.map((i) => {
            return (
              <option value={i.id} key={i.id}>
                {i.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className={"mt-10"}>
        <button
          onClick={() => {
            onAddTodo(todoDetails);
            setTodoDetails({});
          }}
          className={"btn"}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
