'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import { Search, RotateCcw } from 'lucide-react';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Melted Rose Necklace',
    category: 'Necklace',
    price: 35,
    originalPrice: 45,
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
  {
    id: 5,
    name: 'Silver Dew Choker',
    category: 'Necklace',
    price: 42,
    originalPrice: 50,
    rating: 4.9,
    image: '/images/match-3.png',
  },
  {
    id: 6,
    name: 'Moonlit Garden Bag Charm',
    category: 'Bag Charm',
    price: 24,
    originalPrice: 30,
    rating: 4.7,
    image: '/images/match-4.png',
  },
  {
    id: 7,
    name: 'Pastel Dream Bracelet',
    category: 'Bracelet',
    price: 22,
    originalPrice: 28,
    rating: 4.8,
    image: '/images/match-5.png',
  },
  {
    id: 8,
    name: 'Lavender Bloom Strap',
    category: 'Phonestrap',
    price: 16,
    originalPrice: 20,
    rating: 4.9,
    image: '/images/match-6.png',
  },
];

const categories = [
  'All',
  'Necklace',
  'Bracelet',
  'Bag Charm',
  'Phonestrap',
  'Crochet Stuff',
];

export default function CataloguePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(100);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMaxPrice(100);
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory =
        selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchPrice = product.price <= maxPrice;
      return matchSearch && matchCategory && matchPrice;
    });
  }, [searchQuery, selectedCategory, maxPrice]);

  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1333px] mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT SIDEBAR FILTERS (Figma #58:180) */}
          <aside className="w-full lg:w-[290px] p-6 rounded-[24px] bg-white/40 border border-black/15 backdrop-blur-md shadow-sm shrink-0">
            {/* Header: Filters + Reset */}
            <div className="flex items-center justify-between pb-4 border-b border-black/20">
              <h2 className="font-satoshi font-black text-2xl tracking-wider text-black">
                Filters
              </h2>
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-black/30 hover:bg-black/5 text-sm font-satoshi font-bold text-black transition cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>

            {/* Search Input matching Figma #58:177 */}
            <div className="my-6">
              <div className="w-full px-4 py-2.5 rounded-2xl bg-[#705CB2] text-white flex items-center justify-between shadow-sm">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search charms..."
                  className="w-full bg-transparent text-white font-satoshi text-sm placeholder-white/70 focus:outline-none"
                />
                <Search size={18} className="text-white/80 shrink-0 ml-2" />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4 mb-8">
              <h3 className="font-satoshi font-bold text-lg text-black">
                Categories
              </h3>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="w-4 h-4 text-[#705CB2] focus:ring-[#705CB2] cursor-pointer"
                    />
                    <span className={`font-satoshi text-base transition-colors ${
                      selectedCategory === cat ? 'font-bold text-[#705CB2]' : 'text-black/80 group-hover:text-black'
                    }`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4 pt-4 border-t border-black/10">
              <div className="flex items-center justify-between">
                <h3 className="font-satoshi font-bold text-lg text-black">
                  Price Range
                </h3>
                <span className="font-satoshi font-medium text-sm text-[#705CB2]">
                  Up to ${maxPrice}
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#705CB2] cursor-pointer"
              />

              <div className="flex justify-between text-xs font-satoshi text-black/60">
                <span>$10</span>
                <span>$50</span>
                <span>$100</span>
              </div>

              {/* Quick Select Buttons matching Figma #49:144 */}
              <div className="pt-2">
                <p className="text-xs font-satoshi text-black/70 mb-2 font-medium">
                  Quick Select:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setMaxPrice(50)}
                    className="px-3 py-1.5 rounded-lg border border-black/20 text-xs font-satoshi font-medium hover:bg-black/5 text-center cursor-pointer"
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setMaxPrice(75)}
                    className="px-3 py-1.5 rounded-lg border border-black/20 text-xs font-satoshi font-medium hover:bg-black/5 text-center cursor-pointer"
                  >
                    $50 - $75
                  </button>
                  <button
                    onClick={() => setMaxPrice(100)}
                    className="px-3 py-1.5 rounded-lg border border-black/20 text-xs font-satoshi font-medium hover:bg-black/5 text-center cursor-pointer"
                  >
                    $75 - $100
                  </button>
                  <button
                    onClick={() => setMaxPrice(150)}
                    className="px-3 py-1.5 rounded-lg border border-black/20 text-xs font-satoshi font-medium hover:bg-black/5 text-center cursor-pointer"
                  >
                    $100+
                  </button>
                </div>
              </div>
            </div>

          </aside>

          {/* RIGHT PRODUCTS GRID (Figma #351:389) */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-fanlste text-4xl text-black">
                All Products ({filteredProducts.length})
              </h1>
              <p className="font-satoshi text-sm text-black/60">
                Showing matching items
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="w-full py-20 text-center rounded-[30px] bg-gray-50 border border-dashed border-gray-300">
                <p className="font-fanlste text-2xl text-gray-500 mb-2">
                  No products found
                </p>
                <p className="font-satoshi text-sm text-gray-400 mb-6">
                  Try adjusting your search query or price filter.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 rounded-full bg-[#8798FF] text-white font-satoshi text-sm font-semibold hover:bg-[#705CB2] transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

