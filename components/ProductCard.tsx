'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingBag } from 'lucide-react';

export interface Product {
  id: string | number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Ditambahkan ke keranjang: ${product.name}`);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col w-full max-w-[260px] bg-white rounded-[30px] p-3 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="relative w-full h-[255px] rounded-[24px] overflow-hidden bg-[#f4f4f7] mb-3">
        <Image
          src={product.image || '/images/product-sample.png'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/80 hover:bg-[#8798FF] hover:text-white text-black backdrop-blur-md flex items-center justify-center transition shadow-sm"
          title="Add to Cart"
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col px-2 pb-1">
        <span className="text-[11px] uppercase tracking-widest text-[#705CB2] font-semibold mb-1">
          {product.category}
        </span>
        <h3 className="font-fanlste text-lg tracking-wider text-black line-clamp-1 group-hover:text-[#705CB2] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-2 pt-1 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="font-fanlste text-base font-semibold text-black">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="font-fanlste text-xs text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-black font-fanlste text-sm">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>{product.rating ?? '4.9'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

