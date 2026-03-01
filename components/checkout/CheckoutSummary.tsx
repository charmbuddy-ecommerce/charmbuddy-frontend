"use client";

import Link from "next/link";

import { useCart } from "@/lib/cart-context";
import { routes } from "@/lib/routes";

function QtyControl({ qty }: { qty: number }) {
  return (
    <div className="flex h-[24px] w-[83px] items-center gap-[13px]">
      <button className="h-[24px] w-[24px] rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px]" type="button">
        <img alt="Plus" className="h-full w-full" src="/checkout/icon-plus.svg" />
      </button>
      <p className="font-[var(--font-satoshi)] text-[14px] font-bold leading-[normal] tracking-[2.1px] text-black">{qty}</p>
      <button className="h-[24px] w-[24px] rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px]" type="button">
        <img alt="Minus" className="h-full w-full" src="/checkout/icon-minus.svg" />
      </button>
    </div>
  );
}

export default function CheckoutSummary() {
  const { items, subtotal, totalItems } = useCart();
  const firstItem = items[0];
  const discount = subtotal > 0 ? 34 : 0;
  const delivery = subtotal > 0 ? 20 : 0;
  const taxes = subtotal > 0 ? 5 : 0;
  const finalTotal = Math.max(0, subtotal - discount - delivery - taxes);

  return (
    <aside className="flex h-auto w-full items-center rounded-[20px] border border-[#747272] bg-[rgba(255,255,255,0.4)] px-[26px] py-[20px] backdrop-blur-[20.4px] xl:h-[769px] xl:w-[500px]">
      <div className="flex h-auto w-full flex-col items-end gap-[28px] xl:h-[720.116px] xl:w-[432px]">
        <div className="flex w-full flex-col items-start gap-[173px] xl:h-[416.565px]">
          <div className="flex w-full flex-col items-start gap-[28px]">
            <div className="flex w-full flex-col items-start gap-[20px]">
              <p className="w-full font-[var(--font-fanlste)] text-[24px] font-normal leading-[normal] tracking-[3.6px] text-black">Your Cart</p>
              <img alt="" className="h-[1.565px] w-full" src="/checkout/line-summary.svg" />
            </div>

            {firstItem ? (
              <div className="flex h-[106px] w-full items-start rounded-[10px] bg-white px-[11px] py-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex h-[65px] w-[398px] items-center gap-[25px]">
                  <img alt={firstItem.name} className="h-[65px] w-[111px] rounded-[5px] object-cover" src="/checkout/product-mini.png" />

                  <div className="flex h-[65px] w-[262px] flex-col justify-between">
                    <div className="flex h-[27px] w-full items-center justify-between font-[var(--font-satoshi)] text-[20px] font-bold leading-[normal] tracking-[3px] text-black">
                      <p>{firstItem.name}</p>
                      <p>${firstItem.price.toFixed(2)}</p>
                    </div>

                    <div className="flex h-[24px] w-full items-center justify-between">
                      <p className="font-[var(--font-satoshi)] text-[14px] font-medium leading-[normal] tracking-[2.1px] text-[rgba(0,0,0,0.5)]">Quantity: {firstItem.qty}</p>
                      <QtyControl qty={firstItem.qty} />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex h-[59px] w-full items-start rounded-[10px] border border-[rgba(0,0,0,0.5)] bg-white px-[16px] py-[14px]">
            <div className="flex h-[30px] w-[394px] items-center justify-between">
              <div className="flex h-[30px] w-[165px] items-center gap-[15px]">
                <img alt="Discount" className="h-[30px] w-[30px]" src="/checkout/icon-discount.svg" />
                <p className="font-[var(--font-satoshi)] text-[14px] font-medium leading-[normal] tracking-[2.1px] text-[rgba(0,0,0,0.5)]">Discount Code</p>
              </div>
              <button className="font-[var(--font-satoshi)] text-[14px] font-black leading-[normal] tracking-[2.1px] text-black" type="button">
                APPLY
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-[275.551px] w-full flex-col items-start gap-[20px]">
          <div className="flex h-[38.565px] w-full flex-col items-start gap-[10px]">
            <div className="flex h-[27px] w-full items-start justify-between font-[var(--font-satoshi)] text-[20px] font-black leading-[normal] tracking-[3px] text-black">
              <p className="w-[131px]">Subtotal</p>
              <p className="w-[71px]">${subtotal.toFixed(2)}</p>
            </div>
            <img alt="" className="h-[1.565px] w-full" src="/checkout/line-summary.svg" />
          </div>

          <div className="flex h-[131px] w-full flex-col items-start justify-between font-[var(--font-satoshi)] text-[15px] font-bold leading-[normal] tracking-[2.25px] text-[rgba(0,0,0,0.5)]">
            <div className="flex w-full items-start justify-between">
              <p className="w-[131px]">Items</p>
              <p className="w-[22px]">{totalItems}x</p>
            </div>
            <div className="flex w-full items-start justify-between">
              <p className="w-[131px]">Discount</p>
              <p className="w-[41px]">-${discount}</p>
            </div>
            <div className="flex w-full items-start justify-between">
              <p className="w-[162px]">Delivery Services</p>
              <p className="w-[42px]">-${delivery}</p>
            </div>
            <div className="flex w-full items-start justify-between">
              <p className="w-[162px]">Taxes</p>
              <p className="w-[30px]">-${taxes}</p>
            </div>
          </div>

          <Link className="flex h-[42px] w-full items-center justify-between rounded-[20px] bg-black px-[16px] py-[10px] opacity-80" href={routes.paymentMethod}>
            <p className="font-[var(--font-satoshi)] text-[16px] font-black leading-[normal] tracking-[2.4px] text-white">Pay ${finalTotal.toFixed(2)}</p>
          </Link>
        </div>
      </div>
    </aside>
  );
}

