function ShippingCard({
  carrier,
  bgClass,
  borderClass,
  radio,
  widthClass,
}: {
  carrier: string;
  bgClass: string;
  borderClass: string;
  radio: string;
  widthClass: string;
}) {
  return (
    <div className={`flex h-[80px] ${widthClass} shrink-0 items-center justify-center rounded-[10px] border px-[11px] py-[13px] ${bgClass} ${borderClass}`}>
      <div className="flex h-[49px] w-[273px] items-center justify-between">
        <div className="flex h-[49px] w-[163px] items-start justify-between">
          <div className="flex h-[20px] w-[20px] items-center justify-between rounded-[15px] border border-black p-[6px]">
            <img alt="Radio" className="h-[10px] w-[10px]" src={radio} />
          </div>
          <div className="flex w-[132px] flex-col items-start gap-[5px] font-[var(--font-satoshi)] text-[16px] font-medium leading-[normal] tracking-[2.4px]">
            <p className="w-full text-black">{carrier}</p>
            <p className="w-full text-[rgba(0,0,0,0.5)]">7 - 14 Days</p>
          </div>
        </div>
        <p className="w-[29px] font-[var(--font-satoshi)] text-[16px] font-bold leading-[normal] tracking-[2.4px] text-black">$5</p>
      </div>
    </div>
  );
}

export default function ShippingMethod() {
  return (
    <section className="flex h-auto w-full flex-col items-start gap-[20px] xl:h-[151px] xl:w-[788px]">
      <div className="flex w-[552px] flex-col items-start gap-[20px]">
        <p className="w-full font-[var(--font-fanlste)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">Shipping Method</p>
        <img alt="" className="h-[2px] w-full" src="/checkout/line-form.svg" />
      </div>

      <div className="flex w-full flex-col gap-[12px] lg:flex-row lg:items-center lg:gap-[37px]">
        <ShippingCard bgClass="bg-white" borderClass="border-black" carrier="JNE" radio="/checkout/radio-inner-jne.svg" widthClass="lg:w-[375px] w-full" />
        <ShippingCard
          bgClass="bg-[#d0d6ec]"
          borderClass="border-[rgba(0,0,0,0.5)]"
          carrier="JNT"
          radio="/checkout/radio-inner-jnt.svg"
          widthClass="lg:w-[376px] w-full"
        />
      </div>
    </section>
  );
}
