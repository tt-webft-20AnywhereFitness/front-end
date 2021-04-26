import { Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Choice from "./components/Choice";
import "./App.css";
import InstructorRegister from "./components/Registration";
import ClientRegister from "./components/ClientRegister";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/register">
        <InstructorRegister />
      </Route>
      <Route path="/clientregister">
        <ClientRegister />
      </Route>
      <Route exact path="/choice" component={Choice} />
    </div>
  );
}

export default App;
