import React from 'react';
import { useCart } from '../context/CartContext';
import bottleImage from '../assets/bottle-traceable.png';

const Products: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };
  // Sample product data - replace with real data later
  const products = [
    {
      id: 1,
      name: "Premium Omega-3",
      description: "High-potency fish oil with optimal EPA/DHA ratio",
      price: "₹2,499",
      image: bottleImage,
      features: ["3rd party tested", "Pharmaceutical grade", "No fishy aftertaste"]
    },
    {
      id: 2,
      name: "Vitamin D3 + K2",
      description: "Synergistic combination for bone and heart health",
      price: "₹1,899",
      image: bottleImage,
      features: ["Optimal absorption", "Vegan friendly", "Lab verified potency"]
    },
    {
      id: 3,
      name: "Magnesium Glycinate",
      description: "Highly bioavailable form for better sleep and recovery",
      price: "₹1,699",
      image: bottleImage,
      features: ["Chelated form", "Gentle on stomach", "99% pure"]
    },
    {
      id: 4,
      name: "Curcumin Complex",
      description: "Enhanced absorption turmeric with black pepper",
      price: "₹2,199",
      image: bottleImage,
      features: ["95% curcuminoids", "Piperine enhanced", "Anti-inflammatory"]
    },
    {
      id: 5,
      name: "B-Complex Active",
      description: "Methylated B vitamins for optimal energy metabolism",
      price: "₹1,599",
      image: bottleImage,
      features: ["Active forms only", "Energy support", "Mood balance"]
    },
    {
      id: 6,
      name: "Zinc Bisglycinate",
      description: "Highly absorbable zinc for immune system support",
      price: "₹1,299",
      image: bottleImage,
      features: ["Chelated form", "Immune support", "No nausea"]
    }
  ];

  return (
    <section className="pt-0 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            Curated Selection
          </div>
          <h2 className="text-5xl md:text-6xl font-inter font-bold text-black mb-6">
            Build Your Health Routine
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our pharmaceutical experts have selected only 6 supplements that actually work. 
            Each one is rigorously tested for purity, potency, and bioavailability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-inter font-bold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-500 mb-1">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-inter font-bold text-black">
                    {product.price}
                  </div>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-inter font-bold text-black mb-4">
              Not sure where to start?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take our 2-minute assessment to get personalized recommendations based on your health goals and lifestyle.
            </p>
            <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Take Health Assessment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
