"use client";

import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="bg-white py-14 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Embed Google Maps iframe */}
        <div className="w-full h-80 md:h-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Lokasi Brandy's"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3028464859534!2d106.83028631533316!3d-6.50299349432639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c0e98e80f083%3A0x135fc0c7a5aafbb2!2sSMKN%201%20Cibinong!5e0!3m2!1sen!2sid!4v1691222330778!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>

        {/* Info Kontak */}
        <div className="flex flex-col justify-center px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Lokasi & Kontak Kami</h2>
          <p className="text-gray-700 mb-4">
            Brandy's berlokasi di pusat kota Cibinong dengan akses mudah dan fasilitas lengkap.
          </p>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            <li>
              <strong>Alamat:</strong> Jl. Raya Cibinong No.123, Kabupaten Bogor, Jawa Barat
            </li>
            <li>
              <strong>Telepon:</strong> (0251) 1234567
            </li>
            <li>
              <strong>Email:</strong> info@Brandy's.sch.id
            </li>
            <li>
              <strong>Jam Kerja:</strong> Senin - Jumat, 08.00 - 16.00
            </li>
          </ul>
          <a
            href="https://goo.gl/maps/your-school-location"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
