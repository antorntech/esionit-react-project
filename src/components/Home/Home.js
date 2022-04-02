import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import useService from "../Hooks/useService";
import ItService from "../ItService/ItService";

const Home = () => {
  const [services, setServices] = useService();

  return (
    <div className="container my-5">
      <Hero></Hero>
      <div className="row row-cols-1 row-cols-lg-3">
        {services.map((service) => (
          <ItService key={service.id} service={service}></ItService>
        ))}
      </div>
    </div>
  );
};

export default Home;
