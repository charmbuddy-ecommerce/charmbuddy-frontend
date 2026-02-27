'use client';

import { useState } from 'react';
import { Mail, EyeOff, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Tambahan untuk redirect

export default function LoginPage() {
  const router = useRouter();
  
  // State untuk nyimpen inputan
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // State untuk status API
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fungsi buat nembak API Laravel
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Kalau dari Laravel ngasih response error (misal 401 Unauthorized)
        throw new Error(data.message || 'Login gagal! Cek email dan password Anda.');
      }

      // KESUKSESAN LOGIN (Anggap Laravel ngirim token Auth Sanctum)
      // Simpan token ke Local Storage
      localStorage.setItem('token', data.data.token);
      
      // Bisa juga nyimpen data usernya
      if(data.data.user) {
        localStorage.setItem('user', JSON.stringify(data.data.user));
      }

      alert('Login Berhasil!');
      
      // Redirect ke halaman Homepage/Katalog
      router.push('/'); 

    } catch (error) {
      // Kita "paksa" (cast) TypeScript untuk menganggap error ini pasti punya .message
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f8f5] via-[#a3bded] to-[#6991c7]">
      <div className="w-full max-w-md p-8 md:p-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        
        <h1 className="text-4xl text-white text-center mb-8 tracking-wide">
          Login
        </h1>

        {/* Nampilin Notif Error Kalau Gagal */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-500/80 text-white rounded-lg text-sm text-center backdrop-blur-sm">
            {errorMessage}
          </div>
        )}

        {/* Tambahin onSubmit di form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Nangkep ketikan
              placeholder="Email"
              className="w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-gray-800 bg-white placeholder-gray-500"
              required
            />
            <Mail className="absolute right-4 top-3.5 text-gray-700" size={20} />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Nangkep ketikan
              placeholder="Password"
              className="w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-gray-800 bg-white placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-700 hover:text-black transition-colors"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isLoading} // Tombol mati pas lagi loading
              className="bg-white text-gray-800 font-semibold py-2 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Memproses...' : 'Login'}
            </button>
          </div>
        </form>

        <div className="mt-8 flex justify-between items-center text-sm text-white/90">
          <span>Don&apos;t Have an Account?</span>
          <a href="/register" className="font-bold text-white hover:underline">
            Register
          </a>
        </div>
        
      </div>
    </div>
  );
}