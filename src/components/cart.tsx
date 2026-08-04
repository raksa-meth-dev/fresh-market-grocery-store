"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type CartProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const initialProducts: CartProduct[] = [
  { id: 1, name: "Fresh Avocado", price: 2.5, quantity: 2, image: "/products/avocado.jpg" },
  { id: 2, name: "Organic Milk", price: 4.25, quantity: 1, image: "/products/milk.jpg" },
];

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const itemCount = products.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function removeProduct(productId: number) {
    setProducts((items) => items.filter((item) => item.id !== productId));
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
        aria-haspopup="dialog"
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="relative flex h-11 min-w-11 flex-col items-center justify-center rounded-lg px-2 text-slate-700 transition hover:bg-slate-100 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:min-w-14"
      >
        <span className="relative">
          <CartIcon className="size-5" />
          {itemCount > 0 ? (
            <span className="absolute -right-2.5 -top-2 flex min-w-4 items-center justify-center rounded-full bg-sky-600 px-1 text-[9px] font-bold leading-4 text-white ring-2 ring-white">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 hidden text-[11px] font-medium leading-none sm:block">
          Cart
        </span>
      </button>

      {isOpen ? (
        <section
          id={menuId}
          role="dialog"
          aria-label="Shopping cart"
          className="fixed inset-x-3 top-20 z-50 max-h-[calc(100dvh-6rem)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[22rem]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <div>
              <h2 className="font-semibold text-slate-950">Shopping cart</h2>
              <p className="text-xs text-slate-500">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
            </div>
            <button
              type="button"
              aria-label="Close cart"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              <CloseIcon />
            </button>
          </div>

          {products.length ? (
            <>
              <div className="max-h-[min(20rem,50dvh)] space-y-1 overflow-y-auto p-3">
                {products.map((product) => (
                  <article key={product.id} className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                      <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-medium text-slate-950">{product.name}</h3>
                      <p className="mt-0.5 text-xs text-slate-500">Qty: {product.quantity}</p>
                      <p className="mt-1 text-sm font-semibold text-green-700">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProduct(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      <TrashIcon />
                    </button>
                  </article>
                ))}
              </div>

              <div className="border-t border-slate-100 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-slate-600">Subtotal</span>
                  <strong className="text-base text-slate-950">${subtotal.toFixed(2)}</strong>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/cart" className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">View cart</Link>
                  <Link href="/checkout" className="inline-flex h-10 items-center justify-center rounded-lg bg-green-700 px-3 text-sm font-semibold text-white transition hover:bg-green-800">Checkout</Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center px-6 py-10 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-400"><CartIcon className="size-6" /></div>
              <p className="mt-3 font-semibold text-slate-950">Your cart is empty</p>
              <p className="mt-1 text-sm text-slate-500">Add some products to see them here.</p>
              <Link href="/products" className="mt-4 inline-flex h-10 items-center rounded-lg bg-green-700 px-4 text-sm font-semibold text-white transition hover:bg-green-800">Start shopping</Link>
            </div>
          )}
        </section>
      ) : null}
    </div>
  );
}

function CartIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M3.5 5h2l1.7 9.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 9H7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="19" r="1.25" fill="currentColor" />
      <circle cx="17" cy="19" r="1.25" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

function TrashIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4"><path d="M5 7h14M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5m4-5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
