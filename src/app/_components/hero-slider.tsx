"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

type HeroSlide = {
  id: number;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/grocery-family.jpg",
    imageAlt: "A family shopping for fresh groceries",
    eyebrow: "Fresh from the market",
    title: "Your fresh groceries,",
    highlightedText: "delivered fast.",
    description:
      "Shop fresh produce, everyday essentials, and household favorites from one convenient place.",
    buttonText: "Shop Now · 15% Off",
    buttonHref: "/shop",
  },
  {
    id: 2,
    image: "/images/hero/fresh-vegetables.jpg",
    imageAlt: "Fresh fruits and vegetables",
    eyebrow: "Naturally better",
    title: "Farm-fresh goodness,",
    highlightedText: "picked for you.",
    description:
      "Discover seasonal fruits and vegetables carefully selected from trusted local growers.",
    buttonText: "Explore Fresh Produce",
    buttonHref: "/shop/fresh-produce",
  },
  {
    id: 3,
    image: "/images/hero/grocery-delivery.jpg",
    imageAlt: "Groceries prepared for home delivery",
    eyebrow: "Fast and convenient",
    title: "Everything you need,",
    highlightedText: "right at your door.",
    description:
      "Choose your favorite groceries, schedule delivery, and let us take care of the rest.",
    buttonText: "Order for Delivery",
    buttonHref: "/delivery",
  },
];

const AUTOPLAY_DELAY = 6000;
const SWIPE_DISTANCE = 50;

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const goToNextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(
      goToNextSlide,
      AUTOPLAY_DELAY,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [goToNextSlide, isPaused]);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setIsPaused(true);
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;

    touchStartX.current = null;
    setIsPaused(false);

    if (startX === null || endX === undefined) return;

    const distance = startX - endX;

    if (distance > SWIPE_DISTANCE) {
      goToNextSlide();
    }

    if (distance < -SWIPE_DISTANCE) {
      goToPreviousSlide();
    }
  }

  return (
    <section
      aria-label="Featured grocery promotions"
      className="relative w-full"
    >
      <div
        className={[
          "group relative w-full overflow-hidden bg-slate-950",
          "h-[540px]",
          "min-[420px]:h-[570px]",
          "sm:h-[600px]",
          "md:h-[560px]",
          "lg:h-[620px]",
          "xl:h-[660px]",
        ].join(" ")}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <article
              key={slide.id}
              aria-hidden={!isActive}
              className={[
                "absolute inset-0 transition-all duration-700 ease-in-out",
                isActive
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-[1.03] opacity-0",
              ].join(" ")}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className={[
                  "object-cover transition-transform duration-[7000ms]",
                  "object-[62%_center] sm:object-center",
                  isActive ? "scale-105" : "scale-100",
                ].join(" ")}
              />

              {/* Mobile overlay */}
              <div className="absolute inset-0 bg-slate-950/45 md:hidden" />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/55 to-slate-950/10 md:hidden" />

              {/* Desktop overlay */}
              <div className="absolute inset-0 hidden bg-linear-to-r from-slate-950/95 via-slate-900/75 to-green-950/10 md:block" />

              <div className="absolute inset-0 hidden bg-linear-to-t from-slate-950/55 via-transparent to-transparent md:block" />

              {/* Decorative glow */}
              <div className="absolute -left-28 top-1/2 hidden size-[440px] -translate-y-1/2 rounded-full bg-green-700/20 blur-3xl sm:block" />

              {/* Hero content */}
              <div
                className={[
                  "relative z-10 mx-auto flex h-full w-full max-w-7xl",
                  "items-end px-4 pt-24 pb-28",
                  "sm:px-6 sm:pb-32",
                  "md:items-center md:py-16",
                  "lg:px-8",
                ].join(" ")}
              >
                <div
                  className={[
                    "w-full max-w-2xl",
                    "transition-all delay-100 duration-700",
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "mb-3 inline-flex max-w-full items-center gap-2",
                      "rounded-full border border-green-400/25",
                      "bg-green-950/50 px-3 py-1.5",
                      "backdrop-blur-md",
                      "sm:mb-4 sm:px-4",
                    ].join(" ")}
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-green-400 sm:size-2" />

                    <p className="truncate text-[10px] font-bold tracking-[0.14em] text-green-300 uppercase sm:text-xs sm:tracking-[0.18em]">
                      {slide.eyebrow}
                    </p>
                  </div>

                  <h1
                    className={[
                      "max-w-3xl font-black tracking-tight text-white uppercase",
                      "text-[2.15rem] leading-[0.98]",
                      "min-[420px]:text-[2.55rem]",
                      "sm:text-5xl",
                      "md:text-5xl",
                      "lg:text-6xl",
                      "xl:text-7xl",
                    ].join(" ")}
                  >
                    <span className="block">{slide.title}</span>

                    <span className="mt-1 block text-green-400">
                      {slide.highlightedText}
                    </span>
                  </h1>

                  <p
                    className={[
                      "mt-4 max-w-xl text-slate-200",
                      "text-sm leading-6",
                      "sm:mt-5 sm:text-base sm:leading-7",
                      "lg:text-lg",
                    ].join(" ")}
                  >
                    {slide.description}
                  </p>

                  <div
                    className={[
                      "mt-6 flex w-full flex-col gap-3",
                      "sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap",
                    ].join(" ")}
                  >
                    <Link
                      href={slide.buttonHref}
                      tabIndex={isActive ? 0 : -1}
                      className={[
                        "inline-flex min-h-11 w-full items-center justify-center",
                        "cursor-pointer rounded-lg bg-green-700 px-5 py-3",
                        "text-sm font-semibold text-white",
                        "shadow-lg shadow-slate-950/30",
                        "transition hover:bg-green-800",
                        "active:scale-[0.98]",
                        "focus-visible:ring-2 focus-visible:ring-green-400",
                        "focus-visible:ring-offset-2",
                        "focus-visible:ring-offset-slate-950",
                        "focus-visible:outline-none",
                        "sm:min-h-12 sm:w-auto sm:px-6",
                      ].join(" ")}
                    >
                      {slide.buttonText}
                      <ArrowRightIcon />
                    </Link>

                    <Link
                      href="/shop"
                      tabIndex={isActive ? 0 : -1}
                      className={[
                        "inline-flex min-h-11 w-full items-center justify-center",
                        "cursor-pointer rounded-lg border border-white/30 bg-white/10",
                        "px-5 py-3 text-sm font-semibold text-white",
                        "backdrop-blur-md transition",
                        "hover:border-white/50 hover:bg-white/15",
                        "active:scale-[0.98]",
                        "focus-visible:ring-2 focus-visible:ring-white",
                        "focus-visible:outline-none",
                        "sm:min-h-12 sm:w-auto sm:px-6",
                      ].join(" ")}
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Navigation */}
        <div
          className={[
            "absolute bottom-4 left-1/2 z-20",
            "flex -translate-x-1/2 items-center gap-1.5",
            "rounded-full border border-white/15",
            "bg-slate-950/55 px-2 py-1.5",
            "shadow-lg shadow-black/20 backdrop-blur-md",
            "sm:bottom-6 sm:gap-2 sm:px-3 sm:py-2",

            // Desktop: make this wrapper cover the slider without blocking content.
            "lg:pointer-events-none lg:inset-0",
            "lg:translate-x-0 lg:border-0",
            "lg:bg-transparent lg:p-0",
            "lg:shadow-none lg:backdrop-blur-none",
          ].join(" ")}
        >
          {/* Previous */}
          <button
            type="button"
            aria-label="Show previous slide"
            onClick={goToPreviousSlide}
            className={[
              "grid size-9 shrink-0 place-items-center",
              "cursor-pointer rounded-full text-white",
              "transition duration-200",
              "hover:bg-white/10 active:scale-95",
              "focus-visible:ring-2 focus-visible:ring-green-400",
              "focus-visible:ring-offset-2",
              "focus-visible:ring-offset-slate-950",
              "focus-visible:outline-none",
              "sm:size-10",

              // Desktop position
              "lg:pointer-events-auto lg:absolute",
              "lg:top-1/2 lg:left-8",
              "lg:size-12 lg:-translate-y-1/2",
              "lg:border lg:border-white/25",
              "lg:bg-slate-950/55",
              "lg:shadow-lg lg:shadow-black/20",
              "lg:backdrop-blur-md",
              "lg:opacity-0 lg:group-hover:opacity-100",
              "lg:hover:scale-110",
              "lg:hover:border-green-400/60",
              "lg:hover:bg-green-700",
            ].join(" ")}
          >
            <ChevronLeftIcon />
          </button>

          {/* Indicators */}
          <div
            aria-label="Choose a slide"
            className={[
              "flex items-center gap-1 sm:gap-1.5",
              "lg:pointer-events-auto lg:absolute",
              "lg:bottom-6 lg:left-1/2",
              "lg:-translate-x-1/2",
              "lg:rounded-full",
              "lg:border lg:border-white/15",
              "lg:bg-slate-950/45",
              "lg:px-3 lg:py-2",
              "lg:shadow-lg lg:shadow-black/20",
              "lg:backdrop-blur-md",
            ].join(" ")}
          >
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className={[
                    "group/indicator grid size-8 cursor-pointer place-items-center",
                    "rounded-full transition duration-200",
                    "hover:bg-white/10",
                    "focus-visible:ring-2 focus-visible:ring-green-400",
                    "focus-visible:ring-offset-2",
                    "focus-visible:ring-offset-slate-950",
                    "focus-visible:outline-none",
                    "sm:size-9",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "block rounded-full transition-all duration-300",
                      isActive
                        ? "h-2.5 w-7 bg-green-500 sm:w-8"
                        : "size-2.5 bg-white/60 group-hover/indicator:scale-125 group-hover/indicator:bg-white",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="Show next slide"
            onClick={goToNextSlide}
            className={[
              "grid size-9 shrink-0 place-items-center",
              "cursor-pointer rounded-full text-white",
              "transition duration-200",
              "hover:bg-white/10 active:scale-95",
              "focus-visible:ring-2 focus-visible:ring-green-400",
              "focus-visible:ring-offset-2",
              "focus-visible:ring-offset-slate-950",
              "focus-visible:outline-none",
              "sm:size-10",

              // Desktop position
              "lg:pointer-events-auto lg:absolute",
              "lg:top-1/2 lg:right-8",
              "lg:size-12 lg:-translate-y-1/2",
              "lg:border lg:border-white/25",
              "lg:bg-slate-950/55",
              "lg:shadow-lg lg:shadow-black/20",
              "lg:backdrop-blur-md",
              "lg:opacity-0 lg:group-hover:opacity-100",
              "lg:hover:scale-110",
              "lg:hover:border-green-400/60",
              "lg:hover:bg-green-700",
            ].join(" ")}
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 left-0 z-10 h-px bg-white/10"
        />
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-5 sm:size-6"
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
      className="size-5 sm:size-6"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="ml-2 size-4"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}