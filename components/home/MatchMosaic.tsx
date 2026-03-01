export default function MatchMosaic() {
  return (
    <>
      <section className="xl:hidden mt-[56px]">
        <div className="mx-auto flex max-w-[1143px] flex-col gap-[26px]">
          <div className="w-full">
            <p className="text-[48px] leading-[normal] text-black">
              <span className="font-[var(--font-fanlste)]">Find Your Perfect </span>
              <span className="font-[var(--font-fanlste)] italic">Match</span>
            </p>
            <p className="mt-[24px] text-[28px] font-[500] font-[var(--font-satoshi)] text-black leading-[normal]">
              More than just an accessory, it&apos;s a piece of your personality. Find your bloom and wear what makes you smile
            </p>
            <button className="mt-[24px] backdrop-blur-[2.5px] bg-[rgba(89,0,255,0.1)] border border-[rgba(255,255,255,0.4)] border-solid rounded-[50px] px-[15px] py-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <span className="font-[var(--font-satoshi)] font-[700] text-[24px]">Get </span>
              <span className="font-[var(--font-fanlste)] italic text-[24px]">Styling</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[18px]">
            <img alt="Mosaic" className="h-[200px] w-full object-cover" src="/home/mosaic-1.png" />
            <img alt="Mosaic" className="h-[201px] w-full object-cover" src="/home/mosaic-2.png" />
            <img alt="Mosaic" className="h-[233px] w-full rounded-[50px] object-cover" src="/home/mosaic-3.png" />
            <img alt="Mosaic" className="h-[319px] w-full object-cover" src="/home/mosaic-6.png" />
            <img alt="Mosaic" className="h-[521px] w-full rounded-[50px] object-cover" src="/home/mosaic-4.png" />
            <img alt="Mosaic" className="h-[434px] w-full rounded-[50px] object-cover" src="/home/mosaic-5.png" />
          </div>
        </div>
      </section>

      <section className="hidden xl:block absolute left-[130px] top-[2561px] h-[773px] w-[1143px]">
        <div className="flex h-full w-full items-end gap-[26px]">
          <div className="flex h-[773px] w-[448px] flex-col justify-between">
            <div className="flex h-[445px] flex-col justify-between">
              <p className="text-[64px] leading-[normal] text-black">
                <span className="font-[var(--font-fanlste)]">Find Your Perfect </span>
                <span className="font-[var(--font-fanlste)] italic">Match</span>
              </p>
              <p className="text-[28px] font-[500] font-[var(--font-satoshi)] text-black leading-[normal]">
                More than just an accessory, it&apos;s a piece of your personality. Find your bloom and wear what makes you smile
              </p>
              <button className="backdrop-blur-[2.5px] bg-[rgba(89,0,255,0.1)] border border-[rgba(255,255,255,0.4)] border-solid rounded-[50px] px-[15px] py-[10px] w-[194px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <span className="font-[var(--font-satoshi)] font-[700] text-[24px]">Get </span>
                <span className="font-[var(--font-fanlste)] italic text-[24px]">Styling</span>
              </button>
            </div>
            <div className="flex w-full gap-[18px]">
              <img alt="Mosaic" className="h-[200px] w-[215px] object-cover" src="/home/mosaic-1.png" />
              <img alt="Mosaic" className="h-[201px] w-[215px] object-cover" src="/home/mosaic-2.png" />
            </div>
          </div>

          <div className="flex w-[373px] flex-col gap-[19px]">
            <img alt="Mosaic" className="h-[233px] w-[373px] rounded-[50px] object-cover" src="/home/mosaic-3.png" />
            <img alt="Mosaic" className="h-[521px] w-[373px] rounded-[50px] object-cover" src="/home/mosaic-4.png" />
          </div>

          <div className="flex w-[270px] flex-col gap-[20px]">
            <img alt="Mosaic" className="h-[434px] w-[270px] rounded-[50px] object-cover" src="/home/mosaic-5.png" />
            <img alt="Mosaic" className="h-[319px] w-[270px] object-cover" src="/home/mosaic-6.png" />
          </div>
        </div>
      </section>
    </>
  );
}
