
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Erreur lors du chargement des produits');
  return res.json();
}

export default async function FeaturedProducts() {
  const t = useTranslations('Home');
  const products = await fetchProducts();

  return (
    <section className="section bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{t('productsTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: { id: number; slug: string; name: string; price: number; weight: number; image: string }) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className="category-card relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="category-image"
                />
                <div className="p-4">
                  <h3 className="category-title">{product.name}</h3>
                  <p className="text-blue-600 font-bold">{product.price.toFixed(2)} DZD</p>
                  <p className="text-sm text-gray-600">Poids : {product.weight} kg</p>
                </div>
                <span className="badge">Sans frais de douane</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}