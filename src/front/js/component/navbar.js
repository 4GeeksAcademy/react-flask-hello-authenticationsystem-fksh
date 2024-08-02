import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleLogout = () => {
    actions.removeToken();
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {store.token ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="btn btn-primary me-2">Signup</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
