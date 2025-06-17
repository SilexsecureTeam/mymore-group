import React from "react";
import sunset from "../assets/sunset.jpg";
import rightBtn from "../assets/right.png";
import leftBtn from "../assets/left.png";
import { useState } from "react";
import { reviews } from "../utils/dummies";

const REVIEWS_PER_PAGE = 2;

const Reviews = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const startIdx = page * REVIEWS_PER_PAGE;
  const currentReviews = reviews.slice(startIdx, startIdx + REVIEWS_PER_PAGE);
  return (
    <div className="flex flex-col-reverse md:flex-row items-center text-white p-6 px-6 md:px-24 relative mb-170 md:mb-0">
      {/* Left Image & Pagination Controls */}
      <div className="md:w-[50%] pb-18 h-[300px] md:h-[650px] w-full mb-8 md:mb-0 relative hidden md:block">
        <img
          src={sunset}
          alt="Customer Review"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-24 transform -translate-x-1/2 flex space-x-7">
          <img
            src={leftBtn}
            onClick={handlePrev}
            disabled={page === 0}
            className="cursor-pointer bg-[#605F5F80] hover:bg-gray-200 px-7 py-3 rounded-[10px]"
          />
          <img
            src={rightBtn}
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="cursor-pointer bg-[#605F5F80] hover:bg-gray-200 px-7 py-3 rounded-[10px]"
          />
        </div>
      </div>

      {/* Right Reviews Section */}
      <div className="md:w-1/2 w-full pl-0 md:pl-12 md:!-mt-90 relative">
        <h2 className="text-3xl text-[#D9D9D9] font-normal md:pl-20 !mb-10 md:!mb-20 md:max-w-96">
          What Our Customers Say About Us
        </h2>
        <div className="flex flex-col md:flex-row p-2 pb-2 gap-3 md:p-5 md:gap-5 !space-y-6 absolute bg-[#605F5F80] left-0 md:-left-[40%] w-full md:w-[500px] lg:w-[650px]">
          {currentReviews.map((r) => (
            <div
              key={r.id}
              className="px-4 md:px-6 py-6 h-fit bg-[#000000] md:py-12 md:h-[400px] !space-y-2 md:!space-y-5"
            >
              <div className="text-5xl">&ldquo;</div>
              <p className="text-gray-100 -mt-3 font-light leading-relaxed">
                {r.text}
              </p>
              <div className="flex items-center">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-nowrap">{r.name}</p>
                  <p className="text-gray-400 text-sm">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute left-24 -bottom-16 transform -translate-x-1/2 flex space-x-7 md:hidden">
            <img
              src={leftBtn}
              onClick={handlePrev}
              disabled={page === 0}
              className="cursor-pointer bg-[#605F5F80] hover:bg-gray-200 px-7 py-3 rounded-[10px]"
            />
            <img
              src={rightBtn}
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className="cursor-pointer bg-[#605F5F80] hover:bg-gray-200 px-7 py-3 rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
