"use client";

import { Account } from "./account";
import { Cart } from "./cart";
import { Logo } from "./logo";
import { ProductSearch } from "./product-search";

type MyHeaderProps = {
  onSearch?: (query: string) => void;
};

export function MyHeader({ onSearch }: MyHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200">
          <div className="flex min-h-16 items-center gap-3 lg:gap-6">
            <Logo />

            <div className="hidden min-w-0 flex-1 md:block">
              <ProductSearch
                onSearch={onSearch}
                className="mx-auto max-w-2xl"
              />
            </div>

            <div className="ml-auto flex shrink-0 items-center gap-1">
              <Account />
              <Cart />
            </div>
          </div>

          <div className="pb-3 md:hidden">
            <ProductSearch onSearch={onSearch} />
          </div>
        </div>
      </div>
    </header>
  );
}