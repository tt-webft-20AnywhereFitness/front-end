import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";  
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const initialValues = {
  class_name: "",
  type: "",
  instructor_id: localStorage.getItem("user_id"),
  startTime: "",
  duration: "",
  intensity: "",
  location: "",
  registered_clients: 0,
  size: "",
};

const CreateClass = (props) => {
  const [addClass, setAddClass] = useState(initialValues);
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (e) => {
    axiosWithAuth()
      .post("/classes", addClass)
      .then((res) => {
        console.log(res);
        alert("Class Created!");
        setAddClass(initialValues);
        push("/instructor-page");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Error message and component
  const required = "This field is required.";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const handleChange = (e) => {
    if(e.target.name === "size"){
      let num = (Number(e.target.value));
      setAddClass({
        ...addClass,
        size: parseInt(num)
      })
      return
    }
    setAddClass({
      ...addClass,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className = 'page'>
    <div className="addClass">
      <div className="textContainer">
        <h2>Add a Class!</h2>
        <form className="addClassFrom" onSubmit={handleSubmit(submitHandler)}>
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
          {errors.class_name &&
            errors.class_name.type === "required" &&
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
            Intensity (between 1-3):
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
            Class Size:
            <input
              type="number"
              name="size"
              value={addClass.size}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Class</button>
        </form>
      </div>
    </div>
    </div>
  );
};
export default CreateClass;
