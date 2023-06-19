import React from 'react'

const CTA = () => {
  return (
    <section
      className="w-full bg-white"
      aria-label="CTA: Join Waitlist Section"
      id='contact'
    >
      <div className="w-full px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4">
        <p className="mb-2 text-base font-semibold text-accent">
          Be Notified When The Launch Releases
        </p>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight text-primary">
          Ready to step into the future of virtual reality?
        </h2>
        <div className="flex mb-0  justify-evenly max-sm:[&>*]:mx-4">
          <button
            className="inline-flex items-center justify-center w-full p-4 mb-2 font-medium rounded-lg opacity-95 bg-accent hover:opacity-100 sm:w-auto sm:mb-0 text-secondary"
            disabled
            aria-label="Join Waitlist"
          >
            Join Waitlist
          </button>
          <button
            className="inline-flex items-center justify-center w-full p-4 mb-2 font-medium text-black border border-black rounded-lg opacity-75 hover:opacity-100 sm:w-auto sm:mb-0"
            disabled
            aria-label="Book a Demo"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA