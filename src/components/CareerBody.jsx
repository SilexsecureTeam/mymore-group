// src/components/TrustSection.jsx
import React, { useState } from "react";
import { Zap, Headphones, CreditCard, Globe } from "lucide-react";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel1.jpg";
import hotel5 from "../assets/hotel2.jpg";
import hotel6 from "../assets/hotel3.jpg";
import london from "../assets/london.png";
import thailand from "../assets/thailand.png";
import london2 from "../assets/london3.png";
import london3 from "../assets/london4.png";
import sunset from "../assets/sunset.jpg";
import rightBtn from "../assets/right.png";
import leftBtn from "../assets/left.png";
import travelImg from "../assets/travel.jpg"; // replace with your image path
import { openings } from "../utils/dummies";
import { useNavigate } from "react-router-dom";

const whyWorkItems = [
  "Purpose-driven travel work",
  "Family-first company culture",
  "Growth opportunities",
  "Hybrid/flexible work options",
  "Purpose-driven travel work",
  "Family-first company culture",
  "Growth opportunities",
  "Hybrid/flexible work options",
  "Purpose-driven travel work",
  "Family-first company culture",
  "Growth opportunities",
  "Hybrid/flexible work options",
];

const BLOCK = 4;
const pageCount = Math.ceil(whyWorkItems.length / BLOCK);

export default function CareerBody() {
  const navigate = useNavigate();
  const [whyIndex, setWhyIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <section className="w-full">
        {/* Top section */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={travelImg}
              alt="Why Work With Us"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 bg-[#780000] text-white px-9 py-12 relative">
            <h2 className="text-2xl font-bold !mb-4">Why Work With Us?</h2>
            <div className="flex items-center mb-10 space-x-2">
              {Array.from({ length: pageCount }).map((_, p) => (
                <button
                  key={p}
                  onClick={() => setWhyIndex(p)}
                  className={`w-6 h-2 rounded-full transition-colors ${
                    p === whyIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <ul className="space-y-4">
              {whyWorkItems
                .slice(whyIndex * BLOCK, whyIndex * BLOCK + BLOCK)
                .map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="mb-2 text-red-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="bg-[#383737] text-white px-24 py-10">
          <h3 className="text-xl font-semibold !mb-3">Our Current Openings</h3>
          <div className="flex items-center mb-10 space-x-2">
            {openings.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setOpenIndex(idx)}
                className={`w-6 h-2 rounded-full transition-colors ${
                  idx === openIndex ? "bg-red-600" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openings.map((job, idx) => (
              <div
                key={job.id}
                onClick={() =>
                  navigate(`/career/${job.title?.replaceAll(" ", "-")}`, {
                    state: job,
                  })
                }
                className={`
                              flex flex-col h-full transition-transform cursor-pointer
                              ${
                                idx === openIndex
                                  ? "scale-100 bg-[#780000] text-white"
                                  : "scale-95 bg-[#D9D9D9] text-gray-900"
                              }
                            `}
              >
                <div className="py-6 px-8 pr-28 flex-1">
                  <h4 className="text-[22px] font-bold !mb-3">{job.title}</h4>
                  <p className="font-semibold">Location: {job.location}</p>
                  <p className="font-semibold">{job.type}</p>
                </div>

                <button className="mt-auto bg-black text-white px-4 py-3 w-full">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-table text-white">
        {/* Hero Sub-section */}
        <div className="w-full bg-[rgb(0,0,0,0.5)] h-fit md:h-[400px] py-16 mx-auto px-6 md:px-24 mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 text-white !space-y-4">
            <p className="text-[#D9D9D9] text-[20px]">
              You don’t just work here you build moments, memories, and
              meaningful impact.
            </p>
          </div>
        </div>
        {/* Grid of hotel cards */}
      </section>
    </div>
  );
}
