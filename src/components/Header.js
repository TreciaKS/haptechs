import React, { useState } from "react";

const Header = () => {
  const [Open, isOpen] = useState(false);

  return (
    <>
      <header
        className="bg-[url('https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80')] origin-bottom-right bg-center bg-no-repeat bg-cover h-screen brightness-95 flex justify-center items-start sticky top-0 left-0 right-0 z-10 max-md:px-4"
        id="#home"
      >
        {/* navbar */}
        <nav
          className={`flex justify-between items-center py-2 px-6 mt-6 bg-black rounded-full max-md:w-full shadow-lg ${
            Open
              ? "max-md:flex-col max-md:rounded-none max-md:mt-0 max-md:absolute max-md:bg-black"
              : "relative"
          }`}
        >
          {/* logo */}
          <div
            className={`w-10 h-10 mr-5 ${
              Open ? "fixed left-10 top-8" : "relative"
            }`}
          >
            <img
              src="haptechs-logo.png"
              className="object-contain rounded-full"
              alt="logo"
            />
          </div>

          {/* responsive menu */}
          <button
            className="hidden max-md:block transition"
            onClick={() => isOpen(!Open)}
          >
            <div className="transition-all duration-200 ease-in">
              {Open ? (
                <span className="text-3xl font-extrabold text-secondary block fixed right-12 top-8 z-10">
                  ✕
                </span>
              ) : (
                <>
                  <span className="w-8 h-1 bg-secondary block mb-2"></span>
                  <span className="w-8 h-1 bg-secondary block mb-2"></span>
                  <span className="w-8 h-1 bg-secondary block"></span>
                </>
              )}
            </div>
          </button>

          {/* menu items */}
          <div
            className={`text-gray-400 [&>*]:mx-3  max-md:[&>*]:mt-8 relative [&>*]:text-gray-200  ${
              Open
                ? "max-md:h-screen max-md:flex max-md:flex-col text-secondary text-3xl max-md:items-center max-md:justify-center max-md:w-full"
                : "max-md:hidden"
            }`}
          >
            <a
              onClick={() => isOpen(false)}
              href="#home"
              target="_blank"
              rel="noopener noreferrer"
              className=" underline underline-offset-8 decoration--accent hover:no-underline max-md:no-underline hover:text-gray-300"
            >
              Home
            </a>
            <a
              onClick={() => isOpen(false)}
              href="#about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              About
            </a>
            <a
              onClick={() => isOpen(false)}
              href="#products"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Products
            </a>
            <a
              onClick={() => isOpen(false)}
              href="#services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Services
            </a>
            <a
              onClick={() => isOpen(false)}
              href="#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </nav>
        {/* hero text */}
        <div className="text-black text-3xl absolute top-44 max-md:text-xl mx-6">
          <p>
            Unleash Boundless Possibilities in Virtual Reality with Haptechs.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
