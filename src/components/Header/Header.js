import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
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
          <button>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span>Log-in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
