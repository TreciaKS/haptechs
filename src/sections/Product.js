import React from "react";

const Product = () => {
  return (
    <section
      className="relative w-full max-w-6xl px-10 mx-auto text-gray-800 bg-white md:text-left lg:p-16"
      id="products"
    >
      <h1 className="mt-5 mb-4 text-5xl text-center underline max-md:text-3xl underline-offset-8">
        Products
      </h1>

      <div className="items-center py-10 -mx-10 md:flex">
        <div className="w-full px-10 mb-10 md:mb-0 md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            className="relative z-10 w-full"
            alt="Oculus VR glasses that are white in colour."
          />
        </div>
        <div className="w-full px-10 md:w-1/2">
          <div className="mb-10">
            <h1 className="mb-5 text-2xl font-bold uppercase">The HapX1.</h1>
            <p className="text-sm">
              Introducing our flagship VR headset - the HapX1. Immerse yourself
              in stunning virtual worlds with its high-resolution display,
              intuitive controls, and ergonomic design.
            </p>
          </div>
          <div>
            <div className="inline-block mr-5 align-bottom">
              <span className="text-2xl leading-none align-baseline">$</span>
              <span className="text-5xl font-bold leading-none align-baseline">
                599
              </span>
              <span className="text-2xl leading-none align-baseline">.99</span>
            </div>
            <div className="inline-block align-bottom">
              <button className="px-10 py-2 font-semibold rounded-full opacity-75 text-cream bg-accent hover:text-secondary hover:opacity-100 max-sm:mt-3 max-xl:mt-4">
                COMING SOON
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center py-10 -mx-10 md:flex">
        <div className="w-full px-10 mb-10 md:mb-0 md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1660100970983-645655a09b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80"
            className="relative z-10 w-full"
            alt="Oculus joystick and VR glasses placed next to each other. Colour of each is cream white."
          />
        </div>
        <div className="w-full px-10 md:w-1/2">
          <div className="mb-10">
            <h1 className="mb-5 text-2xl font-bold uppercase">
              HapXX Collection
            </h1>
            <p className="text-sm">
              Experience virtual touch like never before with our HapGlove. Feel
              textures, sensations, and interactions in virtual environments for
              a truly immersive experience.
            </p>
          </div>
          <div>
            <div className="inline-block mr-5 align-bottom">
              <span className="text-2xl leading-none align-baseline">$</span>
              <span className="text-5xl font-bold leading-none align-baseline">
                2599
              </span>
              <span className="text-2xl leading-none align-baseline">.99</span>
            </div>
            <div className="inline-block align-bottom">
              <button className="px-10 py-2 font-semibold rounded-full opacity-75 text-cream bg-accent hover:text-secondary hover:opacity-100 max-md:mt-3 max-xl:mt-4">
                COMING SOON
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
