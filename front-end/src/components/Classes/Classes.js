import React from "react";
import Class from "./Class";

const Classes = ({ classes }) => {
  console.log(classes);
  return (
    <div className="cards">
      {classes.map((item) => (
        <Class classNew={item} key={item.class_id} />
      ))}
    </div>
  );
};
export default Classes;
