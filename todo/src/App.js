import { useState } from "react";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";
//import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const onAddTodo = (todo) => setTodos([...todos, todo]);
  const onRemoveTodo = (todo) =>
    setTodos(todos.filter((i) => i.title !== todo.title));
  return (
    <div className="App">
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}
