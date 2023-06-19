import React from "react";
import ServicesLayout from "../Layouts/ServicesLayout";

const ServicesCards = ({ services }) => {
  return (
    <ServicesLayout>
      {services.map((service) => (
        <article className="mb-10" key={service.id}>
          <div className="inline-flex items-center justify-center w-12 h-12 mb-5 ml-2 border rounded-full max-lg:ml-0">
            <img
              src={service.icon}
              className="w-6 h-6"
              alt={service.alt}
              loading="lazy"
            />
          </div>
          <div className="flex-grow mx-2 my-2">
            <h2 className="mb-3 text-lg font-medium text-accent">
              {service.title}
            </h2>
            <p className="text-base leading-relaxed text-black">
              {service.description}
            </p>
          </div>
        </article>
      ))}
    </ServicesLayout>
  );
};

export default ServicesCards;
