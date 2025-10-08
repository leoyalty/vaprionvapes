
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Menu, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LiveChat from "./LiveChat";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setShowMobileSearch(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 animate-fade-in">
              <img src="/favicon.ico" alt="BOMDISPO 420 logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">BOMDISPO 420</span>
            </Link>

            {/* Desktop Navigation and Search */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </nav>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </form>
            </div>

            {/* Mobile Buttons */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
              >
                <Search className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          {showMobileSearch && (
            <div className="md:hidden py-3 border-t animate-fade-in">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Compact Delivery Banner - Reduced size */}
      <div className="sticky top-16 z-40 bg-green-800 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium">
            🚚 FREE UK Delivery on orders above £50
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Live Chat */}
      <LiveChat />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/favicon.ico" alt="BOMDISPO Logo" className="h-6 w-6" />
                <span className="text-lg font-bold">BOMDISPO</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for premium cannabis vape products.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Disposables</li>
                <li className="text-gray-400">Cartridges</li>
                <li className="text-gray-400">THC Pods</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400">
                Email: support@bomdisposables.shop
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/favicon.ico" alt="BOMDISPO Logo" className="h-8 w-8 mb-2" />
              <p className="text-gray-400">
                © 2024 BOMDISPO. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
