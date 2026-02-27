'use client'; 

import { useState } from 'react';
import { Mail, EyeOff, Eye, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();
  
  // 1. STATE UI SAJA (Inputan data sudah diurus useForm)
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 2. USEFORM WAJIB DI TOP LEVEL KOMPONEN
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting }, // isSubmitting ini otomatis menggantikan isLoading Bapak
  } = useForm<RegisterFormValues>();

  // 3. FUNGSI SUBMIT (Hanya jalan kalau validasi form sukses)
  const onSubmit = async (data: RegisterFormValues) => {
    setErrorMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        // Ambil datanya langsung dari parameter 'data'
        body: JSON.stringify({ 
          email: data.email, 
          password: data.password, 
          name: data.username, 
          // CATATAN LARAVEL: Biasanya Laravel minta namanya 'password_confirmation', bukan 'confirmPassword'
          // Kalau API Laravel Bapak error validasi password, ganti kiri bawah ini jadi: password_confirmation: data.confirmPassword
          confirmPassword: data.confirmPassword 
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Register gagal! Cek kembali data Anda.');
      }
      
      if(resData.user) {
        localStorage.setItem('user', JSON.stringify(resData.user));
      }

      alert('Register Berhasil!');
      router.push('/login'); // Register sukses biasanya dilempar ke login dulu

    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage((error as Error).message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#e0f8f5] via-[#a3bded] to-[#6991c7]">
      <div className="w-full max-w-md p-8 md:p-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        
        <h1 className="text-4xl text-white text-center mb-8 tracking-wide">
          Register
        </h1>

        {/* Nampilin Error dari API Laravel */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-500/80 text-white rounded-lg text-sm text-center backdrop-blur-sm">
            {errorMessage}
          </div>
        )}

        {/* Bungkus dengan handleSubmit bawaan useForm */}
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
              disabled={isSubmitting} // isSubmitting otomatis true pas lagi loading fetch API
              className="bg-white text-gray-800 font-semibold py-2 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Memproses...' : 'Register'}
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