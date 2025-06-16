// src/components/Hero.jsx
import React from 'react';
import heroImg from '../assets/hero.svg';

export default function AboutHero() {
  return (
    <section className="bg-heroabout text-white mt-26">
      <div className="px-8 md:px-26 w-full py-14 md:py-38 flex flex-col md:flex-row items-center bg-[rgb(0,0,0,0.4)]">
        {/* Text block */}
        <div className="!space-y-4">
          <h1 className="text-5xl font-semibold">Who We Are</h1>
          <p className="text-gray-300 md:max-w-[35%]">
          With a rare taste for excellence  and an Msc degree in  Air Transport Management (Mgt ) Ahmed Akande the C.E.O of My More Travels has  set a record for seamless, affordable and unforgettable trips ,from flights  to private jets,visa help to travel insurance,we have got every aspect of your journey covered.</p>
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
