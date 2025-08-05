"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Jurusan = () => {
  const jurusanData = [
    {
      id: 1,
      name: 'Multimedia',
      iconUrl: 'https://via.placeholder.com/150/007bff/ffffff?text=MM',
      iconBorderColor: 'border-blue-500', 
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-500', 
      shadowColor: 'shadow-blue-300',
      description: 'Kembangkan bakatmu dalam desain grafis, animasi, videografi, dan web. Jadilah kreator konten digital profesional.',
      highlights: ['Desain Grafis', 'Animasi & VFX', 'Produksi Video & Film'],
      link: '#'
    },
    {
      id: 2,
      name: 'Rekayasa Perangkat Lunak',
      iconUrl: 'https://via.placeholder.com/150/28a745/ffffff?text=RPL',
      iconBorderColor: 'border-green-500',
      textColor: 'text-green-700',
      bgColor: 'bg-green-500',
      shadowColor: 'shadow-green-300',
      description: 'Pelajari dasar-dasar pemrograman hingga pengembangan aplikasi web dan mobile yang inovatif. Siap jadi talenta IT!',
      highlights: ['Pemrograman Web', 'Pemrograman Mobile', 'Basis Data & Analisis Sistem'],
      link: '#'
    },
    {
      id: 3,
      name: 'Teknik Komputer & Jaringan',
      iconUrl: 'https://via.placeholder.com/150/ffc107/333333?text=TKJ',
      iconBorderColor: 'border-yellow-500',
      textColor: 'text-yellow-700',
      bgColor: 'bg-yellow-500',
      shadowColor: 'shadow-yellow-300',
      description: 'Kuasai instalasi, konfigurasi, dan pemeliharaan jaringan komputer. Jadilah ahli dalam infrastruktur IT.',
      highlights: ['Instalasi Jaringan', 'Administrasi Server', 'Keamanan Jaringan'],
      link: '#'
    },
    {
        id: 4,
        name: 'Desain Komunikasi Visual',
        iconUrl: 'https://via.placeholder.com/150/a855f7/ffffff?text=DKV',
        iconBorderColor: 'border-purple-500',
        textColor: 'text-purple-700',
        bgColor: 'bg-purple-500',
        shadowColor: 'shadow-purple-300',
        description: 'Ciptakan karya visual yang impactful melalui desain, ilustrasi, dan branding. Wujudkan idemu menjadi nyata.',
        highlights: ['Ilustrasi Digital', 'Desain UI/UX', 'Branding & Periklanan'],
        link: '#'
    },
    {
        id: 5,
        name: 'Akuntansi Keuangan Lembaga',
        iconUrl: 'https://via.placeholder.com/150/F472B6/ffffff?text=AKL',
        iconBorderColor: 'border-pink-500',
        textColor: 'text-pink-700',
        bgColor: 'bg-pink-500',
        shadowColor: 'shadow-pink-300',
        description: 'Pahami dasar-dasar akuntansi, pelaporan keuangan, dan perpajakan untuk karir di dunia finansial.',
        highlights: ['Pembukuan', 'Pajak', 'Audit Keuangan'],
        link: '#'
    },
    {
        id: 6,
        name: 'Otomatisasi & Tata Kelola Perkantoran',
        iconUrl: 'https://via.placeholder.com/150/60A5FA/ffffff?text=OTKP',
        iconBorderColor: 'border-indigo-500',
        textColor: 'text-indigo-700',
        bgColor: 'bg-indigo-500',
        shadowColor: 'shadow-indigo-300',
        description: 'Pelajari manajemen perkantoran modern, kearsipan, dan teknologi informasi untuk administrasi yang efisien.',
        highlights: ['Manajemen Arsip', 'Komunikasi Bisnis', 'Teknologi Perkantoran'],
        link: '#'
    }
  ];

  return (
    <section id='Jurusan' className="py-16 px-4 bg-gray-50 overflow-hidden">
      <h2 className="text-center text-gray-800 text-3xl md:text-4xl font-extrabold mb-4">
        Jelajahi Jurusan Unggulan Kami
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Geser untuk melihat lebih banyak pilihan jurusan yang akan membimbingmu meraih masa depan cerah.
      </p>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          // Install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Jarak antar slide
          slidesPerView={1} // Default: 1 slide per tampilan
          navigation // Aktifkan tombol navigasi (panah)
          pagination={{ clickable: true }} // Aktifkan indikator titik (dots)
          autoplay={{
            delay: 4500, // Otomatis geser setiap 4.5 detik
            disableOnInteraction: false, // Lanjut autoplay setelah interaksi user
          }}
          loop={true} // Membuat carousel berulang (seamless loop)
          breakpoints={{
            // Konfigurasi responsif Swiper
            640: { // md breakpoint (bisa diatur sesuai keinginan Tailwind sm/md/lg)
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: { // lg breakpoint
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="jurusan-swiper-container pb-12" // Kelas tambahan untuk styling, dan padding bawah untuk pagination dots
        >
          {jurusanData.map((jurusan) => (
            <SwiperSlide key={jurusan.id}>
              <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={jurusan.iconUrl}
                  alt={`Ikon ${jurusan.name}`}
                  className={`w-28 h-28 rounded-full object-cover mb-6 border-4 ${jurusan.iconBorderColor}`}
                />
                <h3 className={`text-2xl font-bold mb-4 ${jurusan.textColor}`}>
                  {jurusan.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  {jurusan.description}
                </p>
                <ul className="text-gray-700 list-none p-0 mb-8 w-full">
                  {jurusan.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="mb-2 flex items-center justify-center">
                      <span className={`mr-2 ${jurusan.textColor}`}>✔</span>
                      <strong className="text-base">{highlight}</strong>
                    </li>
                  ))}
                </ul>
                <a
                  href={jurusan.link}
                  className={`inline-block py-3 px-8 ${jurusan.bgColor} text-white font-semibold rounded-full shadow-lg ${jurusan.shadowColor} hover:brightness-110 hover:scale-105 transition transform duration-300 ease-out`}
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Jurusan;