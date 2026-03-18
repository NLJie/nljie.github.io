import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            {t('footer.copyright')}
          </p>
          <p className="text-sm text-slate-400">
            {t('footer.poweredBy')}
          </p>
        </div>
      </div>
    </footer>
  );
}
