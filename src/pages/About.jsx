
import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/HeroAbout';
import AboutBody from '../components/aboutBody';
import Footer from '../components/Foter';

export default function About() {
    return (
        <div className="font-sans bg-black">
            <Header />
            <AboutHero />
            <AboutBody />
            <Footer />
        </div>
    );
}