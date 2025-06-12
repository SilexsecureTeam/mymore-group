// src/components/Header.jsx
import React from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';      // ← import NavLink
import logo from '../assets/logo.png';

export default function Header() {
  // A helper for your active vs. inactive styles
  const linkClass = ({ isActive }) =>
    isActive
      ? 'drop-shadow-[0px_0px_8px_rgb(255,255,255)] !font-bold'
      : 'text-white hover:drop-shadow-[0px_0px_8px_rgb(255,255,255)] font-medium';

  return (
    <header className="fixed w-full top-0 left-0 bg-black text-white shadow z-[100]">
      <div className="w-full px-18 py-1 flex items-center justify-between font-medium">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Mymore Travels" className="w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-16">
          <NavLink end to="/"         className={linkClass}>Home</NavLink>
          <NavLink to="/about"        className={linkClass}>About Us</NavLink>
          <NavLink to="/services"     className={linkClass}>Services</NavLink>
          <NavLink to="/blog"         className={linkClass}>Blog</NavLink>
          <NavLink to="/contact"      className={linkClass}>Contact Us</NavLink>
        </nav>

        {/* Book button */}
        <div className="hidden md:block bg-gradient-to-r from-red-400 to-white p-[1px] rounded hover:bg-gradient-to-l">
          <div className="bg-black px-4 py-2 rounded font-bold">
            <NavLink to="/book-flight" className="block">Book Flight Now</NavLink>
          </div>
        </div>

        {/* Mobile menu icon */}
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  );
}
