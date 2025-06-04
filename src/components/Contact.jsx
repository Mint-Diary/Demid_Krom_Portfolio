export default function ContactWithImageCoverBrand() {
  return (
    <>
      {/* Contact Section: With Image Cover Brand */}
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/nMzz4Xvz/Bildschirmfoto-vom-2025-05-28-23-50-03.png")',
        }}
      >
        <div className="bg-teal-900/95">
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
              {/* Heading with Company Info */}
              <div className="lg:w-2/5">
                <div className="mb-1 text-sm font-bold tracking-wider text-teal-300 uppercase">
                  We reply in 24hrs
                </div>
                <h2 className="mb-4 text-4xl font-black text-white">
                  Get in touch
                </h2>
                <p className="text-xl leading-relaxed font-medium text-slate-200">
                  If something does not make sense, feel free to contact us and
                  we will get back to you as soon as possible.
                </p>
                <h4 className="mt-10 mb-4 font-semibold tracking-wider text-slate-100 uppercase">
                  Company Inc.
                </h4>
                <div className="leading-relaxed text-slate-300">
                  1080 Sunshine Valley, Suite 2563
                  <br />
                  San Francisco, CA 85214
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </div>
              </div>
              {/* END Heading with Company Info */}

              {/* Contact Form */}
              <div className="flex flex-col overflow-hidden rounded-xl bg-white/10 p-2 shadow-xs lg:mx-auto lg:w-1/2 dark:text-slate-100">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6 rounded-lg bg-white p-5 md:p-10 dark:bg-slate-800"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label
                        htmlFor="firstname"
                        className="inline-block font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="block w-full rounded-lg border border-slate-200 px-5 py-3 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="lastname"
                        className="inline-block font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="block w-full rounded-lg border border-slate-200 px-5 py-3 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="inline-block font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-lg border border-slate-200 px-5 py-3 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="department"
                      className="inline-block font-medium"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="block w-full rounded-lg border border-slate-200 py-3 pr-10 pl-5 leading-6 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-slate-600 dark:bg-slate-800 dark:focus:border-teal-500"
                      defaultValue=""
                    >
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="projects">Projects</option>
                      <option value="payments">Payments</option>
                      <option value="hiring">Hiring</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="inline-block font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="block w-full rounded-lg border border-slate-200 px-5 py-3 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/50 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:border-teal-500"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-8 py-4 leading-6 font-semibold text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring-3 focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400/90"
                  >
                    <svg
                      className="hi-mini hi-paper-airplane inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
              {/* END Contact Form */}
            </div>
          </div>
        </div>
      </div>
      {/* END Contact Section: With Image Cover Brand */}
    </>
  );
}