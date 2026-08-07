"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

export type BuyAgainProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  href: string;
};

const products: BuyAgainProduct[] = [
  {
    id: 1,
    name: "Gala Apples",
    price: 3.99,
    image: "/images/products/gala-apples.webp",
    imageAlt: "Fresh Gala apples",
    href: "/products/gala-apples",
  },
  {
    id: 2,
    name: "Organic Whole Milk",
    price: 4.49,
    image: "/images/products/organic-whole-milk.webp",
    imageAlt: "Bottle of organic whole milk",
    href: "/products/organic-whole-milk",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 3.29,
    image: "/images/products/whole-wheat-bread.webp",
    imageAlt: "Loaf of whole wheat bread",
    href: "/products/whole-wheat-bread",
  },
  {
    id: 4,
    name: "Chicken Breast",
    price: 7.99,
    image: "/images/products/chicken-breast.webp",
    imageAlt: "Fresh chicken breast",
    href: "/products/chicken-breast",
  },
  {
    id: 5,
    name: "Large Brown Eggs",
    price: 5.49,
    image: "/images/products/brown-eggs.webp",
    imageAlt: "Carton of large brown eggs",
    href: "/products/brown-eggs",
  },
  {
    id: 6,
    name: "Fresh Avocados",
    price: 4.99,
    image: "/images/products/avocados.webp",
    imageAlt: "Fresh ripe avocados",
    href: "/products/avocados",
  },
];

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type BuyItAgainProps = {
  onAddToCart?: (product: BuyAgainProduct) => void;
};

export function BuyItAgain({ onAddToCart }: BuyItAgainProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollProducts = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const scrollDistance = Math.min(container.clientWidth * 0.8, 600);

    container.scrollBy({
      left: direction === "right" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      aria-labelledby="buy-it-again-heading"
      className={[
        // Keep this section in normal document flow.
        "relative isolate z-0 clear-both",
        "w-full min-w-0 bg-white",

        // Same width and padding as the rest of the page.
        "mx-auto max-w-7xl",
        "px-4 py-8",
        "sm:px-6 sm:py-10",
        "lg:px-8 lg:py-12",
      ].join(" ")}
    >
      <div className="mb-4 flex min-w-0 items-center justify-between gap-4">
        <h2
          id="buy-it-again-heading"
          className="min-w-0 text-lg font-bold tracking-tight text-slate-950 sm:text-xl"
        >
          BUY IT AGAIN
        </h2>

      </div>

      {/*
        overflow-hidden keeps navigation controls and transformed cards
        inside this section instead of covering neighboring sections.
      */}
      <div className="relative min-w-0 overflow-hidden">
        <div
          ref={scrollContainerRef}
          className={[
            "flex min-w-0 gap-2 overflow-x-auto",
            "snap-x snap-mandatory scroll-px-1 scroll-smooth",
            "overscroll-x-contain pb-2",
            "touch-pan-x",
            "[scrollbar-width:none]",
            "[&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Desktop/tablet previous arrow */}
        <button
          type="button"
          aria-label="Show previous products"
          onClick={() => scrollProducts("left")}
          className={[
            "absolute top-1/2 left-3 z-10 hidden",
            "size-10 -translate-y-1/2 place-items-center",
            "rounded-full border border-slate-200",
            "bg-white text-slate-800 shadow-md",
            "transition",
            "hover:bg-slate-50 active:scale-95",
            "focus-visible:ring-2 focus-visible:ring-green-600",
            "focus-visible:ring-offset-2 focus-visible:outline-none",
            "md:grid",
            "cursor-pointer"
          ].join(" ")}
        >
          <ChevronLeftIcon />
        </button>

        {/* Desktop/tablet next arrow */}
        <button
          type="button"
          aria-label="Show more products"
          onClick={() => scrollProducts("right")}
          className={[
            "absolute top-1/2 right-3 z-10 hidden",
            "size-10 -translate-y-1/2 place-items-center",
            "rounded-full border border-slate-200",
            "bg-white text-slate-800 shadow-md",
            "transition",
            "hover:bg-slate-50 active:scale-95",
            "focus-visible:ring-2 focus-visible:ring-green-600",
            "focus-visible:ring-offset-2 focus-visible:outline-none",
            "md:grid",
            "cursor-pointer"
          ].join(" ")}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
}

type ProductCardProps = {
  product: BuyAgainProduct;
  onAddToCart?: (product: BuyAgainProduct) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article
      className={[
        "flex h-auto w-[150px] shrink-0 snap-start flex-col",
        "rounded-lg border border-slate-200 bg-white p-2",
        "shadow-sm transition",
        "hover:border-slate-300 hover:shadow-md",

        // Avoid sticky hover transforms on mobile.
        "md:hover:-translate-y-0.5",

        "sm:w-[170px] sm:p-3",
        "md:w-[185px]",
        "lg:w-[200px]",
      ].join(" ")}
    >
      <Link
        href={product.href}
        className={[
          "group block min-w-0 rounded-md",
          "focus-visible:ring-2 focus-visible:ring-green-600",
          "focus-visible:ring-offset-2 focus-visible:outline-none",
        ].join(" ")}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-slate-50">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            loading="lazy"
            fetchPriority="low"
            quality={75}
            sizes={[
              "(max-width: 639px) 134px",
              "(max-width: 767px) 146px",
              "(max-width: 1023px) 161px",
              "176px",
            ].join(", ")}
            className={[
              "object-contain p-2",
              "transition-transform duration-300",
              "md:group-hover:scale-105",
            ].join(" ")}
          />
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 font-semibold text-slate-950 sm:text-sm">
          {product.name}
        </h3>
      </Link>

      <p className="mt-1 text-sm font-bold text-slate-950">
        {priceFormatter.format(product.price)}
      </p>

      <button
        type="button"
        onClick={() => onAddToCart?.(product)}
        className={[
          "mt-2 inline-flex min-h-9 w-full items-center justify-center",
          "rounded-md bg-green-700 px-3 py-2",
          "text-xs font-semibold text-white",
          "transition",
          "hover:bg-green-800 active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-green-600",
          "focus-visible:ring-offset-2 focus-visible:outline-none",
          "sm:text-sm",
          "cursor-pointer"
        ].join(" ")}
      >
        Add to Cart
      </button>
    </article>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}