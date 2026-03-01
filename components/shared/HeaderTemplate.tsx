"use client";

import Link from "next/link";

import { useAuth } from "@/lib/auth-context";
import { routes } from "@/lib/routes";

export default function HeaderTemplate() {
  const { isLoggedIn } = useAuth();
  const accountHref = isLoggedIn ? routes.profile : routes.login;

  return (
    <header className="backdrop-blur-[1px] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.6)] border-solid flex h-[80px] items-center justify-between rounded-[50px] w-full">
      <Link href={routes.home}>
        <img alt="" className="h-[80px] w-[80px]" src="/home/header-logo.png" />
      </Link>

      <nav className="hidden xl:flex text-[24px] h-[45px] w-auto items-center gap-[10px] xl:flex">
        <Link className="flex h-[45px] w-[79px] items-center justify-center rounded-[10px] mx-[16px] py-[8px]" href={routes.faq}>
          <span className="font-[var(--font-fanlste)] font-normal leading-[normal] tracking-[3.6px] text-black">FAQ</span>
        </Link>
        <Link className="flex h-[45px] w-[161px] items-center justify-center rounded-[10px] px-[16px] py-[8px]" href={routes.catalogue}>
          <span className="font-[var(--font-fanlste)] font-normal leading-[normal] tracking-[3.6px] text-black">Catalogue</span>
        </Link>
        <Link className="flex h-[45px] w-[150px] items-center justify-center rounded-[10px] px-[16px] py-[8px]" href={routes.about}>
          <span className="font-[var(--font-fanlste)] font-normal leading-[normal] tracking-[3.6px] text-black">About</span>
        </Link>
      </nav>

      <div className="flex h-[20px] w-auto items-center justify-end gap-[17px] pr-[8px]">
        <Link href={routes.search}>
          <img alt="" className="h-[35px] w-[35px] object-contain" src="/home/header-search.svg" />
        </Link>
        <Link href={routes.cart}>
          <img alt="" className="h-[35px] mx-2 w-[35px] object-contain" src="/home/header-cart.svg" />
        </Link>
        <Link href={accountHref}>
          <img alt="" className="h-[35px] mr-2 w-[35px] object-contain" src="/home/header-profile.svg" />
        </Link>
      </div>
    </header>
  );
}

