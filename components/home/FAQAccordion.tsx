"use client";

import { useState } from "react";

export type FAQItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

type FAQAccordionProps = {
  readonly items: FAQItem[];
  readonly defaultOpenId: string;
};

function FAQRow({ item, open, onClick }: { item: FAQItem; open: boolean; onClick: () => void }) {
  return (
    <button
      className={`w-full backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.3)] border-solid rounded-[50px] px-[20px] md:px-[30px] transition-all duration-300 ${
        open ? "min-h-[194px] h-auto py-[20px]" : "min-h-[71px] h-auto py-[20px]"
      }`}
      onClick={onClick}
      type="button" 
    >
      <div className="flex items-start justify-between md:gap-[50px] gap-[15px]">
        <div className="w-full text-left">
          <p className="font-[var(--font-satoshi)] font-[900] text-[20px] md:text-[24px] leading-[normal] text-black">
            {item.question}
          </p>
          {open && (
            <p className="mt-[24px] font-[var(--font-satoshi)] font-[500] text-[18px] md:text-[24px] leading-[normal] text-[rgba(0,0,0,0.5)]">
              {item.answer}
            </p>
          )}
        </div>
        <img
          alt="Toggle"
          className={`h-[20px] w-[20px] md:h-[30px] md:w-[30px] shrink-0 transition-transform duration-300 ${
            open ? "-scale-y-100" : ""
          }`}
          src="/home/faq-arrow.svg"
        />
      </div>
    </button>
  );
}

export default function FAQAccordion({ items, defaultOpenId }: FAQAccordionProps) {
  const [openId, setOpenId] = useState(defaultOpenId);

  return (
    <>
      {/* MOBILE SECTION */}
      <section className="xl:hidden mt-[56px] w-full max-w-full">
        <div className="mx-auto flex w-full max-w-[1192px] flex-col gap-[18px]">
          <p className="text-center text-[36px] md:text-[48px] leading-[normal] text-black">
            <span className="font-[var(--font-satoshi)] font-[700]">Your Guide to </span>
            <span className="font-[var(--font-fanlste)] italic">Blooming</span>
          </p>
          {items.map((item) => (
            <FAQRow key={item.id} item={item} open={openId === item.id} onClick={() => setOpenId(item.id)} />
          ))}
        </div>
      </section>

      {/* DESKTOP SECTION */}
      <section className="hidden xl:block absolute left-[50%] -translate-x-1/2 top-[3975px] w-full max-w-[1192px]">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <p className="w-full text-center text-[64px] leading-[normal] text-black mb-[20px]">
            <span className="font-[var(--font-satoshi)] font-[700]">Your Guide to </span>
            <span className="font-[var(--font-fanlste)] italic">Blooming</span>
          </p>
          {items.map((item) => (
            <FAQRow key={item.id} item={item} open={openId === item.id} onClick={() => setOpenId(item.id)} />
          ))}
        </div>
      </section>
    </>
  );
}