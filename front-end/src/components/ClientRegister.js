import React, { useState } from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { useHistory } from "react-router-dom";

const initialValues = {
    username:"",
    password:"",
    email:"",
    bio:"",
    accountType: "Client"
};

const ClientRegister = (props) => {
    const [credentials, setCredentials] = useState(initialValues);
    // const { push } = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/register", credentials)
            .then(res => {
                console.log("REGISTER SUCCESS", res)
                // localStorage(setItem("token", res.data.token))
                // push("/login")
            })
            .catch(err => {
                console.log("REGISTER FAILURE", err);
            });
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
                <h2 className="registerHeader">Clients Register Today</h2>
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
                    <button type="submit">Register</button>                    
                </form>
            </div>
        </div>
    )
}
export default ClientRegister
