import React from 'react';
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Top subscription section */}
      <div className="px-6 md:px-24 py-12">
        <h2 className="text-5xl font-normal !mb-2">Stay in the Loop</h2>
        <p className="text-[20px] text-[#ffffff] !mb-6">Never miss a deal.</p>
        <p className="text-gray-400 !mb-14 max-w-2xl">
          Subscribe to our newsletter and be the first to get exclusive travel offers, destination tips,
          and updates from Mymore Travels — straight to your inbox.
        </p>

        <form className="flex max-w-3xl relative -mb-22">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-7 w-full bg-gray-200 text-[#383737] rounded-[6px] focus:outline-none"
          />
          <button
            type="submit"
            className=" absolute right-4 top-3 px-20 py-4 bg-[#383737] text-white font-medium rounded-[6px] hover:bg-gray-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Middle content section */}
      <div className="bg-[#383737] px-6 md:px-24 py-16 w-full flex flex-col md:flex-row md:justify-between">
        {/* Logo & description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <img
            src={logo}
            alt="Mymore Travels Logo"
        className="-ml-7 mb-4"
          />
          <p className="text-white font-light leading-relaxed">
            Mymore Travels — Your trusted partner for smart, affordable, and hassle-free travel. We bring you the best flight deals,
            hotel stays, and tour packages all in one place. Wherever you go, we’re with you every step of the way.
          </p>
        </div>

        {/* Links columns */}
        <div className="flex flex-row space-x-16 md:space-x-20 md:w-1/3 text-white !font-bold">
          <div className="mb-8 sm:mb-0">
            <h3 className=" !mb-4">Company</h3>
            <ul className="!space-y-2 text-[#ffffff]text-sm font-bold">
              <li><a href="#" className="hover:text-white !font-bold">Careers</a></li>
              <li><a href="#" className="hover:text-white !font-bold">FAQs</a></li>
              <li><a href="#" className="hover:text-white !font-bold">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="!mb-4 font-bold">Legal</h3>
            <ul className="!space-y-2 text-[#ffffff]text-sm">
              <li><a href="#" className="hover:text-white !font-bold">Terms and conditions</a></li>
              <li><a href="#" className="hover:text-white !font-bold">Insurance Policy</a></li>
            </ul>
          </div>
        </div>
      </div>


<div className='w-full h-1.5' 
 style={{ background: "linear-gradient(to right, #D9D9D9, #737373)" }} />
      {/* Bottom copyright bar */}
      <div className="px-6 md:px-12 py-10 bg-[#383737]">
        <p className="text-center text-white font-bold">2025 Mymore Inc.</p>
      </div>
    </footer>
  );
}
