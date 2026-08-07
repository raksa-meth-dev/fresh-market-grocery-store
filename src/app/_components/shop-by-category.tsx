import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  imageSrc: string;
  href: string;
}

const CATEGORIES: Category[] = [
  {
    id: "fruits-veg",
    name: "Fruits & Veg",
    imageSrc: "/images/categories/fruits-veg.webp",
    href: "/categories/fruits-and-veg",
  },
  {
    id: "dairy",
    name: "Dairy",
    imageSrc: "/images/categories/dairy.webp",
    href: "/categories/dairy",
  },
  {
    id: "pantry-staples",
    name: "Pantry Staples",
    imageSrc: "/images/categories/pantry-staples.webp",
    href: "/categories/pantry-staples",
  },
  {
    id: "meat",
    name: "Meat",
    imageSrc: "/images/categories/meat.webp",
    href: "/categories/meat",
  },
  {
    id: "bakery",
    name: "Bakery",
    imageSrc: "/images/categories/bakery.webp",
    href: "/categories/bakery",
  },
  {
    id: "beverages",
    name: "Beverages",
    imageSrc: "/images/categories/beverages.webp",
    href: "/categories/beverages",
  },
];

export default function ShopByCategory() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      {/* Header with Title & View All Link Button */}
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wider text-black md:text-2xl">
          Shop By Category
        </h2>

        <Link
          href="/categories"
          className={[
            "inline-flex items-center gap-1.5 text-sm font-semibold text-green-900 transition-all",
            "hover:text-green-700 hover:underline",
            "focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:outline-none",
            "rounded-md px-2 py-1",
          ].join(" ")}
        >
          View All
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            aria-label={`Shop ${category.name}`}
            className={[
              "group flex flex-col items-center gap-3 text-center",
              "rounded-2xl p-2",
              "transition-transform duration-300 md:hover:-translate-y-1",
              "focus-visible:ring-2 focus-visible:ring-green-600",
              "focus-visible:ring-offset-2 focus-visible:outline-none",
            ].join(" ")}
          >
            {/* Circle image container */}
            <div
              className={[
                "relative flex items-center justify-center rounded-full bg-white p-1.5 shadow-sm transition-shadow duration-300 group-hover:shadow-md",
                "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
                "border-2 border-green-900",
              ].join(" ")}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  fill
                  sizes="(max-width: 639px) 112px, (max-width: 768px) 128px, (max-width: 1023px) 144px, 160px"
                  className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <span className="text-sm font-bold tracking-tight text-black transition-colors group-hover:text-green-900 sm:text-base lg:text-lg">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}