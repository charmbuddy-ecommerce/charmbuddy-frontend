import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black text-center">
      <h1 className="font-fanlste text-7xl md:text-9xl text-[#8798FF] mb-2">404</h1>
      <h2 className="font-fanlste text-3xl md:text-4xl text-black mb-4">
        Halaman Tidak Ditemukan
      </h2>
      <p className="font-satoshi text-base text-gray-500 mb-8 max-w-md">
        Halaman yang kamu cari mungkin telah dipindahkan atau sudah tidak tersedia.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-[#8798FF] hover:bg-[#705CB2] text-white font-satoshi font-semibold tracking-wider transition shadow-md"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

