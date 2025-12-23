import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true }) as any[];

  return (
    <section id="projects" className="section">
      <h2 className="heading">{t('nav.projects')}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-lg p-6 hover:border-teal-400 transition"
          >
            <h3 className="text-slate-200 font-semibold">{project.title}</h3>
            <p className="text-sm mt-2 text-slate-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-teal-400 text-white rounded hover:bg-teal-500 transition text-sm"
                >
                  {t('view')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
