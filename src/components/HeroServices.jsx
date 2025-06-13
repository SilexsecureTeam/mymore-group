// src/components/Hero.jsx
import React from 'react';
import heroImg from '../assets/hero.svg';

export default function ServiceHero() {
  return (
    <section className="bg-heroservice text-white mt-26">
      <div className="px-8 md:px-26 w-full py-14 md:py-38 flex flex-col md:flex-row items-center bg-[rgb(0,0,0,0.4)]">
        {/* Text block */}
        <div className="!space-y-4">
          <h1 className="text-5xl font-semibold md:max-w-[55%]">Explore Premium Travel Services <span className='text-[#780000]'>Designed</span> for You</h1>
          <p className="text-gray-300 md:max-w-[45%]">
          From booking your next flight to arranging private jet charters, Mymore Travels provides everything you need for a seamless journey.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-10 py-3 bg-black text-white font-medium hover:bg-red-600 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
