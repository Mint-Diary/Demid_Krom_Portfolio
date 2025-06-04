export default function BlogPost2() {
  return (
    <>
      {/* Blog Post Section: Left Aligned With Extras */}
      <div className="bg-white dark:bg-slate-800 dark:text-slate-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div>
            <div className="mb-1 text-sm font-bold tracking-wider text-teal-600 uppercase dark:text-teal-500">
              Travel
            </div>
            <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
              The 20 best places in the world for star gazing
            </h2>
            <p className="text-xl leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              <a href="#" className="text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300">
                Lia Baker
              </a>{" "}
              on <span className="font-semibold">February 23, 2023</span> · 20 min read
            </p>
          </div>
          {/* END Heading */}

          {/* Blog Post */}
          <article className="prose prose-lg dark:prose-invert prose-a:text-teal-600 prose-a:no-underline prose-a:hover:text-teal-400 prose-a:hover:opacity-75 dark:prose-a:text-teal-400 dark:prose-a:hover:text-teal-300 prose-img:rounded-lg">
            <img
              src="https://cdn.tailkit.com/media/placeholders/photo-phIFdC6lA4E-800x600.jpg"
              alt="Featured Image of blog post"
            />
            <p>
              Escape the city lights and discover the universe above. These carefully selected stargazing destinations
              offer some of the darkest skies on Earth, where the Milky Way stretches across the heavens in all its
              glory.
            </p>
            <blockquote>
              <p>
                Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what
                makes the universe exist.
              </p>
            </blockquote>
            <p>
              From remote deserts to high-altitude observatories, these locations provide the perfect conditions for
              astronomical observation. Whether you're a seasoned astronomer or simply love gazing at the night sky,
              these destinations will leave you in awe.
            </p>
            <figure>
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-phIFdC6lA4E-800x600.jpg"
                alt="Starry night sky"
              />
              <figcaption>The Milky Way visible in a dark sky preserve</figcaption>
            </figure>
            <h3>1. Atacama Desert, Chile</h3>
            <p>
              The Atacama Desert is home to some of the world's most advanced telescopes and offers incredibly clear
              skies year-round. With virtually no light pollution and minimal atmospheric moisture, this high-altitude
              desert provides unparalleled stargazing conditions.
            </p>
            <ul>
              <li>Altitude: 2,400 meters (7,900 feet)</li>
              <li>Best viewing: Year-round</li>
              <li>Highlights: Southern Hemisphere constellations, Magellanic Clouds</li>
            </ul>
            <h3>2. Mauna Kea, Hawaii</h3>
            <p>
              This dormant volcano rises above 40% of Earth's atmosphere, making it one of the premier astronomical
              observation sites. The summit hosts numerous world-class observatories and offers breathtaking views of
              both northern and southern sky objects.
            </p>
            <h3>3. Death Valley National Park, California</h3>
            <p>
              As one of the largest Dark Sky Parks in the United States, Death Valley offers exceptional stargazing
              opportunities. The park's remote location and strict light pollution controls create ideal conditions for
              observing faint celestial objects.
            </p>
          </article>
          {/* END Blog Post */}
        </div>
      </div>
      {/* END Blog Post Section: Left Aligned With Extras */}
    </>
  )
}
