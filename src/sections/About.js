import React from 'react'

const About = () => {
  return (
    <section className="flex h-screen max-md:flex-col">
      <div className="w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1657734240326-8f2ab858a2dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="relative object-cover object-center h-screen min-w-full max-md:h-96 max-md:object-center"
        />
      </div>
      <div className="grid w-full place-items-center px-10 bg-[#524f64]">
        <div className="text-xl text-[#eeeff2]">
          <h1 className="text-5xl mb-14 underline underline-offset-8 decoration-[#000000]">
            About Us
          </h1>
          <p className="mb-10">
            Haptechs is a pioneering virtual reality startup, dedicated to
            pushing the boundaries of hardware and software development. With a
            passion for innovation, we're creating the next generation of
            immersive experiences.
          </p>
          <p className="">
            Our team has successfully delivered cutting-edge VR solutions for
            leading gaming companies and collaborated with renowned researchers
            to advance the field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About