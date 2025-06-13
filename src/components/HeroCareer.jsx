// src/components/Hero.jsx
import React from 'react';
import heroImg from '../assets/hero.svg';

export default function CareerHero() {
  return (
    <section className="bg-herocareer text-white mt-26">
      <div className="px-8 md:px-26 w-full py-14 md:py-38 flex flex-col md:flex-row items-center bg-[rgb(0,0,0,0.4)]">
        {/* Text block */}
        <div className="!space-y-4">
          <h1 className="text-5xl font-semibold md:max-w-[55%]">Do more than work. Be part of something meaningful.</h1>
          <p className="text-gray-300 md:max-w-[45%]">
          At MyMore Travels, we’re not just booking trips we’re building memories, empowering families, and making the world more accessible through travel.
          </p>
        </div>
      </div>
    </section>
  );
}
