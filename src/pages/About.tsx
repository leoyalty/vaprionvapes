
import { Users, Target, Heart, Award, Leaf, Shield, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16">
  <h1 className="text-4xl font-bold text-gray-900 mb-6">About BOMDISPO</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to BOMDISPO - Your premier destination for authentic, high-quality cannabis
          vape products. We specialize in premium disposables, cartridges, and THC pods, 
          carefully curated to deliver exceptional experiences with every puff.
        </p>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-lg p-8 md:p-12 mb-16 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              BOMDISPO was born from a passion for providing safe, reliable access to premium 
              cannabis vape products in the UK market. We understand that quality matters when 
              it comes to your wellness and recreational needs.
            </p>
            <p className="text-gray-600 mb-4">
              Our dedicated team works tirelessly to source only the finest products from 
              trusted manufacturers, ensuring every item in our collection meets the highest 
              standards of purity, potency, and safety.
            </p>
            <p className="text-gray-600">
              We believe in transparency, education, and providing our customers with the 
              knowledge they need to make informed choices about their cannabis consumption.
            </p>
          </div>
          <div className="lg:order-first">
            <img
              src="/lovable-uploads/photo_2025-09-20_03-04-40.jpg"
              alt="Premium cannabis vape products"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose BOMDISPO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Laboratory-tested products from licensed facilities. Every item is verified 
              for purity and potency before reaching you.
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Discreet & Secure</h3>
            <p className="text-gray-600">
              Your privacy is our priority. Secure packaging, encrypted transactions, 
              and confidential delivery to your door.
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick processing and reliable UK-wide delivery. Most orders dispatched 
              within 24 hours.
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">
              Knowledgeable team ready to help via Telegram, Instagram, or email. 
              We're here for all your questions.
            </p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-white rounded-lg p-8 md:p-12 mb-16 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Product Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Disposable Vapes</h3>
            <p className="text-gray-600">
              Ready-to-use disposable vapes with various strains and flavors. 
              Perfect for on-the-go convenience.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">THC Cartridges</h3>
            <p className="text-gray-600">
              Premium 510-thread cartridges compatible with standard vape batteries. 
              High-quality extracts and consistent dosing.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Pod Systems</h3>
            <p className="text-gray-600">
              Advanced pod systems for experienced users. Precise temperature 
              control and enhanced flavor profiles.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 md:p-12 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">BOMDISPO by the Numbers</h2>
          <p className="text-green-100">Building trust in the UK cannabis community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-green-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-green-100">Premium Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">UK Wide</div>
            <div className="text-green-100">Free Delivery £50+</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-green-100">Customer Support</div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of satisfied customers who trust BOMDISPO for their cannabis needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => window.open('https://t.me/BOMDISPO_420', '_blank')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            📱 Chat on Telegram
          </button>
          <button 
            onClick={() => window.open('https://ptwdym158.org/BOMDiSPO_420', '_blank')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            📸 Follow on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
