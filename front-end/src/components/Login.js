// username: BobbieSue
// email: BOB@gmail.com
// password: RS84JFAFQ3JF9Q3NL

import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        localStorage.setItem("role_id", res.data.role_id);

        if (localStorage.getItem("token") && res.data.role_id === 2) {
          push("/instructor-page");
        } else if (localStorage.getItem("token") && res.data.role_id === 1) {
          push("/client-page");
        } else {
          alert("Invalid Login.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setCredentials(initialValues);
  };

  return (
    <div>
      <div className="login">
        <form className="loginForm" onSubmit={submitHandler}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
