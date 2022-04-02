import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="hero-text">
            <h1>
              We provide <br /> truly prominent <br /> IT solutions.
            </h1>
            <p>IT Services For All Your Business Needs</p>
          </div>
          <div className="hero-btn">
            <button className="btn1">Get Start Now</button>
            <button className="btn2">Solution</button>
          </div>
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src="http://themazine.com/newwp/esonit/wp-content/uploads/2021/08/image-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
