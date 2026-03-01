import ProductCard from "@/components/catalogue/ProductCard";
import { mockProducts } from "@/lib/mock-data";

type ProductGridProps = {
  mobile?: boolean;
};

export default function ProductGrid({ mobile = false }: ProductGridProps) {
  if (mobile) {
    return (
      <div className="grid w-full grid-cols-1 place-items-center gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="content-start flex h-auto w-[851px] flex-wrap items-start gap-y-[40px] gap-x-[64px]">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
