
import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/HeroServices';
import ServiceBody from '../components/ServiceBody';
import Footer from '../components/Foter';

export default function Services() {
    return (
        <div className="font-sans bg-black">
            <Header />
            <ServiceHero />
            <ServiceBody />
            <Footer />
        </div>
    );
}