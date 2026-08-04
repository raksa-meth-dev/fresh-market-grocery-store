"use client";

import { useState, type FormEvent } from "react";

type ProductSearchProps = {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
  className?: string;
};

export function ProductSearch({
  placeholder = "Search fresh produce, dairy, snacks...",
  defaultValue = "",
  onSearch,
  className = "",
}: ProductSearchProps) {
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = query.trim();
    if (!value) return;

    onSearch?.(value);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`group flex h-10 w-full items-center overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600/20 ${className}`}
    >
      <label htmlFor="header-product-search" className="sr-only">
        Search products
      </label>

      <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-4 shrink-0 text-slate-400 transition group-focus-within:text-green-700"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>

        <input
          id="header-product-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 [&::-webkit-search-cancel-button]:hidden"
        />
      </div>

      <button
        type="submit"
        disabled={!query.trim()}
        className="mr-1 inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-green-700 px-4 text-sm font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45"
      >
        Go
      </button>
    </form>
  );
}
