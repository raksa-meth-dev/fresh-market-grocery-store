import Link from "next/link";
import type { ReactNode } from "react";

type DropdownItemProps = {
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  onClick?: () => void;
  danger?: boolean;
};

export function DropdownItem({
  children,
  href,
  icon,
  onClick,
  danger = false,
}: DropdownItemProps) {
  const className = [
    "flex min-h-10 w-full items-center gap-3 rounded-lg px-3 py-2",
    "text-left text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600",
    danger
      ? "text-red-600 hover:bg-red-50"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
  ].join(" ");

  const content = (
    <>
      {icon ? (
        <span className="flex size-5 shrink-0 items-center justify-center text-slate-500">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1 truncate">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} role="menuitem" className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" role="menuitem" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
