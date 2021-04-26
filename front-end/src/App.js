import { Route } from "react-router-dom";
import Home from "./components/Home";
import Choice from "./components/Choice";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/choice" component={Choice} />
    </div>
  );
}

export default App;
