import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'experience', 'projects', 'skills'];
const OFFSET = 160; // bù cho header / layout

export function useActiveSection() {
  const [active, setActive] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + OFFSET;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // ✅ Nếu gần đáy trang → section cuối
      if (scrollPos + windowHeight >= docHeight - 20) {
        setActive(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(id);
          break;
        }
      }
    };

    // ✅ Khi click nav (#hash)
    const handleHashChange = () => {
      const id = window.location.hash.replace('#', '');
      if (SECTION_IDS.includes(id)) {
        setActive(id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    // init
    handleScroll();
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return active;
}
