import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to apply active styles
  const linkClass = ({ isActive }) =>
    isActive
      ? "drop-shadow-[0px_0px_8px_rgb(255,255,255)] !font-bold"
      : "text-white hover:drop-shadow-[0px_0px_8px_rgb(255,255,255)] font-medium";

  return (
    <>
      <header className="fixed w-full top-0 left-0 bg-black text-white shadow z-[100]">
        <div className="w-full px-6 pl-0 md:px-20 py-2 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Mymore Travels" className="" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4 text-sm lg:text-[15px] lg:space-x-16">
            <NavLink end to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="#" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="/career" className={linkClass}>
              Career
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Book button */}
          <div className="hidden md:block bg-gradient-to-r from-red-400 to-white p-[1px] rounded hover:bg-gradient-to-l">
            <div className="bg-black px-4 py-2 rounded font-bold">
              <NavLink to="https://flightandticketing.com/" className="block">
                Book Flight Now
              </NavLink>
            </div>
          </div>

          {/* Mobile menu icon */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black z-[200] transition-transform duration-300 ease-in-out md:hidden
    ${
      mobileMenuOpen
        ? "translate-x-0 opacity-100 pointer-events-auto"
        : "translate-x-full opacity-0 pointer-events-none"
    }
  `}
      >
        <div className="flex items-center justify-end px-6 py-4 h-30 border-b border-gray-700">
          {/* <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Mymore Travels" className="w-20 -ml-4" />
          </NavLink> */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-4 !space-y-7">
          <NavLink
            end
            to="/"
            className={linkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={linkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="px-6 mt-7 mb-6">
          <div className="bg-gradient-to-r from-red-400 to-white p-[1px] rounded hover:bg-gradient-to-l">
            <div className="bg-black px-4 py-2 rounded font-bold text-center">
              <NavLink
                to="https://flightandticketing.com/"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Flight Now
              </NavLink>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[150]"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
