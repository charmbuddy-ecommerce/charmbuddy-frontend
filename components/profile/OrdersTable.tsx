export default function OrdersTable() {
  return (
    <section className="w-full xl:h-[472px] xl:w-[1285px]">
      <div className="flex h-[81px] w-full items-center justify-center rounded-[20px] bg-[#705cb2]">
        <h2 className="h-[65px] w-[1253px] text-center font-[var(--font-satoshi)] text-[48px] font-bold leading-[normal] tracking-[7.2px] text-white">Orders</h2>
      </div>

      <div className="mt-[19px] h-[378px] w-full rounded-[20px] border border-black bg-white">
        <div className="ml-[20px] mt-[21.323593px] h-[335.352814px] w-[1245px]">
          <div className="h-[103px] w-[1245px]">
            <div className="grid h-[59px] w-[1234px] grid-cols-[90px_255px_240px_230px_160px_259px] items-center rounded-[10px] bg-[linear-gradient(270deg,rgba(141,142,153,0)_0.1%,#EBEDFF_100%)] pl-[10px] font-[var(--font-satoshi)] text-[24px] leading-[normal] text-black">
              <p>Order ID</p>
              <p>Shipping Address</p>
              <p>Date &amp; Time</p>
              <p>Courier Service</p>
              <p>Total Price</p>
              <p>Order Status</p>
            </div>

            <div className="mt-[15px] grid h-[29px] w-[1245px] grid-cols-[170px_329px_232px_197px_161px_156px] items-center font-[var(--font-satoshi)] text-[20px] font-normal leading-[normal] tracking-[3px] text-black">
              <p>A6769</p>
              <p>Jl. Sumbing No. 2...</p>
              <p>01-01-2026</p>
              <p>AnterAja</p>
              <p>$9.67</p>

              <div className="h-[29px] w-[167px] bg-[linear-gradient(90deg,#00B609_50%,rgba(255,255,255,0)_100%)]">
                <div className="relative h-[29px] w-[127px]">
                  <img alt="Received" className="absolute left-[5.5px] top-[2.5px] h-[24px] w-[24px]" src="/profile/icon-check.svg" />
                  <p className="absolute left-[39.5px] top-[6.5px] h-[16px] w-[82px] font-[var(--font-satoshi)] text-[12px] font-normal tracking-[3.6px] text-white">RECEIVED</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[230.352814px] h-[18.352761px] w-[1069.036631px] rounded-[15px] bg-[#d9d9d9]" />
        </div>
      </div>
    </section>
  );
}
