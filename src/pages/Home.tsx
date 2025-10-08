import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import AutoCarousel from "@/components/AutoCarousel";
import EnhancedProductModal from "@/components/EnhancedProductModal";
import StatsSection from "@/components/StatsSection";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import { useRef, useEffect } from "react";

const Home = () => {
  // Auto-scroll for image gallery
  const galleryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    gallery.style.scrollBehavior = 'auto';
    let animationFrameId: number;
    const scrollSpeed = 0.8; // pixels per frame
    function smoothScroll() {
      if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
        gallery.scrollLeft = 0;
      } else {
        gallery.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    }
    animationFrameId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Filter products by category
  const disposables = products.filter(p => p.category === "Disposables");
  const cartridges = products.filter(p => p.category === "Cartridges");
  const thcPods = products.filter(p => p.category === "THC Pods");

  return (
    <div className="bg-gray-200">
      {/* Hero Section with Background Image */}
      <section 
        className="relative overflow-hidden text-white min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/a418a344-1c0c-4d86-a645-54f262e2434b.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Welcome to BOMDISPO
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 animate-slide-up">
              Premium THC Vape Pens, Disposables & Cartridges
            </p>
            <p className="text-lg mb-8 text-purple-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Discover high-quality cannabis products with lab-tested purity
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-white text-black font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <StatsSection />

      {/* Scrollable Images Section */}
      <section className="w-full flex justify-center py-8 h-[600px]">
        <div
          ref={galleryRef}
          className="w-[90%] h-full overflow-x-hidden whitespace-nowrap rounded-2xl border-2 border-gray-300 bg-white shadow-md relative"
          style={{ 
            scrollBehavior: 'smooth'
          }}
        >
          <div 
            className="flex gap-4 h-full animate-[slide-left_40s_linear_infinite] hover:[animation-play-state:paused]"
            style={{
              width: 'calc(8000px + 64px)', // Ensure enough width for seamless loop
            }}
          >
            {[
              'photo_2025-09-20_03-02-46.jpg',
              'photo_2025-09-20_03-03-16.jpg',
              'photo_2025-09-20_03-03-23.jpg',
              'photo_2025-09-20_03-03-29.jpg',
              'photo_2025-09-20_03-03-39.jpg',
              'photo_2025-09-20_03-03-45.jpg',
              'photo_2025-09-20_03-03-51.jpg',
              'photo_2025-09-20_03-03-56.jpg',
              'photo_2025-09-20_03-04-02.jpg',
              'photo_2025-09-20_03-04-08.jpg',
              'photo_2025-09-20_03-04-14.jpg',
              'photo_2025-09-20_03-04-18.jpg',
              'photo_2025-09-20_03-04-22.jpg',
              'photo_2025-09-20_03-04-27.jpg',
              'photo_2025-09-20_03-04-32.jpg',
              'photo_2025-09-20_03-04-40.jpg'
            ].concat([
              'photo_2025-09-20_03-02-46.jpg',
              'photo_2025-09-20_03-03-16.jpg',
              'photo_2025-09-20_03-03-23.jpg',
              'photo_2025-09-20_03-03-29.jpg',
              'photo_2025-09-20_03-03-39.jpg',
              'photo_2025-09-20_03-03-45.jpg',
              'photo_2025-09-20_03-03-51.jpg',
              'photo_2025-09-20_03-03-56.jpg'
            ]).map((img, idx) => (
              <img
                key={`${img}-${idx}`}
                src={`/lovable-uploads/${img}`}
                alt={img.replace(/_/g, ' ').replace(/\.jpg|\.png/, '')}
                className="flex-none h-[500px] w-[500px] object-cover rounded-2xl border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Auto-scroll script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var gallery = document.getElementById('auto-scroll-gallery');
            if (!gallery) return;
            var scrollAmount = 2;
            setInterval(function() {
              if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
                gallery.scrollLeft = 0;
              } else {
                gallery.scrollLeft += scrollAmount;
              }
            }, 300);
          })();
        `
      }} />
      {/* Featured Products - Disposables */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-black rounded-full"></div>
              <div className="mx-4 w-3 h-3 bg-black rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-gray-500 to-black rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Disposables
            </h2>
            <p className="text-lg text-gray-600">
              Ready-to-use disposable vape pens with premium cannabis oil
            </p>
          </div>
          
          {/* Large Product Grid with Smooth Scrolling */}
          <div className="relative overflow-hidden w-full">
            <div 
              id="featured-disposables-scroll"
              className="flex gap-8 pb-6 featured-disposables-scroll"
              style={{ 
                minWidth: 'max-content',
                animation: 'scroll-products 160s linear infinite'
              }}
            >
              {disposables.concat(disposables).map((product, index) => {
                const handleTelegramContact = (e: React.MouseEvent) => {
                  e.stopPropagation();
                  const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
                  const message = `🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: $${product.price}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Can you provide more details and help me complete my order?`;
                  const telegramUrl = `https://t.me/BOMDISPO_420?text=${encodeURIComponent(message)}`;
                  window.open(telegramUrl, "_blank");
                };

                const handlePotatoChatContact = (e: React.MouseEvent) => {
                  e.stopPropagation();
                  const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
                  const message = `🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: $${product.price}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Can you provide more details and help me complete my order?`;
                  const potatoChatUrl = `https://ptwdym158.org/BOMDiSPO_420?text=${encodeURIComponent(message)}`;
                  window.open(potatoChatUrl, "_blank");
                };

                const handleEmailContact = (e: React.MouseEvent) => {
                  e.stopPropagation();
                  const effectsText = product.effects ? `\nEffects: ${product.effects.join(', ')}` : '';
                  const subject = `Product Inquiry - ${product.name}`;
                  const body = `Dear Bom Dispo Team,\n\n🛒 PRODUCT INQUIRY\n\n📦 Product: ${product.name}\n💰 Price: $${product.price}\n📂 Category: ${product.category}\n⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)\n\n📝 Description:\n${product.description}${effectsText}\n\n✅ Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}\n\nI'm interested in purchasing this product. Could you please provide more information and help me complete my order?\n\nBest regards`;
                  const mailtoUrl = `mailto:support@bomdisposables.shop?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailtoUrl;
                };

                return (
                  <div 
                    key={`${product.id}-${index}`}
                    className="flex-none w-80 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-black">
                          ${product.price}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      
                      {/* Contact Buttons */}
                      <div className="space-y-2">
                        <Button
                          onClick={handleTelegramContact}
                          className="w-full bg-blue-700 hover:bg-blue-900 text-white text-sm"
                          disabled={!product.inStock}
                        >
                          📱 Contact via Telegram
                        </Button>
                        
                        <Button
                          onClick={handlePotatoChatContact}
                          className="w-full bg-green-700 hover:bg-green-900 text-white text-sm"
                          disabled={!product.inStock}
                        >
                          🥔 Contact via Potato Chat
                        </Button>
                        
                        <Button
                          onClick={handleEmailContact}
                          className="w-full bg-gray-700 hover:bg-gray-800 text-white text-sm"
                          disabled={!product.inStock}
                        >
                          ✉️ Contact via Email
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
      

      {/* Stats Section */}
      

      {/* Testimonials */}
      <section className="py-10 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-black rounded-full"></div>
              <div className="mx-4 w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-gray-500 to-black rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "Amazing quality vapes! The Purple Haze disposable was incredible. Highly recommended!" },
              { name: "Mike Chen", text: "Fast delivery and great quality products. The OG Kush cartridge is my favorite!" },
              { name: "Emily Davis", text: "Love the variety of strains and the smooth vaping experience." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-slate-500 to-gray-400 rounded-full"></div>
              <div className="mx-4 w-3 h-3 bg-slate-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-slate-500 to-gray-400 rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose BOMDISPO?
            </h2>
            <p className="text-lg text-gray-600">
              Premium cannabis products with guaranteed quality and purity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Discreet Delivery", description: "Fast and discreet shipping to your location", color: "purple" },
              { icon: Shield, title: "Lab Tested", description: "All products are third-party lab tested for purity", color: "green" },
              { icon: Headphones, title: "Expert Support", description: "Get help from our cannabis experts anytime", color: "blue" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`bg-${feature.color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-10 w-10 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Modal */}
      <EnhancedProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        onProductClick={handleProductClick}
      />
    </div>
  );
};

export default Home;
