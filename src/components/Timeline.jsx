export default function TimelineCenteredwithExtraInfo() {
  return (
    <>
      {/* Background wrapper that fills full width */}
      <div className="relative w-full bg-slate-100 dark:bg-slate-900 py-10">
        {/* Centered content with fixed width */}
        <div className="relative w-[60%] mx-auto py-5 dark:text-slate-100">
          {/* Vertical Guide */}
          <div
            className="absolute top-0 bottom-0 left-0 flex w-10 flex-col justify-center md:w-12 lg:left-1/2 lg:-ml-6"
            aria-hidden="true"
          >
            <div className="mx-auto h-2.5 w-1 grow-0 rounded-t bg-linear-to-b from-transparent to-teal-100 dark:to-teal-900" />
            <div className="mx-auto w-1 grow bg-teal-100 dark:bg-teal-900" />
            <div className="mx-auto h-2.5 w-1 grow-0 rounded-b bg-linear-to-t from-transparent to-teal-100 dark:to-teal-900" />
          </div>
          {/* END Vertical Guide */}

          {/* Timeline */}
          <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
            {/* Event */}
            <li className="relative lg:mr-auto lg:w-1/2 lg:pr-6">
              <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:right-0 lg:left-auto lg:translate-x-6">
                <div className="size-3 rounded-full bg-teal-500 ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:ring-teal-900 dark:ring-offset-slate-900" />
              </div>
              <div className="rounded-xl bg-slate-100 p-4 hover:ring-3 hover:ring-slate-100 hover:ring-offset-2 dark:bg-slate-800 dark:ring-offset-slate-900 dark:hover:ring-slate-700">
                <h4 className="mb-2 font-semibold">3.0 update is now live!</h4>
                <p className="text-sm leading-relaxed">
                  It's finally here are comes packed with many awesome features.
                  Be sure to{" "}
                  <a
                    href="#"
                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    download it
                  </a>{" "}
                  and let us know{" "}
                  <a
                    href="#"
                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    what you think
                  </a>
                  !
                </p>
              </div>
              <div className="px-4 py-2 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:mt-4 lg:flex lg:w-40 lg:translate-x-full lg:flex-col lg:py-0 lg:pr-0 lg:pl-6">
                <p className="text-sm font-medium text-slate-500">
                  February 01, 2023
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className="relative lg:ml-auto lg:w-1/2 lg:pl-6">
              <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:-translate-x-6">
                <div className="size-3 rounded-full bg-teal-500 ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:ring-teal-900 dark:ring-offset-slate-900" />
              </div>
              <div className="rounded-xl bg-slate-100 p-4 hover:ring-3 hover:ring-slate-100 hover:ring-offset-2 dark:bg-slate-800 dark:ring-offset-slate-900 dark:hover:ring-slate-700">
                <h4 className="mb-2 font-semibold">Maintenance notice</h4>
                <p className="text-sm leading-relaxed">
                  We are going to apply some security fixes next week. Please
                  check out the{" "}
                  <a
                    href="#"
                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    schedule
                  </a>{" "}
                  for more information about any downtime.
                </p>
              </div>
              <div className="px-4 py-2 lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:mt-4 lg:flex lg:w-40 lg:-translate-x-full lg:flex-col lg:py-0 lg:pr-6 lg:pl-0 lg:text-right">
                <p className="text-sm font-medium text-slate-500">
                  January 22, 2023
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className="relative lg:mr-auto lg:w-1/2 lg:pr-6">
              <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:right-0 lg:left-auto lg:translate-x-6">
                <div className="size-3 rounded-full bg-teal-500 ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:ring-teal-900 dark:ring-offset-slate-900" />
              </div>
              <div className="rounded-xl bg-slate-100 p-4 hover:ring-3 hover:ring-slate-100 hover:ring-offset-2 dark:bg-slate-800 dark:ring-offset-slate-900 dark:hover:ring-slate-700">
                <h4 className="mb-2 font-semibold">
                  We reached 3,500 paying users
                </h4>
                <p className="text-sm leading-relaxed">
                  Thank you all so much for your support!
                </p>
              </div>
              <div className="px-4 py-2 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:mt-4 lg:flex lg:w-40 lg:translate-x-full lg:flex-col lg:py-0 lg:pr-0 lg:pl-6">
                <p className="text-sm font-medium text-slate-500">
                  January 02, 2023
                </p>
              </div>
            </li>
            {/* END Event */}

            {/* Event */}
            <li className="relative lg:ml-auto lg:w-1/2 lg:pl-6">
              <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:-translate-x-6">
                <div className="size-3 rounded-full bg-teal-500 ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:ring-teal-900 dark:ring-offset-slate-900" />
              </div>
              <div className="rounded-xl bg-slate-100 p-4 hover:ring-3 hover:ring-slate-100 hover:ring-offset-2 dark:bg-slate-800 dark:ring-offset-slate-900 dark:hover:ring-slate-700">
                <h4 className="mb-2 font-semibold">
                  Beta registrations are now open
                </h4>
                <p className="text-sm leading-relaxed">
                  We are going to be beta testing our 3.0 release. Be sure to{" "}
                  <a
                    href="#"
                    className="font-medium text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    register
                  </a>{" "}
                  for a chance to participate and check out all the new features
                  before everyone else.
                </p>
              </div>
              <div className="px-4 py-2 lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:mt-4 lg:flex lg:w-40 lg:-translate-x-full lg:flex-col lg:py-0 lg:pr-6 lg:pl-0 lg:text-right">
                <p className="text-sm font-medium text-slate-500">
                  December 20, 2022
                </p>
              </div>
            </li>
            {/* END Event */}
          </ul>
          {/* END Timeline */}
        </div>
      </div>
    </>
  );
}