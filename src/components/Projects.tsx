export default function Projects() {
  const projects = [
    {
      title: 'Trusted Pay Mobile App',
      description:
        'Main Android application for Mobile-ID, handling citizen ID (CCCD), SSO login, push notifications, TTS, and QR scanning features.',
      tags: ['Java', 'Firebase', 'Android', 'Keycloak', 'FCM', 'TTS'],
      link: 'https://play.google.com/store/apps/details?id=vn.mobileid.trustedpay.client',
    },
    {
      title: 'Trusted Pay Web',
      description:
        'Public web information interface for Trusted Pay, following Figma designs and displaying user/transaction data.',
      type: 'Web Information',
      tags: ['React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://trustedpay.mobile-id.vn/internal/',
    },
    {
      title: 'FacialSense Web',
      description:
        'Public web information interface for FacialSense, translating Figma layouts into responsive web pages.',
      type: 'Web Information',
      tags: ['React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://facialsense.mobile-id.vn/',
    },
    {
      title: 'Zalo Mini App Maps',
      description: 'Navigation, route, and search location using ZMP SDK.',
      tags: ['ZMP', 'Zalo Mini App', 'React JS', 'TypeScript'],
      link: 'https://zalo.me/s/2833744340405435271/',
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="heading">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-lg p-6 hover:border-teal-400 transition"
          >
            <h3 className="text-slate-200 font-semibold">{project.title}</h3>
            <p className="text-sm mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, idx) => (
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
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
