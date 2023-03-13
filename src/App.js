import "./App.css";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <h1>Click on the meal to see the further details about it</h1>
    
      <Meals />
    </div>
  );
}

export default App;
