import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
  email: "",
  remaining_classes: 0,
  role_id: 1,
};

const ClientRegister = (props) => {
  const [credentials, setCredentials] = useState(initialValues);
  const { push } = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Error component and message
  const required = "This field is required.";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const submitHandler = (e) => {
    axios
      .post(
        "https://anywhere-fitness-app-tt-20.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        credentials.remaining_classes = 0;
        credentials.role_id = 1;
        console.log("REGISTER SUCCESS", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        push("/login");
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
        <form
          className="registerFrom"
          action="post"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label>
            Username:
            <input
              type="text"
              {...register("username", { required: true, minLength: 2 })}
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          {errors.username &&
            errors.username.type === "required" &&
            errorMessage(required)}
          <label>
            Password:
            <input
              type="password"
              {...register("password", {
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
              })}
              name="password"
              value={credentials.password}
              onChange={handleChange}
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
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              name="email"
              value={credentials.email}
              onChange={handleChange}
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
