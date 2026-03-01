function Card() {
  return (
    <div className="bg-[rgba(165,186,255,0.5)] rounded-[50px] px-[20px] sm:px-[43px] py-[23.5px] w-full max-w-[386px] h-auto min-h-[167px]">
      <div className="w-full text-center sm:text-start">
        <p className="text-center text-[24px] font-[900] font-[var(--font-satoshi)] leading-[normal]">Sammy</p>
        <p className="mt-[24px] text-[24px] font-[500] font-[var(--font-satoshi)] leading-[normal]">Bagus banget braceletnya, cantik ketika dipakai</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <section className="xl:hidden mt-[56px]">
        <p className="text-center text-[48px] leading-[normal] text-black">
          <span className="font-[var(--font-satoshi)] font-[700]">Real </span>
          <span className="font-[var(--font-fanlste)]">S</span>
          <span className="font-[var(--font-fanlste)] italic">miles</span>
          <span className="font-[var(--font-fanlste)]">, </span>
          <span className="font-[var(--font-satoshi)] font-[700]">Real </span>
          <span className="font-[var(--font-fanlste)] italic">Blooms</span>
        </p>
        <div className="mt-[24px] flex flex-col items-center gap-[18px]">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="hidden xl:block">
        <div className="absolute left-[382px] top-[3490px] w-[760px] text-[64px] leading-[normal] text-black">
          <span className="font-[var(--font-satoshi)] font-[700]">Real </span>
          <span className="font-[var(--font-fanlste)]">S</span>
          <span className="font-[var(--font-fanlste)] italic">miles</span>
          <span className="font-[var(--font-fanlste)]">, </span>
          <span className="font-[var(--font-satoshi)] font-[700]">Real </span>
          <span className="font-[var(--font-fanlste)] italic">Blooms</span>
        </div>

        <div className="absolute left-[81px] top-[3780px]"><Card /></div>
        <div className="absolute left-[511px] top-[3780px]"><Card /></div>
        <div className="absolute left-[941px] top-[3780px]"><Card /></div>
      </section>
    </>
  );
}
