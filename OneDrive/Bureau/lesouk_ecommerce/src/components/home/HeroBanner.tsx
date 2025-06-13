
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HeroBanner() {
  const t = useTranslations('Home');
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heroTitle')}</h1>
        <p className="text-lg md:text-xl mb-6">{t('heroDescription')}</p>
        <Link
          href="/categories"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          {t('explore')}
        </Link>
      </div>
    </section>
  );
}