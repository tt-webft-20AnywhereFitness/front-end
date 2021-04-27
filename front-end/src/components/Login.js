import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
    username:"",
    password:"",
};

const Login = (props) => {
    const [credentials, setCredentials] = useState(initialValues);
    const { push } = useHistory();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/login", credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("accountType", res.data.accountType);

                if((localStorage.getItem("token")) && (localStorage.getItem("accountType") === "Instructor")) {
                    push("/instructor-page")
                } else if((localStorage.getItem("token")) && (localStorage.getItem("accountType") === "Client")) {
                    push("/client-page")
                } else {
                    alert("Invalid Login.")
                }
            })
            .catch(err => {
                console.log(err);
            });
        setCredentials(initialValues);
    };

    return (
        <div>
            <div className='login'>
                <form className="loginForm" onSubmit={submitHandler}>
                    <label>
                        Username:
                        <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
    
}
export default Login