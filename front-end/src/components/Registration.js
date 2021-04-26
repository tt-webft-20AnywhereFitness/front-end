import React, { useState } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialValues = {
    username:"",
    password:"",
    email:"",
    bio:"",
    certifications:"",
};

const InstructorRegister = (props) => {
    const [credentials, setCredentials] = useState(initialValues);

    const [users, setUsers] = useState([]);
    const { push } = useHistory();

    const submit = () => {
        const newUser = {
            username: credentials.username.trim(),
            password: credentials.password.trim(),
            email: credentials.email,
            bio: credentials.bio,
            certifications: credentials.certifications,
            accountType: "Instructor",
        };
        console.log(newUser);
        axiosWithAuth()
            .post("/auth/register", newUser)
            .then(res => {
                setUsers([res.data, ...users])
                push("/login")
            })
            .catch(err => {
                console.log(err);
            });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submit();
        setCredentials(initialValues);
    };

    const handleChange = (e) => 
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });

    return (
        <div className="register">
            <div className="textContainer">

                <h2 className="registerHeader">Instructors Register Today</h2>

                <form className="registerFrom" onSubmit={submitHandler}>
                    <label>
                        Username:
                        <input
                        type='text'
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                        type='password'
                        name='password'
                        value={credentials.password}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                        type='email'
                        name='email'
                        value={credentials.email}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Bio:
                        <input
                        type='text'
                        name='bio'
                        value={credentials.bio}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Certifications:
                        <select
                        name='certifications'
                        value={credentials.certifications}
                        onChange={handleChange}
                        >
                            <option value="Yoga">Yoga</option>
                            <option value="Tae Bo">Tae Bo</option>
                            <option value="Jazzercise">Jazzercise</option>
                            <option value="Zumba">Zumba</option>
                            <option value="Pumping Iron">Pumping Iron</option>
                        </select>
                    </label>
                    <button>Register</button>                    
                </form>
            </div>
        </div>
    )
}

export default InstructorRegister

