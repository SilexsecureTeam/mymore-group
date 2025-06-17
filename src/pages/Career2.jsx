import Header from "../components/Header";
import CareerHero from "../components/career/HeroCareer";
import Footer from "../components/Footer";
import heroImg from "../assets/career-img.jpg";
import CareerContent from "../components/career/CareerContent";
export default function Career2() {
  return (
    <div className="font-sans bg-black">
      <Header />
      <CareerHero
        title="Career Opportunities"
        subtitle="Ready to make travel better for everyone? Join a team that’s passionate about creating meaningful journeys and unforgettable experiences."
        image={heroImg}
      />
      <CareerContent />
      <Footer />
    </div>
  );
}
