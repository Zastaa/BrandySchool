import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Jurusan from "@/components/Jurusan";
import Fasilitas from "@/components/Fasilitas";
import FooterSection from "@/components/Footer";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import GuruDanStaff from "@/components/Guru";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Jurusan />
      <Fasilitas />
      <GuruDanStaff />
      <Contact />
      <FooterSection />
    </>
  );
}
