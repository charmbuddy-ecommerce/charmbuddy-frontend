import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full xl:h-[609px] xl:w-[1370px]">
      <h1 className="h-auto w-full text-center font-[var(--font-fanlste)] text-[64px] leading-[1] tracking-[14.4px] text-black md:text-[80px] xl:h-[116px] xl:w-[1370px] xl:text-[96px]">
        About Us
      </h1>

      <div className="mt-[32px] flex w-full flex-col gap-[24px] md:mt-[40px] md:gap-[28px] xl:mt-[64px] xl:h-[429px] xl:flex-row xl:items-start xl:gap-[54px]">
        <img
          alt="Bloom.y"
          className="h-auto w-full object-cover md:max-h-[384.03173828125px] xl:h-[384.03173828125px] xl:w-[457px]"
          src="/about/about-image.png"
        />

        <div className="w-full rounded-[40px] border border-[rgba(255,255,255,0.39)] bg-[rgba(255,255,255,0.36)] px-[16px] py-[8px] backdrop-blur-[12.9px] xl:h-[429px] xl:w-[859px]">
          <p className="mx-auto w-full text-center font-[var(--font-fanlste)] text-[36px] leading-[1.15] tracking-[7.2px] text-[#7600B0] md:text-[42px] xl:w-[827px] xl:text-[48px]">
            &quot;Will you be my bloo?&quot; type shit
          </p>

          <p className="mx-auto mt-[16px] w-full font-[var(--font-fanlste)] text-[24px] leading-[1.2] tracking-[3.6px] text-black xl:mt-[22px] xl:w-[824px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
