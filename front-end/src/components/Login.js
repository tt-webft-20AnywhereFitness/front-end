import React, { useState } from 'react'

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username:"",
        password:"",
    })
    const submitHandler = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => 
        setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
        })
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