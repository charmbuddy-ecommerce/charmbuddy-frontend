"use client";
import { useState } from "react";
import Image from "next/image";

// Data produk contoh
const products = [
  {
    id: 1,
    name: "Melted Rose",
    category: "Necklace",
    image: "/necklace1.png", // Ganti dengan path gambar kamu
  },
  {
    id: 2,
    name: "Blueberry Pearl",
    category: "Bracelet",
    image: "/necklace2.png",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#f1fbe9] overflow-hidden">
      
      {/* 1. Efek Glow di Tengah (Radial Gradient) */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-200/50 blur-[100px] -z-10" />

      {/* 2. Header Text */}
      <h2 className="text-4xl md:text-5xl font-serif text-blue-800/80 mb-12 tracking-wide drop-shadow-sm">
        Find your bloom
      </h2>

      <div className="relative flex items-center justify-between w-full max-w-4xl px-4">
        
        {/* Tombol Kiri (SVG Manual) */}
        <button onClick={prevSlide} className="p-2 transition hover:scale-110">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbdcfd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* 3. Area Produk */}
        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
            <Image
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              fill
              className="object-contain"
            />
          </div>

          {/* 4. Deskripsi Produk */}
          <div className="text-center">
            <h3 className="text-3xl font-serif text-blue-900 border-b-2 border-blue-900 inline-block px-2">
              {products[currentIndex].name}
            </h3>
            <p className="text-blue-700/60 mt-2 tracking-widest uppercase text-sm">
              {products[currentIndex].category}
            </p>
          </div>
        </div>

        {/* Tombol Kanan (SVG Manual) */}
        <button onClick={nextSlide} className="p-2 transition hover:scale-110">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbdcfd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

    </div>
  );
}