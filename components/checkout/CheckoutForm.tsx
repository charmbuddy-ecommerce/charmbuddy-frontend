function Field({ label, placeholder, className }: { label: string; placeholder: string; className?: string }) {
  return (
    <div className={className}>
      <p className="w-full font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-black">{label}</p>
      <div className="flex h-[55px] w-full items-center rounded-[10px] border border-[rgba(0,0,0,0.5)] bg-white px-[26px] py-[11px]">
        <p className="font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-[rgba(0,0,0,0.5)]">{placeholder}</p>
      </div>
    </div>
  );
}

export default function CheckoutForm() {
  return (
    <section className="flex h-auto w-full flex-col items-start gap-[20px] xl:h-[593px] xl:w-[788px]">
      <div className="flex w-[552px] flex-col items-start gap-[20px]">
        <p className="w-full font-[var(--font-fanlste)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">Check Out Your Items</p>
        <img alt="" className="h-[2px] w-full" src="/checkout/line-form.svg" />
      </div>

      <div className="flex w-full flex-col items-start gap-[9px]">
        <div className="flex w-full flex-col gap-[9px] lg:flex-row lg:items-center lg:gap-[37px]">
          <Field className="flex h-[107px] w-full flex-col gap-[10px] lg:w-[375px]" label="First Name*" placeholder="xxxxxxxxxxxxxxxx" />
          <Field className="flex h-[107px] w-full flex-col gap-[10px] lg:w-[375px]" label="Last Name*" placeholder="xxxxxxxxxxxxxxxx" />
        </div>

        <div className="flex w-full flex-col gap-[9px] lg:flex-row lg:items-center lg:gap-[37px]">
          <Field className="flex h-[107px] w-full flex-col gap-[10px] lg:w-[375px]" label="Email*" placeholder="xxxxxxxxxxxxxxxx" />

          <div className="flex h-[107px] w-full flex-col gap-[10px] lg:w-[375px]">
            <p className="w-full font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-black">Phone Number*</p>
            <div className="flex h-[55px] w-full items-center rounded-[10px] border border-[rgba(0,0,0,0.5)] bg-white px-[26px] py-[11px]">
              <div className="flex w-[322px] items-center gap-[20px]">
                <div className="flex items-center gap-[10px]">
                  <p className="font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-black">IND</p>
                  <img alt="Arrow" className="h-[30px] w-[30px]" src="/checkout/icon-arrow-down.svg" />
                </div>
                <p className="font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-[rgba(0,0,0,0.5)]">+91 091283019283</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center">
          <div className="flex h-[107px] w-full flex-col gap-[10px]">
            <p className="w-full font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-black">Address*</p>
            <div className="flex h-[55px] w-full items-center justify-between rounded-[10px] border border-[rgba(0,0,0,0.5)] bg-white px-[26px] py-[11px]">
              <p className="font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-[rgba(0,0,0,0.5)]">xxxxxxx</p>
              <img alt="Arrow" className="h-[30px] w-[30px]" src="/checkout/icon-arrow-down.svg" />
            </div>
          </div>
        </div>

        <div className="flex h-[147px] w-full flex-col gap-[10px]">
          <p className="w-full font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-black">Description*</p>
          <div className="flex h-[110px] w-full items-start rounded-[10px] border border-black bg-white px-[26px] py-[11px] xl:w-[783px]">
            <p className="font-[var(--font-satoshi)] text-[20px] font-medium leading-[normal] tracking-[3px] text-[rgba(0,0,0,0.5)]">xxxxxxxxxxxxxxxx</p>
          </div>
        </div>
      </div>
    </section>
  );
}
