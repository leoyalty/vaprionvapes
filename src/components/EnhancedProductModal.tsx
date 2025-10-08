
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/product";
import { products } from "@/data/products";
import { Star, X, Package } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import ProductCard from "./ProductCard";

interface EnhancedProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: Product) => void;
}

const EnhancedProductModal = ({ product, isOpen, onClose, onProductClick }: EnhancedProductModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { formatPrice } = useCurrency();

  if (!product) return null;

  // Generate random stock number for demo
  const stockCount = Math.floor(Math.random() * 50) + 1;

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const bestSellers = products.filter(p => 
    p.isBestSeller && p.id !== product.id
  ).slice(0, 4);

  const handleTelegramContact = () => {
  const message = `Product Inquiry: ${product.name} (${formatPrice(product.price)})\n\nI'm interested in this product. Could you please provide more information?`;
  const encodedMessage = encodeURIComponent(message);
  const telegramUrl = `https://t.me/BOMDISPO_420?text=${encodedMessage}`;
  window.open(telegramUrl, '_blank');
  };

  const handlePotatoChatContact = () => {
  const message = `Product Inquiry: ${product.name} (${formatPrice(product.price)})\n\nI'm interested in this product. Could you please provide more information?`;
  const encodedMessage = encodeURIComponent(message);
  const potatoChatUrl = `https://ptwdym158.org/BOMDiSPO_420?text=${encodedMessage}`;
  window.open(potatoChatUrl, '_blank');
  };

  const handleEmailContact = () => {
  const subject = `Product Inquiry - ${product.name}`;
  const body = `Dear BOMDISPO Team,\n\nI am interested in the product: ${product.name} (${formatPrice(product.price)}). Could you please provide more information?\n\nBest regards`;
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
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
            </DialogHeader>

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-purple-500 scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{product.category}</Badge>
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

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.ratingCount} reviews)
                  </span>
                </div>

                {/* Stock Information */}
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                  <Package className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-medium">
                    {stockCount} items in stock
                  </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

                {product.effects && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Effects</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.effects.map((effect, index) => (
                        <Badge key={index} variant="outline" className="bg-purple-50">
                          {effect}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-3xl font-bold text-purple-600">
                  {formatPrice(product.price)}
                </div>

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
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                    disabled={!product.inStock}
                  >
                    ✉️ Contact via Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Products with Tabs */}
            <div className="border-t pt-8">
              <Tabs defaultValue="related" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="related">Related Products</TabsTrigger>
                  <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
                </TabsList>
                
                <TabsContent value="related" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">More from {product.category}</h3>
                    {relatedProducts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {relatedProducts.map((relatedProduct) => (
                          <div key={relatedProduct.id} className="transform hover:scale-105 transition-transform">
                            <ProductCard 
                              product={relatedProduct} 
                              onClick={() => onProductClick(relatedProduct)}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No related products found.</p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="bestsellers" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Best Sellers</h3>
                    {bestSellers.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {bestSellers.map((bestSeller) => (
                          <div key={bestSeller.id} className="transform hover:scale-105 transition-transform">
                            <ProductCard 
                              product={bestSeller} 
                              onClick={() => onProductClick(bestSeller)}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No best sellers found.</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedProductModal;
