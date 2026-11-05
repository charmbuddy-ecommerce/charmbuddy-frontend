'use client';

import { useState } from 'react';
import { Mail, EyeOff, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  // State input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // State status API
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Login API
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
        throw new Error(data.message || 'Login gagal! Cek email dan password Anda.');
      }

      // Simpan token ke Local Storage
      if (data.data?.token) {
        localStorage.setItem('token', data.data.token);
      }
      if (data.data?.user) {
        localStorage.setItem('user', JSON.stringify(data.data.user));
      }

      alert('Login Berhasil!');
      router.push('/');
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      {/* Background Gradient Image from Figma */}
      <Image
        src="/images/login-bg.png"
        alt="Login Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Main Glassmorphic Card (Figma node #19:64) */}
      <div className="w-full max-w-[788px] min-h-[473px] p-8 md:p-10 rounded-[20px] bg-white/15 border border-white/70 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[6.9px] flex flex-col justify-between items-center my-8">
        
        {/* Title matching Figma style_187eaaff: font-fanlste 64px white */}
        <h1 className="font-fanlste text-5xl md:text-6xl text-white text-center mb-6 tracking-wide drop-shadow-sm">
          Login
        </h1>

        {/* Error Notification */}
        {errorMessage && (
          <div className="w-full max-w-[643px] mb-4 p-3 bg-red-500/80 text-white rounded-xl text-sm text-center backdrop-blur-sm shadow">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full max-w-[643px] flex flex-col items-center gap-5">
          {/* Email Input */}
          <div className="w-full h-[60px] px-5 bg-white rounded-2xl flex items-center justify-between shadow-sm focus-within:ring-2 focus-within:ring-white">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent text-black font-satoshi text-lg md:text-2xl placeholder-gray-400 focus:outline-none"
              required
            />
            <Mail className="text-black/80 shrink-0 ml-3" size={26} />
          </div>

          {/* Password Input */}
          <div className="w-full h-[60px] px-5 bg-white rounded-2xl flex items-center justify-between shadow-sm focus-within:ring-2 focus-within:ring-white">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-transparent text-black font-satoshi text-lg md:text-2xl placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-black/80 hover:text-black transition-colors shrink-0 ml-3 cursor-pointer"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <Eye size={26} /> : <EyeOff size={26} />}
            </button>
          </div>

          {/* Submit Button (Figma: width 91px, padding 8px 16px, borderRadius 10px, font 24px) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-2 rounded-[10px] bg-white text-black font-satoshi text-xl md:text-2xl font-normal hover:bg-gray-100 transition-all duration-200 shadow hover:shadow-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>

        {/* Footer Link matching Figma node #19:62 */}
        <div className="w-full max-w-[643px] flex items-center justify-between mt-8 text-base md:text-2xl font-satoshi text-white drop-shadow-sm">
          <span className="font-normal">Dont Have an Account? </span>
          <Link href="/register" className="font-bold underline hover:text-white/80 transition-colors">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}
