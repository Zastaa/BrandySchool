"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollThreshold = vh + 1;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md px-6 py-3 z-50 max-w-6xl w-[90%] transition-colors duration-300
        ${isScrolled ? 'bg-black/40 border-black/40' : 'bg-white/40 border-white/40 backdrop-blur-md'}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg text-white">
          Brandy's
        </div>

        <div className="hidden md:flex space-x-8 text-white">
          <a href="#Hero" className="hover:text-blue-300 transition">Home</a>
          <a href="#About" className="hover:text-blue-300 transition">About</a>
          <a href="#Jurusan" className="hover:text-blue-300 transition">Jurusan</a>
          <a href="#Fasilitas" className="hover:text-blue-300 transition">Fasilitas</a>
        </div>

        <button
          type="button"
          className="block md:hidden text-white hover:text-blue-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 space-y-2 text-white">
          <a href="#Hero" className="block hover:text-blue-300 transition">Home</a>
          <a href="#About" className="block hover:text-blue-300 transition">About</a>
          <a href="#Jurusan" className="block hover:text-blue-300 transition">Jurusan</a>
          <a href="#Fasilitas" className="block hover:text-blue-300 transition">Fasilitas</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
