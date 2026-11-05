'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard, { Product } from '@/components/ProductCard';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Melted Rose Necklace',
    category: 'Necklace',
    price: 35,
    originalPrice: 42,
    rating: 4.9,
    image: '/images/hero-charm.png',
  },
  {
    id: 2,
    name: 'Blueberry Pearl Charm',
    category: 'Bracelet',
    price: 28,
    originalPrice: 34,
    rating: 4.8,
    image: '/images/match-1.png',
  },
  {
    id: 3,
    name: 'Lilac Dream Strap',
    category: 'Phonestrap',
    price: 18,
    originalPrice: 24,
    rating: 5.0,
    image: '/images/match-2.png',
  },
  {
    id: 4,
    name: 'Sweet Violet Crochet',
    category: 'Crochet Stuff',
    price: 25,
    originalPrice: 30,
    rating: 4.9,
    image: '/images/product-sample.png',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sammy',
    review: 'Bagus banget braceletnya, cantik ketika dipakai',
  },
  {
    id: 2,
    name: 'Clara',
    review: 'Necklace-nya gemas pol! Detailnya rapi dan packagingnya aesthetic banget.',
  },
  {
    id: 3,
    name: 'Naomi',
    review: 'Custom phonestrap sesuai request, hasilnya super cute & tahan lama!',
  },
];

const faqs = [
  {
    question: 'Bagaimana cara melakukan custom charm atau aksesoris?',
    answer:
      'Kamu bisa memilih base necklace/bracelet di katalog, lalu gunakan fitur customize atau hubungi kami lewat WhatsApp untuk request kombinasi manik-manik dan pendant impianmu!',
  },
  {
    question: 'Berapa lama estimasi pengerjaan dan pengiriman?',
    answer:
      'Untuk produk ready stock akan dikirim dalam 1-2 hari kerja. Untuk custom handmade berkisar 3-5 hari kerja sebelum dikirim melalui ekspedisi pilihanmu.',
  },
  {
    question: 'Apakah bahan yang digunakan tahan air dan tidak mudah berkarat?',
    answer:
      'Kami menggunakan stainless steel berkualitas tinggi, manik-manik kaca kristal, dan freshwater pearl yang tahan lama. Namun disarankan untuk menghindari kontak langsung dengan parfum atau bahan kimia keras.',
  },
  {
    question: 'Bagaimana kebijakan retur jika barang yang diterima rusak?',
    answer:
      'Sertakan video unboxing tanpa jeda dalam waktu 1x24 jam setelah pesanan diterima. Tim customer service kami akan siap membantu penukaran barang atau pengembalian dana.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-charmbuddy-home text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      {/* Floating Header */}
      <Navbar />

      {/* Main Content with z-10 */}
      <div className="relative z-10">

      {/* 1. HERO SECTION (Figma #223:242 & #36:2) */}
      <section className="max-w-[1333px] mx-auto px-6 pt-12 md:pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        {/* Left Typography */}
        <div className="flex-1 flex flex-col items-start gap-6 z-10">
          <h1 className="font-fanlste text-6xl sm:text-8xl lg:text-[110px] leading-[0.95] text-black tracking-tight drop-shadow-sm">
            Be My Bloo
          </h1>

          <p className="font-satoshi text-2xl md:text-3xl lg:text-4xl font-medium text-black max-w-[650px] leading-tight">
            Handcrafted accessories designed to let your true colors bloom.
          </p>

          <p className="font-fanlste italic text-xl md:text-2xl lg:text-3xl text-black/90 tracking-widest">
            Mix, match, and customize your everyday charms!
          </p>

          <div className="pt-2">
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[rgba(89,0,255,0.1)] hover:bg-[rgba(89,0,255,0.18)] border border-white/60 shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 group"
            >
              <span className="font-satoshi text-xl md:text-2xl font-medium text-black">
                Find Your <span className="font-fanlste italic">*Bloom*</span>
              </span>
              <Sparkles className="w-5 h-5 text-[#705CB2] group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right 3D Visual Asset */}
        <div className="flex-1 relative w-full h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center">
          <div className="relative w-full h-full max-w-[650px] animate-pulse-slow">
            <Image
              src="/images/hero-charm.png"
              alt="Handcrafted Bloom Necklace"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. CAROUSEL SECTION (Figma #227:320) */}
      <ProductCarousel />

      {/* 3. CATALOGUE PREVIEW SECTION (Figma #260:948) */}
      <section className="max-w-[1333px] mx-auto px-6 my-24 flex flex-col items-center">
        {/* Section Badge matching Figma #260:949 */}
        <div className="px-12 py-3 rounded-full bg-[rgba(165,186,255,0.5)] border border-white/40 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-md mb-16">
          <h2 className="font-fanlste italic text-3xl md:text-4xl text-black tracking-widest">
            Catalogue
          </h2>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-items-center mb-12">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-semibold tracking-wide transition-all shadow-md hover:scale-105 cursor-pointer"
        >
          <span>Explore All Collections</span>
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* 4. FIND YOUR PERFECT MATCH SECTION (Figma #227:345) */}
      <section className="max-w-[1333px] mx-auto px-6 my-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Column: Heading + 2 Photos */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h2 className="font-fanlste text-4xl sm:text-5xl lg:text-6xl text-black leading-tight">
                Find Your Perfect <span className="italic">*Match*</span>
              </h2>
              <p className="font-satoshi text-lg sm:text-xl text-black/80 font-medium leading-relaxed">
                More than just an accessory, it&apos;s a piece of your personality. Find your bloom and wear what makes you smile.
              </p>
              <div>
                <Link
                  href="/catalogue"
                  className="inline-block px-7 py-2.5 rounded-full bg-[rgba(89,0,255,0.1)] hover:bg-[rgba(89,0,255,0.2)] border border-white/40 shadow-sm backdrop-blur-md font-satoshi font-bold text-black tracking-wider transition hover:scale-105"
                >
                  Get <span className="font-fanlste italic font-normal">*Styling*</span>
                </Link>
              </div>
            </div>

            {/* 2 Photos below */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 md:h-56 rounded-[40px] overflow-hidden shadow-sm">
                <Image
                  src="/images/match-1.png"
                  alt="Styling Inspo 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 md:h-56 rounded-[40px] overflow-hidden shadow-sm">
                <Image
                  src="/images/match-2.png"
                  alt="Styling Inspo 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Middle Column: 2 Photos */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="relative h-56 md:h-64 rounded-[40px] overflow-hidden shadow-sm">
              <Image
                src="/images/match-3.png"
                alt="Styling Inspo 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 md:h-[420px] rounded-[40px] overflow-hidden shadow-sm">
              <Image
                src="/images/match-4.png"
                alt="Styling Inspo 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: 2 Photos */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="relative h-72 md:h-[350px] rounded-[40px] overflow-hidden shadow-sm">
              <Image
                src="/images/match-5.png"
                alt="Styling Inspo 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-60 md:h-72 rounded-[40px] overflow-hidden shadow-sm">
              <Image
                src="/images/match-6.png"
                alt="Styling Inspo 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (Figma #260:950) */}
      <section className="max-w-[1333px] mx-auto px-6 my-28 flex flex-col items-center">
        <h2 className="font-fanlste text-4xl sm:text-5xl lg:text-6xl text-center mb-14 text-black">
          <span className="font-satoshi font-bold">Real </span>
          <span className="italic">*Smiles*</span>
          <span className="font-satoshi font-bold">, Real </span>
          <span className="italic">*Blooms*</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-[40px] md:rounded-[50px] bg-[rgba(165,186,255,0.45)] border border-white/60 shadow-md backdrop-blur-md flex flex-col justify-center items-center text-center min-h-[170px] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-satoshi font-black text-2xl text-black mb-3">
                {item.name}
              </h3>
              <p className="font-satoshi text-base text-black/90 font-medium leading-relaxed">
                &ldquo;{item.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION (Figma #304:371) */}
      <section className="max-w-[1192px] mx-auto px-6 my-28 flex flex-col items-center">
        <h2 className="font-fanlste text-4xl sm:text-5xl lg:text-6xl text-center mb-14 text-black">
          <span className="font-satoshi font-bold">Your Guide to </span>
          <span className="italic">*Blooming*</span>
        </h2>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-[25px] bg-[rgba(255,255,255,0.7)] border border-black/10 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-black/[0.02] transition-colors"
                >
                  <span className="font-satoshi font-black text-xl md:text-2xl text-black">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#8798FF] text-white' : 'text-black'}`}>
                    <ChevronDown size={22} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-6 pt-1 text-black/75 font-satoshi text-base md:text-lg leading-relaxed border-t border-black/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
