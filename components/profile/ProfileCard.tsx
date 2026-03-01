"use client";

import Link from "next/link";

import { useAuth } from "@/lib/auth-context";
import { routes } from "@/lib/routes";

export default function ProfileCard() {
  const { user, isLoggedIn, logout } = useAuth();
  const displayName = user?.name ?? "Guest User";
  const displayEmail = user?.email ?? "guest@bloomy.com";
  const username = displayEmail.split("@")[0];

  return (
    <section className="w-full xl:h-[316px] xl:w-[697px]">
      <h2 className="font-[var(--font-satoshi)] text-[48px] font-normal leading-[normal] tracking-[7.2px] text-black">Profile</h2>

      <div className="mt-[15px] flex w-full rounded-[20px] border border-black bg-white p-[13px_22.5px] xl:h-[236px] xl:w-[697px]">
        <div className="flex h-[210px] w-[652px] items-start gap-[10px]">
          <div className="h-[210px] w-[210px]">
            <img alt="Avatar" className="ml-[10px] mt-[10px] h-[190px] w-[190px] rounded-full object-cover" src="/profile/avatar.png" />
          </div>

          <div className="mt-[7.5px] flex h-[195px] w-[432px] flex-col justify-between">
            <div className="h-[130px]">
              <p className="h-[98px] w-[398px] font-[var(--font-satoshi)] text-[48px] font-normal leading-[normal] tracking-[7.2px] text-black">{displayName}</p>
              <p className="h-[32px] w-[161px] font-[var(--font-satoshi)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">{username}</p>
              <p className="h-[32px] w-[432px] font-[var(--font-satoshi)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">{displayEmail}</p>
            </div>

            <div className="flex h-[32px] w-[432px] items-center justify-end gap-[20px]">
              <Link className="text-right font-[var(--font-satoshi)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-[#5900ff]" href={routes.orderHistory}>
                {"> Configure"}
              </Link>
              {isLoggedIn ? (
                <button className="font-[var(--font-satoshi)] text-[20px] tracking-[3px] text-[rgba(0,0,0,0.5)]" onClick={logout} type="button">
                  Logout
                </button>
              ) : (
                <Link className="font-[var(--font-satoshi)] text-[20px] tracking-[3px] text-[rgba(0,0,0,0.5)]" href={routes.login}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

