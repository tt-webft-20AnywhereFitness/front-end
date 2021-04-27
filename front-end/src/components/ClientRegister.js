import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
  email: "",
  bio: "",
  accountType: "Client",
};

const ClientRegister = (props) => {
  const [credentials, setCredentials] = useState(initialValues);
  // const { push } = useHistory();

  const { register, handleSubmit, errors } = useForm();

  //Error component and messages
  const required = "This field is required.";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", credentials)
      .then((res) => {
        console.log("REGISTER SUCCESS", res);
        // localStorage(setItem("token", res.data.token))
        // push("/login")
      })
      .catch((err) => {
        console.log("REGISTER FAILURE", err);
      });
    setCredentials(initialValues);
  };

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="register">
      <div className="textContainer">
        <h2 className="registerHeader">Clients Register Today</h2>
        <form className="registerFrom" onSubmit={handleSubmit(submitHandler)}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              ref={...register({ required: true, minLength: 2 })}
            />
          </label>
          {errors.username &&
            errors.username.type === "required" &&
            errorMessage(required)}
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              ref={register({
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
              })}
            />
          </label>
          {errors.password &&
            errors.password.type === "required" &&
            errorMessage(required)}
          {errors.password &&
            errors.password.type === "pattern" &&
            errorMessage(
              "Password must be eight characters long, with one uppercase letter, one lowercase letter, one number, and one special character."
            )}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          {errors.email &&
            errors.email.type === "required" &&
            errorMessage(required)}
          <label>
            Bio:
            <input
              type="text"
              name="bio"
              value={credentials.bio}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default ClientRegister;
