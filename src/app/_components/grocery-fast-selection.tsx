import Image from "next/image";
import Link from "next/link";

export function GroceryFastSelection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className={[
          // Mobile: let the section grow naturally so cards cannot overlap
          // the next section.
          "grid h-auto w-full grid-cols-1 gap-3",

          // Tablet and desktop layout.
          "sm:h-[460px]",
          "sm:grid-cols-[1fr_1.04fr]",
          "sm:grid-rows-[1.35fr_1fr]",
          "lg:h-[600px]",
          "lg:gap-4",
        ].join(" ")}
      >
        {/* Summer Berry Sale */}
        <Link
          href="/collections/berries"
          aria-label="Shop Summer Berry Sale"
          className={[
            "group relative isolate overflow-hidden",
            "min-h-[300px] rounded-2xl bg-stone-100",
            "sm:min-h-0",
            "focus-visible:ring-2 focus-visible:ring-green-600",
            "focus-visible:ring-offset-2 focus-visible:outline-none",
          ].join(" ")}
        >
          <Image
            src="/images/collections/berries.jpg"
            alt="Fresh strawberries, blueberries, raspberries, and blackberries"
            fill
            sizes="(max-width: 639px) calc(100vw - 32px), 48vw"
            className={[
              "object-cover object-right",
              "transition-transform duration-500",
              "md:group-hover:scale-105",
            ].join(" ")}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />

          <div className="relative z-10 flex h-full w-[72%] flex-col p-6 sm:w-[58%] lg:p-10">
            <h3 className="text-3xl leading-[0.9] font-black tracking-tight text-black lg:text-5xl">
              Summer
              <br />
              Berry Sale
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-snug font-medium text-gray-900/90 italic lg:text-lg">
              Picked at the peak of ripeness. Juicy, sweet, and delivered
              fresh to your door.
            </p>
          </div>
        </Link>

        {/* New Local Milk */}
        <Link
          href="/collections/local-milk"
          aria-label="Shop New Local Milk"
          className={[
            "group relative isolate overflow-hidden",
            "min-h-[420px] rounded-2xl bg-green-900",
            "sm:col-start-2 sm:row-span-2 sm:min-h-0",
            "focus-visible:ring-2 focus-visible:ring-green-600",
            "focus-visible:ring-offset-2 focus-visible:outline-none",
          ].join(" ")}
        >
          <Image
            src="/images/collections/local-milk.jpg"
            alt="Fresh local milk with bread"
            fill
            sizes="(max-width: 639px) calc(100vw - 32px), 52vw"
            className={[
              "object-cover",
              "transition-transform duration-500",
              "md:group-hover:scale-105",
            ].join(" ")}
          />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.38)_38%,transparent_70%)]" />

          <div className="relative z-10 flex h-full w-[78%] flex-col p-6 text-white sm:w-[70%] lg:p-10">
            <h3 className="text-4xl leading-[0.85] font-black tracking-tight lg:text-6xl">
              New
              <br />
              Local
              <br />
              Milk
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-snug font-medium text-white/90 italic lg:text-lg">
              Shop local new items and fresh products from nearby farms.
            </p>
          </div>
        </Link>

        {/* Hydration */}
        <Link
          href="/collections/hydration"
          aria-label="Shop hydration products"
          className={[
            "group relative isolate overflow-hidden",
            "min-h-[260px] rounded-2xl bg-sky-600",
            "sm:col-start-1 sm:row-start-2 sm:min-h-0",
            "focus-visible:ring-2 focus-visible:ring-green-600",
            "focus-visible:ring-offset-2 focus-visible:outline-none",
          ].join(" ")}
        >
          <Image
            src="/images/collections/hydration.jpg"
            alt="Milk and healthy breakfast products"
            fill
            sizes="(max-width: 639px) calc(100vw - 32px), 48vw"
            className={[
              "object-cover object-top",
              "transition-transform duration-500",
              "md:group-hover:scale-105",
            ].join(" ")}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-600/90 to-transparent" />

          <div className="relative z-10 flex h-full w-[75%] flex-col justify-center p-6 text-white sm:w-[68%] lg:p-10">
            <h3 className="text-2xl leading-none font-black tracking-tight lg:text-4xl">
              New Local Milk
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-snug font-medium text-white/90 lg:text-base">
              Goals new hydration benefit courses.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}