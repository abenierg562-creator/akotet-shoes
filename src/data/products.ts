export type Brand = 'Akotet Shoes';
export type Category = 'Boots' | 'Loafers' | 'Casual' | 'Heels' | 'Formal';
export type Gender = 'Men' | 'Women' | 'Unisex';

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  price: number;
  oldPrice?: number;
  images: string[];
  description: string;
  sizes: number[];
  colors: string[];
  category: Category;
  gender: Gender;
  material: string;
  inStock: boolean;
  stockCount?: number;
  isTrending?: boolean;
  isNewDrop?: boolean;
  isBestSeller?: boolean;
  isSpecialOffer?: boolean;
}

export const brands: Brand[] = ['Akotet Shoes'];

// Vite asset imports
import img1 from '@/assets/photo_2026-09-19_03-22-43.jpg';
import img2 from '@/assets/photo_2026-09-19_03-22-56.jpg';
import img3 from '@/assets/photo_2026-09-19_03-23-06.jpg';
import img4 from '@/assets/photo_2026-09-19_03-23-15.jpg';
import img5 from '@/assets/photo_2026-09-19_03-23-29.jpg';
import img6 from '@/assets/photo_2026-09-19_03-23-35.jpg';
import img7 from '@/assets/photo_2026-09-19_03-23-42.jpg';
import img8 from '@/assets/photo_2026-09-19_03-24-01.jpg';
import img9 from '@/assets/photo_2026-09-19_03-24-08.jpg';
import img10 from '@/assets/photo_2026-09-19_03-24-18.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Tan Suede Derby',
    brand: 'Akotet Shoes',
    price: 3200,
    images: [img1],
    description: 'Classic tan suede derby with lace-up design. Lightweight and comfortable for everyday wear.',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ['Tan'],
    category: 'Casual',
    gender: 'Men',
    material: 'Suede upper, rubber sole',
    inStock: true,
    isNewDrop: true,
    isBestSeller: true,
    isTrending: true,
  },
  {
    id: '2',
    name: 'Blue Chukka Boot',
    brand: 'Akotet Shoes',
    price: 3500,
    images: [img2],
    description: 'Stylish blue chukka boot with lace-up closure. Perfect for casual and semi-formal occasions.',
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ['Blue'],
    category: 'Boots',
    gender: 'Men',
    material: 'Nubuck leather upper',
    inStock: true,
    isNewDrop: true,
    isTrending: true,
    isSpecialOffer: true,
  },
  {
    id: '3',
    name: 'Dark Brown Suede Boot',
    brand: 'Akotet Shoes',
    price: 3800,
    oldPrice: 4200,
    images: [img3],
    description: 'Premium dark brown suede ankle boot. Durable and stylish for any season.',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ['Dark Brown'],
    category: 'Boots',
    gender: 'Men',
    material: 'Premium suede upper, rubber sole',
    inStock: true,
    stockCount: 5,
    isNewDrop: true,
    isTrending: true,
    isSpecialOffer: true,
  },
  {
    id: '4',
    name: 'Black Leather Zipper Boot',
    brand: 'Akotet Shoes',
    price: 3600,
    images: [img4],
    description: 'Export-standard black leather boot with side zipper and brogue detailing. Elegant and durable.',
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ['Black'],
    category: 'Formal',
    gender: 'Men',
    material: 'Full-grain leather upper',
    inStock: true,
    isNewDrop: true,
    isBestSeller: true,
    isTrending: true,
  },
  {
    id: '5',
    name: 'Black Chelsea Boot',
    brand: 'Akotet Shoes',
    price: 3400,
    images: [img5],
    description: 'Sleek black suede chelsea boot with elastic side panel. Easy slip-on with a modern look.',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ['Black'],
    category: 'Boots',
    gender: 'Unisex',
    material: 'Suede upper, rubber sole',
    inStock: true,
    stockCount: 8,
    isNewDrop: true,
    isTrending: true,
    isBestSeller: true,
  },
  {
    id: '6',
    name: 'Grey Suede Derby',
    brand: 'Akotet Shoes',
    price: 3200,
    images: [img6],
    description: 'Light grey suede derby with chunky rubber sole. Casual and versatile for daily wear.',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ['Grey'],
    category: 'Casual',
    gender: 'Unisex',
    material: 'Suede upper, chunky rubber sole',
    inStock: true,
    isNewDrop: true,
    isSpecialOffer: true,
  },
  {
    id: '7',
    name: 'Brown Derby Oxford',
    brand: 'Akotet Shoes',
    price: 3500,
    images: [img7],
    description: 'Classic brown derby oxford with fine stitching. A must-have for formal occasions.',
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ['Brown'],
    category: 'Formal',
    gender: 'Men',
    material: 'Leather upper, leather sole',
    inStock: true,
    isNewDrop: true,
    isBestSeller: true,
    isTrending: true,
  },
  {
    id: '8',
    name: 'Tan Lace-Up Loafer',
    brand: 'Akotet Shoes',
    price: 3300,
    images: [img8],
    description: 'Comfortable tan lace-up loafer with a relaxed fit. Great for casual and smart-casual outfits.',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ['Tan'],
    category: 'Loafers',
    gender: 'Men',
    material: 'Suede upper, rubber sole',
    inStock: true,
    isNewDrop: true,
    isSpecialOffer: true,
  },
  {
    id: '9',
    name: 'Classic Black Derby',
    brand: 'Akotet Shoes',
    price: 3400,
    images: [img9],
    description: 'Timeless black derby shoe perfect for office and formal wear.',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ['Black'],
    category: 'Formal',
    gender: 'Men',
    material: 'Full-grain leather upper',
    inStock: true,
    stockCount: 10,
    isNewDrop: true,
    isTrending: true,
    isSpecialOffer: true,
  },
  {
    id: '10',
    name: 'Caramel Leather Loafer',
    brand: 'Akotet Shoes',
    price: 3700,
    oldPrice: 4000,
    images: [img10],
    description: 'Premium caramel leather loafer with a slip-on design. Elegant and easy to wear.',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ['Caramel'],
    category: 'Loafers',
    gender: 'Unisex',
    material: 'Leather upper, leather sole',
    inStock: true,
    isNewDrop: true,
    isBestSeller: true,
    isSpecialOffer: true,
    isTrending: true,
  },
];
