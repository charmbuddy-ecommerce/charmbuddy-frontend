"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/lib/auth-context";
import { routes } from "@/lib/routes";

type AuthCardProps = {
  mode?: "login" | "register";
};

export default function AuthCard({ mode = "login" }: AuthCardProps) {
  const isRegister = mode === "register";
  const router = useRouter();
  const { login, register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email dan password wajib diisi.");
      return;
    }

    if (isRegister) {
      if (!name.trim()) {
        setError("Nama wajib diisi.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Konfirmasi password tidak sama.");
        return;
      }
      register(name.trim(), email.trim());
      void router.push(routes.profile);
      return;
    }

    login(email.trim());
    void router.push(routes.profile);
  };

  return (
    <form
      className={`backdrop-blur-[6.9px] bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.69)] border-solid rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[min(788px,92vw)] px-[34px] py-[30px] ${
        isRegister ? "h-auto xl:h-[649px]" : "h-[473px]"
      }`}
      onSubmit={handleSubmit}
    >
      {!isRegister ? (
        <div className="mx-auto flex h-[401px] w-[695px] max-w-full flex-col items-center justify-between">
          <h1 className="w-full text-center font-[var(--font-fanlste)] text-[64px] leading-[normal] text-white">Login</h1>

          <label className="bg-white h-[60px] w-full px-[18px] py-[14px] flex items-center justify-center">
            <div className="w-[632px] max-w-full flex items-center justify-between">
              <input
                className="w-[580px] bg-transparent font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black outline-none"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                value={email}
              />
              <img alt="Email" className="h-[30px] w-[30px]" src="/auth/icon-email.svg" />
            </div>
          </label>

          <label className="bg-white h-[60px] w-full px-[15px] py-[14px] flex items-center justify-center">
            <div className="w-[635px] max-w-full flex items-center justify-between">
              <input
                className="w-[580px] bg-transparent font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black outline-none"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                value={password}
              />
              <img alt="Password" className="h-[30px] w-[30px]" src="/auth/icon-password.svg" />
            </div>
          </label>

          <button className="bg-white rounded-[10px] w-[110px] h-[48px] px-[16px] py-[8px] text-center" type="submit">
            <span className="font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black">Login</span>
          </button>

          <div className="h-[32px] w-[643px] max-w-full flex items-center justify-between text-[24px] leading-[normal] text-white">
            <p className="font-[var(--font-satoshi)]">Dont Have an Account?</p>
            <Link className="font-[var(--font-satoshi)] font-[700]" href={routes.register}>
              Register
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex h-auto xl:h-[530px] w-[695px] max-w-full flex-col items-center justify-between gap-[20px] xl:gap-0">
          <h1 className="w-full text-center font-[var(--font-fanlste)] text-[64px] leading-[normal] text-white">Register</h1>

          <label className="bg-white h-[60px] w-full px-[18px] py-[14px] flex items-center justify-center">
            <div className="w-[632px] max-w-full flex items-center justify-between">
              <input
                className="w-[580px] bg-transparent font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black outline-none"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                value={name}
              />
              <img alt="Name" className="h-[35px] w-[35px]" src="/auth/icon-person-register.svg" />
            </div>
          </label>

          <label className="bg-white h-[60px] w-full px-[18px] py-[14px] flex items-center justify-center">
            <div className="w-[632px] max-w-full flex items-center justify-between">
              <input
                className="w-[580px] bg-transparent font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black outline-none"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                value={email}
              />
              <img alt="Email" className="h-[30px] w-[30px]" src="/auth/icon-email-register.svg" />
            </div>
          </label>

          <label className="bg-white h-[60px] w-full px-[15px] py-[14px] flex items-center justify-center">
            <div className="w-[635px] max-w-full flex items-center justify-between">
              <input
                className="w-[580px] bg-transparent font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black outline-none"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                value={password}
              />
              <img alt="Password" className="h-[30px] w-[30px]" src="/auth/icon-password-register.svg" />
            </div>
          </label>

          <label className="bg-white h-[60px] w-full px-[15px] py-[14px] flex items-center justify-center">
            <div className="w-[635px] max-w-full flex items-center justify-between">
              <input
                className="w-[580px] bg-transparent font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black outline-none"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
              />
              <img alt="Confirm Password" className="h-[30px] w-[30px]" src="/auth/icon-password-register.svg" />
            </div>
          </label>

          <button className="bg-white rounded-[10px] w-[120px] h-[48px] px-[16px] py-[8px] text-center" type="submit">
            <span className="font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black">Register</span>
          </button>
        </div>
      )}

      {error ? <p className="mt-[8px] text-center font-[var(--font-satoshi)] text-[16px] text-white">{error}</p> : null}
    </form>
  );
}

