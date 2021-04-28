import React, { useState } from 'react';

const Class = ({classes}) => {
    const [ gymClass, setGymClass ] = useState()
    // const oneClass = () => {
    //     classes.map(item => (
    //         setGymClass(item)
    //     ))
    //     return (
    //         oneClass()
    //     )
    // }
    return (
        <div>
            <div className="classCard">
                <h2>{classes.class_name}</h2>
                <h3>{classes.type}</h3>
                <h3>Intensity Level: {classes.intensity}</h3>
                <h3>Location: {classes.location}</h3>
                <p>Start Time: {classes.startTime}</p>
                <p>Duration: {classes.Duration} minutes</p>
                <p>Max Class Size: {classes.size}</p>
            </div>
        </div>
    )
};
export default Class;