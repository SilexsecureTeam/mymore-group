import React from "react";
import heroImg from "../assets/customer.jpg"; // Replace with your image path
import Header from "../components/Header";
import Footer from "../components/Footer";
import LineDesign from "../components/LineDesign";
import { useLocation } from "react-router-dom";

const CareerDetails = () => {
  const location = useLocation();
  const jobDetails = location.state;
  return (
    <div className="text-[rgb(10,10,10)] bg-white">
      <Header />
      {/* Hero Section */}
      <div
        className="w-full h-[450px] mt-24 bg-cover bg-top relative flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.7), rgba(10,10,10,0.3)), url(${heroImg})`,
        }}
      >
        <div className="px-8 md:px-24 text-white">
          <h1 className="max-w-[420px] text-3xl md:text-5xl font-bold pb-2">
            {jobDetails?.title || "Customer Service Executive"}
          </h1>
          <p className="text-sm md:text-base">
            Employment Type: {jobDetails?.type || "Full-time"}
          </p>
          <p className="text-sm md:text-base">
            Salary: Competitive, based on experience
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 md:px-24 py-16 space-y-12">
        {/* Section */}
        <Section title="About Us">
          <p>{jobDetails?.about}</p>
        </Section>

        <Section title="Job Summary">
          <p>{jobDetails?.summary}</p>
        </Section>

        <Section title="Qualifications">
          <ul className="list-disc pl-5">
            <li>
              Bachelor’s degree or Higher Diploma in travel, tourism,
              hospitality, or a related field.
            </li>
            <li>
              Minimum of one (1) year in a travel agency, airline, or
              customer-facing role.
            </li>
          </ul>
        </Section>

        <Section title="Key Responsibilities">
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Client interaction and support:</strong>
              <ul className="list-disc pl-6">
                <li>Respond to inquiries via phone, email, WhatsApp...</li>
                <li>Provide flight and travel route information</li>
              </ul>
            </li>
            <li>
              <strong>Flight booking management:</strong>
              <ul className="list-disc pl-6">
                <li>Track client transactions</li>
                <li>Coordinate with airlines</li>
              </ul>
            </li>
            <li>
              <strong>Customer Relationship Management:</strong>
              <ul className="list-disc pl-6">
                <li>Ensure repeat business and satisfaction assessment</li>
              </ul>
            </li>
            <li>
              <strong>Record Keeping and Reporting:</strong> Maintain accurate
              records of bookings
            </li>
            <li>
              <strong>Team collaboration:</strong> Align with business
              development and branding
            </li>
            <li>
              <strong>Service Excellence:</strong> Stay updated on policies and
              guidelines
            </li>
          </ol>
        </Section>

        <section>
          <h2 className="font-semibold text-sm md:text-base pb-2">
            Key Skills & Requirements
          </h2>
          <ul className="list-disc pl-5 text-sm md:text-base space-y-2">
            <li>Excellent understanding of the travel industry</li>
            <li>
              Proficient in Amadeus, Sabre, Galileo etc. (training provided)
            </li>
            <li>Strong communication and negotiation skills</li>
            <li>Customer service and multitasking ability</li>
          </ul>
        </section>

        <section className="text-sm md:text-base">
          <h2 className="font-semibold mb-2">Attributes</h2>
          <p>
            Detail-oriented, empathetic, and passionate about creating memorable
            travel experiences.
          </p>
        </section>
      </div>
      {/* How to Apply */}
      <div className="bg-[#780000] text-white py-10 px-8 md:px-24 rounded leading-loose ">
        <h3 className="text-lg md:text-xl font-bold pb-2">How to Apply</h3>
        <p className="pb-4 max-w-3xl ">
          Please submit your resume and a cover letter detailing your relevant
          experience and passion for the travel industry to:{" "}
          <a
            target="_blank"
            href="mailto:support@mymoretravels.com"
            className="hover:!underline !font-bold"
          >
            support@mymoretravels.com
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="mymoretravels@gmail.com"
            className="hover:!underline !font-bold"
          >
            mymoretravels@gmail.com
          </a>
        </p>
        <p className="pt-2">
          <p>Applications close on June 30, 2025.</p>
          <p>Only shortlisted candidates will be contacted.</p>
        </p>
      </div>
      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-[#780000] font-semibold text-xl">{title}</h2>
    <LineDesign />
    <div className="text-sm md:text-base mt-6 max-w-4xl leading-relaxed">
      {children}
    </div>
  </div>
);

export default CareerDetails;
