import Link from "next/link";

import { routes } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="bg-[#8798ff] px-[20px] py-[30px] xl:h-[450px] xl:px-[81px] xl:py-[75px] w-full">
      <div className="flex flex-col items-center gap-[28px] xl:flex-row xl:items-end xl:justify-center xl:gap-[151px]">
        <div className="flex w-[296px] flex-col items-center gap-[28px]">
          <Link href={routes.home}>
            <img alt="Bloo.my" className="h-[196px] w-[233px] object-cover" src="/home/footer-logo.png" />
          </Link>
          <div className="flex h-[35px] w-full items-center justify-center gap-[52px]">
            <a href="https://wa.me/" rel="noreferrer" target="_blank">
              <img alt="WhatsApp" className="h-[32px] w-[32px]" src="/home/footer-wa.svg" />
            </a>
            <a href="https://instagram.com/" rel="noreferrer" target="_blank">
              <img alt="Instagram" className="h-[35px] w-[35px]" src="/home/footer-ig.svg" />
            </a>
          </div>
          <div className="flex items-center gap-[16px] font-[var(--font-satoshi)] text-[18px] tracking-[2px] text-white">
            <Link href={routes.catalogue}>Catalogue</Link>
            <Link href={routes.faq}>FAQ</Link>
            <Link href={routes.about}>About</Link>
          </div>
        </div>

        <p className="w-[351px] text-center text-[24px] font-normal leading-[normal] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
          Copyright (C) 2025 bloomy.com
        </p>
      </div>
    </footer>
  );
}
