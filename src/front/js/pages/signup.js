import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      `${process.env.BACKEND_URL}/api/signup`,
      {
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
      }
    );
    if (resp.status === 201) {
      navigate("/login"); 
    } else {
    }
  };

  return (
    <div className="container mt-5">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};
