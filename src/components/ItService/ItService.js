import {
  faAngleDoubleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./ItService.css";

const ItService = (props) => {
  const { picture, title, description } = props.service;
  return (
    <div className="col">
      <div className="card h-100 service-card">
        <div className="service-banner">
          <img className="img-fluid" src={picture} alt="" />
        </div>
        <div className="service-details">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to="/service-details">
            <span>Read More</span>
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItService;
