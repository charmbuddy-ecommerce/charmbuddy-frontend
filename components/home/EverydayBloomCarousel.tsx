'use client';
export default function EverydayBloomCarousel() {
  return (
    <>
{/* Untuk w-1280 ke bawah */}
      <section className="xl:hidden mt-[48px] w-full max-w-full">
        {/* Tambahkan overflow-hidden untuk jaga-jaga kalau ada elemen yang masih bandel keluar jalur */}
        <div className="backdrop-blur-[2.5px] bg-[rgba(112,92,178,0.3)] border border-[rgba(255,255,255,0.4)] border-solid rounded-[50px] p-[20px] w-full overflow-hidden">
          
          <p className="text-center text-4xl sm:text-[40px] leading-[normal] text-black">
            <span className="font-[var(--font-satoshi)] font-light">Your Everyday </span>
            <span className="font-[var(--font-fanlste)] italic">Bloom</span>
          </p>
          
          <div className="mt-[12px] flex items-start justify-between gap-[10px] w-full">
            <button className="bg-[#8798FF] h-[56px] w-[56px] rounded-[50px] grid place-items-center self-center -translate-y-5 hidden sm:grid shrink-0">
              <img alt="Prev" className="h-[28px] w-[28px]" src="/home/carousel-arrow.svg" />
            </button>
            
            <div className="flex flex-1 flex-col items-center justify-start w-full max-w-full">
              <img alt="Melted Rose" className="mx-auto -mt-[22px] h-[300.494px] object-contain max-w-96 w-[200px] sm:w-full" src="/home/carousel-object.png" />
              
              <div className="mx-auto mt-[-18px] w-full max-w-[313px] px-2">
                <p className="text-center font-[var(--font-fanlste)] tracking-[2.75px] underline text-3xl sm:text-[36px] break-words">Melted Rose</p>
                <p className="text-center font-[var(--font-fanlste)] text-[22px] tracking-[6px]">Necklace</p>
              </div>
            </div>

            <button className="bg-[#8798FF] h-[56px] w-[56px] rounded-[50px] grid place-items-center self-center -translate-y-5 hidden sm:grid shrink-0">
              <img alt="Next" className="h-[28px] w-[28px] rotate-180" src="/home/carousel-arrow.svg" />
            </button>
          </div>
          
        </div>
      </section>

      {/* Untuk w-1280 ke atas */}
      <section className="hidden xl:flex absolute top-[844px] left-[50%] -translate-x-1/2 w-full max-w-[1111px] flex-col items-center gap-[72px]">
        
        <p className="w-full text-center text-[64px] leading-[normal] text-black">
          <span className="font-[var(--font-satoshi)] font-light">Your Everyday </span>
          <span className="font-[var(--font-fanlste)] italic">Bloom</span>
        </p>

        <div className="backdrop-blur-[2.5px] bg-[rgba(112,92,178,0.3)] border border-[rgba(255,255,255,0.4)] border-solid w-full rounded-[50px] px-[48px] py-[40px] flex items-center justify-between">
          
          <button className="bg-[#8798FF] h-[70px] w-[70px] rounded-[50px] grid place-items-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
            <img alt="Prev" className="h-[40px] w-[40px]" src="/home/carousel-arrow.svg" />
          </button>

          <div className="flex flex-1 flex-col items-center justify-center w-full max-w-[800px]">
            <div className="flex h-[400px] w-full items-end justify-center">
              <img alt="Melted Rose" className="max-h-[410px] w-auto rotate-[11.93deg] object-contain" src="/home/carousel-object.png" />
            </div>
            
            <div className="mt-[20px] w-full flex flex-col items-center">
              <p className="text-[55px] tracking-[2.75px] underline text-center font-[var(--font-fanlste)]">
                Melted Rose
              </p>
              <p className="text-[30px] tracking-[6px] text-center font-[var(--font-fanlste)] mt-2">
                Necklace
              </p>
            </div>
          </div>

          <button className="bg-[#8798FF] h-[70px] w-[70px] rounded-[50px] grid place-items-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
            <img alt="Next" className="h-[40px] w-[40px] rotate-180" src="/home/carousel-arrow.svg" />
          </button>
          
        </div>
      </section>
    </>
  );
}
