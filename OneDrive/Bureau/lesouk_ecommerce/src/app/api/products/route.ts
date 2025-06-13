
import { NextResponse } from 'next/server';

const products = [
  { id: 1, slug: 'montre-connectee', name: 'Montre Connectée', price: 4999.99, weight: 0.2, image: 'https://placehold.co/300x200', categorySlug: 'electronique-hi-tech', subcategory: 'Montres connectées' },
  { id: 2, slug: 'ecouteurs-bluetooth', name: 'Écouteurs Bluetooth', price: 2999.99, weight: 0.1, image: 'https://placehold.co/300x200', categorySlug: 'electronique-hi-tech', subcategory: 'Écouteurs' },
  { id: 3, slug: 'powerbank-10000mah', name: 'Powerbank 10000mAh', price: 3999.99, weight: 0.25, image: 'https://placehold.co/300x200', categorySlug: 'electronique-hi-tech', subcategory: 'Powerbanks' },
  { id: 4, slug: 'guirlande-led', name: 'Guirlande LED', price: 1499.99, weight: 0.3, image: 'https://placehold.co/300x200', categorySlug: 'maison-cuisine-intelligente', subcategory: 'Guirlandes LED' },
  { id: 5, slug: 'bijoux-fantaisie', name: 'Bijoux Fantaisie', price: 1999.99, weight: 0.05, image: 'https://placehold.co/300x200', categorySlug: 'mode-accessoires', subcategory: 'Bijoux fantaisie' },
];

export async function GET() {
  return NextResponse.json(products);
}