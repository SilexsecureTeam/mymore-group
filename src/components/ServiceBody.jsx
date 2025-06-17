import patner1 from "../assets/p1.svg";
import patner2 from "../assets/p2.png";
import patner3 from "../assets/p3.png";
import patner4 from "../assets/p4.png";
import patner5 from "../assets/p5.png";
import patner6 from "../assets/p6.png";
import flight from "../assets/flight.png";
import Reviews from "./Reviews";
export default function ServiceBody() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-24 py-10 pb-20 bg-[#F0EFE7] text-[#FFFFFF]">
        <div className=" bg-[#780000] px-6 py-10 pb-20 rounded-[10px] space-y-10">
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[#100E0E] px-6 py-10 pb-20 rounded-[10px] space-y-10">
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src={flight}
              alt=""
              className="border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]"
            />
            <div className="max-w-[60%]">
              <p className="font-semibold text-[15px]">Flight Bookings</p>
              <p className="font-light text-sm">
                Find and book affordable flights to your dream destinations with
                flexible options and trusted airlines.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-8 md:px-0 bg-[white]">
        <p className="text-[#000000] text-[20px] font-bold md:pl-24 !mb-5">
          We trusted by Global Partners
        </p>
        <div className="overflow-hidden w-full bg-white py-4">
          <div className="scroll-x-animation items-center space-x-14">
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
      <section className="w-full mx-auto px-24 py-12 pb-30 bg-[#780000] text-white">
        <h3 className="font-semibold text-[17px]">How it Works</h3>
        <p className="font-light !mt-3 text-sm">
          Seamless Travel in 3 Simple Steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-[#D9D9D9]">
          <div className="!space-y-3">
            <p className="bg-black px-4 font-bold py-2 rounded-[50%] flex justify-center w-fit">
              1
            </p>
            <p className=" font-semibold !mb-1">Choose a Service</p>
            <p>Select what you need from flights, hotels, or other services.</p>
          </div>
          <div className="!space-y-3">
            <p className="bg-black px-4 font-bold py-2 rounded-[50%] flex justify-center w-fit">
              2
            </p>
            <p className=" font-semibold !mb-1">Share Your Info</p>
            <p>
              Submit a quick form or speak with our agent to personalize your
              booking
            </p>
          </div>
          <div className="!space-y-3">
            <p className="bg-black px-4 font-bold py-2 rounded-[50%] flex justify-center w-fit">
              3
            </p>
            <p className=" font-semibold !mb-1">Relax & Go</p>
            <p>
              We take care of the rest — all you do is pack your bags and enjoy
              your trip.
            </p>
          </div>
        </div>
      </section>

      <Reviews />
    </div>
  );
}
