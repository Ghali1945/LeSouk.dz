
import { NextResponse } from 'next/server';

const categories = [
  {
    id: 1,
    name: 'Électronique & Hi Tech',
    slug: 'electronique-hi-tech',
    image: 'https://placehold.co/300x200',
    subcategories: ['Montres connectées', 'Écouteurs', 'Powerbanks'],
    productCount: 200,
  },
  {
    id: 2,
    name: 'Maison & Cuisine Intelligente',
    slug: 'maison-cuisine-intelligente',
    image: 'https://placehold.co/300x200',
    subcategories: ['Friteuses sans huile', 'Guirlandes LED', 'Sécurité maison'],
    productCount: 160,
  },
  {
    id: 3,
    name: 'Accessoires Auto & Moto',
    slug: 'accessoires-auto-moto',
    image: 'https://placehold.co/300x200',
    subcategories: ['Chargeurs voiture', 'Caméras embarquées', 'Kits nettoyage'],
    productCount: 120,
  },
  {
    id: 4,
    name: 'Bébé & Enfant',
    slug: 'bebe-enfant',
    image: 'https://placehold.co/300x200',
    subcategories: ['Tapis éducatifs', 'Jouets en bois', 'Moniteurs bébé'],
    productCount: 100,
  },
  {
    id: 5,
    name: 'Beauté & Cosmétiques Naturels',
    slug: 'beaute-cosmetiques-naturels',
    image: 'https://placehold.co/300x200',
    subcategories: ['Huiles d’argan', 'Faux cils', 'Miroirs LED'],
    productCount: 100,
  },
  {
    id: 6,
    name: 'Sport & Bien-être',
    slug: 'sport-bien-etre',
    image: 'https://placehold.co/300x200',
    subcategories: ['Tapis yoga', 'Balances connectées', 'Pistolets de massage'],
    productCount: 90,
  },
  {
    id: 7,
    name: 'Mode & Accessoires',
    slug: 'mode-accessoires',
    image: 'https://placehold.co/300x200',
    subcategories: ['Bijoux fantaisie', 'Ceintures', 'Portefeuilles cuir'],
    productCount: 100,
  },
  {
    id: 8,
    name: 'Jardin & Extérieur',
    slug: 'jardin-exterieur',
    image: 'https://placehold.co/300x200',
    subcategories: ['Pots auto-arrosage', 'Lampes solaires'],
    productCount: 60,
  },
  {
    id: 9,
    name: 'Éducation & Bureau',
    slug: 'education-bureau',
    image: 'https://placehold.co/300x200',
    subcategories: ['Chaises ergonomiques', 'Supports ordinateur portable'],
    productCount: 70,
  },
  {
    id: 10,
    name: 'Jeux & Divertissement',
    slug: 'jeux-divertissement',
    image: 'https://placehold.co/300x200',
    subcategories: ['Casques gaming', 'Micros', 'Consoles rétro'],
    productCount: 50,
  },
  {
    id: 11,
    name: 'Vêtements Homme & Femme',
    slug: 'vetements-homme-femme',
    image: 'https://placehold.co/300x200',
    subcategories: ['Djellabas', 'Tuniques', 'Robes', 'Hijabs'],
    productCount: 200,
  },
  {
    id: 12,
    name: 'Chaussures & Sacs',
    slug: 'chaussures-sacs',
    image: 'https://placehold.co/300x200',
    subcategories: ['Sneakers', 'Sacs à main', 'Valises'],
    productCount: 100,
  },
];

export async function GET() {
  return NextResponse.json(categories);
}