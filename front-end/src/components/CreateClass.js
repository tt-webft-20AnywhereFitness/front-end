import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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
    // axiosWithAuth()
    // .post("", createClass)
    // .then(res=> {
    //     setCreateClass([res.data, ...createClass])
    //     push("/myclasses")
    // })
    // .catch(err => {
    //     console.log(err);
    // });
  };

  const submitHandler = (e) => {
    submit();
    setAddClass(initialValues);
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

  //Error message and component
  const required = "This field is required.";

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
        <form className="addClassFrom" onSubmit={submitHandler}>
          <label>
            Class Name:
            <input
              type="text"
              name="name"
              value={addClass.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Class Type:
            <input
              type="text"
              name="type"
              value={addClass.type}
              onChange={handleChange}
            />
          </label>
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
