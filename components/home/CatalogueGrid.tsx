import Link from "next/link";

import { mockProducts } from "@/lib/mock-data";
import { routes } from "@/lib/routes";

function ProductCard({ productIndex }: { productIndex: number }) {
  const product = mockProducts[productIndex % mockProducts.length];

  return (
    <Link className="bg-white w-[241px]" href={routes.product(product.slug)}>
      <img alt={product.name} className="h-[255px] w-[241px] object-cover" src="/home/catalog-card-main.png" />
      <div className="flex items-end justify-between px-[8px] pb-[11px] pt-[12px]">
        <div className="w-[116px]">
          <p className="text-left text-[16px] tracking-[2.4px] font-[var(--font-fanlste)]">{product.name}</p>
          <div className="mt-[10px] flex items-center gap-[13px]">
            <p className="text-[16px] tracking-[2.4px] font-[var(--font-fanlste)]">${product.price}</p>
            <p className="text-[12px] tracking-[1.8px] text-[rgba(0,0,0,0.5)] line-through font-[var(--font-fanlste)]">${product.oldPrice}</p>
          </div>
        </div>
        <div className="mb-[4px] flex w-[66px] items-center justify-between">
          <img alt="Rating" className="h-[25px] w-[25px]" src="/home/catalog-star.svg" />
          <p className="text-[16px] tracking-[2.4px] font-[var(--font-fanlste)]">{product.rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default function CatalogueGrid() {
  return (
    <>
      <section className="xl:hidden mt-[56px]">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-[32px]">
          <div className="backdrop-blur-[13.5px] bg-[rgba(165,186,255,0.5)] border border-[rgba(255,255,255,0.4)] border-solid rounded-[50px] px-[16px] py-[8px] w-[362px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <p className="h-[42px] text-center text-[40px] tracking-[4px] font-[var(--font-fanlste)] italic">Catalogue</p>
          </div>
          <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2">
            <ProductCard productIndex={0} />
            <ProductCard productIndex={1} />
            <ProductCard productIndex={2} />
            <ProductCard productIndex={3} />
          </div>
          <div className="flex items-center gap-[41px]">
            <img alt="Prev" className="h-[40.60234832763672px] w-[36.90872573852539px] rotate-180" src="/home/catalog-arrow.svg" />
            <img alt="Dots" className="h-[20px] w-[107px]" src="/home/catalog-dots.svg" />
            <img alt="Next" className="h-[40.60234832763672px] w-[36.90872573852539px]" src="/home/catalog-arrow.svg" />
          </div>
        </div>
      </section>

      <section className="hidden xl:block absolute left-[111px] top-[1831px] h-[603.6023559570312px] w-[1180px]">
        <div className="flex h-full w-full flex-col items-center gap-[93px]">
          <div className="backdrop-blur-[13.5px] bg-[rgba(165,186,255,0.5)] border border-[rgba(255,255,255,0.4)] border-solid rounded-[50px] px-[16px] py-[8px] w-[362px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <p className="h-[42px] text-center text-[40px] tracking-[4px] font-[var(--font-fanlste)] italic">Catalogue</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <ProductCard productIndex={0} />
            <ProductCard productIndex={1} />
            <ProductCard productIndex={2} />
            <ProductCard productIndex={3} />
          </div>
          <div className="flex items-center gap-[41px]">
            <img alt="Prev" className="h-[40.60234832763672px] w-[36.90872573852539px] rotate-180" src="/home/catalog-arrow.svg" />
            <img alt="Dots" className="h-[20px] w-[107px]" src="/home/catalog-dots.svg" />
            <img alt="Next" className="h-[40.60234832763672px] w-[36.90872573852539px]" src="/home/catalog-arrow.svg" />
          </div>
        </div>
      </section>
    </>
  );
}

