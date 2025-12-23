export function SocialItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <li className="mr-8 shrink-0">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${label} (opens in a new tab)`}
        title={label}
        className="group block text-slate-400 hover:text-slate-200 transition"
      >
        <span className="sr-only">{label}</span>
        <div className="h-6 w-6">{icon}</div>
      </a>
    </li>
  );
}
