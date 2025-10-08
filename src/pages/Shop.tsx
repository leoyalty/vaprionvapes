import { useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import EnhancedProductModal from "@/components/EnhancedProductModal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredAndSortedProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop All Products</h1>
        <p className="text-lg text-gray-600">
          Discover our complete collection of premium products
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8 animate-scale-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="price-low">Price (Low to High)</SelectItem>
              <SelectItem value="price-high">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Info */}
      <div className="flex justify-between items-center mb-6 animate-fade-in">
        <p className="text-gray-600">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>
        
        {(searchTerm || selectedCategory !== "all") && (
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Products Grid - Fixed to exactly 2 columns with proper spacing */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 pb-4 justify-items-center">
            {filteredAndSortedProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in w-full flex justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard 
                  product={product} 
                  onClick={() => handleProductClick(product)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-lg text-gray-600 mb-4">No products found matching your criteria.</p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            View All Products
          </Button>
        </div>
      )}

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

export default Shop;
