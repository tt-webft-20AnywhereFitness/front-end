import { Route } from "react-router-dom";
import Home from "./components/Home";
import Choice from "./components/Choice";
import Nav from "./components/Nav";
import "./App.css";
import Register from './components/Registration'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />

      <Route path='/register'>
        <Register />
      </Route>

      <Route exact path="/choice" component={Choice} />

    </div>
  );
}

export default App;
