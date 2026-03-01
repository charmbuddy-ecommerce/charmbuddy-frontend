import React from "react";

export type SortKey = "latest" | "oldest" | "highest_total" | "lowest_total" | "status";

type OrderHistoryHeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
  sortKey: SortKey;
  onSortCycle: () => void;
  sortLabel: string;
};

export default function OrderHistoryHeader({ search, onSearchChange, sortKey, onSortCycle, sortLabel }: OrderHistoryHeaderProps) {
  return (
    <section className="flex h-auto w-full flex-col gap-[10px] lg:h-[66px] lg:flex-row lg:items-center lg:justify-between">
      <h1 className="font-[var(--font-satoshi)] text-[48px] font-bold leading-[normal] tracking-[7.2px] text-black">Order History</h1>

      <div className="flex h-auto w-full flex-col gap-[10px] lg:h-[66px] lg:w-[712px] lg:flex-row lg:items-center lg:justify-between">
        <label className="flex h-[66px] w-full items-center gap-[15px] rounded-[50px] bg-white px-[16px] py-[8px] lg:w-[350px]">
          <img alt="Search" className="h-[35px] w-[35px]" src="/order-history/search-filter-icon.svg" />
          <input
            className="w-full bg-transparent font-[var(--font-satoshi)] text-[24px] font-medium leading-[normal] tracking-[3.6px] text-[rgba(0,0,0,0.5)] outline-none placeholder:text-[rgba(0,0,0,0.5)]"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search"
            value={search}
          />
        </label>

        <button
          className="flex h-[65.5px] w-full items-center justify-between rounded-[50px] bg-white px-[16px] py-[8px] lg:w-[350px]"
          data-sort-key={sortKey}
          onClick={onSortCycle}
          type="button"
        >
          <div className="flex items-center gap-[15px]">
            <img alt="Sort" className="h-[49.5px] w-[49.5px]" src="/order-history/sort-icon.svg" />
            <p className="font-[var(--font-satoshi)] text-[24px] font-medium leading-[normal] tracking-[3.6px] text-[rgba(0,0,0,0.5)]">{sortLabel}</p>
          </div>
          <img alt="Sort direction" className="h-[20px] w-[20px] rotate-180" src="/order-history/sort-arrow-up.svg" />
        </button>
      </div>
    </section>
  );
}
