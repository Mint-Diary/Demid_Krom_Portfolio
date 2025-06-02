import { useTranslation } from "../i18n/index.jsx";

export default function TestimonialsAsymmetricGrid() {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      text: t('testimonials.items.first.text'),
      author: {
        name: t('testimonials.items.first.author'),
        role: t('testimonials.items.first.role'),
        company: t('testimonials.items.first.company'),
        image: "https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg"
      },
      size: "lg:col-span-2"
    },
    {
      text: t('testimonials.items.second.text'),
      author: {
        name: t('testimonials.items.second.author'),
        role: t('testimonials.items.second.role'),
        company: t('testimonials.items.second.company'),
        image: "https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
      }
    },
    {
      text: t('testimonials.items.third.text'),
      author: {
        name: t('testimonials.items.third.author'),
        role: t('testimonials.items.third.role'),
        company: t('testimonials.items.third.company'),
        image: "https://cdn.tailkit.com/media/placeholders/avatar-9SSa_Xih6kA-160x160.jpg"
      }
    }
  ];

  return (
    <>
      {/* Testimonials Section: Asymmetric Grid */}
      <div className="bg-white dark:bg-slate-950 dark:text-slate-100">
        <div className="container mx-auto space-y-10 px-4 pt-16 pb-48 lg:space-y-16 lg:px-8 lg:pt-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div>
              <h2 className="mb-4 text-4xl font-black text-black lg:text-5xl dark:text-white">
                {t('testimonials.title')}
              </h2>
              <p className="text-lg/relaxed font-medium text-slate-700 lg:text-xl/relaxed dark:text-slate-400">
                {t('testimonials.subtitle')}
              </p>
            </div>
          </div>
          {/* END Heading */}

          {/* Testimonials */}
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`flex h-full flex-col justify-between rounded-2xl bg-slate-100/25 p-8 shadow-xs ring-1 ring-slate-200/40 dark:bg-slate-900/25 dark:ring-slate-700/50 ${testimonial.size || ''}`}
              >
                <div className="mb-6">
                  <p className="text-lg/relaxed text-slate-600 dark:text-slate-400">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="size-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.author.role} {t('testimonials.at')} {testimonial.author.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* END Testimonials */}
        </div>
      </div>
      {/* END Testimonials Section: Asymmetric Grid */}
    </>
  );
}
