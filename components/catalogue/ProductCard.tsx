import Link from "next/link";

import type { Product } from "@/lib/mock-data";
import { routes } from "@/lib/routes";

type ProductCardProps = {
  className?: string;
  product: Product;
};

export default function ProductCard({ className = "", product }: ProductCardProps) {
  return (
    <Link className={`bg-white flex w-[241px] flex-col ${className}`} href={routes.product(product.slug)}>
      <img alt={product.name} className="h-[255px] w-[241px] object-cover" src={product.image} />
      <div className="flex flex-1 items-center justify-between px-[5px] py-[13px]">
        <div className="flex w-[116px] flex-col gap-[13px] font-[var(--font-fanlste)] not-italic leading-[normal]">
          <p className="w-full text-center text-[16px] tracking-[2.4px] text-black">{product.name}</p>
          <div className="flex w-full items-center gap-[13px] whitespace-nowrap">
            <p className="text-[16px] tracking-[2.4px] text-black">${product.price}</p>
            <p className="line-through text-[12px] tracking-[1.8px] text-[rgba(0,0,0,0.5)]">${product.oldPrice}</p>
          </div>
        </div>
        <div className="flex w-[59px] items-center justify-between">
          <img alt="Rating" className="h-[25px] w-[25px]" src="/catalogue/product-star.svg" />
          <p className="font-[var(--font-fanlste)] text-[16px] tracking-[2.4px] text-black">{product.rating}</p>
        </div>
      </div>
    </Link>
  );
}

