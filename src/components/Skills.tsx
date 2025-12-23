import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const skillGroups = t('skills.groups', { returnObjects: true }) as any[];

  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-100">{t('nav.skills')}</h2>

      <div className="space-y-6">
        {skillGroups.map((group, idx) => (
          <SkillGroup key={idx} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Sub component ---------- */
function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm hover:bg-slate-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
