import React from "react";
import useService from "../Hooks/useService";
import ItService from "../ItService/ItService";

const Servicess = () => {
  const [services, setServices] = useService();
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-lg-3">
        {services.map((service) => (
          <ItService key={service.id} service={service}></ItService>
        ))}
      </div>
    </div>
  );
};

export default Servicess;
