export default function CardsUserwithInfo() {
  return (
    <>
      {/* Cards: User with Info */}
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100 py-10 ">
        <div className="flex w-[30%] mx-auto flex-col overflow-hidden rounded-lg bg-white shadow-xs dark:bg-slate-800 dark:text-slate-100">
          {/* Card Cover/Avatar */}
          <div
            className="mb-8 bg-cover"
            style={{
              backgroundImage:
                'url("https://cdn.tailkit.com/media/placeholders/photo-phIFdC6lA4E-800x400.jpg")',
            }}
          >
            <div className="flex h-32 items-end justify-center">
              <div className="-mb-12 rounded-full bg-slate-200/50 p-2 dark:bg-slate-600/50">
                <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg"
                  alt="User Avatar"
                  className="inline-block size-20 rounded-full"
                />
              </div>
            </div>
          </div>
          {/* END Card Cover/Avatar */}

          {/* Card Body */}
          <div className="grow p-5 text-center">
            <h3 className="mt-3 mb-1 text-lg font-semibold">Jeremy Theodore</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              j.theodore@example.com
            </p>
          </div>
          {/* END Card Body */}

          {/* Card Footer */}
          <div className="grid grid-cols-3 bg-slate-50 px-5 py-4 text-center dark:bg-slate-700/50">
            <dl className="space-y-1 py-2">
              <dt className="text-lg font-bold">15</dt>
              <dd className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Projects
              </dd>
            </dl>
            <dl className="space-y-1 py-2">
              <dt className="text-lg font-bold">8.9k</dt>
              <dd className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Sales
              </dd>
            </dl>
            <dl className="space-y-1 py-2">
              <dt className="text-lg font-bold">1.6k</dt>
              <dd className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Followers
              </dd>
            </dl>
          </div>
          {/* END Card Footer */}
        </div>
      </div>
      {/* END Cards: User with Info */}
    </>
  );
}
