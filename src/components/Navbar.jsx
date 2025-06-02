"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useTranslation, LanguageSwitcher } from "../i18n/index.jsx";
import { useLocation } from "react-router-dom";

export default function MainHeadersSimple() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [buildingComplete, setBuildingComplete] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Complete building animation after 4 seconds
    const timer = setTimeout(() => setBuildingComplete(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileNavOpen(false);
    }
  };

  // Menu items array to populate both desktop and mobile links
  const menuItems = [
    {
      name: t("nav.tech"),
      id: "tech",
    },
    {
      name: t("nav.timeline"),
      id: "timeline",
    },
    {
      name: t("nav.about"),
      id: "about",
    },
    {
      name: t("nav.contact"),
      id: "contact",
    },
  ];

  return (
    <>
      {/* Main Header Section: Building Pixel Art */}
      <div className="relative bg-[#101828] text-white h-21">
        {/* Main Header */}
        <header
          className={`building-navbar relative flex flex-none items-center pt-5 pb-4 bg-[#101828] overflow-hidden ${
            buildingComplete ? "completion-flash" : ""
          } ${buildingComplete ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {/* Background building animation */}
          <div className="absolute inset-0 bg-[#101828] animate-build-background" />

          {/* Pixel borders */}
          <div
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 bg-[length:12px_4px] bg-repeat-x animate-build-border-top"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #374151 0px, #374151 8px, transparent 8px, transparent 12px)",
            }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 bg-[length:12px_4px] bg-repeat-x animate-build-border-bottom"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #374151 0px, #374151 8px, transparent 8px, transparent 12px)",
            }}
          />

          {/* Main Header Content */}
          <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 xl:max-w-7xl relative z-10">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="relative overflow-hidden">
                <button
                  onClick={() => scrollToSection("home")}
                  className="logo-build group inline-flex items-center gap-3 text-lg font-bold tracking-wider text-green-400 hover:text-green-300 font-mono animate-build-logo"
                >
                  <div className="pixel-logo w-6 h-6 bg-green-400 relative animate-build-pixel-logo [image-rendering:pixelated]">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-black animate-build-pixel-detail-1" />
                    <div className="absolute top-1 right-1 w-2 h-2 bg-black animate-build-pixel-detail-2" />
                  </div>
                  <div className="text-build relative overflow-hidden">
                    <span className="text-xl">{t("nav.logo")}</span>
                    <div className="absolute inset-0 bg-gray-800 animate-reveal-text" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher className="hidden lg:block" />

              {/* Navigation */}
              <nav className="hidden space-x-2 lg:block">
                {menuItems.map((item, index) => (
                  <div key={item.name} className="inline-block overflow-hidden">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 border-2 border-gray-600 hover:border-gray-500 font-mono inline-block transition-all duration-100 ease-linear hover:translate-x-px hover:translate-y-px [image-rendering:pixelated] animate-build-menu-${index + 1}`}
                    >
                      <span>{item.name}</span>
                    </button>
                  </div>
                ))}
              </nav>

              {/* Open Mobile Navigation */}
              <div className="lg:hidden overflow-hidden">
                <button
                  onClick={() => setMobileNavOpen(true)}
                  type="button"
                  className="mobile-button inline-flex items-center justify-center gap-2 bg-gray-700 border-2 border-gray-600 px-3 py-2 text-sm leading-5 font-bold text-white hover:bg-gray-600 hover:border-gray-500 transition-all duration-100 ease-linear hover:translate-x-px hover:translate-y-px [image-rendering:pixelated] animate-build-mobile-button"
                  aria-controls="tkMobileNav"
                  aria-label={t("common.menu")}
                >
                  <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                    <div className="w-full h-1 bg-white"></div>
                    <div className="w-full h-1 bg-white"></div>
                    <div className="w-full h-1 bg-white"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Transition show={mobileNavOpen}>
            <div className="lg:hidden">
              <Transition.Child
                enter="transition ease-out duration-200"
                enterFrom="opacity-50 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-50 translate-x-full"
              >
                <nav
                  id="tkMobileNav"
                  className="fixed top-0 right-0 bottom-0 z-50 w-72 overflow-auto bg-gray-800 border-l-4 border-gray-600 shadow-lg"
                  tabIndex={-1}
                  aria-labelledby="tkMobileNavLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="flex items-center justify-between p-6 border-b-2 border-gray-700">
                    {/* Logo */}
                    <button
                      id="tkMobileNavLabel"
                      onClick={() => {
                        scrollToSection("home");
                        setMobileNavOpen(false);
                      }}
                      className="group inline-flex items-center gap-3 text-lg font-bold tracking-wider text-green-400 hover:text-green-300 font-mono"
                    >
                      <div className="w-6 h-6 bg-green-400 relative [image-rendering:pixelated]">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-black" />
                        <div className="absolute top-1 right-1 w-2 h-2 bg-black" />
                      </div>
                      <span>{t("nav.logo")}</span>
                    </button>

                    {/* Close Mobile Navigation */}
                    <button
                      onClick={() => setMobileNavOpen(false)}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 bg-gray-700 border-2 border-gray-600 px-3 py-2 text-sm leading-5 font-bold text-white hover:bg-gray-600 hover:border-gray-500 transition-all duration-100 ease-linear hover:translate-x-px hover:translate-y-px [image-rendering:pixelated]"
                      aria-label={t("common.close")}
                    >
                      <div className="w-5 h-5 relative">
                        <div className="absolute inset-0 w-full h-1 bg-white transform rotate-45 top-2"></div>
                        <div className="absolute inset-0 w-full h-1 bg-white transform -rotate-45 top-2"></div>
                      </div>
                    </button>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="px-6 py-3 border-b-2 border-gray-700">
                    <LanguageSwitcher />
                  </div>

                  <nav className="flex flex-col gap-1 px-6 py-5">
                    {menuItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.id)}
                        className="py-3 px-4 text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-500 font-mono transition-all duration-100 ease-linear hover:translate-x-px hover:translate-y-px [image-rendering:pixelated]"
                      >
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </nav>
                </nav>
              </Transition.Child>

              {/* Mobile Navigation Backdrop */}
              <Transition.Child
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  onClick={() => setMobileNavOpen(false)}
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                />
              </Transition.Child>
            </div>
          </Transition>
        </header>
      </div>
    </>
  );
}
