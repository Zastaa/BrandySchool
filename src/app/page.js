import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Jurusan from "@/components/Jurusan";
import Fasilitas from "@/components/Fasilitas";
import FooterSection from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Jurusan />
      <Fasilitas />
      <Contact />
      <FooterSection />
    </>
  );
}
