import React from "react";
import TestimonialLayout from "../Layouts/TestimonialLayout";

const TestimonialCards = ({ testimonials }) => {
  return (
    <TestimonialLayout>
      <div className="flex flex-row items-start w-full px-4 mx-auto -m-4 overflow-y-auto md:w-4/5">
        {testimonials.map((testimonial) => (
          <div className="flex-none w-full p-4 md:w-1/2 flex-nowrap" key={testimonial.id}>
            <div className="h-full p-8 bg-gray-100 rounded">
              <span className="text-5xl">❝</span>
              <p className="mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <button className="inline-flex items-center">
                <img
                  alt={'Headshot Of' + testimonial.alt}
                  src={testimonial.image}
                  className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-4">
                  <span className="font-medium text-gray-900">
                    {testimonial.person}
                  </span>
                  <span className="-ml-6 text-sm text-gray-500">
                    {testimonial.job}
                  </span>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </TestimonialLayout>
  );
};

export default TestimonialCards;
