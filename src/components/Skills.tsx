export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-100">Skills</h2>

      <div className="space-y-6">
        <SkillGroup
          title="Mobile (Primary)"
          skills={[
            'Android (Java)',
            'Firebase',
            'FCM',
            'Text-to-Speech (TTS)',
            'QR Code Scanning',
          ]}
        />

        <SkillGroup
          title="Web (Working Knowledge)"
          skills={['ReactJS', 'TypeScript', 'Tailwind CSS', 'Responsive UI']}
        />

        <SkillGroup
          title="Auth & Security"
          skills={['Keycloak', 'SSO', 'OAuth 2.0']}
        />

        <SkillGroup
          title="Platform"
          skills={[
            'Android',
            'Zalo Mini App (ZMP SDK)',
            'RESTful API Integration',
          ]}
        />
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
