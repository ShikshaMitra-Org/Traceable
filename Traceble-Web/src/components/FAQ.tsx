import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Why only 6 supplements? Don't I need more?",
      answer: "After extensive research, we found that 6 supplements cover 90% of nutritional gaps for most people. More isn't better - the right supplements at optimal dosages are what matter. This focused approach eliminates confusion and ensures you're not taking unnecessary products."
    },
    {
      id: 2,
      question: "How do you ensure the quality of your supplements?",
      answer: "Every supplement undergoes rigorous third-party testing for purity, potency, and contamination. We work only with pharmaceutical-grade manufacturers who follow strict GMP guidelines. Each batch comes with a certificate of analysis, and we trace every ingredient back to its source."
    },
    {
      id: 3,
      question: "Are your supplements safe to take together?",
      answer: "Yes, our pharmaceutical experts have specifically designed this selection to work synergistically. We've carefully considered absorption rates, interactions, and timing to ensure maximum safety and effectiveness when taken together."
    },
    {
      id: 4,
      question: "How long before I see results?",
      answer: "Most customers notice improvements within 2-4 weeks of consistent use. However, some benefits like better sleep (Magnesium) or energy (B-Complex) may be felt within days. We recommend taking supplements for at least 90 days to experience full benefits."
    },
    {
      id: 5,
      question: "Do you ship across India?",
      answer: "Yes, we deliver pan-India through our reliable logistics partners. Orders are typically delivered within 3-7 business days depending on your location. We provide tracking information so you can monitor your shipment."
    },
    {
      id: 6,
      question: "What if the supplements don't work for me?",
      answer: "We offer a 90-day money-back guarantee. If you're not satisfied with the results after consistent use for 90 days, we'll provide a full refund. We're confident in our products, but we understand that individual responses can vary."
    },
    {
      id: 7,
      question: "Are your supplements vegetarian/vegan friendly?",
      answer: "Most of our supplements are vegetarian-friendly. We clearly label any products that contain animal-derived ingredients (like our Omega-3 from fish oil). We're working on vegan alternatives and will update our selection as better options become available."
    },
    {
      id: 8,
      question: "How should I take these supplements?",
      answer: "Each product comes with detailed instructions for optimal absorption. Generally, fat-soluble vitamins (D3, Omega-3) are best taken with meals, while others may be more effective on an empty stomach. We provide a complete guide with your order."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Everything you need to know about our supplements and approach.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-inter font-semibold text-black pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-200 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-inter font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of pharmaceutical experts is here to help. Get personalized answers to your supplement questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200">
                Chat with Expert
              </button>
              <button className="px-8 py-3 border border-gray-600 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200">
                Email Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
