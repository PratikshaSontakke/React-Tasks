import './App.css';
import CreateTodo from "./components/CreateTodo"
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="outer-box"> 
    
    <CreateTodo/> 
    <Todolist/> </div>
    
  );
}

export default App;
