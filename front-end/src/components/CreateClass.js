import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const initialValues = {
  class_name: "",
  type: "",
  startTime: "",
  duration: "",
  intensity: "",
  location: "",
  registered_clients:"",
  size: "",
};

const CreateClass = (props) => {
  const [addClass, setAddClass] = useState(initialValues);
  const [createClass, setCreateClass] = useState([]);
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    const newClass = {
      class_name: addClass.class_name,
      type: addClass.type,
      startTime: addClass.startTime,
      duration: addClass.duration,
      intensity: addClass.intensity,
      location: addClass.location,
      registered_clients: addClass.registered_clients,
      size: addClass.size,
      instructor_id: localStorage.getItem("user_id"),
    };
    console.log(newClass);
    axios
    .post("https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes", createClass)
    .then(res=> {
        setCreateClass([res.data, ...createClass])
        push("/clientpage")
    })
    .catch(err => {
        console.log(err);
    });
  };

  // const submitHandler = (e) => {
  //   axios
  //     .post("https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes", addClass)
  //     .then((res) => {
  //       setCreateClass([res.data, ...createClass]);
  //       push("/clientpage");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //Error message and component
  const required = "This field is required.";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
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
        <form className="addClassFrom" onSubmit={handleSubmit(submit)}>
          <label>
            Class Name:
            <input
              type="text"
              {...register("class_name", { required: true, minLength: 2 })}
              name="class_name"
              value={addClass.class_name}
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
              name="intensity"
              value={addClass.intensity}
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
