import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCurrent(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{current}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-black text-white flex justify-center">
      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 rounded-2xl">
        {/* Trusted Brands */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-8xl md:text-9xl font-bold mb-4">
            <AnimatedNumber end={100} />+
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted Brands
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            We source from <span className="font-semibold text-white">100+ vetted brands</span>, ensuring you get only high-quality, reliable products every time.
          </p>
        </div>

        {/* Customer Satisfaction */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-16 w-16 text-yellow-400 fill-yellow-400 mx-1" 
                style={{ 
                  animationDelay: `${0.5 + i * 0.1}s`,
                  animation: 'scale-in 0.5s ease-out forwards'
                }}
              />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Customer Satisfaction
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Our customers love us! We're proud of our customer satisfaction rate and glowing <span className="font-semibold text-white">5-star reviews</span>.
          </p>
        </div>

        {/* Free Shipping */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-8xl md:text-9xl font-bold mb-4">
            FREE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Shipping
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            We ship quickly and efficiently! All available items processed and shipped within <span className="font-semibold text-white">24 business hours</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;