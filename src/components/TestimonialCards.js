import React from "react";
import TestimonialLayout from "../Layouts/TestimonialLayout";

const TestimonialCards = ({ testimonials }) => {
  return (
    <TestimonialLayout>
      <article className="flex flex-row items-start w-full px-4 mx-auto -m-4 overflow-y-auto md:w-full">
        {testimonials.map((testimonial) => (
          <div
            className="flex-none w-full p-4 md:w-96 flex-nowrap"
            key={testimonial.id}
          >
            <div className="h-full p-8 bg-white rounded">
              <span className="text-5xl text-accent">❝</span>
              <p className="mb-6 leading-relaxed">{testimonial.quote}</p>
              <p className="inline-flex items-center w-full justify-evenly">
                <img
                  alt={"Headshot Of" + testimonial.alt}
                  src={testimonial.image}
                  className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <span className="flex flex-col flex-grow pl-4 text-left">
                  <span className="font-medium text-primary">
                    {testimonial.person}
                  </span>
                  <span className="text-sm text-gray-500">
                    {testimonial.job}
                  </span>
                </span>
              </p>
            </div>
          </div>
        ))}
      </article>
    </TestimonialLayout>
  );
};

export default TestimonialCards;
