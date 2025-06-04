import {
  SiVuedotjs, SiTypescript, SiReact, SiGraphql,
  SiKubernetes, SiSpring, SiDocker, SiGit,
  SiGitlab, SiTailwindcss, SiAngular, SiThreedotjs, SiCoffeescript
} from "react-icons/si";
import {
  FaDatabase, FaRocket, FaCode
} from 'react-icons/fa';
import { useTranslation } from "../i18n/index.jsx";

export default function LogosBoxedwithHeading() {
  const { t } = useTranslation();
  
  const technologies = [
    {
      name: 'React',
      icon: <SiReact />,
      shadow: 'hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/30',
      icon_color: 'text-cyan-400 dark:text-cyan-400',
      proficiency: t('tech.proficiencyLevels.expert')
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      shadow: 'hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30',
      icon_color: 'text-blue-600 dark:text-blue-500',
      proficiency: t('tech.proficiencyLevels.expert')
    },
    {
      name: 'Vue.js',
      icon: <SiVuedotjs />,
      shadow: 'hover:shadow-green-500/10 dark:hover:shadow-green-500/30',
      icon_color: 'text-green-500 dark:text-green-400',
      proficiency: t('tech.proficiencyLevels.advanced')
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
      shadow: 'hover:shadow-teal-500/10 dark:hover:shadow-teal-500/30',
      icon_color: 'text-teal-500 dark:text-teal-400',
      proficiency: t('tech.proficiencyLevels.expert')
    },
    {
      name: 'Java',
      icon: <SiCoffeescript />,
      shadow: 'hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30',
      icon_color: 'text-orange-600 dark:text-orange-500',
      proficiency: t('tech.proficiencyLevels.expert')
    },
    {
      name: 'Spring Boot',
      icon: <SiSpring />,
      shadow: 'hover:shadow-green-500/10 dark:hover:shadow-green-500/30',
      icon_color: 'text-green-600 dark:text-green-500',
      proficiency: t('tech.proficiencyLevels.advanced')
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
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100 px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-3xl font-black text-slate-900 dark:text-white">
          {t('tech.title')}
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-slate-600 dark:text-gray-400">
          {t('tech.subtitle')}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={`group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-4 ${tech.shadow} hover:border-slate-300 dark:hover:border-slate-700`}
          >
            <div className="flex items-center">
              <div className={`mr-3 text-2xl ${tech.icon_color}`}>
                {tech.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {tech.name}
                </h4>
                {tech.proficiency && (
                  <p className="text-xs text-slate-500 dark:text-gray-400">
                    {tech.proficiency}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}