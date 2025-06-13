
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CareerHero from '../components/HeroCareer';
import CareerBody from '../components/CareerBody';
import Footer from '../components/Foter';
import HomeModal from '../components/HomeModal';

export default function Career() {
    return (
        <div className="font-sans bg-black">
            <Header />
            <CareerHero />
            <CareerBody />
            <Footer />
        </div>
    );
}