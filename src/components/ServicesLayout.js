import React from "react";

const ServicesLayout = ({ children }) => {
  return (
    <section className="text-gray-600" id='services'>
      <h1 className="mt-5 mb-4 text-5xl text-center underline max-md:text-3xl underline-offset-8">
        Services
      </h1>
      <div className="flex flex-row-reverse flex-wrap mx-auto mt-8 max-md:flex-col-reverse">
        <div className="w-full overflow-hidden lg:w-1/2 lg:mb-0">
          <img
            alt="White Oculus VR headset and gloves, placed next to each other on a white surface."
            className="object-cover object-center w-full h-full"
            src="https://images.unsplash.com/photo-1658555012297-edb48f0c2d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>

        {/* services cards rendered here */}
        <div className="pt-6 text-center bg-white lg:pl-12 lg:text-left h-fit max-md:px-10 lg:w-2/4 max-md:pt-8">
          <div className="flex-col mx-6 md:flex max-lg:flex-row">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLayout;
