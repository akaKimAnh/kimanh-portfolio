import { useTranslation } from 'react-i18next';
import EN from '../assets/flags/united-kingdom.png';
import VN from '../assets/flags/vietnam.png';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isVi = i18n.language === 'vi';

  const toggleLanguage = () => {
    const nextLang = isVi ? 'en' : 'vi';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('lang', nextLang); // lưu ngôn ngữ
  };

  return (
    <div className="mt-4">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-full px-3 py-1 shadow-sm hover:shadow-md active:scale-95 transition"
      >
        {/* Flag */}
        <img
          src={isVi ? VN : EN}
          alt={isVi ? 'VN' : 'EN'}
          className="w-5 h-5 rounded-full"
        />
        {/* Label */}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {isVi ? 'VN' : 'EN'}
        </span>
      </button>
    </div>
  );
}
