import React from "react";

const ServicesLayout = ({ children }) => {
  return (
    <section className="text-gray-600" id="services" aria-label="Services Section">
      <h1 className="mt-8 mb-6 text-4xl text-center max-md:text-3xl">
        Services
      </h1>

      {/* services cards rendered here */}
      <div className="w-full pt-6 text-center lg:pl-12 lg:text-left h-fit max-md:px-10 max-md:pt-8">
        <div className="mx-6 md:flex md:pt-0">{children}</div>
      </div>
    </section>
  );
};

export default ServicesLayout;
