import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestomonial from "@/components/MusicSchoolTestomonial";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestomonial />
    </main>
  );
}
