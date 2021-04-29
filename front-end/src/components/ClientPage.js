import React, { useState, useEffect } from "react";
import Classes from "./Classes/Classes";
import axios from "axios";

/**
class_id: 1
class_name: "Namaste In Bed"
duration: 45
instructor_id: 1
intensity: 3
location: "24 Hour Fitness"
registered_clients: "0"
size: "12"
startTime: "6"
 */

const ClientPage = (props) => {
  const [gymClass, setGymClass] = useState([]);
  const [gymClassFull, setGymClassFull] = useState([]);

  useEffect(() => {
    const getClasses = () => {
      axios
        .get("https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes")
        .then((res) => {
          setGymClass(res.data);
          setGymClassFull(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getClasses();
  }, []);

  const onChangeHandler = (e) => {
    setGymClass(
      gymClassFull.filter(
        (gym) =>
          gym.class_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          gym.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
          gym.type.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div class="classes">
      <span className="searchSpan">
        <input
          className="searchBar"
          type="text"
          placeholder="Search Type, Location, or Class Name"
          onChange={onChangeHandler}
        />
        <button type="submit">🔎</button>
      </span>
      <h1>Client Page</h1>
      <Classes classes={gymClass} id={gymClass.class_id} />
    </div>
  );
};

export default ClientPage;
