'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsLoggedIn(!!token);
  }, []);

  const navLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className="sticky top-6 z-50 w-full px-4 md:px-8 flex justify-center">
      <nav className="w-full max-w-[1333px] h-20 px-6 md:px-10 rounded-full glass-header flex items-center justify-between shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition hover:opacity-85">
          <div className="relative w-12 h-10 md:w-16 md:h-12">
            <Image
              src="/images/header-logo.png"
              alt="Charmbuddy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-fanlste text-2xl md:text-3xl text-black tracking-wide hidden sm:inline">
            Charmbuddy
          </span>
        </Link>

        {/* Navigation items */}
        <div className="flex items-center gap-2 md:gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/catalogue' && pathname.startsWith('/products'));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 md:px-6 py-2 rounded-xl text-sm md:text-lg font-fanlste tracking-widest transition-all ${
                  isActive
                    ? 'bg-[#8798FF] text-white border border-white shadow-sm'
                    : 'text-black/80 hover:text-black hover:bg-white/30'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/catalogue"
            className="p-2 text-black hover:text-[#705CB2] transition hover:scale-105"
            aria-label="Search"
          >
            <Search size={24} />
          </Link>

          <Link
            href="/cart"
            className={`relative p-2 transition hover:scale-105 ${
              pathname === '/cart' ? 'text-white bg-[#8798FF] rounded-xl p-2' : 'text-black hover:text-[#705CB2]'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#705CB2] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href={isLoggedIn ? '/profile' : '/login'}
            className={`p-2 transition hover:scale-105 ${
              pathname === '/profile' || pathname === '/login'
                ? 'text-white bg-[#8798FF] rounded-xl'
                : 'text-black hover:text-[#705CB2]'
            }`}
            aria-label="Profile"
          >
            <User size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

