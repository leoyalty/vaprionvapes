import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface AutoCarouselProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

const AutoCarousel = ({ products, onProductClick }: AutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slightly longer interval for smoother experience

    return () => clearInterval(timer);
  }, [products.length]);

  // Smooth auto-scroll for all devices
  useEffect(() => {
    const container = document.getElementById('product-carousel');
    if (container) {
      const cardWidth = 256; // w-64 = 16rem = 256px
      const gap = 16; // 1rem gap
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      // Use smooth scrolling with CSS transition
      container.style.scrollBehavior = 'smooth';
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative">
      <div 
        id="product-carousel"
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory transition-all duration-700 ease-in-out"
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start">
            <ProductCard
              product={product}
              onClick={() => onProductClick?.(product)}
            />
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;