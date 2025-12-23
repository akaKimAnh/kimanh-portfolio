import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export default function Navigation() {
  const active = useActiveSection();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', `#${id}`);
  };

  return (
    <nav className="mt-12">
      <ul className="relative space-y-4">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;

          return (
            <li key={item.id} className="relative">
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-teal-400" />
              )}

              <button
                onClick={() => scrollTo(item.id)}
                className={`pl-4 text-sm tracking-wide transition
                  ${
                    isActive
                      ? 'text-slate-100 font-semibold'
                      : 'text-slate-500 hover:text-slate-300'
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
