export default function LogosBoxedwithHeading() {
  return (
    <>
      {/* Logos Section: Boxed with Heading */}
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
        <div className="container mx-auto space-y-10 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              Trusted by these{" "}
              <span>
                world-class companies
              </span>
            </h2>
            <div className="mx-auto mb-3 h-1 w-10 rounded-lg bg-slate-300 dark:bg-slate-700/75" />
            <p className="mx-auto text-lg leading-relaxed font-medium text-slate-700 lg:w-2/3 dark:text-slate-300">
              We have been working with the biggest companies and delivered over
              30 high profile projects in the past year. Let's build something
              together today.
            </p>
          </div>
          {/* END Heading */}

          {/* Logos */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-rose-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-rose-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-semibold text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-solid hi-cursor-arrow-rays inline-block size-6 text-rose-600 dark:text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Klickers</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-sky-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-sky-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-bold text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-mini hi-truck inline-block size-6 text-sky-600 dark:text-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" />
                    <path d="M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 00-1.784-8.549A1.486 1.486 0 0014.823 5H13.25zM14.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>upTruck</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-indigo-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-indigo-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-medium text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-solid hi-cube inline-block size-6 text-indigo-600 dark:text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                  <span>boxspot</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-teal-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-teal-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-semibold text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-solid hi-map-pin inline-block size-6 text-teal-600 dark:text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>freshloc</span>
                </div>
              </div>
            </a>
          </div>
          {/* END Logos */}

          {/* Logos col 2*/}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-rose-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-rose-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-semibold text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-solid hi-cursor-arrow-rays inline-block size-6 text-rose-600 dark:text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Klickers</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-sky-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-sky-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-bold text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-mini hi-truck inline-block size-6 text-sky-600 dark:text-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" />
                    <path d="M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 00-1.784-8.549A1.486 1.486 0 0014.823 5H13.25zM14.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>upTruck</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-indigo-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-indigo-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-medium text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-solid hi-cube inline-block size-6 text-indigo-600 dark:text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                  <span>boxspot</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg hover:shadow-teal-500/10 active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 dark:hover:shadow-teal-500/30"
            >
              <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 py-2 text-lg font-semibold text-slate-900 opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:text-slate-100">
                  <svg
                    className="hi-solid hi-map-pin inline-block size-6 text-teal-600 dark:text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>freshloc</span>
                </div>
              </div>
            </a>
          </div>
          {/* END Logos col 2*/}

        </div>
      </div>
      {/* END Logos Section: Boxed with Heading */}
    </>
  );
}
