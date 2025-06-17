import contactImg from "../../assets/contact.jpg"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[400px] text-white flex items-center px-10 mt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactImg})`,
      }}
    >
      <div>
        <h1 className="text-4xl font-bold mb-4">Contact us</h1>
        <p className="max-w-lg text-lg">
          Have a question or special travel request? Whether you're seeking
          family-friendly recommendations, wheelchair-accessible accommodations,
          or tailored support for loved ones with additional needs, we're here
          to help.
        </p>
      </div>
    </div>
  );
};

export default Hero;
