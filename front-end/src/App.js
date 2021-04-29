import { Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Choice from "./components/Choice";
import "./App.css";
import InstructorRegister from "./components/Registration";
import ClientRegister from "./components/ClientRegister";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ClientPage from "./components/ClientPage";
import InstructorPage from "./components/InstructorPage";
import CreateClass from "./components/CreateClass";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/register" component={InstructorRegister}/>
      <Route path="/clientregister" component={ClientRegister}/>
      <Route path="/login" component={Login}/>
      <Route exact path="/choice" component={Choice} />
      <PrivateRoute exact path ="/client-page" component={ClientPage}/>
      <PrivateRoute exact path ="/instructor-page" component={InstructorPage}/>
      <PrivateRoute exact path = "/add-class" component={CreateClass}/>
    </div>
  );
}

export default App;
