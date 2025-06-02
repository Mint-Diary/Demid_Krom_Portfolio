import { useTranslation } from "../i18n/index.jsx";

export default function ContactWithImageCoverBrand() {
  const { t } = useTranslation();

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
                  {t("contact.subtitle")}
                </div>
                <h2 className="mb-4 text-4xl font-black text-white">
                  {t("contact.title")}
                </h2>
                <p className="text-xl leading-relaxed font-medium text-slate-200">
                  {t("contact.description")}
                </p>
                <h4 className="mt-10 mb-4 font-semibold tracking-wider text-slate-100 uppercase">
                  {t("contact.companyName")}
                </h4>
                <div className="leading-relaxed text-slate-300">
                  {t("contact.address")}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-3/5">
                <div className="rounded-lg bg-white p-6 text-slate-800 shadow-xl dark:bg-slate-900 dark:text-slate-100 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label htmlFor="name" className="font-medium">
                          {t("contact.form.name")}
                        </label>
                        <input
                          className="block w-full rounded-lg border border-slate-200 px-3 py-2 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:placeholder-slate-400"
                          type="text"
                          id="name"
                          name="name"
                          placeholder={t("contact.form.namePlaceholder")}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="email" className="font-medium">
                          {t("contact.form.email")}
                        </label>
                        <input
                          className="block w-full rounded-lg border border-slate-200 px-3 py-2 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:placeholder-slate-400"
                          type="email"
                          id="email"
                          name="email"
                          placeholder={t("contact.form.emailPlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="message" className="font-medium">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        className="block w-full rounded-lg border border-slate-200 px-3 py-2 leading-6 placeholder-slate-500 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:placeholder-slate-400"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder={t("contact.form.messagePlaceholder")}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center space-x-2 rounded-lg bg-teal-500 px-4 py-2 font-semibold leading-6 text-white hover:bg-teal-600 focus:ring focus:ring-teal-500 focus:ring-opacity-50 active:bg-teal-600"
                    >
                      {t("contact.form.submit")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END Contact Section: With Image Cover Brand */}
    </>
  );
}
