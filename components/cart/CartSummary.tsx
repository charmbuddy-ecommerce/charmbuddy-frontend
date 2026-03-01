"use client";

import Link from "next/link";

import { useCart } from "@/lib/cart-context";
import { routes } from "@/lib/routes";

function QtyControl({ qty }: { qty: number }) {
  return (
    <div className="flex items-center gap-[13px]">
      <button className="h-[24px] w-[24px] rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px]" type="button">
        <img alt="Plus" className="h-full w-full" src="/cart/icon-plus.svg" />
      </button>
      <p className="font-[var(--font-satoshi)] text-[14px] font-bold leading-[normal] tracking-[2.1px] text-black">{qty}</p>
      <button className="h-[24px] w-[24px] rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px]" type="button">
        <img alt="Minus" className="h-full w-full" src="/cart/icon-minus.svg" />
      </button>
    </div>
  );
}

export default function CartSummary() {
  const { items, subtotal } = useCart();
  const firstItem = items[0];

  return (
    <aside className="flex h-auto w-full items-center rounded-[20px] border border-[#747272] bg-[rgba(255,254,254,0.4)] px-[34px] py-[36px] backdrop-blur-[20.4px] xl:h-[769px] xl:w-[500px]">
      <div className="flex h-auto w-full flex-col items-center justify-between gap-[28px] xl:h-[684px] xl:w-[432px] xl:gap-0">
        <div className="flex w-full flex-col items-start gap-[28px]">
          <div className="flex w-full flex-col items-start gap-[20px]">
            <p className="w-full font-[var(--font-fanlste)] text-[24px] leading-[normal] tracking-[3.6px] text-black">Promo Code</p>
            <div className="flex w-full items-center justify-between rounded-[50px] border border-black bg-white px-[16px] py-[8px] font-[var(--font-satoshi)] text-[24px] leading-[normal] tracking-[3.6px]">
              <p className="w-[141px] text-[rgba(0,0,0,0.5)]">Type Here</p>
              <button className="w-[86px] text-black" type="button">
                Apply
              </button>
            </div>
            <img alt="" className="h-[1.565px] w-full" src="/cart/line-summary.svg" />
          </div>

          {firstItem ? (
            <div className="flex h-[106px] w-full items-start rounded-[10px] bg-white px-[11px] py-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-[25px]">
                <img alt={firstItem.name} className="h-[65px] w-[111px] rounded-[5px] object-cover" src="/cart/product-mini.png" />
                <div className="flex h-[65px] w-[262px] flex-col items-start justify-between">
                  <div className="flex w-full items-center justify-between font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-black">
                    <p>{firstItem.name}</p>
                    <p>${firstItem.price.toFixed(2)}</p>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="font-[var(--font-satoshi)] text-[14px] font-medium leading-[normal] tracking-[2.1px] text-[rgba(0,0,0,0.5)]">Quantity: {firstItem.qty}</p>
                    <QtyControl qty={firstItem.qty} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-[106px] w-full items-center justify-center rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <p className="font-[var(--font-satoshi)] text-[20px] tracking-[3px] text-[rgba(0,0,0,0.5)]">Tidak ada item</p>
            </div>
          )}
        </div>

        <div className="relative h-[164px] w-full">
          <div className="absolute left-[8px] top-[-23.5px] flex h-[181px] w-[415px] flex-col items-center justify-center rounded-[20px] border border-black bg-[#e5e4f2] px-[15px] py-[12px]">
            <div className="flex h-[141px] w-[392px] flex-col items-center justify-between">
              <div className="flex w-[390px] flex-col gap-[7px] font-[var(--font-satoshi)] text-[24px] leading-[normal] tracking-[3.6px] text-black">
                <div className="flex w-full items-center justify-between">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p>Total</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
              </div>
              <Link className="rounded-[50px] bg-black px-[16px] py-[8px] font-[var(--font-satoshi)] text-[20px] leading-[normal] tracking-[3px] text-white" href={routes.checkout}>
                Continue to Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

