import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience', { returnObjects: true }) as any[];

  return (
    <section id="experience" className="section">
      <h2 className="heading">{t('nav.experience')}</h2>

      <div className="border-l border-slate-700 pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="text-slate-200">
              {exp.role} · <span className="text-slate-400">{exp.company}</span>
            </h3>

            <p className="text-sm text-slate-500">{exp.period}</p>

            <ul className="list-disc ml-5 mt-4 space-y-2 text-slate-400">
              {exp.description.map((desc: string, idx: number) => (
                <li key={idx}>{desc}</li>
              ))}

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-teal-400 text-white rounded hover:bg-teal-500 transition text-sm"
                  >
                    {t('view')}
                  </a>
                )}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
