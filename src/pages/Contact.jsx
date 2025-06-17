import React from "react";
import Header from "../components/Header";
import Hero from "../components/contact/Hero";
import ContactInfoForm from "../components/contact/ContactInfoForm";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <Header />
      {/* Main Contact Page Content */}
      <div className="bg-[#F5F5F5] text-[#4D4D4D] font-sans">
        {/* Hero Section */}
        <Hero />

        {/* Contact Info & Form */}
        <ContactInfoForm />

        {/* Map Section */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.245273492166!2d7.4602!3d9.0571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0c7b6efcd8a3%3A0xd6b98bb121a1943b!2sMYMORE%20TRAVELS%20SERVICES!5e0!3m2!1sen!2sng!4v1718659600000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="bg-black text-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
