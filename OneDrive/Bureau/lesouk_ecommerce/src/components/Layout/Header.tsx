
'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          {t('title') || 'Le Souk'}
        </Link>
        <nav className="flex space-x-4">
          <Link href="/fr" className="px-3 py-2 text-gray-700 hover:text-orange-500">
            Français
          </Link>
          <Link href="/ar" className="px-3 py-2 text-gray-700 hover:text-orange-500">
            العربية
          </Link>
        </nav>
      </div>
    </header>
  );
}