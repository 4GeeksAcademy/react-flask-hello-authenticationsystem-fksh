import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { actions } = useContext(Context);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      `${process.env.BACKEND_URL}/api/login`,
      {
        body: JSON.stringify(loginDetails),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
      }
    );
    if (resp.status === 200) {
      const data = await resp.json();
      actions.addToken(data.token);
      navigate("/private");
    } else {
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={loginDetails.email}
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
            value={loginDetails.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};
