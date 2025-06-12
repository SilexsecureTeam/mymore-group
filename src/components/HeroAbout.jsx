// src/components/Hero.jsx
import React from 'react';
import heroImg from '../assets/hero.svg';

export default function AboutHero() {
  return (
    <section className="bg-heroabout text-white mt-30">
      <div className="px-26 w-full py-38 flex flex-col md:flex-row items-center bg-[rgb(0,0,0,0.4)]">
        {/* Text block */}
        <div className="!space-y-4">
          <h1 className="text-5xl font-semibold">Who We Are</h1>
          <p className="text-gray-300 max-w-[35%]">
          At Mymore Travels, we make your journey seamless, affordable, and unforgettable. From flights to private jets, visa help to travel insurance we’ve got every aspect of your trip covered.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-black text-white font-medium hover:bg-red-600 transition"
          >
            View our Services
          </a>
        </div>
      </div>
    </section>
  );
}
