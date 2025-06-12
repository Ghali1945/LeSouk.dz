
import HeroBanner from '@/components/home/HeroBanner'; // Bannière de la page d'accueil
import CategoriesShowcase from '@/components/home/CategoriesShowcase'; // Grille des catégories
import FeaturedProducts from '@/components/home/FeaturedProducts'; // Liste des produits en vedette

export default function HomePage() {
  return (
    <main>
      <HeroBanner /> {/* Affiche la bannière promotionnelle */}
      <CategoriesShowcase /> {/* Affiche les 12 catégories */}
      <FeaturedProducts /> {/* Affiche ~5 produits */}
    </main>
  );
}