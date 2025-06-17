import Header from "../components/Header";
import CareerHero from "../components/career/HeroCareer";
import CareerBody from "../components/CareerBody";
import Footer from "../components/Footer";
import heroImg from "../assets/career-img2.jpg";
export default function Career() {
  return (
    <div className="font-sans bg-black">
      <Header />
      <CareerHero
        title="Do more than work. Be part of something meaningful."
        subtitle="At MyMore Travels, we’re not just booking trips we’re building memories, empowering families, and making the world more accessible through travel."
        image={heroImg}
      />
      <CareerBody />
      <Footer />
    </div>
  );
}
