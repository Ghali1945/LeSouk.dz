
import Link from 'next/link';
import { useTranslations } from 'next-intl';

async function fetchCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Erreur lors du chargement des catégories');
  return res.json();
}

export default async function CategoriesShowcase() {
  const t = useTranslations('Home');
  const categories = await fetchCategories();

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{t('categoriesTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category: { id: number; slug: string; name: string; image: string }) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <div className="category-card relative">
                <img src={category.image} alt={category.name} className="category-image" />
                <h3 className="category-title p-4 text-center">{category.name}</h3>
                <span className="badge">Sans frais de douane</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}