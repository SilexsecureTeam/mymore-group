// src/components/TrustSection.jsx
import React, { useState } from 'react';
import { Zap, Headphones, CreditCard, Globe } from 'lucide-react';
import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotel2.jpg'
import hotel3 from '../assets/hotel3.jpg'
import hotel4 from '../assets/hotel1.jpg'
import hotel5 from '../assets/hotel2.jpg'
import hotel6 from '../assets/hotel3.jpg'
import london from '../assets/london.png'
import thailand from '../assets/thailand.png'
import london2 from '../assets/london3.png'
import london3 from '../assets/london4.png'
import sunset from '../assets/sunset.jpg'
import rightBtn from '../assets/right.png'
import leftBtn from '../assets/left.png'

const trustFeatures = [
    {
        title: 'Fast & Secure Flight Booking',
        icon: Zap,
        bg: 'bg-[#97060B] text-white',
    },
    {
        title: 'Expert Travel Support',
        icon: Headphones,
        bg: 'bg-[#D9D9D9] text-black',
    },
    {
        title: 'Secure Payment',
        icon: CreditCard,
        bg: 'bg-[#97060B] text-white',
    },
    {
        title: 'Comprehensive Travel Solutions',
        icon: Globe,
        bg: 'bg-[#D9D9D9] text-black',
    },
];

const hotels = [
    { title: 'Radisson Blu, Capetown', price: 'From N65,000/night', img: hotel1 },
    { title: 'Radisson Blu, Capetown', price: 'From N65,000/night', img: hotel2 },
    { title: 'Radisson Blu, Capetown', price: 'From N65,000/night', img: hotel3 },
    { title: 'Radisson Blu, Capetown', price: 'From N65,000/night', img: hotel4 },
    { title: 'Radisson Blu, Capetown', price: 'From N65,000/night', img: hotel5 },
    { title: 'Radisson Blu, Capetown', price: 'From N65,000/night', img: hotel6 },
];

const reviews = [
    {
        id: 1,
        name: 'Nathan Adebayo',
        location: 'Abuja, Nigeria',
        avatar: 'https://i.pravatar.cc/48?img=5',
        text: `Mymore Travels made my honeymoon stress-free and unforgettable! From flights to hotel bookings, everything was perfectly arranged. We'll definitely be booking our next trip with them.`,
        image: '/images/honeymoon.jpg',
    },
    {
        id: 2,
        name: 'Olivia Adebayo',
        location: 'Abuja, Nigeria',
        avatar: 'https://i.pravatar.cc/48?img=6',
        text: `Booking with Mymore Travels was the best decision. Their customer support was responsive and the hotel deal we got in Dubai was unbeatable. Highly recommend for anyone planning a getaway!`,
        image: '/images/dubai.jpg',
    },
    {
        id: 3,
        name: 'Olivia Adebayo',
        location: 'Abuja, Nigeria',
        avatar: 'https://i.pravatar.cc/48?img=6',
        text: `Booking with Mymore Travels was the best decision. Their customer support was responsive and the hotel deal we got in Dubai was unbeatable. Highly recommend for anyone planning a getaway!`,
        image: '/images/dubai.jpg',
    },
    {
        id: 4,
        name: 'Nathan Adebayo',
        location: 'Abuja, Nigeria',
        avatar: 'https://i.pravatar.cc/48?img=5',
        text: `Mymore Travels made my honeymoon stress-free and unforgettable! From flights to hotel bookings, everything was perfectly arranged. We'll definitely be booking our next trip with them.`,
        image: '/images/honeymoon.jpg',
    },
    // Add more reviews as needed
];

const REVIEWS_PER_PAGE = 2;


export default function TrustSection() {
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
    const currentImage = reviews[startIdx]?.image;

    return (
        <div>
            <section className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-bold !mb-2">Why Travelers Trust Mymore</h2>
                    <p className="text-gray-400 !mb-8">Delivering smarter travel solutions, every step of the way.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {trustFeatures.map(({ title, icon: Icon, bg }, i) => (
                            <div key={i} className={`${bg} p-6 flex flex-col items-center`}>
                                <Icon className="w-8 h-8 mb-4" />
                                <span className="font-medium">{title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-hotelBig text-white">
                {/* Hero Sub-section */}
                <div className="w-full bg-[rgb(0,0,0,0.4)] h-fit md:h-[350px] py-16 mx-auto px-6 md:px-24 mb-12 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 text-white !space-y-4">
                        <h2 className="text-3xl font-bold">Book Quality Hotels at the Best Rates</h2>
                        <p className="text-gray-300">
                            Discover hotel deals that match your style and budget. Whether you’re traveling for business or leisure,
                            we make it easy to find quality stays with flexible options and the best available prices.
                        </p>
                    </div>
                </div>
                {/* Grid of hotel cards */}

            </section>
            <div className="w-full mx-auto px-6 md:px-24 pb-16">
                <h3 className="text-white text-3xl font-semibold !mb-8">Handpicked hotel deals in top cities around the world.</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-x-14 !gap-y-8">
                    {hotels.map((hotel, idx) => (
                        <div key={idx} className="relative rounded-sm overflow-hidden shadow-lg">
                            <img src={hotel.img} alt={hotel.title} className="md:h-100 object-cover" />
                            <div className="absolute bottom-0 left-0 w-full p-5 shadow"
                                style={{ background: "linear-gradient(to top, #000000, #d9d9d900)", color: "#fff" }}>
                                <h4 className="text-white font-semibold text-[16px]">{hotel.title}</h4>
                                <p className="text-gray-300 text-sm italic font-normal">{hotel.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="bg-romance text-white">
                {/* Hero Sub-section */}
                <div className="w-full bg-[rgb(0,0,0,0.5)] h-fit md:h-[350px] py-16 mx-auto px-6 md:px-24 mb-12 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 text-white !space-y-4">
                        <h2 className="text-3xl font-bold">Discover Tailored Tour Packages for Every Traveler</h2>
                        <p className="text-gray-300">
                            From romantic escapes to family adventures, our curated tour packages are designed to make your travels effortless and unforgettable. Enjoy all-inclusive experiences with flights, stays, and activities  all in one place.
                        </p>
                    </div>
                </div>
                {/* Grid of hotel cards */}

            </section>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 px-6 md:px-24 py-10 gap-2 md:gap-12 bg-[#0A0A0A]">
                {/* 1st image: spans cols 1–2 on row 1 */}
                <div className="col-span-2">
                    <img src={london} alt="" className="w-full h-auto object-cover" />
                </div>

                {/* 2nd image: spans rows 1–2 in col 3 */}
                <div className="row-span-2 max-h-[550px]">
                    <img src={london2} alt="" className="w-full rounded-lg h-full object-cover" />
                </div>

                {/* 3rd image: spans rows 1–2 in col 4 */}
                <div className="row-span-2 max-h-[550px]">
                    <img src={london3} alt="" className="rounded-lg w-full h-full object-cover" />
                </div>

                {/* 4th image: spans cols 1–2 on row 2 */}
                <div className="col-span-2 row-start-2">
                    <img src={thailand} alt="" className="w-full h-auto object-cover" />
                </div>
            </div>
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
                            className="cursor-pointer bg-[#605F5F80] px-7 py-3 rounded-[10px]"

                        />
                        <img
                            src={rightBtn}
                            onClick={handleNext}
                            disabled={page === totalPages - 1}
                            className="cursor-pointer bg-[#605F5F80] px-7 py-3 rounded-[10px]"

                        />
                    </div>
                </div>

                {/* Right Reviews Section */}
                <div className="md:w-1/2 w-full pl-0 md:pl-12 md:!-mt-90 relative">
                    <h2 className="text-3xl text-[#D9D9D9] font-normal md:pl-20 !mb-10 md:!mb-20 md:max-w-[60%]">What Our Customers Say About Us</h2>
                    <div className="flex flex-col md:flex-row p-2 pb-2 gap-3 md:p-5 md:gap-5 !space-y-6 absolute bg-[#605F5F80] left-0 md:-left-40 w-full md:w-[100%]">
                        {currentReviews.map((r) => (
                            <div key={r.id} className="px-4 md:px-6 py-6 h-fit bg-[#000000] md:py-12 md:h-[400px] !space-y-2 md:!space-y-5">
                                <div className="text-5xl">
                                    &ldquo;
                                </div>
                                <p className="text-gray-100 -mt-3 font-light leading-relaxed">{r.text}</p>
                                <div className="flex items-center">
                                    <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full mr-4" />
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
                                className="cursor-pointer bg-[#605F5F80] px-7 py-3 rounded-[10px]"

                            />
                            <img
                                src={rightBtn}
                                onClick={handleNext}
                                disabled={page === totalPages - 1}
                                className="cursor-pointer bg-[#605F5F80] px-7 py-3 rounded-[10px]"

                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}