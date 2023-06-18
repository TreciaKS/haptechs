import React from "react";
import ServicesCards from "../components/ServicesCards";
import ServicesData from "../data/services.json"

const Services = () => {
  return (
    <>
      <ServicesCards services={ServicesData} />
    </>
  );
};

export default Services;
