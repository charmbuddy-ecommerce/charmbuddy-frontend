'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const fullFaqs = [
  {
    category: 'Pemesanan & Custom',
    questions: [
      {
        q: 'Bagaimana cara melakukan custom charm atau aksesoris?',
        a: 'Kamu bisa memilih base necklace/bracelet di halaman katalog kami, lalu hubungi customer service kami lewat WhatsApp dengan menyebutkan kombinasi manik-manik, liontin, atau huruf nama yang kamu inginkan.',
      },
      {
        q: 'Apakah bisa memesan untuk suvenir acara / pesanan jumlah besar?',
        a: 'Tentu bisa! Kami melayani pemesanan suvenir pernikahan, ulang tahun, atau hampers dengan harga grosir khusus dan packaging custom.',
      },
    ],
  },
  {
    category: 'Pengiriman & Pembayaran',
    questions: [
      {
        q: 'Berapa lama estimasi pengerjaan dan pengiriman?',
        a: 'Produk ready stock dikirim dalam 1-2 hari kerja. Untuk produk custom memerlukan waktu pembuatan 3-5 hari kerja. Pengiriman menggunakan ekspedisi terpercaya seperti JNE dan J&T Express.',
      },
      {
        q: 'Metode pembayaran apa saja yang didukung?',
        a: 'Kami menerima pembayaran melalui Transfer Bank Virtual Account (BCA, Mandiri, BNI, BRI), QRIS (GoPay, OVO, ShopeePay), serta Kartu Kredit/Debit.',
      },
    ],
  },
  {
    category: 'Kualitas & Perawatan',
    questions: [
      {
        q: 'Apakah bahan yang digunakan tahan air dan tidak mudah berkarat?',
        a: 'Kami menggunakan material rantai stainless steel anti karat, manik-manik kaca kristal premium, dan mutiara air tawar asli. Agar kilau tetap terjaga optimal, hindari pemakaian saat berenang di air klorin atau terkena cairan parfum langsung.',
      },
      {
        q: 'Bagaimana jika aksesoris yang diterima rusak atau tidak sesuai?',
        a: 'Kami memberikan garansi penukaran 100%! Cukup kirimkan video unboxing tanpa jeda maksimal 1x24 jam setelah paket diterima, dan kami akan segera mengirimkan penggantinya.',
      },
    ],
  },
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    '0-0': true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1192px] mx-auto px-6 py-16 relative z-10">
        {/* Title matching Figma #394:1721 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8798FF]/15 text-[#705CB2] font-satoshi font-bold text-xs uppercase tracking-widest mb-4">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="font-fanlste text-5xl md:text-7xl text-black">
            <span className="font-satoshi font-bold">Your Guide to </span>
            <span className="italic">*Blooming*</span>
          </h1>
        </div>

        {/* FAQ Groups */}
        <div className="space-y-12">
          {fullFaqs.map((group, groupIdx) => (
            <div key={group.category} className="space-y-4">
              <h2 className="font-fanlste text-2xl md:text-3xl text-[#705CB2] tracking-wider px-2">
                {group.category}
              </h2>

              <div className="space-y-3">
                {group.questions.map((item, itemIdx) => {
                  const key = `${groupIdx}-${itemIdx}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={key}
                      className="rounded-[25px] bg-white/70 border border-black/10 shadow-xs overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-black/[0.02] transition-colors"
                      >
                        <span className="font-satoshi font-black text-xl md:text-2xl text-black pr-4">
                          {item.q}
                        </span>
                        <div
                          className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180 bg-[#8798FF] text-white' : 'text-black'
                          }`}
                        >
                          <ChevronDown size={22} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-8 pb-6 pt-1 text-black/75 font-satoshi text-base md:text-lg leading-relaxed border-t border-black/5 animate-in fade-in duration-200">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions banner */}
        <div className="mt-20 p-8 md:p-10 rounded-[35px] bg-[#8798FF]/15 border border-[#8798FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-fanlste text-3xl text-black mb-2">
              Masih punya pertanyaan lain?
            </h3>
            <p className="font-satoshi text-base text-gray-600">
              Tim support kami dengan senang hati membantumu setiap saat.
            </p>
          </div>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-bold text-base transition-all shadow-md shrink-0"
          >
            <MessageCircle size={20} />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

