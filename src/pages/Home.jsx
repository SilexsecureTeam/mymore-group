
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Foter';
import HomeModal from '../components/HomeModal';

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // show on first mount
        setShowModal(true);
    }, []);
    return (
        <div className="font-sans bg-black">
            {showModal && <HomeModal onClose={() => setShowModal(false)} />}
            <Header />
            <Hero />
            <TrustSection />
            <Footer />
        </div>
    );
}