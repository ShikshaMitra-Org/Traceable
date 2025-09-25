import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      age: "32",
      text: "After years of trying random supplements, Traceable's curated selection finally gave me results. My energy levels are consistently high, and I sleep better than I have in years.",
      rating: 5,
      supplements: ["B-Complex Active", "Magnesium Glycinate"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      age: "45",
      text: "As a busy executive, I needed supplements that actually work. Traceable's approach convinced me - every product is backed by real science, not marketing hype.",
      rating: 5,
      supplements: ["Premium Omega-3", "Vitamin D3 + K2"]
    },
    {
      id: 3,
      name: "Dr. Anita Mehta",
      location: "Bangalore",
      age: "38",
      text: "As a medical professional, I'm skeptical about supplements. But Traceable's transparency and third-party testing convinced me. The quality is pharmaceutical-grade.",
      rating: 5,
      supplements: ["Curcumin Complex", "Zinc Bisglycinate"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what happens when you choose supplements that actually work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-800 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-inter font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location} • Age {testimonial.age}</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="font-inter font-bold text-gray-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Supplements Used */}
                <div className="flex flex-wrap gap-2">
                  {testimonial.supplements.map((supplement, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                      {supplement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-black mb-2">98%</div>
            <p className="text-gray-600 font-medium">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-black mb-2">15,000+</div>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-black mb-2">4.9/5</div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-inter font-bold text-black mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have discovered what it means to take supplements that actually work.
            </p>
            <button className="px-12 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Start Your Journey
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
