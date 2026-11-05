'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselProducts = [
  {
    id: 1,
    name: 'Melted Rose',
    category: 'Necklace',
    image: '/images/hero-charm.png',
    price: 35,
    description: 'Delicate floral pendant strung on a dreamy iridescent beaded chain.',
  },
  {
    id: 2,
    name: 'Blueberry Pearl',
    category: 'Bracelet',
    image: '/images/match-1.png',
    price: 28,
    description: 'Charming deep blue berries intertwined with lustrous freshwater pearls.',
  },
  {
    id: 3,
    name: 'Lilac Dream',
    category: 'Bag Charm',
    image: '/images/match-2.png',
    price: 22,
    description: 'Pastel purple aesthetic ribbons and metallic star charms.',
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselProducts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselProducts.length - 1 ? 0 : prev + 1));
  };

  const current = carouselProducts[currentIndex];

  return (
    <section className="w-full max-w-[1111px] mx-auto px-4 my-24 flex flex-col items-center">
      {/* Title matching Figma */}
      <h2 className="text-4xl md:text-6xl text-center mb-12 text-black font-satoshi font-medium">
        Your Everyday <span className="font-fanlste italic font-normal">*Bloom*</span>
      </h2>

      {/* Main Glassmorphic Card Container */}
      <div className="w-full rounded-[50px] bg-[rgba(112,92,178,0.3)] border border-white/40 backdrop-blur-md px-6 md:px-14 py-12 md:py-16 flex flex-col items-center justify-between shadow-lg relative min-h-[550px] md:min-h-[680px]">
        
        <div className="w-full flex items-center justify-between gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md shrink-0 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Center Product Display */}
          <div className="flex-1 flex flex-col items-center text-center animate-in fade-in duration-300">
            {/* 3D Necklace / Charm Image */}
            <div className="relative w-64 h-64 md:w-[480px] md:h-[380px] mb-6">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-300"
                priority
              />
            </div>

            {/* Product Titles matching Figma */}
            <h3 className="font-fanlste text-3xl md:text-5xl text-black underline tracking-wider mb-2">
              {current.name}
            </h3>
            <p className="font-fanlste text-xl md:text-3xl text-black tracking-[0.2em] uppercase">
              {current.category}
            </p>

            <Link
              href="/catalogue"
              className="mt-6 px-6 py-2.5 rounded-full bg-white/70 hover:bg-white text-black font-satoshi font-semibold text-sm tracking-wider transition hover:shadow-md"
            >
              View in Catalogue
            </Link>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md shrink-0 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3 mt-8">
          {carouselProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#8798FF]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
