import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements - Premium minimal */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-gray-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-black/5 to-gray-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            The Harsh Reality
          </div>
          <h2 className="text-5xl md:text-6xl font-inter font-bold text-black mb-6">
            The Problem We Solve
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Indians spend over <span className="text-3xl font-bold text-black">₹15,000 crore</span> annually on supplements, yet most don't work.
          </p>
        </div>

        {/* Problem Description with visual emphasis */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              Research shows that <span className="text-2xl font-bold text-black">79% of supplements don't even contain their labeled ingredients</span>. 
              The real problem isn't transparency—it's efficacy.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              Consumers are drowning in a sea of <span className="text-2xl font-bold text-black">40,000+ supplement options</span>, most backed by marketing rather than science.
            </p>
          </div>
        </div>

        {/* Premium Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Stat 1 - Premium minimal design */}
          <div className="relative group">
            <div className="absolute inset-0 bg-black/5 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 text-center shadow-2xl border border-gray-100 transform group-hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="text-6xl font-inter font-black text-black mb-4">
                79%
              </div>
              <div className="h-1 w-16 bg-black mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-700 font-semibold text-lg leading-tight">
                of supplements don't contain labeled ingredients
              </p>
              <div className="absolute -top-3 -right-3 bg-black text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                Critical
              </div>
            </div>
          </div>
          
          {/* Stat 2 - Premium design */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-900/5 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 text-center shadow-2xl border border-gray-100 transform group-hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="text-6xl font-inter font-black text-black mb-4">
                ₹15K+
              </div>
              <div className="h-1 w-16 bg-gray-800 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-700 font-semibold text-lg leading-tight">
                crores wasted annually on ineffective supplements
              </p>
              <div className="absolute -top-3 -right-3 bg-gray-800 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                Wastage
              </div>
            </div>
          </div>
          
          {/* Stat 3 - Premium design */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-700/5 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 text-center shadow-2xl border border-gray-100 transform group-hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="text-6xl font-inter font-black text-black mb-4">
                40K+
              </div>
              <div className="h-1 w-16 bg-gray-700 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-700 font-semibold text-lg leading-tight">
                supplement options create confusion
              </p>
              <div className="absolute -top-3 -right-3 bg-gray-700 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                Chaos
              </div>
            </div>
          </div>
        </div>

        {/* Why Most Supplements Fail & Cost of Confusion - Creative Design */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Why Most Supplements Fail - Premium Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-black rounded-2xl p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.966-.833-2.732 0L4.082 20.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-inter font-bold text-black">
                  Why Most Supplements Fail
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-black p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Poor bioavailability
                    </h4>
                    <p className="text-gray-600 font-medium">
                      your body can't absorb them
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-gray-800 p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Wrong dosages
                    </h4>
                    <p className="text-gray-600 font-medium">
                      too little to be effective
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-gray-700 p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Inferior forms
                    </h4>
                    <p className="text-gray-600 font-medium">
                      cheapest ingredients, not best
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-gray-600 p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      No scientific backing
                    </h4>
                    <p className="text-gray-600 font-medium">
                      marketing claims only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Cost of Confusion - Premium Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-gray-900 rounded-2xl p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-3xl font-inter font-bold text-black">
                  The Cost of Confusion
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-black p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Wasted money on ineffective products
                    </h4>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-gray-800 p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Health goals remain unmet
                    </h4>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-gray-700 p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Loss of trust in supplements entirely
                    </h4>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-gray-600 p-3 rounded-lg flex-shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2 text-lg">
                      Time wasted researching endless options
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Premium Style */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <p className="text-2xl font-semibold text-gray-800 mb-8">
              It's time to cut through the noise and focus on 
              <span className="font-bold text-black"> what actually works</span>
            </p>
            <button className="px-12 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              See Our Solution
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
