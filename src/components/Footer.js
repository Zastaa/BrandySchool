"use client";

import React from "react";

const FooterSection = () => {
  return (
    <footer id="Footer" className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Info Sekolah */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Brandy's</h3>
          <p className="text-sm leading-relaxed">
            Jalan Raya Cibinong No. 123, Bogor, Jawa Barat <br />
            Telepon: (0251) 1234567 <br />
            Email: info@Brandy's.sch.id
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Tautan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#program" className="hover:text-blue-400 transition">
                Program Studi
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
          <p className="text-sm mb-2">Email: info@Brandy's.sch.id</p>
          <p className="text-sm mb-2">Telepon: (0251) 1234567</p>
          <p className="text-sm">Fax: (0251) 7654321</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sosial Media</h4>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com/Brandy's" aria-label="Facebook" className="hover:text-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.15 1.8.15v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://instagram.com/Brandy's" aria-label="Instagram" className="hover:text-pink-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37a4 4 0 1 1-7.99 1.25 4 4 0 0 1 7.99-1.25z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a href="https://twitter.com/Brandy's" aria-label="Twitter" className="hover:text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.54A4.48 4.48 0 0 0 22.4.36a9.14 9.14 0 0 1-2.88 1.11 4.5 4.5 0 0 0-7.69 3.06A12.9 12.9 0 0 1 2 2.89a4.5 4.5 0 0 0 1.39 6 4.48 4.48 0 0 1-2.05-.56v.06a4.5 4.5 0 0 0 3.6 4.41 4.48 4.48 0 0 1-2.04.07 4.5 4.5 0 0 0 4.2 3.13A9 9 0 0 1 1 19.54 12.9 12.9 0 0 0 7.29 21c8.7 0 13.46-7.2 13.46-13.46 0-.2 0-.42-.02-.63A9.56 9.56 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Brandy's. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
