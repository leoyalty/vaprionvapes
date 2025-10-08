
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { Star, ArrowLeft, Truck, Shield, Clock, Award } from "lucide-react";
import AutoCarousel from "@/components/AutoCarousel";
import ProductModal from "@/components/ProductModal";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Button onClick={() => navigate('/')}>Go Back Home</Button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  );

  // Generate random stock number for demo
  const stockCount = Math.floor(Math.random() * 20) + 5;

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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
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

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.ratingCount} reviews)
            </span>
          </div>

          <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

          {/* Stock Info */}
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-green-700">In Stock</span>
            </div>
            <p className="text-sm text-green-600">{stockCount} items available</p>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-600">Free UK Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Lab Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-gray-600">Same Day Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-gray-600">Premium Quality</span>
            </div>
          </div>

          {/* Effects */}
          {product.effects && (
            <div className="mb-6">
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

          <div className="text-4xl font-bold text-gray-900 mb-8">
            ${product.price}
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleTelegramContact}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              disabled={!product.inStock}
            >
              📱 Contact via Telegram
            </Button>
            
            <Button
              onClick={handlePotatoChatContact}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              disabled={!product.inStock}
            >
              🥔 Contact via Potato Chat
            </Button>
            
            <Button
              onClick={handleEmailContact}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white"
              disabled={!product.inStock}
            >
              ✉️ Contact via Email
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Products from {product.category}
          </h2>
          <AutoCarousel 
            products={relatedProducts} 
            onProductClick={handleProductClick}
          />
        </section>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProductDetail;
