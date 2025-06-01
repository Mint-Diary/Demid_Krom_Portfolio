export default function HeroImageSideWithGradient() {
  return (
    <>
      {/* Hero Section: Multiple Images with Gradient */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 dark:text-slate-100">
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl">
          <div className="absolute inset-0 rounded-full bg-linear-to-b from-green-500 via-emerald-500 to-lime-300 opacity-10 blur-3xl transition group-hover:scale-95" />
          <div className="relative text-center">
            <div>
              <h1 className="mb-4 text-4xl font-black text-black lg:text-6xl dark:text-white">
                I'm{" "}
                <span className="bg-linear-to-r from-cyan-700 to-green-300 bg-clip-text text-transparent">
                  Demid Krom
                </span>{" "}
                Eager to learn, motivated and ready to take on real-world
                challenges
              </h1>
              <p className="mx-auto text-lg/relaxed font-medium text-slate-700 lg:w-2/3 lg:text-xl/relaxed dark:text-slate-300">
                I develop full stack applications using Java and modern web
                technologies. Always eager to learn, improve and contribute to
                real projects.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 pt-8 pb-16 sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#"
                className="dark:border-slate-transparent group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-800 px-5 py-2.5 text-sm leading-6 font-semibold text-white hover:border-slate-600 hover:bg-slate-600 hover:text-white focus:ring-3 focus:ring-slate-400/50 active:border-slate-700 active:bg-slate-700 dark:bg-slate-700/75 dark:hover:border-transparent dark:hover:bg-slate-700 dark:focus:ring-slate-700/40"
              >
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hi-mini hi-arrow-right inline-block size-5 opacity-50 transition group-hover:opacity-100 group-active:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-white/80 px-5 py-2.5 text-sm leading-6 font-semibold text-slate-800 backdrop-blur-xs hover:text-slate-900 hover:shadow-xs focus:ring-3 focus:ring-slate-300/25 active:border-slate-200 active:shadow-none dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
          <div className="group relative flex items-center justify-center gap-2 sm:gap-10">
            <div className="w-full max-w-80 origin-top-right rotate-12 rounded-2xl bg-white/50 p-2.5 shadow-xl shadow-purple-400/10 backdrop-blur-xs transition duration-300 group-hover:-translate-x-2 dark:bg-black/20">
              <img
                src="/ide_dude.png"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt="Promo hero 1"
              />
            </div>
            <div className="mt-5 w-full max-w-80 rounded-2xl bg-white/50 p-2.5 shadow-xl shadow-purple-400/10 backdrop-blur-xs transition duration-300 group-hover:translate-y-2 dark:bg-black/20">
              <img
                src="/hand_with_iphone.jpg"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt="Promo hero 2"
              />
            </div>
            <div className="w-full max-w-80 origin-top-left -rotate-12 rounded-2xl bg-white/50 p-2.5 shadow-xl shadow-purple-400/10 backdrop-blur-xs transition duration-300 group-hover:translate-x-2 dark:bg-black/20">
              <img
                src="/vr_headset.jpg"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt="Promo hero 3"
              />
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Multiple Images with Gradient */}
    </>
  );
}
