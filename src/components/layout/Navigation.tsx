import { useActiveSection } from '../../hooks/useActiveSection';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const active = useActiveSection();
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
  ];

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
                      : 'text-slate-300 hover:text-slate-300'
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
