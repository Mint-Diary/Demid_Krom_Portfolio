import { useState } from "react";

// Headless UI 2.x for React, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Transition } from "@headlessui/react";

export default function MainHeadersSimple() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Menu items array to populate both desktop and mobile links
  const menuItems = [
    {
      name: "Features",
      url: "#",
    },
    {
      name: "Pricing",
      url: "#",
    },
    {
      name: "Support",
      url: "#",
    },
  ];

  return (
    <>
      {/* Main Header Section: Simple */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 dark:text-slate-100">
        {/* Main Header */}
        <header
          id="page-header"
          className="relative flex flex-none items-center py-8"
        >
          {/* Main Header Content */}
          <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 xl:max-w-7xl">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Logo */}
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-slate-900 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
              >
                <svg
                  className="hi-mini hi-cube-transparent inline-block size-5 text-teal-600 transition group-hover:scale-110 dark:text-teal-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Company</span>
              </a>
              {/* END Logo */}
            </div>
            {/* END Left Section */}

            {/* Right Section */}
            <div className="flex items-center">
              {/* Navigation */}
              <nav className="hidden space-x-3 md:space-x-6 lg:block">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="text-sm font-semibold text-slate-900 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400"
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
              {/* END Navigation */}

              {/* Open Mobile Navigation */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileNavOpen(true)}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-xs focus:ring-3 focus:ring-slate-300/25 active:border-slate-200 active:shadow-none dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
                  aria-controls="tkMobileNav"
                >
                  <svg
                    className="hi-mini hi-bars-3 inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* END Open Mobile Navigation */}
            </div>
            {/* END Right Section */}
          </div>
          {/* END Main Header Content */}

          {/* Mobile Navigation */}
          <Transition
            show={mobileNavOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-50 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-50 translate-x-full"
          >
            <nav
              id="tkMobileNav"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 overflow-auto bg-white/95 shadow-lg lg:hidden dark:bg-slate-800/95"
              tabIndex={-1}
              aria-labelledby="tkMobileNavLabel"
              aria-modal="true"
              role="dialog"
            >
              <div className="flex items-center justify-between p-6">
                {/* Logo */}
                <a
                  id="tkMobileNavLabel"
                  href="#"
                  className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-slate-900 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
                >
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-5 text-teal-600 transition group-hover:scale-110 dark:text-teal-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Company</span>
                </a>
                {/* END Logo */}

                {/* Close Mobile Navigation */}
                <button
                  onClick={() => setMobileNavOpen(false)}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-5 font-semibold text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-xs focus:ring-3 focus:ring-slate-300/25 active:border-slate-200 active:shadow-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
                >
                  <svg
                    className="hi-mini hi-x-mark -mx-0.5 inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
                {/* END Close Mobile Navigation */}
              </div>
              <div className="h-px bg-slate-200/75 dark:bg-slate-700/75" />
              <nav className="flex flex-col gap-2 px-6 py-5">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="py-1 text-sm font-semibold text-slate-900 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400"
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </nav>
          </Transition>
          {/* END Mobile Navigation */}

          {/* Mobile Navigation Backdrop */}
          <Transition
            show={mobileNavOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              onClick={() => setMobileNavOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-xs will-change-auto lg:hidden dark:bg-slate-900/80"
            />
          </Transition>
          {/* END Mobile Navigation Backdrop */}
        </header>
        {/* END Main Header */}
      </div>
      {/* END Main Header Section: Simple */}
    </>
  );
}
