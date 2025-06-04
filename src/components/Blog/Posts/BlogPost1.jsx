export default function BlogPost1() {
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
              The 10 best hiking trails in the world you should put in your bucket list
            </h2>
            <p className="text-xl leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              <a href="#" className="text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300">
                Joe Smith
              </a>{" "}
              on <span className="font-semibold">March 3, 2023</span> · 12 min read
            </p>
          </div>
          {/* END Heading */}

          {/* Blog Post */}
          <article className="prose prose-lg dark:prose-invert prose-a:text-teal-600 prose-a:no-underline prose-a:hover:text-teal-400 prose-a:hover:opacity-75 dark:prose-a:text-teal-400 dark:prose-a:hover:text-teal-300 prose-img:rounded-lg">
            <img
              src="https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg"
              alt="Featured Image of blog post"
            />
            <p>
              Discover the world's most breathtaking hiking trails that offer stunning views, challenging terrain, and
              unforgettable experiences. From mountain peaks to coastal paths, these trails will test your limits and
              reward you with memories that last a lifetime.
            </p>
            <blockquote>
              <p>
                The mountains are calling and I must go. Every step on these trails brings you closer to nature's most
                spectacular displays.
              </p>
            </blockquote>
            <p>
              Whether you're an experienced hiker or just starting your adventure journey, these trails offer something
              for everyone. Each path tells its own story through diverse landscapes, wildlife encounters, and cultural
              experiences.
            </p>
            <figure>
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg"
                alt="Mountain hiking trail"
              />
              <figcaption>A scenic mountain trail at sunrise</figcaption>
            </figure>
            <h3>1. Torres del Paine W Trek, Chile</h3>
            <p>
              This iconic trek in Patagonia offers some of the most dramatic scenery on Earth. The W Trek takes you
              through diverse landscapes including glacial lakes, ancient forests, and towering granite peaks. The trail
              is well-marked and offers various accommodation options from camping to luxury eco-domes.
            </p>
            <ul>
              <li>Distance: 80 kilometers (50 miles)</li>
              <li>Duration: 4-5 days</li>
              <li>Difficulty: Moderate to challenging</li>
            </ul>
            <h3>2. Milford Track, New Zealand</h3>
            <p>
              Known as "the finest walk in the world," the Milford Track takes you through pristine rainforests, past
              cascading waterfalls, and alongside mirror-like lakes. This guided walk requires advance booking and
              offers comfortable hut accommodations.
            </p>
            <h3>3. Tour du Mont Blanc, France/Italy/Switzerland</h3>
            <p>
              This classic alpine circuit takes you around Western Europe's highest peak, crossing through three
              countries. The trail offers stunning mountain vistas, charming alpine villages, and excellent mountain hut
              accommodations.
            </p>
          </article>
          {/* END Blog Post */}
        </div>
      </div>
      {/* END Blog Post Section: Left Aligned With Extras */}
    </>
  )
}

