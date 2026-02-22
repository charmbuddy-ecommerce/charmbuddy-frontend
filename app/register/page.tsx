'use client'; 

import { useState } from 'react';
import { Mail, EyeOff, Eye, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Data yang akan dikirim ke API:', data);
    alert('Registrasi berhasil!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#e0f8f5] via-[#a3bded] to-[#6991c7]">
      <div className="w-full max-w-md p-8 md:p-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        
        <h1 className="text-4xl text-white text-center mb-8 tracking-wide">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Input Username */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              {...register("username", { 
                required: "Nama wajib diisi",
                minLength: { value: 3, message: "Nama minimal 3 karakter" } 
              })}
              className={`w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800 bg-white placeholder-gray-500 ${
                errors.username ? 'ring-2 ring-red-400 border-red-400' : 'focus:ring-white/70'
              }`}
            />
            <User className="absolute right-4 top-3.5 text-gray-700" size={20} />
            {errors.username && <p className="text-red-200 text-xs font-semibold mt-1">{errors.username.message}</p>}
          </div>

          {/* Input Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { 
                required: "Email wajib diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid"
                }
              })}
              className={`w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800 bg-white placeholder-gray-500 ${
                errors.email ? 'ring-2 ring-red-400 border-red-400' : 'focus:ring-white/70'
              }`}
            />
            <Mail className="absolute right-4 top-3.5 text-gray-700" size={20} />
            {errors.email && <p className="text-red-200 text-xs font-semibold mt-1">{errors.email.message}</p>}
          </div>

          {/* Input Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { 
                required: "Password wajib diisi",
                minLength: { value: 6, message: "Password minimal 6 karakter" }
              })}
              className={`w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800 bg-white placeholder-gray-500 ${
                errors.password ? 'ring-2 ring-red-400 border-red-400' : 'focus:ring-white/70'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-700 hover:text-black transition-colors"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
            {errors.password && <p className="text-red-200 text-xs font-semibold mt-1">{errors.password.message}</p>}
          </div>

          {/* Input Confirm Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", { 
                required: "Konfirmasi password wajib diisi",
                // 2. Gunakan getValues("password") di dalam fungsi validate
                validate: (value) => value === getValues("password") || "Password tidak cocok"
              })}
              className={`w-full pl-4 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800 bg-white placeholder-gray-500 ${
                errors.confirmPassword ? 'ring-2 ring-red-400 border-red-400' : 'focus:ring-white/70'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-700 hover:text-black transition-colors"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
            {errors.confirmPassword && <p className="text-red-200 text-xs font-semibold mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Button Register */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-gray-800 font-semibold py-2 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? 'Loading...' : 'Register'}
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 flex justify-between items-center text-sm text-white/90">
          <span>Already Have an Account?</span>
          <a href="/login" className="font-bold text-white hover:underline">
            Login
          </a>
        </div>
        
      </div>
    </div>
  );
}