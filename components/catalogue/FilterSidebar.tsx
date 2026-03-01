type FilterSidebarProps = {
  mobile?: boolean;
};

function CategoryRow({ label, selected }: { label: string; selected?: boolean }) {
  return (
    <div className="flex items-center gap-[16px]">
      <img alt="Category" className="h-[20px] w-[20px]" src={selected ? "/catalogue/radio-on.svg" : "/catalogue/radio-off.svg"} />
      <p className="font-[var(--font-satoshi)] text-[16px] font-[500] leading-[normal] text-black text-center whitespace-nowrap">{label}</p>
    </div>
  );
}

function QuickButton({ label }: { label: string }) {
  return (
    <button className="h-[32px] w-[100px] rounded-[8px] border-[0.8px] border-[rgba(0,0,0,0.1)] bg-white px-[12.8px] py-[0.8px]">
      <span className="font-[var(--font-satoshi)] text-[12px] font-[500] leading-[16px] text-[#0a0a0a]">{label}</span>
    </button>
  );
}

export default function FilterSidebar({ mobile = false }: FilterSidebarProps) {
  return (
    <aside className={`${mobile ? "w-full h-auto" : "h-[694px] w-[283px]"} rounded-[20px] border border-black bg-[rgba(255,255,255,0.4)] backdrop-blur-[12.6px] px-[14px] py-[37px]`}>
      <div className={`${mobile ? "h-auto" : "h-[606px]"} w-[255px] max-w-full flex flex-col gap-[15px]`}>
        <div className="flex w-[243px] max-w-full flex-col gap-[22px]">
          <div className="flex w-full items-center gap-[66px]">
            <p className="font-[var(--font-satoshi)] text-[24px] font-[900] tracking-[2.4px] text-black">Filters</p>
            <button className="rounded-[10px] border border-black px-[16px] py-[8px]">
              <span className="font-[var(--font-satoshi)] text-[18px] font-[700] tracking-[1.8px] text-black">Reset</span>
            </button>
          </div>
          <img alt="Divider" className="h-[1px] w-full" src="/catalogue/line-1.svg" />
        </div>

        <div className="flex h-[38px] w-[243px] max-w-full items-center justify-between rounded-[20px] bg-[#705cb2] px-[16px] py-[8px]">
          <span className="font-[var(--font-satoshi)] text-[16px] font-[500] tracking-[1.6px] text-white">Search</span>
          <img alt="Search" className="h-[20px] w-[20px]" src="/catalogue/icon-search-small.svg" />
        </div>

        <div className="flex w-full flex-col gap-[25px]">
          <div className="flex w-[199px] flex-col gap-[22px]">
            <div className="flex items-center gap-[17px]">
              <p className="font-[var(--font-satoshi)] text-[24px] font-[700] text-black">Categories</p>
              <img alt="Arrow" className="h-[30px] w-[30px]" src="/catalogue/icon-arrow-down.svg" />
            </div>
            <div className="flex h-[163px] flex-col justify-center gap-[11px]">
              <CategoryRow label="Necklace" selected />
              <CategoryRow label="Bracelet" />
              <CategoryRow label="Bag Charm" />
              <CategoryRow label="Phonestrap" selected />
              <CategoryRow label="Crochet Stuff" selected />
            </div>
          </div>

          <div className="flex w-full flex-col gap-[30px]">
            <div className="flex items-center gap-[10px]">
              <p className="font-[var(--font-satoshi)] text-[24px] font-[700] text-black">Price Range</p>
              <img alt="Arrow" className="h-[30px] w-[30px]" src="/catalogue/icon-arrow-down.svg" />
            </div>

            <div className="flex w-[255px] max-w-full flex-col gap-[26px]">
              <div className="relative h-[45px] w-full">
                <div className="absolute left-[63.775px] top-0 h-[16px] w-[16px] rounded-[100px] bg-[#705cb2]" />
                <div className="absolute left-[239.2px] top-0 h-[16px] w-[16px] rounded-[100px] bg-[#705cb2]" />
                <div className="absolute left-0 top-[5px] h-[6px] w-[255px] rounded-[999px] bg-[rgba(112,92,178,0.2)]" />
                <div className="absolute left-[71.775px] top-[5px] h-[6px] w-[175.425px] rounded-[999px] bg-[#705cb2]" />
                <div className="absolute left-0 top-[25px] flex w-full items-center justify-between text-[14px] font-[500] text-black">
                  <span>$80</span>
                  <span>$300</span>
                </div>
              </div>

              <div className="flex w-[240px] flex-col gap-[8px]">
                <p className="font-[var(--font-satoshi)] text-[14px] font-[500] leading-[20px] text-[#0a0a0a]">Quick Select:</p>
                <div className="grid grid-cols-2 gap-y-[8px] gap-x-[40px]">
                  <QuickButton label="Under $50" />
                  <QuickButton label="$50-$100" />
                  <QuickButton label="$100-$150" />
                  <QuickButton label="$150+" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
