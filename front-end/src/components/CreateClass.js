import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const initialValues = {
    class_name:"",
    type:"",
    startTime:"",
    duration:"",
    intensity:"",
    location:"",
    size:"",
}

const CreateClass = (props) => {
    const [addClass, setAddClass] = useState(initialValues);
    const [createClass, setCreateClass] = useState([]);
    const { push } = useHistory();

    const submit = () => {
        const newClass = {
            class_name:addClass.class_name,
            type:addClass.type,
            startTime:addClass.startTime,
            duration:addClass.duration,
            intensity:addClass.intensity,
            location:addClass.location,
            size:addClass.size,
        };
        console.log(newClass);
        axios
        .post("https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes", createClass)
        .then(res=> {
            setCreateClass([res.data, ...createClass])
            push("/myclasses")
        })
        .catch(err => {
            console.log(err);
        });
    }

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
                        type='text'
                        name='class_name'
                        value={addClass.class_name}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Class Type:
                        <input
                        type='text'
                        name='type'
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
                        name='duration'
                        value={addClass.duration}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Intensity Level (between 1-3):
                        <input
                        type="number"
                        name='intensity'
                        value={addClass.intensity}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Location:
                        <input
                        type='text'
                        name='location'
                        value={addClass.location}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Max Class Size:
                        <input
                        type= 'number'
                        name= 'size'
                        value={addClass.size}
                        onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Add Class</button>
                </form>
            </div>
        </div>
    )
}
export default CreateClass;