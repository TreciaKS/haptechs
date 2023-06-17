import React, { useState } from 'react';

const Navbar = () => {
const [Open, isOpen] = useState(false)

  return (
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
        className="hidden transition max-md:block"
        onClick={() => isOpen(!Open)}
      >
        <div className="transition-all duration-200 ease-in">
          {Open ? (
            <span className="fixed z-10 block text-3xl font-extrabold text-secondary right-12 top-8">
              ✕
            </span>
          ) : (
            <>
              <span className="block w-8 h-1 mb-2 bg-secondary"></span>
              <span className="block w-8 h-1 mb-2 bg-secondary"></span>
              <span className="block w-8 h-1 bg-secondary"></span>
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
          className="underline underline-offset-8 decoration--accent hover:no-underline max-md:no-underline hover:text-gray-300"
        >
          Home
        </a>
        <a
          onClick={() => isOpen(false)}
          href="#about"
          className="hover:text-gray-300"
        >
          About
        </a>
        <a
          onClick={() => isOpen(false)}
          href="#products"
          className="hover:text-gray-300"
        >
          Products
        </a>
        <a
          onClick={() => isOpen(false)}
          href="#services"
          className="hover:text-gray-300"
        >
          Services
        </a>
        <a
          onClick={() => isOpen(false)}
          href="#contact"
          className="hover:text-gray-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
