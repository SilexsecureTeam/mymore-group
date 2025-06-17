// src/components/Hero.jsx
import React from "react";
import heroImg from "../../assets/hero.svg";

export default function CareerHero({ title = "", subtitle = "", image }) {
  return (
    <section
      className="text-white mt-26"
      style={{
        backgroundImage: `url(${image || heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-8 md:px-26 w-full py-14 md:py-38 flex flex-col md:flex-row items-center bg-[rgb(0,0,0,0.4)]">
        {/* Text block */}
        <div className="!space-y-4">
          <h1 className="text-5xl font-semibold md:max-w-[55%]">{title}</h1>
          <p className="text-gray-300 md:max-w-[45%]">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
