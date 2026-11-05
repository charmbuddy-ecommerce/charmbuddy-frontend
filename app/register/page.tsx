'use client';

import { useState } from 'react';
import { Mail, EyeOff, Eye, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>();

  const passwordValue = watch('password');

  const onSubmit = async (data: RegisterFormValues) => {
    setErrorMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.username,
          confirmPassword: data.confirmPassword,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Register gagal! Cek kembali data Anda.');
      }

      if (resData.user) {
        localStorage.setItem('user', JSON.stringify(resData.user));
      }

      alert('Register Berhasil! Silakan Login.');
      router.push('/login');
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      {/* Background Gradient Image from Figma */}
      <Image
        src="/images/register-bg.png"
        alt="Register Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Main Glassmorphic Card (Figma node #107:89) */}
      <div className="w-full max-w-[788px] min-h-[649px] p-8 md:p-10 rounded-[20px] bg-white/15 border border-white/70 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[6.9px] flex flex-col justify-between items-center my-8">
        
        {/* Title matching Figma style_187eaaff: font-fanlste 64px white */}
        <h1 className="font-fanlste text-5xl md:text-6xl text-white text-center mb-6 tracking-wide drop-shadow-sm">
          Register
        </h1>

        {/* Error Notification */}
        {errorMessage && (
          <div className="w-full max-w-[643px] mb-4 p-3 bg-red-500/80 text-white rounded-xl text-sm text-center backdrop-blur-sm shadow">
            {errorMessage}
          </div>
        )}

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[643px] flex flex-col items-center gap-4">
          
          {/* Name Input */}
          <div className="w-full">
            <div className={`w-full h-[60px] px-5 bg-white rounded-2xl flex items-center justify-between shadow-sm focus-within:ring-2 ${
              errors.username ? 'ring-2 ring-red-400' : 'focus-within:ring-white'
            }`}>
              <input
                type="text"
                placeholder="Name"
                {...register('username', {
                  required: 'Nama wajib diisi',
                  minLength: { value: 3, message: 'Nama minimal 3 karakter' },
                })}
                className="w-full bg-transparent text-black font-satoshi text-lg md:text-2xl placeholder-gray-400 focus:outline-none"
              />
              <User className="text-black/80 shrink-0 ml-3" size={26} />
            </div>
            {errors.username && (
              <p className="text-red-200 text-xs mt-1 ml-2">{errors.username.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="w-full">
            <div className={`w-full h-[60px] px-5 bg-white rounded-2xl flex items-center justify-between shadow-sm focus-within:ring-2 ${
              errors.email ? 'ring-2 ring-red-400' : 'focus-within:ring-white'
            }`}>
              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid',
                  },
                })}
                className="w-full bg-transparent text-black font-satoshi text-lg md:text-2xl placeholder-gray-400 focus:outline-none"
              />
              <Mail className="text-black/80 shrink-0 ml-3" size={26} />
            </div>
            {errors.email && (
              <p className="text-red-200 text-xs mt-1 ml-2">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="w-full">
            <div className={`w-full h-[60px] px-5 bg-white rounded-2xl flex items-center justify-between shadow-sm focus-within:ring-2 ${
              errors.password ? 'ring-2 ring-red-400' : 'focus-within:ring-white'
            }`}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'Password wajib diisi',
                  minLength: { value: 6, message: 'Password minimal 6 karakter' },
                })}
                className="w-full bg-transparent text-black font-satoshi text-lg md:text-2xl placeholder-gray-400 focus:outline-none"
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
            {errors.password && (
              <p className="text-red-200 text-xs mt-1 ml-2">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="w-full">
            <div className={`w-full h-[60px] px-5 bg-white rounded-2xl flex items-center justify-between shadow-sm focus-within:ring-2 ${
              errors.confirmPassword ? 'ring-2 ring-red-400' : 'focus-within:ring-white'
            }`}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: 'Konfirmasi password wajib diisi',
                  validate: (value) => value === passwordValue || 'Password tidak cocok',
                })}
                className="w-full bg-transparent text-black font-satoshi text-lg md:text-2xl placeholder-gray-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-black/80 hover:text-black transition-colors shrink-0 ml-3 cursor-pointer"
                aria-label="Toggle Confirm Password Visibility"
              >
                {showConfirmPassword ? <Eye size={26} /> : <EyeOff size={26} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-200 text-xs mt-1 ml-2">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button (Figma: width 110px, padding 8px 16px, borderRadius 10px, font 24px) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2 rounded-[10px] bg-white text-black font-satoshi text-xl md:text-2xl font-normal hover:bg-gray-100 transition-all duration-200 shadow hover:shadow-md cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Loading...' : 'Register'}
            </button>
          </div>
        </form>

        {/* Footer Link matching Figma */}
        <div className="w-full max-w-[643px] flex items-center justify-between mt-6 text-base md:text-2xl font-satoshi text-white drop-shadow-sm">
          <span className="font-normal">Already Have an Account?</span>
          <Link href="/login" className="font-bold underline hover:text-white/80 transition-colors">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}
