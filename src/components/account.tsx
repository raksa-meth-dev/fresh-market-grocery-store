"use client";

import { useEffect, useId, useRef, useState } from "react";
import { DropdownItem } from "./dropdown-item";

export function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

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

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Open account menu"
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-11 min-w-11 flex-col items-center justify-center rounded-lg px-2 text-slate-700 transition hover:bg-slate-100 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:min-w-14"
      >
        <AccountIcon className="size-6" />
        <span className="mt-0.5 hidden text-[11px] font-medium leading-none sm:block">
          Account
        </span>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Account options"
          className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10"
        >
          <div className="border-b border-slate-100 px-3 py-2.5">
            <p className="text-xs text-slate-500">Welcome</p>
            <p className="truncate text-sm font-semibold text-slate-950">
              Guest customer
            </p>
          </div>

          <div className="mt-1 space-y-0.5">
            <DropdownItem href="/account" icon={<AccountIcon className="size-4" />}>
              My account
            </DropdownItem>
            <DropdownItem href="/orders" icon={<BoxIcon />}>
              My orders
            </DropdownItem>
            <DropdownItem href="/wishlist" icon={<HeartIcon />}>
              Wishlist
            </DropdownItem>
            <DropdownItem href="/login" icon={<LoginIcon />}>
              Sign in
            </DropdownItem>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function AccountIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.8 19c.5-3.2 2.8-4.9 6.2-4.9s5.7 1.7 6.2 4.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <path d="M5 7.5 12 4l7 3.5v9L12 20l-7-3.5v-9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m5.5 7.5 6.5 3.25 6.5-3.25M12 10.75V20" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <path d="M12 19s-7-4.4-7-9.1c0-2.7 1.8-4.4 4.2-4.4 1.4 0 2.4.7 2.8 1.5.4-.8 1.4-1.5 2.8-1.5 2.4 0 4.2 1.7 4.2 4.4C19 14.6 12 19 12 19Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function LoginIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <path d="M14 5h4v14h-4M13 12H4m0 0 3-3m-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
