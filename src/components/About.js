import React from 'react';

const About = () => {
  return (
    <section id='About' className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-20 flex-col lg:flex-row bg-white p-6 lg:p-12 w-full gap-8 lg:gap-16">
      <div className="flex-1 lg:flex-[1.5] flex flex-col gap-6 lg:gap-10">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-1 text-green-600 text-sm font-semibold">
              <span className="h-2 w-4 bg-green-200 rounded-full inline-block"></span>
              <span className="h-2 w-4 bg-green-300 rounded-full inline-block"></span>
              <span className="h-2 w-4 bg-green-400 rounded-full inline-block"></span>
              <span className="transform -rotate-45">↗</span>
          </div>
          <p className="text-4xl font-bold text-gray-900 mb-1 italic">[Tagline Sekolah]</p>
          <p className="text-sm text-gray-500">
            Merupakan sekolah unggulan yang berdiri sejak tahun 2000.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-xl bg-purple-100 p-4 flex flex-col items-center justify-end h-72 sm:h-80 md:h-96">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/images/kamvak2.jpg')] bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative text-center p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 text-3xl text-white">
                Apa itu Brandy's
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-purple-100 p-4 flex flex-col items-center justify-end h-72 sm:h-80 md:h-96">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/images/kamvak.webp')] bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative text-center p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 text-3xl text-white">
                Apa itu Brandy's
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Right Section: About Us Text */}
      <div className="flex-1 lg:flex-[1] flex flex-col justify-center text-center lg:text-left">
        <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">SEDIKIT</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          TENTANG KAMI
        </h2>
        <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          <strong>[Nama Sekolah Anda]</strong> adalah lembaga pendidikan yang berkomitmen penuh untuk membentuk generasi unggul. Kami menyediakan lingkungan belajar yang inspiratif dan suportif, fokus pada pengembangan akademis dan karakter siswa untuk masa depan yang cerah.
        </p>
        <a
          href="#explore"
          className="self-center lg:self-start bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 active:scale-95 inline-block" // Menambahkan inline-block dan font-semibold, mengubah py-3 jadi py-4, rounded-full jadi rounded-lg
        >
          EXPLORE MORE
        </a>
      </div>
    </section>
  );
};

export default About;