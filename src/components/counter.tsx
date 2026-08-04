"use client";

import { useCounterStore } from "@/stores/use-counter-store";

export function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <section className="relative mt-12 w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-1 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl">
      {/* Gradient border glow */}
      <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative rounded-[1.35rem] bg-slate-950/40 px-6 py-7 sm:px-8 sm:py-8">
        <div className="flex flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.9)]" />
            Zustand State
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Interactive Counter
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
            This value is managed globally with Zustand and updated instantly
            from this client component.
          </p>

          <div
            aria-live="polite"
            className="relative my-7 flex h-32 w-32 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 shadow-inner shadow-black/30"
          >
            <div className="absolute inset-2 rounded-full border border-indigo-500/10" />

            <span className="bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-6xl font-black tabular-nums text-transparent">
              {count}
            </span>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={decrement}
              aria-label="Decrease counter"
              className="group flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-4 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-slate-800 hover:text-white hover:shadow-lg hover:shadow-indigo-500/10 active:translate-y-0"
            >
              <span className="text-xl leading-none text-slate-400 transition-colors group-hover:text-indigo-300">
                −
              </span>
              Decrease
            </button>

            <button
              type="button"
              onClick={increment}
              aria-label="Increase counter"
              className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 font-semibold text-white shadow-lg shadow-indigo-950/40 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-indigo-500/20 active:translate-y-0 sm:order-3"
            >
              <span className="text-xl leading-none">+</span>
              Increase
            </button>

            <button
              type="button"
              onClick={reset}
              disabled={count === 0}
              className="col-span-2 flex h-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 px-4 font-medium text-slate-400 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-800 disabled:hover:bg-slate-950/40 disabled:hover:text-slate-400 sm:order-2 sm:col-span-1"
            >
              Reset
            </button>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Store connected
          </div>
        </div>
      </div>
    </section>
  );
}