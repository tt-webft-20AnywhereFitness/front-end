import React, { useState } from "react";

const InstructorRegister = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    bio: "",
    certifications: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  return (
    <div className="register">
      <div className="textContainer">
        <h2 className="registerHeader">Instructor Registration</h2>

        <form className="registerFrom" onSubmit={submitHandler}>
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
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Bio:
            <input
              type="text"
              name="bio"
              value={credentials.bio}
              onChange={handleChange}
            />
          </label>
          <label>
            Certifications:
            <select
              name="certifications"
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
  );
};

export default InstructorRegister;
