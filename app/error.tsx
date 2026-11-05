'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black text-center">
      <h2 className="font-fanlste text-4xl mb-4">Ada Sesuatu yang Salah</h2>
      <p className="font-satoshi text-base text-gray-600 mb-6 max-w-md">
        Terjadi kendala saat memuat halaman ini. Silakan coba lagi atau kembali ke beranda.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-semibold transition cursor-pointer"
        >
          Coba Lagi
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full border border-black/20 hover:bg-black/5 text-black font-satoshi font-semibold transition"
        >
          Ke Beranda
        </Link>
      </div>
    </div>
  );
}
