// === Image Assets ===
import storyImg from "../assets/storyMan.png";
import girl from "../assets/aboutbottom.jpg";

// === Partner Logos ===
import patner1 from "../assets/p1.svg";
import patner2 from "../assets/p2.png";
import patner3 from "../assets/p3.png";
import patner4 from "../assets/p4.png";
import patner5 from "../assets/p5.png";
import patner6 from "../assets/p6.png";

// === Offer Icons ===
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";
import offer5 from "../assets/offer5.png";
import offer6 from "../assets/offer6.png";
import offer7 from "../assets/offer7.png";

// === Team Images ===
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const services = [
  {
    id: 1,
    title: "Flight Bookings",
    icon: offer1,
    bg: "bg-[#780000]",
    colSpan: "col-span-1 sm:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 2,
    title: "Hotel Deals",
    icon: offer2,
    bg: "bg-[#D9D9D9]",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Tour Packages",
    icon: offer3,
    bg: "bg-[#780000]",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 4,
    title: "Travel Insurance",
    icon: offer4,
    bg: "bg-[#D9D9D9]",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 5,
    title: "Assisted Passport Processing & Renewal",
    icon: offer5,
    bg: "bg-[#780000]",
    colSpan: "col-span-2 sm:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 6,
    title: "Visa Processing",
    icon: offer6,
    bg: "bg-[#D9D9D9]",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    flex: true,
  },
  {
    id: 7,
    title: "Private Jet Booking",
    icon: offer7,
    bg: "bg-[#780000]",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    flex: true,
  },
];

const team = [
  { id: 1, name: "Adam Malik", role: "Visa Specialist", img: team1 },
  { id: 2, name: "Sarah Johnson", role: "Customer Care", img: team2 },
  { id: 3, name: "Michael Lee", role: "Tech Expert", img: team3 },
];

export default function AboutBody() {
  return (
    <div>
      {/* Our Story Section */}
      <section className="px-4 md:px-8 py-10 pb-20 bg-[#F0EFE7]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[#780000] text-xl text-center mb-6 font-bold">
            Our Story
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-10 gap-x-10 mt-8">
            {/* Image Box */}
            <div className="relative w-full md:w-[45%] max-w-[350px] h-[350px] md:h-[450px] overflow-hidden">
              {/* Top-left "L" Decoration */}
              <div className="absolute top-0 left-0 w-30 h-30 pointer-events-none">
                <div className="absolute top-0 left-0 h-[22px] w-full bg-[#780000]" />
                <div className="absolute top-0 left-0 w-[22px] h-full bg-[#780000]" />
              </div>

              {/* Bottom-right "L" Decoration */}
              <div className="absolute bottom-0 right-0 w-30 h-30 pointer-events-none">
                <div className="absolute bottom-0 right-0 h-[22px] w-full bg-[#780000]" />
                <div className="absolute bottom-0 right-0 w-[22px] h-full bg-[#780000]" />
              </div>

              <img
                src={storyImg}
                alt="Our Story"
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Description Text */}
            <div className="w-[90%] md:w-[50%]">
              <p className="text-[#0A0A0A] leading-[1.7rem]">
                Mymore Travels Services Ltd is a registered company founded to
                bridge the gap and eliminate inefficiencies in the global travel
                industry.
                <br />
                <br />
                We are a full-service travel company adopting digital platforms
                for air travel and logistics, focusing on affordability,
                customer satisfaction, and seamless delivery.
                <br />
                <br />
                Our team consists of seasoned professionals skilled in both
                corporate and personal travel management.
                <br />
                <br />
                Using AMADEUS's online booking system, we deliver cutting-edge
                services and up-to-date travel information.
                <br />
                <br />
                Through partnerships and affiliations locally and globally, we
                offer one-stop access to flights, hotels, visa assistance,
                packages, transfers, travel SIMs, loyalty programs, and more.
              </p>

              {/* Name Below Description */}
              <p className="pt-6 text-[#780000] font-semibold text-xl">
                The CEO<br/>
                Ahmed Akande<br/> Msc. Air Transport Mgt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 px-8 md:px-0 bg-white">
        <p className="text-[#000000] text-[20px] font-bold md:pl-24 mb-5">
          We're trusted by Global Partners
        </p>
        <div className="overflow-hidden w-full bg-white py-4">
          <div className="scroll-x-animation flex items-center space-x-14">
            {[...Array(3)].flatMap(() =>
              [patner1, patner2, patner3, patner4, patner5, patner6].map(
                (src, index) => (
                  <div
                    key={index + src}
                    className="max-w-[130px] h-auto shrink-0"
                  >
                    <img
                      src={src}
                      alt={`partner-${index}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* Divider Image */}
      <div className="w-full">
        <img src={girl} alt="" className="w-full" />
      </div>

      {/* What We Offer */}
      <section className="w-full mx-auto py-12 space-y-16">
        <div className="px-8 md:px-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            What We Offer
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.bg} ${service.colSpan} ${
                  service.rowSpan
                } ${
                  service.colSpan === "col-span-2" ? "px-12" : "px-6"
                } py-6 flex ${
                  service.flex
                    ? "flex-row-reverse items-end"
                    : "flex-col items-center"
                } justify-between`}
              >
                <div className={`${service.icon === offer5 ? "w-40" : "w-20"}`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mb-4 w-full"
                  />
                </div>
                <span
                  className={`text-[15.5px] font-medium ${
                    service.bg === "bg-[#D9D9D9]"
                      ? "text-[#780000]"
                      : "text-white"
                  }`}
                >
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Meet the Team Section (uncomment to use) */}
        {/*
        <div className="bg-[#F0EFE7] px-8 md:px-24 py-20">
          <h2 className="text-2xl font-semibold text-[#780000] mb-2">Meet the Team</h2>
          <p className="text-[#383737] mb-8 md:max-w-[60%]">
            A passionate team of travel enthusiasts, tech experts, and customer care professionals dedicated to making your travel dreams come true.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-start text-center">
                <div className="mb-4 w-full bg-gray-200 h-60"></div>
                <h3 className="text-lg font-bold text-[#000000]">{member.name}</h3>
                <p className="text-sm text-[#000000]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        */}
      </section>
    </div>
  );
}
