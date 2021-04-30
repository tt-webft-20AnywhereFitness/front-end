import React, { useState } from "react";
import EditClass from "../EditClass";

const Class = (props) => {
  const { classNew, handleDelete, handleFetch } = props;
  // const [thisClass, setThisClass] = useState(null);
  // const [myClasses, setMyClasses] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("role_id"));
  const [toggleEdit, setToggleEdit] = useState(false);

  // const addToMyClasses = newClass => {
  //     setMyClasses([
  //         ...myClasses,
  //         newClass
  //     ]);
  // };

  // const joinClass = () => {
  //     addToMyClasses(thisClass);
  // };

  const toggler = () => {
    setToggleEdit(!toggleEdit);
  };

  const deleter = (e) => {
    e.preventDefault();
    handleDelete(classNew.class_id);
  };

  const Panel = () => {
    return (
      <div className="classCardButton">
        <button onClick={toggler}>{toggleEdit ? "Cancel" : "Edit"}</button>
        <button onClick={deleter}>Delete</button>
      </div>
    );
  };

  return (
    <div>
      <div className="classCard">
        <h2>{classNew.class_name}</h2>
        <h3>Type: {classNew.type}</h3>
        <h3>Start Time: {classNew.startTime}</h3>
        <h3>Duration: {classNew.duration} minutes</h3>
        <h3>Intensity: {classNew.intensity}</h3>
        <h3>Location: {classNew.location}</h3>
        <h3>Class Size: {classNew.size}</h3>
        {user === "2" ? <Panel /> : ""}
        {toggleEdit ? (
          <EditClass
            class={classNew}
            hanldeFetch={handleFetch}
            toggler={toggler}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Class;
