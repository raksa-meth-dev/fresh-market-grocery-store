import Image from "next/image";
import Link from "next/link";

export function GroceryFastSelection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="
          grid h-[420px] w-full
          grid-cols-1 gap-3
          sm:h-[460px]
          sm:grid-cols-[1fr_1.04fr]
          sm:grid-rows-[1.35fr_1fr]
          lg:h-[600px]
          lg:gap-4
        "
      >
        {/* Summer Berry Sale */}
        <Link
          href="/collections/berries"
          className="
            group relative min-h-[220px] overflow-hidden
            rounded-2xl bg-stone-100
            sm:min-h-0
          "
        >
          <Image
            src="/images/collections/berries.jpg"
            alt="Fresh berries"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 48vw"
            className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />

          <div className="relative z-10 flex h-full w-[58%] flex-col p-6 lg:p-10">
            <h3 className="text-3xl font-black leading-[0.9] tracking-tight text-black lg:text-5xl">
              Summer
              <br />
              Berry Sale
            </h3>

            <p className="mt-5 max-w-xs text-sm font-medium italic leading-snug text-gray-900/90 lg:text-lg">
              Picked at the peak of ripeness. Juicy, sweet, and delivered fresh to your door.
            </p>

          </div>
        </Link>

        {/* New Local Milk — right card spanning both rows */}
        <Link
          href="/collections/local-milk"
          className="
            group relative min-h-[360px] overflow-hidden
            rounded-2xl bg-green-900
            sm:col-start-2 sm:row-span-2 sm:min-h-0
          "
        >
          <Image
            src="/images/collections/local-milk.jpg"
            alt="Fresh local milk with bread"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 52vw"
            className="object-cover  transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.38)_38%,transparent_70%)]" />

          <div className="relative z-10 flex h-full w-[70%] flex-col p-6 text-white lg:p-10">
            <h3 className="text-4xl font-black leading-[0.85] tracking-tight lg:text-6xl">
              New
              <br />
              Local
              <br />
              Milk
            </h3>

            <p className="mt-5 max-w-xs text-sm font-medium italic leading-snug text-white/90 lg:text-lg">
              Shop local new items and fresh products from nearby farms.
            </p>
          </div>
        </Link>

        {/* Hydration */}
        <Link
          href="/collections/hydration"
          className="
            group relative min-h-[190px] overflow-hidden
            rounded-2xl bg-sky-600
            sm:col-start-1 sm:row-start-2 sm:min-h-0
          "
        >
          <Image
            src="/images/collections/hydration.jpg"
            alt="Hydration products"
            fill
            sizes="(max-width: 640px) 100vw, 48vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-600/90 to-transparent" />

          <div className="relative z-10 flex h-full w-[68%] flex-col justify-center p-6 text-white lg:p-10">
            <h3 className="text-2xl font-black leading-none tracking-tight lg:text-4xl">
              New Local Milk
            </h3>

            <p className="mt-3 max-w-xs text-sm font-medium leading-snug text-white/90 lg:text-base">
              Goals new hydration benefit courses.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}