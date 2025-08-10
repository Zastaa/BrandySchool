"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-fade'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

const images = [
  '/images/kamvak.webp',
  '/images/kamvak2.jpg',
  '/images/kamvak3.webp',
];

const Hero = () => {
  return (
    <section id='Hero' className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Container Swiper Latar Belakang */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect={"fade"} 
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false,
          }}
          loop={true} 
          speed={1000} 
          pagination={{ clickable: true }}
          navigation={false}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-black opacity-80"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Konten Teks dan Tombol (Berada di atas carousel) */}
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Selamat Datang di <span className="text-blue-400">Brandly's</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
          Sekolah unggulan yang mengedepankan kualitas pendidikan dan pengembangan karakter siswa secara holistik.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#pendaftaran"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            <FaWhatsapp /> Hubungi Kami
          </a>
          <a
            href="#about"
            className="flex items-center justify-center gap-2 text-blue-300 font-semibold px-8 py-4 rounded-lg hover:underline transition duration-300"
          >
            <FaInstagram /> Lihat Sosial Media &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;