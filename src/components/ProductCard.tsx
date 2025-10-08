
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { formatPrice } = useCurrency();

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleTelegramContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
    const message = `🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: ${formatPrice(product.price)}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Can you provide more details and help me complete my order?`;
    const telegramUrl = `https://t.me/BOMDISPO_420?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  const handlePotatoChatContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
    const message = `🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: ${formatPrice(product.price)}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Can you provide more details and help me complete my order?`;
    const potatoChatUrl = `https://ptwdym158.org/BOMDiSPO_420?text=${encodeURIComponent(message)}`;
    window.open(potatoChatUrl, "_blank");
  };

  const handleEmailContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
    const subject = `Product Inquiry - ${product.name}`;
    const body = `Dear Bom Dispo Team,\n\n🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: ${formatPrice(product.price)}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Could you please provide more information and help me complete my order?\n\nBest regards`;
  const mailtoUrl = `mailto:support@bomdisposables.shop?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 w-full max-w-64 mx-auto flex-shrink-0 group animate-fade-in"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {!product.inStock && (
            <Badge variant="destructive" className="text-xs animate-pulse shadow-lg">
              Out of Stock
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-xs animate-pulse shadow-lg">
              Best Seller
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600 text-xs animate-pulse shadow-lg">
              New
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-3 space-y-2">
        <div className="mb-1">
          <Badge variant="secondary" className="text-xs bg-gradient-to-r from-purple-100 to-blue-100">
            {product.category}
          </Badge>
        </div>
        
        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-600">
            {product.rating} ({product.ratingCount})
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-black">
            {formatPrice(product.price)}
          </span>
        </div>
        
        {/* Contact Buttons */}
        <div className="space-y-1">
          <Button
            onClick={handleTelegramContact}
            className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white text-xs py-1 h-7 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            disabled={!product.inStock}
          >
            📱 Telegram
          </Button>
          
          <Button
            onClick={handlePotatoChatContact}
            className="w-full bg-gradient-to-r from-green-800 to-green-900 hover:from-green-900 hover:to-green-950 text-white text-xs py-1 h-7 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            disabled={!product.inStock}
          >
            🥔 Potato Chat
          </Button>
          
          <Button
            onClick={handleEmailContact}
            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-xs py-1 h-7 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            disabled={!product.inStock}
          >
            ✉️ Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
