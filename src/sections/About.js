import React from 'react'

const About = () => {
  return (
    <section className="flex max-md:flex-col-reverse md:h-screen" id="about">
      <div className="w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1657734240326-8f2ab858a2dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="A Pair of Oculus VR Glasses, White in Colour"
          className="relative object-cover object-center min-w-full md:h-screen max-md:h-96 max-md:object-center "
        />
      </div>
      <div className="grid w-full px-10 place-items-center bg-accent">
        <div className="py-10 text-xl text-cream">
          <h1 className="text-5xl underline mb-14 underline-offset-8 decoration-black">
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