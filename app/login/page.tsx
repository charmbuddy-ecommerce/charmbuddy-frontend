'use client'; // Wajib karena kita pakai useState (interaktif)

import { useState } from 'react';
import { Mail, EyeOff, Eye } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    /* 1. Background Gradient (Bisa disesuaikan warnanya) */
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#e0f8f5] via-[#a3bded] to-[#6991c7]">
      
      {/* /* 2. Card Glassmorphism */}
      <div className="w-full max-w-md p-8 md:p-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        
        {/* Title */}
        <h1 className="text-4xl text-white text-center mb-8 tracking-wide">
          Login
        </h1>

        <form className="space-y-5">
          {/* Input Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-gray-800 bg-white placeholder-gray-500"
              required
            />
            <Mail className="absolute right-4 top-3.5 text-gray-700" size={20} />
          </div>

          {/* Input Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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

          {/* Button Login */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-white text-gray-800 font-semibold py-2 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 flex justify-between items-center text-sm text-white/90">
          <span>Dont Have an Account?</span>
          <a href="/register" className="font-bold text-white hover:underline">
            Register
          </a>
        </div>
        
      </div>
    </div>
  );
}