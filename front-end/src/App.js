import { Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Register from './components/Registration'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path='/register'>
        <Register />
      </Route>
    </div>
  );
}

export default App;
