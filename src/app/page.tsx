import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 font-sans text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f615,transparent)]" />
      <div className="absolute -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
      />

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-between px-6 py-20 text-center sm:py-32">
        {/* Logo Badge */}
        <div className="mb-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 backdrop-blur-md shadow-xl">
          <Image
            className="invert"
            src="/next.svg"
            alt="Next.js logo"
            width={90}
            height={18}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="flex max-w-2xl flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
            To get started, edit{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              page.tsx
            </span>
          </h1>
          
          <p className="max-w-xl text-lg text-slate-400 sm:text-xl">
            Looking for a starting point or more instructions? Explore our curated visual resources or learning modules.
          </p>
        </div>

        {/* Link Cards */}
        <div className="mt-10 grid w-full max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-left transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm"
          >
            <h3 className="flex items-center text-base font-semibold text-white group-hover:text-indigo-400">
              Templates <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </h3>
            <p className="mt-1 text-sm text-slate-400">Find starter kits and boilerplates.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-left transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm"
          >
            <h3 className="flex items-center text-base font-semibold text-white group-hover:text-indigo-400">
              Learning Center <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </h3>
            <p className="mt-1 text-sm text-slate-400">Learn Next.js with interactive lessons.</p>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-slate-950 transition-all duration-200 hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 font-medium text-slate-300 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800 hover:text-white backdrop-blur-sm sm:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}