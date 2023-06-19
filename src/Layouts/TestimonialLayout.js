import React from "react";

const TestimonialLayout = ({ children }) => {
  return (
    <section className="bg-primary" aria-label="Testimonials Section">
      <div className="container px-5 py-8 mx-auto">
        <h1 className="mb-10 text-4xl text-center max-md:mt-5 max-md:text-3xl text-secondary">
          Testimonials <br /> &gt;&gt;
        </h1>

        {children}
      </div>
    </section>
  );
};

export default TestimonialLayout;
