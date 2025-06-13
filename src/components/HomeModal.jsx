// src/components/Modal.jsx
import React, { useState, useEffect } from 'react';

export default function HomeModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(0,0,0,0.4)] bg-opacity-95">
            <div className="relative md:w-[60%] py-30 w-full bg-[#780000] px-16 rounded-lg text-center text-white">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-4xl font-bold hover:opacity-75"
                >
                    ×
                </button>

                {/* Emoji + Title */}
                <div className="text-2xl mb-4">
                    ✈️ Looking to Book a Flight? <br />
                    You’re now on Mymore Travels for a seamless booking experience, continue to our main site.
                </div>

                {/* Body copy */}
                <p className="!mb-6">
                    
                </p>

                {/* Action button */}
                <div class="cursor-pointer bg-gradient-to-r to-[#D9D9D9] w-fit mx-auto from-[#780000] p-[1px] rounded hover:bg-gradient-to-l">
                    <div class="bg-black px-6 py-2 rounded font-medium"><a target='_blank' href="https://flightandticketing.com/">Book Flight Now</a></div>
                </div>
            </div>
        </div>
    );
}
