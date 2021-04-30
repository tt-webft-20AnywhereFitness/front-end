import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("role_id");
  };

  const [loggedIn, setloggedIn] = useState(localStorage.getItem("token"));
  const [roleId, setroleId] = useState(localStorage.getItem("role_id"));

  return (
    <nav className="navheader">
      <h1>
        Anywhere
        <strong className="fit"> Fitness</strong>
      </h1>
      <div className="links">
        {!loggedIn ? (
          <>
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </>
        ) : (
          <>
            {roleId === "1" && (
              <>
                <NavLink className="link" to="/client-page">
                  Home
                </NavLink>
                <NavLink className="link" to="/classes">
                  Classes
                </NavLink>
              </>
            )}
            {roleId === "2" && (
              <>
                <NavLink className="link" to="/instructor-page">
                  Home
                </NavLink>
                <NavLink className="link" to="/add-class">
                  Add Class
                </NavLink>
              </>
            )}
            <a onClick={signOut} class="link logOut" href="/">
              Sign Out
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
