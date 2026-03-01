"use client";

import { useCart } from "@/lib/cart-context";

function QtyControl({ qty, onInc, onDec }: { qty: number; onInc: () => void; onDec: () => void }) {
  return (
    <div className="flex items-center gap-[13px]">
      <button className="h-[24px] w-[24px] rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px]" onClick={onInc} type="button">
        <img alt="Plus" className="h-full w-full" src="/cart/icon-plus.svg" />
      </button>
      <p className="font-[var(--font-satoshi)] text-[14px] font-bold leading-[normal] tracking-[2.1px] text-black">{qty}</p>
      <button className="grid h-[24px] w-[24px] place-items-center rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px]" onClick={onDec} type="button">
        <span aria-hidden className="block h-[2px] w-[16px] rounded-[2px] bg-black" />
      </button>
    </div>
  );
}

export default function CartTable() {
  const { items, totalItems, increment, decrement, removeItem, clearCart } = useCart();

  return (
    <section className="relative w-full rounded-[20px] border-[1.5px] border-black bg-[rgba(0,0,0,0)] backdrop-blur-[17.7px] xl:h-[668px] xl:w-[759px]">
      <div className="flex w-full flex-col items-center justify-between gap-[24px] px-[19.5px] py-[26.5px] xl:h-[612px] xl:w-[724px] xl:gap-0">
        <div className="flex w-full flex-col items-center gap-[7px]">
          <div className="flex w-full items-center justify-between xl:w-[696px]">
            <div className="flex items-center gap-[25px] font-[var(--font-satoshi)] leading-[normal] not-italic">
              <p className="font-[var(--font-satoshi)] text-[36px] tracking-[3.6px] text-black">Cart</p>
              <p className="text-[16px] tracking-[2.4px] text-[#c4c4c4]">({totalItems} products)</p>
            </div>
            <button className="flex h-[42px] w-[192px] items-center gap-[10px] rounded-[20px] bg-[#8798ff] px-[16px] py-[8px] text-white" onClick={clearCart} type="button">
              <span className="w-[26px] font-[var(--font-satoshi)] text-[16px] tracking-[2.4px]">X</span>
              <span className="w-[116px] font-[var(--font-satoshi)] text-[20px] tracking-[3px]">Clear cart</span>
            </button>
          </div>
          <img alt="" className="h-[1px] w-full" src="/cart/line-cart.svg" />
        </div>

        <div className="hidden w-full items-center gap-[218px] font-[var(--font-satoshi)] text-[21px] leading-[normal] tracking-[3.15px] text-black xl:flex">
          <p>Produk</p>
          <p>Count</p>
          <p>Price</p>
        </div>

        <div className="flex w-full flex-col gap-[16px] overflow-y-auto pr-[2px] xl:h-[456px] xl:gap-[12px]">
          {items.map((item) => (
            <div className="flex items-center justify-between gap-[14px]" key={item.id}>
              <div className="flex h-[140px] w-full items-start rounded-[20px] border border-black bg-white px-[20px] py-[18px] xl:w-[682px]">
                <div className="grid w-full items-center xl:grid-cols-[290px_160px_120px] xl:justify-items-start">
                  <div className="flex items-center gap-[15px]">
                    <img alt={item.name} className="h-[100px] w-[100px] rounded-[20px] object-cover" src={item.image} />
                    <p className="font-[var(--font-fanlste)] text-[16px] leading-[normal] tracking-[2.4px] text-black">{item.name}</p>
                  </div>
                  <QtyControl onDec={() => decrement(item.id)} onInc={() => increment(item.id)} qty={item.qty} />
                  <p className="font-[var(--font-satoshi)] text-[24px] leading-[normal] tracking-[3.6px] text-black">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button className="hidden h-[24px] w-[24px] shrink-0 rounded-[5px] bg-[rgba(149,178,254,0.7)] p-[4px] xl:grid xl:place-items-center" onClick={() => removeItem(item.id)} type="button">
                <span aria-hidden className="block h-[2px] w-[16px] rounded-[2px] bg-black" />
              </button>
            </div>
          ))}
          {items.length === 0 ? (
            <div className="flex h-[220px] items-center justify-center rounded-[20px] border border-black bg-white">
              <p className="font-[var(--font-satoshi)] text-[24px] tracking-[3px] text-[rgba(0,0,0,0.5)]">Cart masih kosong</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
