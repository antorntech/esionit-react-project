import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((json) => setServices(json));
  }, []);
  return [services, setServices];
};

export default useService;
