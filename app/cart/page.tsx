'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus, Minus, Trash2, ArrowRight, Tag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  count: number;
  image: string;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: 'Melted Rose Necklace',
    category: 'Necklace',
    price: 35,
    count: 1,
    image: '/images/hero-charm.png',
  },
  {
    id: 2,
    name: 'Blueberry Pearl Charm',
    category: 'Bracelet',
    price: 28,
    count: 2,
    image: '/images/match-1.png',
  },
  {
    id: 3,
    name: 'Lilac Dream Strap',
    category: 'Phonestrap',
    price: 18,
    count: 1,
    image: '/images/match-2.png',
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const updateCount = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newCount = item.count + delta;
            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'BLOOM10') {
      setDiscount(10);
      setPromoApplied(true);
      alert('Promo code BLOOM10 applied! You get $10 off.');
    } else if (promoCode.trim().length > 0) {
      alert('Kode promo tidak valid. Coba kode: BLOOM10');
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const total = Math.max(0, subtotal - discount);

  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1333px] mx-auto px-6 py-12 relative z-10">
        <h1 className="font-fanlste text-4xl sm:text-5xl text-black mb-8">
          Shopping Bag
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT CART ITEMS CONTAINER (Figma #87:79) */}
          <div className="flex-1 w-full p-6 md:p-8 rounded-[24px] bg-white/40 border border-black/15 backdrop-blur-md shadow-sm">
            {/* Header: Cart count & Clear Cart */}
            <div className="flex items-center justify-between pb-4 border-b border-black/15 mb-6">
              <div className="flex items-baseline gap-3">
                <h2 className="font-satoshi font-black text-2xl text-black">
                  Cart
                </h2>
                <span className="font-satoshi text-sm text-gray-500">
                  ({items.length} products)
                </span>
              </div>

              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="px-4 py-1.5 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  Clear cart
                </button>
              )}
            </div>

            {/* Cart Table Header */}
            {items.length > 0 ? (
              <div className="space-y-6">
                <div className="hidden sm:grid grid-cols-12 gap-4 text-sm font-satoshi font-semibold text-black/60 pb-2 border-b border-gray-100">
                  <div className="col-span-6">Produk</div>
                  <div className="col-span-3 text-center">Count</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>

                {/* Items List */}
                <div className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center justify-between"
                    >
                      {/* Product Preview */}
                      <div className="col-span-6 flex items-center gap-4 w-full">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#705CB2] tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="font-fanlste text-lg text-black">
                            {item.name}
                          </h3>
                          <p className="font-satoshi text-xs text-gray-500">
                            ${item.price} each
                          </p>
                        </div>
                      </div>

                      {/* Count Stepper */}
                      <div className="col-span-3 flex items-center justify-center gap-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                        <button
                          onClick={() => updateCount(item.id, -1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                          aria-label="Decrease"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-satoshi font-bold text-sm w-4 text-center">
                          {item.count}
                        </span>
                        <button
                          onClick={() => updateCount(item.id, 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                          aria-label="Increase"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Line Price */}
                      <div className="col-span-2 text-right font-fanlste text-xl text-black">
                        ${item.price * item.count}
                      </div>

                      {/* Delete */}
                      <div className="col-span-1 flex justify-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="font-fanlste text-2xl text-gray-400 mb-4">
                  Your cart is empty!
                </p>
                <Link
                  href="/catalogue"
                  className="px-6 py-2.5 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-semibold text-sm transition"
                >
                  Start Shopping
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT SUMMARY CONTAINER (Figma #304:1047) */}
          <div className="w-full lg:w-[420px] p-6 md:p-8 rounded-[24px] bg-white/40 border border-black/15 backdrop-blur-md shadow-sm shrink-0 flex flex-col justify-between">
            <div>
              <h2 className="font-satoshi font-black text-2xl text-black mb-6">
                Order Summary
              </h2>

              {/* Promo Code Input matching Figma #179:192 */}
              <div className="mb-6">
                <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-black/70 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Try BLOOM10"
                      className="w-full px-4 py-2.5 rounded-full border border-black/20 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-[#8798FF]"
                    />
                    <Tag size={16} className="absolute right-4 top-3 text-gray-400" />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 font-satoshi text-xs font-bold tracking-wider transition cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-green-600 mt-1 font-satoshi">
                    Promo discount -$10 applied!
                  </p>
                )}
              </div>

              {/* Cost breakdown matching Figma */}
              <div className="space-y-3 pt-4 border-t border-black/10 text-sm font-satoshi">
                <div className="flex justify-between text-black/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">${subtotal}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-bold">-${discount}</span>
                  </div>
                )}

                <div className="flex justify-between text-black/70">
                  <span>Estimated Shipping</span>
                  <span className="text-xs text-gray-400">Calculated at checkout</span>
                </div>
              </div>

              {/* Total Card matching Figma #304:1046 */}
              <div className="mt-8 p-5 rounded-2xl bg-[#E5E4F2] border border-black/10 flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-satoshi font-bold text-lg text-black">
                    Total
                  </span>
                  <span className="font-fanlste text-3xl font-bold text-black">
                    ${total}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-satoshi">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
            </div>

            {/* Checkout Action Button */}
            <div className="mt-8">
              <Link
                href={items.length > 0 ? '/checkout' : '#'}
                className={`w-full py-3.5 rounded-full flex items-center justify-center gap-2 font-satoshi font-bold text-base tracking-wider transition-all shadow-md ${
                  items.length > 0
                    ? 'bg-[#8798FF] hover:bg-[#705CB2] text-white hover:scale-[1.02] cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>Continue to Payment</span>
                <ArrowRight size={18} />
              </Link>
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

