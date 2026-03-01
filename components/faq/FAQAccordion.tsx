'use client';
import { useState } from "react";

export type FAQItem = {
  id: string;
  question: string;
  answer?: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  defaultOpenIds: string[];
};

function FAQRow({ item, open, onClick }: { item: FAQItem; open: boolean; onClick: () => void }) {
  return (
    <button
      className={`w-full rounded-[50px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.5)] px-[30px] backdrop-blur-[2.5px] ${open ? "h-[194px] py-[20px]" : "h-[71px] py-[20px]"}`}
      onClick={onClick}
      type="button"
    >
      <div className="flex items-start justify-center gap-[105px]">
        <div className="w-[985px] text-left">
          <p className="font-[var(--font-satoshi)] text-[24px] font-black leading-[normal] text-black">{item.question}</p>
          {open && item.answer ? (
            <p className="mt-[24px] font-[var(--font-satoshi)] text-[24px] font-medium leading-[normal] text-[rgba(0,0,0,0.5)]">{item.answer}</p>
          ) : null}
        </div>
        <img alt="Toggle" className={`h-[30px] w-[30px] ${open ? "-scale-y-100" : ""}`} src="/faq/arrow-down.svg" />
      </div>
    </button>
  );
}

export default function FAQAccordion({ items, defaultOpenIds }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleId = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="flex w-full flex-col gap-[32px] md:gap-[32px]">
      {items.map((item) => (
        <FAQRow item={item} key={item.id} onClick={() => toggleId(item.id)} open={openIds.includes(item.id)} />
      ))}
    </div>
  );
}
