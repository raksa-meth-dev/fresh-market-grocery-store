import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
};

export function Logo({
  href = "/",
  className = "",
  priority = true,
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Go to homepage"
      className={`inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="Store logo"
        width={160}
        height={48}
        priority={priority}
        className="h-8 w-auto object-contain sm:h-9 lg:h-10"
      />
    </Link>
  );
}
