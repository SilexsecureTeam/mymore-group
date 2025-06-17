import React from "react";
import careerBanner from "../../assets/career-banner.jpg";
import { jobs } from "../../utils/dummies";
import LineDesign from "../LineDesign";
const CareerContent = () => {
  return (
    <div>
      {/* Why Work With Us */}
      <div className="px-6 md:px-20 py-16 space-y-16">
        <h2 className="text-xl font-semibold text-white pb-2">
          Why Work With Us?
        </h2>
        <div className="flex items-center gap-2 my-2">
          <div className="w-2 h-2 rounded-md bg-white" />
          <div className="w-5 h-2 rounded-md bg-white" />
          <div className="w-12 h-2 rounded-md bg-red-700" />
        </div>
        <div className="grid md:grid-cols-4 gap-10 text-sm text-gray-300 pt-6">
          <div>
            <h3 className="text-white font-medium pb-2 text-xl">
              Purpose-driven
            </h3>
            <p className="leading-loose">
              At MyMore Travels, every itinerary we build and every ticket we
              book brings someone closer to their dream. We exist to make travel
              more meaningful especially for families and individuals who often
              get left behind.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium pb-2 text-xl">
              Family First
            </h3>
            <p className="leading-loose">
              We believe people do their best work when they feel supported.
              That’s why we nurture a culture where family matters, personal
              time is respected, and your life outside work is valued.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium pb-2 text-xl">
              Growth Opportunities
            </h3>
            <p className="leading-loose">
              From mentorship and workshops to real responsibility and room for
              creativity, your journey doesn’t end when you join—it evolves.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium pb-2 text-xl">
              Flexible Work
            </h3>
            <p className="leading-loose">
              Flexible hours and hybrid roles to help you work in a way that
              fits your lifestyle—while staying connected to a passionate,
              purposeful team.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="bg-gray-100 text-black px-6 md:px-20 py-16">
        <h2 className="text-lg font-semibold mb-8">Our Current Openings</h2>
        <div className="flex items-center gap-2 my-2">
          <div className="w-12 h-2 rounded-md bg-red-900" />
          <div className="w-5 h-2 rounded-md bg-gray-300" />
          <div className="w-2 h-2 rounded-md bg-gray-300" />
        </div>
        <div className="overflow-x-auto my-4">
          <table className="w-full min-w-[700px] text-left border-separate border-spacing-y-4">
            <thead className="">
              <tr className="text-red-800 *:p-3">
                <td>Role</td>
                <td>Location</td>
                <td>Type</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="gap-y-4">
              {jobs.map((job, idx) => (
                <tr key={idx} className="bg-white *:p-3 ">
                  <th className="py-4 text-red-900">{job.role}</th>
                  <td>{job.location}</td>
                  <td>{job.type}</td>
                  <td>
                    <button className="bg-black text-white px-4 py-2 rounded">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mid Banner */}
      <div
        className="relative h-[400px] bg-cover bg-center px-6 md:px-20 flex items-center"
        style={{ backgroundImage: `url(${careerBanner})` }}
      >
        <div className="max-w-xl space-y-3 text-white">
          <h2 className="text-2xl md:text-3xl font-medium">
            You don’t just work here you build moments, memories, and meaningful
            impact.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CareerContent;
