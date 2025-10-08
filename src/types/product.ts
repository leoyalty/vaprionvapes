
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  category: string;
  inStock: boolean;
  rating: number;
  ratingCount: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  effects?: string[];
}
