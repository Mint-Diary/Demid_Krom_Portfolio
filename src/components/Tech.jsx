import {
  SiVuedotjs, SiTypescript, SiReact, SiGraphql,
  SiKubernetes, SiSpring, SiDocker, SiGit,
  SiGitlab, SiTailwindcss, SiAngular, SiThreedotjs, SiCoffeescript
} from "react-icons/si";
import {
  FaDatabase, FaRocket, FaCode
} from 'react-icons/fa';

export default function LogosBoxedwithHeading() {
  const technologies = [
    {
      name: 'React',
      icon: <SiReact />,
      shadow: 'hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/30',
      icon_color: 'text-cyan-400 dark:text-cyan-400'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      shadow: 'hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30',
      icon_color: 'text-blue-600 dark:text-blue-500'
    },
    {
      name: 'Vue.js',
      icon: <SiVuedotjs />,
      shadow: 'hover:shadow-green-500/10 dark:hover:shadow-green-500/30',
      icon_color: 'text-green-500 dark:text-green-400'
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
      shadow: 'hover:shadow-teal-500/10 dark:hover:shadow-teal-500/30',
      icon_color: 'text-teal-500 dark:text-teal-400'
    },
    {
      name: 'Java',
      icon: <SiCoffeescript />,
      shadow: 'hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30',
      icon_color: 'text-orange-600 dark:text-orange-500'
    },
    {
      name: 'Spring Boot',
      icon: <SiSpring />,
      shadow: 'hover:shadow-green-500/10 dark:hover:shadow-green-500/30',
      icon_color: 'text-green-600 dark:text-green-500'
    },
    {
      name: 'SQL',
      icon: <FaDatabase />,
      shadow: 'hover:shadow-slate-500/10 dark:hover:shadow-slate-500/30',
      icon_color: 'text-slate-600 dark:text-slate-400'
    },
    {
      name: 'GraphQL',
      icon: <SiGraphql />,
      shadow: 'hover:shadow-pink-500/10 dark:hover:shadow-pink-500/30',
      icon_color: 'text-pink-600 dark:text-pink-500'
    },
    {
      name: 'REST-APIs',
      icon: <FaCode />,
      shadow: 'hover:shadow-purple-500/10 dark:hover:shadow-purple-500/30',
      icon_color: 'text-purple-600 dark:text-purple-500'
    },
    {
      name: 'Docker',
      icon: <SiDocker />,
      shadow: 'hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30',
      icon_color: 'text-blue-500 dark:text-blue-400'
    },
    {
      name: 'Kubernetes',
      icon: <SiKubernetes />,
      shadow: 'hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30',
      icon_color: 'text-blue-600 dark:text-blue-500'
    },
    {
      name: 'CI/CD',
      icon: <FaRocket />,
      shadow: 'hover:shadow-yellow-500/10 dark:hover:shadow-yellow-500/30',
      icon_color: 'text-yellow-600 dark:text-yellow-500'
    },
    {
      name: 'Git',
      icon: <SiGit />,
      shadow: 'hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30',
      icon_color: 'text-orange-600 dark:text-orange-500'
    },
    {
      name: 'GitLab',
      icon: <SiGitlab />,
      shadow: 'hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30',
      icon_color: 'text-orange-500 dark:text-orange-400'
    },
    {
      name: 'Angular',
      icon: <SiAngular />,
      shadow: 'hover:shadow-red-500/10 dark:hover:shadow-red-500/30',
      icon_color: 'text-red-600 dark:text-red-500'
    },
    {
      name: 'Three.js',
      icon: <SiThreedotjs />,
      shadow: 'hover:shadow-black/10 dark:hover:shadow-white/20',
      icon_color: 'text-black dark:text-white'
    },
  ];

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

          {/* Logos Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {technologies.map((tech, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className={`group relative rounded-xl bg-white p-4 shadow-md shadow-slate-100 transition duration-150 hover:shadow-lg active:shadow-xs lg:p-6 dark:bg-slate-800 dark:shadow-slate-900 ${tech.shadow}`}
                >
                  <div className="absolute inset-0 scale-100 rounded-xl bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-slate-800" />
                  <div className="relative text-center">
                    <div className={`inline-flex items-center gap-2 py-2 text-lg font-semibold transition group-hover:opacity-100 dark:text-slate-100`}>
                      <span className={`inline-block size-6 fill-current ${tech.icon_color}`}>
                        {tech.icon}
                      </span>
                      <span className="text-slate-900 dark:text-slate-100">{tech.name}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          {/* END Logos Grid */}
        </div>
      </div>
      {/* END Logos Section: Boxed with Heading */}
    </>
  );
}