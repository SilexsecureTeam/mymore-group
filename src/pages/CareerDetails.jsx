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
              Education: Bachelor’s degree or Higher Diploma in travel, tourism,
              hospitality, or a related field.
            </li>
            <li>
              Experience: Minimum of one (2) year in a travel agency, airline,
              or customer-facing role.
            </li>
          </ul>
        </Section>

        <Section title="Key Responsibilities">
          {jobDetails?.responsibilities ? (
            <ul className="list-disc pl-5 space-y-4">
              {jobDetails.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          ) : (
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Client interaction and support:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    Respond to customer inquiries via phone, email, whatsapp,
                    company chat box and in person.
                  </li>
                  <li>
                    Provide detailed information on available flights, pricing,
                    travel routes, and airline policies when needed.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Flight booking management:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    Routine monitoring of the Admin board to track clients
                    transactions on the company website
                  </li>
                  <li>
                    Confirmation of payment on Alat Pay dashboard or paystack
                    transfer.
                  </li>
                  <li>Modify itineraries and process cancellations.</li>
                  <li>
                    Coordinate with airlines on flight delays, cancellations,
                    and other client concerns.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Customer Relationship Management:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    Build and maintain positive relationships with clients to
                    ensure repeat business
                  </li>
                  <li>
                    Follow up with clients post travel for feedback and
                    satisfaction assessment.
                  </li>
                  <li>
                    Handle complaints or disputes calmly and professionally.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Record Keeping and Reporting:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    Maintain accurate and up to date records of bookings, client
                    interactions and service log.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Team collaboration:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    {" "}
                    Work closely with the Business development and brand service
                    team to align on promotions and updates.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Service Excellence:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    Stay updated on industry trends, airline policies, and new
                    travel guidelines.{" "}
                  </li>
                </ul>
              </li>
            </ol>
          )}
        </Section>

        <section>
          <h2 className="font-semibold text-sm md:text-base pb-2">
            Key Skills & Requirements
          </h2>
          <ul className="list-disc pl-5 text-sm md:text-base space-y-2">
            {jobDetails?.requirements?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="text-sm md:text-base">
          <h2 className="font-semibold mb-2">Attributes</h2>
          <p>{jobDetails?.attribute}</p>
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
