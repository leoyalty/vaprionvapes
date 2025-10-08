
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, X } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleTelegramContact = () => {
    const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
    const message = `🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: $${product.price}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Can you provide more details and help me complete my order?`;
    const telegramUrl = `https://t.me/BOMDISPO_420?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  const handlePotatoChatContact = () => {
    const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
    const message = `🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: $${product.price}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Can you provide more details and help me complete my order?`;
    const potatoChatUrl = `https://ptwdym158.org/BOMDiSPO_420?text=${encodeURIComponent(message)}`;
    window.open(potatoChatUrl, '_blank');
  };

  const handleEmailContact = () => {
    const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
    const subject = `Product Inquiry - ${product.name}`;
    const body = `Dear Bom Dispo Team,\n\n🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: $${product.price}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Could you please provide more information and help me complete my order?\n\nBest regards`;
  const mailtoUrl = `mailto:support@bomdisposables.shop?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{product.name}</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            {/* Status Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {!product.inStock && (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
              {product.isBestSeller && (
                <Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
              )}
              {product.isNew && (
                <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.ratingCount} reviews)
              </span>
            </div>
            
            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${product.price}
            </div>
            
            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleTelegramContact}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                disabled={!product.inStock}
              >
                📱 Contact via Telegram
              </Button>
              
              <Button
                onClick={handlePotatoChatContact}
                className="w-full bg-green-900 hover:bg-green-800 text-white"
                disabled={!product.inStock}
              >
                🥔 Contact via Potato Chat
              </Button>
              
              <Button
                onClick={handleEmailContact}
                className="w-full bg-gray-700 hover:bg-gray-700 text-white"
                disabled={!product.inStock}
              >
                ✉️ Contact via Email
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
