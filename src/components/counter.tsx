"use client";

import { useCounterStore } from "@/stores/use-counter-store";

export function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <section className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/10">
              <span className="size-1.5 rounded-full bg-green-500" />
              Zustand state
            </div>

            <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Interactive counter
            </h2>

            <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
              The current value is stored globally and updates instantly across
              connected client components.
            </p>
          </div>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-green-100 bg-green-50 sm:size-24"
          >
            <span className="text-4xl font-bold tabular-nums tracking-tight text-green-700 sm:text-5xl">
              {count}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={decrement}
            aria-label="Decrease counter"
            className={[
              "inline-flex h-11 items-center justify-center gap-2 rounded-lg",
              "border border-slate-300 bg-white px-4",
              "text-sm font-medium text-slate-700 shadow-sm",
              "transition hover:border-slate-400 hover:bg-slate-50",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-green-500 focus-visible:ring-offset-2",
              "active:translate-y-px",
            ].join(" ")}
          >
            <MinusIcon />
            Decrease
          </button>

          <button
            type="button"
            onClick={reset}
            disabled={count === 0}
            className={[
              "order-3 col-span-2 inline-flex h-11 items-center justify-center",
              "rounded-lg border border-slate-200 bg-slate-50 px-4",
              "text-sm font-medium text-slate-600 transition",
              "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-green-500 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "disabled:hover:border-slate-200 disabled:hover:bg-slate-50",
              "disabled:hover:text-slate-600",
              "sm:order-2 sm:col-span-1",
            ].join(" ")}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={increment}
            aria-label="Increase counter"
            className={[
              "order-2 inline-flex h-11 items-center justify-center gap-2",
              "rounded-lg bg-green-600 px-4",
              "text-sm font-semibold text-white shadow-sm",
              "transition hover:bg-green-700",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-green-500 focus-visible:ring-offset-2",
              "active:translate-y-px",
              "sm:order-3",
            ].join(" ")}
          >
            <PlusIcon />
            Increase
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="size-2 rounded-full bg-green-500 ring-4 ring-green-50" />
            Store connected
          </div>

          <span className="text-xs tabular-nums text-slate-400">
            Current value: {count}
          </span>
        </div>
      </div>
    </section>
  );
}

function MinusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-4"
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-4"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}