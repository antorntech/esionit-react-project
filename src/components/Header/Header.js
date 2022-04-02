import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const showLoginForm = () => {
    const loginForm = document.getElementById("loginform");
    loginForm.style.display = "block";
    loginForm.style.top = "50px";
  };
  const hideLoginForm = () => {
    const loginForm = document.getElementById("loginform");
    loginForm.style.display = "none";
  };
  return (
    <div className="container header">
      <div className="row d-flex justify-content-center align-items-center mt-3">
        <div className="col">
          <img
            width="150px"
            src="http://themazine.com/newwp/esonit/wp-content/uploads/2021/11/updated-logo.svg"
            alt=""
          />
        </div>
        <div className="col">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="col">
          <button onClick={showLoginForm}>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span>Log-in</span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="login-container" id="loginform">
            <h3 className="pt-3">Log-in</h3>
            <div className="login-form">
              <label htmlFor="" style={{ marginTop: "20px" }}>
                Email
              </label>
              <input type="text" placeholder="Enter your email" />
              <label htmlFor="" style={{ marginTop: "15px" }}>
                Password
              </label>
              <input
                style={{ marginBottom: "15px" }}
                type="text"
                placeholder="Enter your password"
              />
              <button onClick={hideLoginForm} className="login-btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
