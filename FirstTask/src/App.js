import "./App.css";
//import Items from "./Components/Items";
import Header from "./Components/Header";
import ItemArr from "./Components/ItemArr";

function App() {
  return (
    <div>
      <div className="App">
      <Header> </Header>{" "}
      </div>
      <br />
      <ItemArr items={ItemArr} />
    </div>
  );
}

export default App;
