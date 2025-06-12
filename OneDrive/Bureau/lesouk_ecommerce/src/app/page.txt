
import HeroBanner from '@/components/home/HeroBanner';
import CategoriesShowcase from '@/components/home/CategoriesShowcase';
import FeaturedProducts from '@/components/home/FeaturedProducts';

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <CategoriesShowcase />
      <FeaturedProducts />
    </main>
  );
}