import React from "react";
import { PRIORITIES_KEY_MAP } from "../constants";

const TodoItem = (props) => {
  const { todo = {}, onRemoveTodo } = props;
  const { title, description, priority } = todo;
  return (
    <div className={"flex"} style={{ justifyContent: "space-between" }}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{PRIORITIES_KEY_MAP[priority]}</div>
      <div>
        <span
          onClick={() => {
            onRemoveTodo(todo);
          }}
          className={"remove"}
        >
          X
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
