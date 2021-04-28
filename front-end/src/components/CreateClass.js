import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const initialValues = {
  name: "",
  type: "",
  startTime: "",
  duration: "",
  intensityLevel: "",
  location: "",
  maxSize: "",
};

const CreateClass = (props) => {
  const [addClass, setAddClass] = useState(initialValues);
  const [createClass, setCreateClass] = useState([]);
  const { push } = useHistory();

  const submit = () => {
    const newClass = {
      name: addClass.name,
      type: addClass.type,
      startTime: addClass.startTime,
      duration: addClass.duration,
      intensityLevel: addClass.intensityLevel,
      location: addClass.location,
      maxSize: addClass.maxSize,
    };

    console.log(newClass);
    axiosWithAuth()
      .post("", createClass)
      .then((res) => {
        setCreateClass([res.data, ...createClass]);
        push("/myclasses");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Error message and component
  const required = "This field is required.";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submit();
    setAddClass(initialValues);
  };

  const handleChange = (e) =>
    setAddClass({
      ...addClass,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="addClass">
      <div className="textContainer">
        <h2>Add a Class!</h2>
        <form className="addClassFrom" onSubmit={handleSubmit(submitHandler)}>
          <label>
            Class Name:
            <input
              type="text"
              {...register("name", { required: true, minLength: 2 })}
              name="name"
              value={addClass.name}
              onChange={handleChange}
            />
          </label>
          {errors.name &&
            errors.name.type === "required" &&
            errorMessage(required)}
          <label>
            Class Type:
            <input
              type="text"
              {...register("type", { required: true, minLength: 2 })}
              name="type"
              value={addClass.type}
              onChange={handleChange}
            />
          </label>
          {errors.type &&
            errors.type.type === "required" &&
            errorMessage(required)}
          <label>
            Start Time:
            <input
              type="time"
              name="startTime"
              value={addClass.startTime}
              onChange={handleChange}
            />
          </label>
          <label>
            Duration (in minutes):
            <input
              type="number"
              name="duration"
              value={addClass.duration}
              onChange={handleChange}
            />
          </label>
          <label>
            Intensity Level (between 1-3):
            <input
              type="number"
              name="intensityLevel"
              value={addClass.intensityLevel}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={addClass.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Max Class Size:
            <input
              type="number"
              name="maxSize"
              value={addClass.maxSize}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Class</button>
        </form>
      </div>
    </div>
  );
};
export default CreateClass;
