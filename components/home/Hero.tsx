import Link from "next/link";

import { routes } from "@/lib/routes";

export default function Hero() {
  return (
    <>
      <section className="xl:hidden">
        <div className="mx-auto flex w-full max-w-[835px] flex-col gap-[43px]">
          <img alt="Charm" className="h-auto w-full" src="/home/hero-object.png" />
          <h1 className="font-[var(--font-fanlste)] text-[56px] leading-[normal] text-black">Be My Bloo</h1>
          <p className="font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] text-black">
            Handcrafted accessories designed to let your true colors bloom.
          </p>
          <p className="font-[var(--font-fanlste)] text-[22px] italic tracking-[4.5px] text-black">
            Mix, match, and customize your everyday charms!
          </p>
          <Link className="backdrop-blur-[2.5px] bg-[rgba(89,0,255,0.1)] border border-[rgba(255,255,255,0.4)] border-solid px-[15px] py-[10px] rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-fit" href={routes.catalogue}>
            <span className="font-[var(--font-satoshi)] text-[28px] font-medium leading-[normal] text-black">Find Your </span>
            <span className="font-[var(--font-fanlste)] text-[28px] italic leading-[normal] text-black">Bloom</span>
          </Link>
        </div>
      </section>

      {/* ukuran atas 1280px */}
      <section className="hidden xl:block">
        <div className="absolute left-[698.121337890625px] top-[5px] h-[867.067603006959px] w-[1232.879329368472px]">
          <img alt="Charm" className="h-full w-4xl object-contain" src="/home/hero-object.png" />
        </div>

        <div className="absolute left-[85px] top-[213px] flex h-[493px] w-[835px] flex-col items-start gap-[43px]">
          <h1 className="font-[var(--font-fanlste)] text-[128px] leading-[normal] text-black">Be My Bloo</h1>
          <p className="w-[750px] font-[var(--font-satoshi)] text-[36px] font-medium leading-[normal] text-black">
            Handcrafted accessories designed to let your true colors bloom.
          </p>
          <p className="h-[43px] w-full font-[var(--font-fanlste)] text-[30px] italic leading-[normal] tracking-[4.5px] text-black">
            Mix, match, and customize your everyday charms!
          </p>
          <Link className="backdrop-blur-[2.5px] bg-[rgba(89,0,255,0.1)] border border-[rgba(255,255,255,0.4)] border-solid px-[15px] py-[10px] rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" href={routes.catalogue}>
            <span className="font-[var(--font-satoshi)] text-[36px] font-medium leading-[normal] text-black"> Find Your </span>
            <span className="font-[var(--font-fanlste)] text-[36px] italic leading-[normal] text-black">Bloom</span>
          </Link>
        </div>
      </section>
    </>
  );
}

