import { Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import InstructorRegister from './components/Registration'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path='/register'>
        <InstructorRegister />
      </Route>
    </div>
  );
}

export default App;
