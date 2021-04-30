import React, { useState } from "react";

const Class = ({classNew}) => {
    const [thisClass, setThisClass] = useState(null);
    const [myClasses, setMyClasses] = useState([]);

    const addToMyClasses = newClass => {
        setMyClasses([
            ...myClasses,
            newClass
        ]);
    };

    const joinClass = () => {
        addToMyClasses(thisClass);
    };

    return (
        <div>
            <div className="classCard">
                <h2>{classNew.class_name}</h2>
                <h3>{classNew.type}</h3>
                <h3>Intensity Level: {classNew.intensity}</h3>
                <h3>Location: {classNew.location}</h3>
                <p>Start Time: {classNew.startTime}</p>
                <p>Duration: {classNew.duration} minutes</p>
                <p>Max Class Size: {classNew.size}</p>
                <button onClick={joinClass}>Join Class</button>
            </div>
        </div>
    );
};

export default Class;
