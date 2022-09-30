import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
function InputField({ todo, setTodo, handleAdd }: Props) {
  return (
    <>
      <form className="form" onSubmit={(e) => handleAdd(e)}>
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add your todo here..."
          className="input_box"
        />
        <button className="input_submit" type="submit">
          {" "}
          Add todo
        </button>
      </form>
    </>
  );
}

export default InputField;
