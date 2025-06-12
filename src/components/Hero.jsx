// src/components/Hero.jsx
import React from 'react';
import heroImg from '../assets/hero.svg';

export default function Hero() {
  return (
    <section className="bg-hero text-white mt-30">
      <div className="px-26 w-full py-38 flex flex-col md:flex-row items-center bg-[rgb(0,0,0,0.4)]">
        {/* Text block */}
        <div className="!space-y-6">
          <h1 className="text-5xl font-semibold">Book Flights, Explore <br /> More, Travel Smarter.</h1>
          <p className="text-gray-300 max-w-[60%]">
          Discover the best flight deals, hotel bookings, and curated tour packages  all in one place. With Mymore Travels, planning your next adventure is simpler, faster, and more affordable.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-black text-white font-medium hover:bg-red-600 transition"
          >
            Book Flights Now
          </a>
        </div>
      </div>
    </section>
  );
}
