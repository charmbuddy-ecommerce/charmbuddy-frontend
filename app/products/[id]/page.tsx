'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, ShoppingBag, Heart, ShieldCheck, Sparkles, ArrowLeft, Plus, Minus } from 'lucide-react';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Sample mock product detail
  const product = {
    id: id || '1',
    name: 'Melted Rose Necklace',
    category: 'Necklace',
    price: 35,
    originalPrice: 45,
    rating: 4.9,
    reviewsCount: 128,
    image: '/images/hero-charm.png',
    description:
      'Handcrafted with meticulous detail, the Melted Rose Necklace captures the poetic beauty of blooming florals frozen in delicate glass and silver-toned hardware. Every bead is handpicked to reflect light gracefully on your neckline.',
    materials: [
      'Stainless steel chain (anti-tarnish & hypoallergenic)',
      'Handcrafted resin & glass floral pendant',
      'Freshwater pearls & iridescent crystal beads',
      'Adjustable clasp: 40cm + 5cm extension',
    ],
  };

  const handleAddToCart = () => {
    alert(`Berhasil menambahkan ${quantity}x ${product.name} ke keranjang!`);
  };

  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1285px] mx-auto px-6 py-12 relative z-10">
        {/* Back Link */}
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2 font-satoshi text-sm text-gray-500 hover:text-black mb-8 transition"
        >
          <ArrowLeft size={16} />
          <span>Back to Catalogue</span>
        </Link>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Product Image Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative w-full h-[450px] sm:h-[550px] rounded-[36px] bg-[#f7f7fc] border border-black/5 overflow-hidden shadow-sm flex items-center justify-center p-8">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                priority
              />
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-5 right-5 p-3 rounded-full bg-white/80 hover:bg-white text-black backdrop-blur-md shadow-sm transition cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart
                  size={20}
                  className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                />
              </button>
            </div>

            {/* Thumbnail Preview Row */}
            <div className="grid grid-cols-4 gap-4">
              {['/images/hero-charm.png', '/images/match-1.png', '/images/match-2.png', '/images/match-3.png'].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="relative h-24 rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden cursor-pointer hover:border-[#8798FF] transition"
                  >
                    <Image src={src} alt="Thumbnail" fill className="object-contain p-2" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#705CB2]/10 text-[#705CB2] font-satoshi font-bold text-xs uppercase tracking-widest mb-3">
                {product.category}
              </span>
              <h1 className="font-fanlste text-4xl sm:text-5xl text-black leading-tight mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400" />
                  ))}
                </div>
                <span className="font-satoshi font-bold text-sm text-black">
                  {product.rating}
                </span>
                <span className="text-gray-400 text-xs">
                  ({product.reviewsCount} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 py-4 border-y border-black/10">
              <span className="font-fanlste text-4xl font-bold text-black">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-fanlste text-xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 font-satoshi font-bold text-xs">
                Save ${product.originalPrice - product.price}
              </span>
            </div>

            {/* Description */}
            <p className="font-satoshi text-base text-black/80 leading-relaxed">
              {product.description}
            </p>

            {/* Materials & Specs */}
            <div className="p-5 rounded-2xl bg-[#E5E4F2]/50 border border-black/5 space-y-2">
              <h3 className="font-satoshi font-bold text-sm text-black uppercase tracking-wider mb-2">
                Materials & Specifications:
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-black/75 font-satoshi list-disc list-inside">
                {product.materials.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              {/* Stepper */}
              <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-full border border-black/20 bg-gray-50 w-full sm:w-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                  aria-label="Kurangi"
                >
                  <Minus size={16} />
                </button>
                <span className="font-satoshi font-bold text-base w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                  aria-label="Tambah"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 w-full py-3.5 px-6 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-bold text-base flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
              >
                <ShoppingBag size={18} />
                <span>Add to Cart (${product.price * quantity})</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-satoshi text-black/70">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                <span>Garansi 100% Produk Original</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#705CB2] shrink-0" />
                <span>Free Pouch Packaging Aesthetic</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
