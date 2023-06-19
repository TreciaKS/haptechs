import React, { useState } from "react";

const Navbar = () => {
  const [Open, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);

    // Disables Background Scrolling whilst the menu is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);

    // Unsets Background Scrolling to use when menu is closed
    document.body.style.overflow = "unset";
  };

  return (
    <nav
      className={`flex justify-between items-center py-2 px-6 mt-6 bg-primary rounded-full max-md:w-full shadow-lg ${
        Open
          ? "max-md:flex-col max-md:rounded-none max-md:mt-0 max-md:absolute max-md:bg-primary"
          : "relative"
      }`}
      id="navbar"
    >
      {/* logo */}
      <div
        className={`w-10 h-10 mr-5 ${
          Open ? "fixed left-10 top-8" : "relative"
        }`}
      >
        <img
          src="haptechs-logo-dark.png"
          className="object-scale-down object-center rounded-full"
          alt="Haptechs logo"
        />
      </div>

      {/* responsive menu */}
      <button
        className="hidden transition max-md:block"
        onClick={Open ? closeMenu : toggleMenu}
        tabIndex={0}
        aria-expanded={Open}
        aria-label="Hamburger Menu"
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
          onClick={closeMenu}
          href="#home"
          className="underline underline-offset-8 decoration--accent hover:no-underline max-md:no-underline hover:text-gray-300"
        >
          Home
        </a>
        <a onClick={closeMenu} href="#about" className="hover:text-gray-100">
          About
        </a>
        <a onClick={closeMenu} href="#products" className="hover:text-gray-100">
          Products
        </a>
        <a onClick={closeMenu} href="#services" className="hover:text-gray-100">
          Services
        </a>
        <a onClick={closeMenu} href="#contact" className="hover:text-gray-100">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
