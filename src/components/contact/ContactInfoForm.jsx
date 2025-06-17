import React from "react";
import LineDesign from "../LineDesign";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
const ContactInfoForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16 bg-white">
      {/* Left: Info */}
      <div className="space-y-8">
        <div>
          <h2 className="text-red-700 text-xl font-bold mb-2">Get In Touch</h2>
          <LineDesign />
        </div>
        <h3 className="text-2xl font-semibold max-w-sm pb-4">
          We’re always ready to help you and answer your questions
        </h3>
        <LineDesign />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="font-medium text-red-700 pb-2">Call center</p>
            <p>+234 8022 888 721</p>
            <p>+234 8022 888 721</p>
          </div>
          <div>
            <p className="font-medium text-red-700 pb-2">Email Address</p>
            <p>support@mymoretravels.com</p>
          </div>
          <div>
            <p className="font-medium text-red-700 pb-2">Our Office</p>
            <p>Address: Suite A061, H & A Plaza, Wuye Cres, Abuja 900271</p>
          </div>
          <div>
            <p className="font-medium text-red-700">Social Network</p>
            <div className="flex gap-4 text-xl mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Right: Form */}
      <form className="bg-black text-white p-8 rounded-md space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent border-b py-2 outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent border-b py-2 outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full bg-transparent border-b py-2 outline-none"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full bg-white text-black p-4 rounded-md resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-3 rounded-md w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactInfoForm;
