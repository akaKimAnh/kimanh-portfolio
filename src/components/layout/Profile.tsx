import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-100">{t('profile.name')}</h1>
      <h2 className="mt-2 text-lg text-slate-300">{t('profile.title')}</h2>
      <p className="mt-4 max-w-sm text-slate-400">{t('profile.description')}</p>
    </div>
  );
}
