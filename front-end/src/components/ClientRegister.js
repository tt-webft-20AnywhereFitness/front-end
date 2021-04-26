import React, { useState } from 'react'

const ClientRegister = (props) => {
    const [credentials, setCredentials] = useState({
        username:"",
        password:"",
        email:"",
        bio:"",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submitted');
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
                        type='text'
                        name='username'
                        value={credentials.password}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                        type='text'
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