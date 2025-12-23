export default function Experience() {
  const experiences = [
    {
      role: 'Zalo Mini App',
      company: 'MOBILE-ID',
      period: 'Dec 2025 — Present',
      description: [
        'Researching and experimenting with ZMP / Zalo UI components to build responsive and user-friendly mini apps.',
        'Testing UI patterns and integration with existing mobile services, ensuring consistency with design guidelines and best practices.',
      ],
      tags: ['ZMP', 'Zalo Mini App', 'React JS', 'TypeScript'],
      link: null,
    },
    {
      role: 'Android Developer',
      company: 'MOBILE-ID',
      period: 'May 2024 — Present',
      description: [
        'Integrated backend APIs to handle data retrieval and application workflows in Android applications.',
        'Implemented Single Sign-On (SSO) authentication using Keycloak, following OAuth 2.0 / OpenID Connect flows.',
        'Implemented push notifications using Firebase Cloud Messaging (FCM) to receive and handle real-time notifications.',
        'Developed Text-to-Speech (TTS) functionality to read notification content aloud.',
        'Implemented QR code scanning features to extract and process citizen ID (CCCD) information.',
      ],
      tags: ['Java', 'Firebase'],
      link: 'https://play.google.com/store/apps/details?id=vn.mobileid.trustedpay.client',
    },
    {
      role: 'Frontend Developer',
      company: 'MOBILE-ID',
      period: 'Aug 2023 — Apr 2024',
      description: [
        'Implemented internal web information interfaces using React.js and Tailwind CSS, strictly following Figma design guidelines.',
        'Developed internal information and management pages for Trusted Pay, focusing on UI implementation and data display based on predefined designs.',
        'Built web-based information interfaces for FacialSense, accurately translating Figma layouts into responsive web pages.',
      ],
      tags: ['React JS', 'JavaScript', 'HTML', 'CSS'],
      link: null,
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="heading">Experience</h2>

      <div className="border-l border-slate-700 pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="text-slate-200">
              {exp.role} · <span className="text-slate-400">{exp.company}</span>
            </h3>

            <p className="text-sm text-slate-500">{exp.period}</p>

            <ul className="list-disc ml-5 mt-4 space-y-2 text-slate-400">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tags.map((tag, idx) => (
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
                    View
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
