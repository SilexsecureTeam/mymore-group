import { useState } from 'react';
import storyImg from '../assets/storyMan.svg';
import patner1 from '../assets/p1.svg';
import patner2 from '../assets/p2.png';
import patner3 from '../assets/p3.png';
import patner4 from '../assets/p4.png';
import patner5 from '../assets/p5.png';
import patner6 from '../assets/p6.png';
import girl from '../assets/aboutbottom.svg';
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.png'
import offer3 from '../assets/offer3.png'
import offer4 from '../assets/offer4.png'
import offer5 from '../assets/offer5.png'
import offer6 from '../assets/offer6.png'
import offer7 from '../assets/offer7.png'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import flight from '../assets/flight.png'
import sunset from '../assets/sunset.jpg'
import rightBtn from '../assets/right.png'
import leftBtn from '../assets/left.png'

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


export default function ServiceBody() {

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
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-24 py-10 pb-20 bg-[#F0EFE7] text-[#FFFFFF]'>
                <div className=' bg-[#780000] px-6 py-10 pb-20 rounded-[10px] space-y-10'>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#100E0E] px-6 py-10 pb-20 rounded-[10px] space-y-10'>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={flight} alt="" className='border-[5px] border-[#EACECE] bg-white p-0.5 rounded-[50%] w-[30px]' />
                        <div className='max-w-[60%]'>
                            <p className='font-semibold text-[15px]'>Flight Bookings</p>
                            <p className='font-light text-sm'>Find and book affordable flights to your dream destinations with flexible options and trusted airlines.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10 px-8 md:px-0 bg-[white]'>
                <p className='text-[#000000] text-[20px] font-bold md:pl-24 !mb-5'>We trusted by Global Partners</p>
                <div className="overflow-hidden w-full bg-white py-4">
                    <div className="scroll-x-animation items-center space-x-14">
                        {[...Array(3)].flatMap(() =>
                            [patner1, patner2, patner3, patner4, patner5, patner6].map((src, index) => (
                                <div key={index + src} className="max-w-[130px] h-auto shrink-0">
                                    <img src={src} alt={`partner-${index}`} className="w-full h-auto object-contain" />
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </section>
            <section className="w-full mx-auto px-24 py-12 pb-30 bg-[#780000] text-white">
                <h3 className='font-semibold text-[17px]'>
                    How it Works
                </h3>
                <p className='font-light !mt-3 text-sm'>Seamless Travel in 3 Simple Steps</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-[#D9D9D9]'>
                    <div className='!space-y-3'>
                        <p className='bg-black px-4 font-bold py-2 rounded-[50%] flex justify-center w-fit'>1</p>
                        <p className=' font-semibold !mb-1'>Choose a Service</p>
                        <p>Select what you need from flights, hotels, or other services.</p>
                    </div>
                    <div className='!space-y-3'>
                        <p className='bg-black px-4 font-bold py-2 rounded-[50%] flex justify-center w-fit'>2</p>
                        <p className=' font-semibold !mb-1'>Share Your Info</p>
                        <p>Submit a quick form or speak with our agent to personalize your booking</p>
                    </div>
                    <div className='!space-y-3'>
                        <p className='bg-black px-4 font-bold py-2 rounded-[50%] flex justify-center w-fit'>3</p>
                        <p className=' font-semibold !mb-1'>Relax & Go</p>
                        <p>We take care of the rest — all you do is pack your bags and enjoy your trip.</p>
                    </div>
                </div>
            </section>
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