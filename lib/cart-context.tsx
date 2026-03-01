"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { mockProducts } from "@/lib/mock-data";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  qty: number;
  price: number;
  image: string;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "cb_cart_v1";

const defaultItems: CartItem[] = [
  { id: mockProducts[0].id, slug: mockProducts[0].slug, name: mockProducts[0].name, qty: 1, price: mockProducts[0].price, image: "/cart/product-main.png" },
  { id: mockProducts[1].id, slug: mockProducts[1].slug, name: mockProducts[1].name, qty: 1, price: mockProducts[1].price, image: "/cart/product-main.png" },
  { id: mockProducts[2].id, slug: mockProducts[2].slug, name: mockProducts[2].name, qty: 1, price: mockProducts[2].price, image: "/cart/product-main.png" },
];

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return defaultItems;
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return defaultItems;
      }
      const parsed = JSON.parse(raw) as CartItem[];
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    return defaultItems;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems: items.reduce((acc, item) => acc + item.qty, 0),
      subtotal: items.reduce((acc, item) => acc + item.qty * item.price, 0),
      addItem: (item, qty = 1) => {
        setItems((prev) => {
          const existing = prev.find((p) => p.id === item.id);
          if (existing) {
            return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
          }
          return [...prev, { ...item, qty }];
        });
      },
      increment: (id) => {
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
      },
      decrement: (id) => {
        setItems((prev) =>
          prev
            .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty - 1) } : item))
            .filter((item) => item.qty > 0),
        );
      },
      removeItem: (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      },
      clearCart: () => {
        setItems([]);
      },
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
