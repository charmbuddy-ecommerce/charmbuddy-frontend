const addressText = "Jl. Sumbing No. 22, Kel. Bukit, Kec. Gunung, P...";

function AddressItem({ topClassName }: { topClassName?: string }) {
  return (
    <div className={`h-[47px] w-[441px] rounded-[15px] bg-[rgba(149,178,254,0.7)] ${topClassName ?? ""}`}>
      <p className="px-[10px] py-[10px] font-[var(--font-satoshi)] text-[20px] font-normal leading-[normal] text-black">{addressText}</p>
    </div>
  );
}

export default function AddressCard() {
  return (
    <section className="w-full xl:h-[322px] xl:w-[548px]">
      <div className="flex h-[65px] w-full items-start justify-between">
        <h2 className="font-[var(--font-satoshi)] text-[48px] font-normal leading-[normal] tracking-[7.2px] text-black">Address</h2>
        <div className="mt-[12.5px] flex h-[40px] w-[102px] items-center justify-between">
          <button className="h-[40px] w-[40px]" type="button">
            <img alt="Edit" className="h-[40px] w-[40px]" src="/profile/icon-edit.svg" />
          </button>
          <button className="h-[40px] w-[40px]" type="button">
            <img alt="Delete" className="h-[40px] w-[40px]" src="/profile/icon-delete.svg" />
          </button>
        </div>
      </div>

      <div className="mt-[15px] h-[236px] w-full rounded-[20px] border border-black bg-white">
        <div className="ml-[27.5px] mt-[19.5px] flex h-[197px] w-[493px] items-start justify-between">
          <div className="h-[197px] w-[441px]">
            <AddressItem />
            <AddressItem topClassName="mt-[28px]" />
            <AddressItem topClassName="mt-[28px]" />
          </div>

          <div className="h-[116px] w-[16px] rounded-[20px] bg-[#d9d9d9]" />
        </div>
      </div>
    </section>
  );
}
