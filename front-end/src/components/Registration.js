import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const initialValues = {
  username: "",
  password: "",
  email: "",
  bio: "",
  certifications: "",
  remaining_classes: 0,
  role_id: 2,
};

const InstructorRegister = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    bio: "",
    certifications: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { push } = useHistory();

  //Error message and component
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
        credentials.role_id = 2;
        console.log("REGISTER SUCCESS", res);
        localStorage.setItem("token", res.data.token);
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
        <h2 className="registerHeader">Instructors Register Today</h2>

        <form className="registerFrom" onSubmit={handleSubmit(submitHandler)}>
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
              type="text"
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
          <label>
            Certifications:
            <select
              name="certifications"
              value={credentials.certifications}
              onChange={handleChange}
            >
              <option value="Yoga">Yoga</option>
              <option value="Tae Bo">Tae Bo</option>
              <option value="Jazzercise">Jazzercise</option>
              <option value="Zumba">Zumba</option>
              <option value="Pumping Iron">Pumping Iron</option>
            </select>
          </label>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default InstructorRegister;
