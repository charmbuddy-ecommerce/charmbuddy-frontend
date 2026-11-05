import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Sparkles, Heart, Flower2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charmbuddy-subpage text-black selection:bg-[#8798FF] selection:text-white relative overflow-x-hidden">
      {/* Noise Texture Overlay from Figma */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="max-w-[1370px] mx-auto px-6 py-16 relative z-10">
        {/* Title matching Figma #163:234 (font-fanlste 96px) */}
        <h1 className="font-fanlste text-6xl md:text-8xl lg:text-[96px] text-center text-black tracking-[0.15em] mb-16 drop-shadow-sm">
          About Us
        </h1>

        {/* Content Section matching Figma #376:1249 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 my-8">
          
          {/* Brand Visual Illustration (Bloom.y / logo.png) */}
          <div className="relative w-72 h-72 md:w-[420px] md:h-[380px] shrink-0">
            <Image
              src="/images/logo.png"
              alt="Charmbuddy Bloom"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Glassmorphic Story Card (Figma #376:1248) */}
          <div className="flex-1 max-w-[859px] min-h-[420px] p-8 md:p-12 rounded-[40px] bg-white/35 border border-white/40 shadow-lg backdrop-blur-[13px] flex flex-col justify-center items-center text-center">
            
            {/* Catchphrase matching Figma #163:237 */}
            <h2 className="font-fanlste text-3xl sm:text-4xl md:text-5xl text-[#7600B0] tracking-[0.15em] mb-6 leading-tight">
              &ldquo;Will you be my bloo?&rdquo; type shit
            </h2>

            {/* Description matching Figma */}
            <p className="font-fanlste text-lg md:text-2xl text-black/85 leading-relaxed tracking-wide font-normal max-w-[760px]">
              Charmbuddy lahir dari kecintaan kami terhadap perhiasan kecil yang penuh cerita dan ekspresi diri. 
              Setiap manik-manik, liontin bunga, dan kristal kami rangkai dengan tangan penuh ketelitian agar setiap orang 
              bisa mengekspresikan warna dan keunikan dirinya yang sejati. 
              Lebih dari sekadar aksesoris, setiap charm adalah pengingat untuk terus mekar setiap hari!
            </p>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm font-satoshi font-semibold text-[#705CB2]">
                <Flower2 size={18} />
                <span>100% Handcrafted</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-satoshi font-semibold text-[#705CB2]">
                <Heart size={18} />
                <span>Made with Love</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-satoshi font-semibold text-[#705CB2]">
                <Sparkles size={18} />
                <span>Unique Charms</span>
              </div>
            </div>

          </div>

        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <Link
            href="/catalogue"
            className="inline-block px-10 py-3.5 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-bold text-lg tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            Explore Our Collection
          </Link>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

