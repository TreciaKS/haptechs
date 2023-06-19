import React from 'react'
import Navbar from "./Navbar";

const Header = () => {

  return (
    <header
      className="bg-[url('https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80')] origin-bottom-right bg-center bg-no-repeat bg-cover h-screen brightness-95 flex justify-center items-start max-md:px-4"
      id="#home"
      aria-label="Hero Section"
    >
      {/* hero text */}
      <div className="absolute mx-6 text-3xl text-black top-44 max-md:text-xl">
        <p>Unleash Boundless Possibilities in Virtual Reality with Haptechs.</p>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
