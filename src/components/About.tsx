import { useTranslation, Trans } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h2 className="text-slate-100 text-2xl font-semibold mb-4">
        {t('about.title')}
      </h2>

      <div className="leading-relaxed max-w-2xl space-y-4 text-slate-400">
        <p>
          <Trans
            i18nKey="about.paragraph1"
            components={{ b: <span className="text-slate-200 font-medium" /> }}
          />
        </p>
        <p>
          <Trans
            i18nKey="about.paragraph2"
            components={{ b: <span className="text-slate-200 font-medium" /> }}
          />
        </p>
        <p>
          <Trans
            i18nKey="about.paragraph3"
            components={{ b: <span className="text-slate-200 font-medium" /> }}
          />
        </p>
      </div>
    </section>
  );
}
