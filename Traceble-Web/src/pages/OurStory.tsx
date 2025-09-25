import React from 'react';
import Problem from '../components/Problem';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section for Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            The TRACEABLE Solution
          </div>
          <h1 className="text-5xl md:text-6xl font-inter font-bold text-black mb-6">
            Expert Curation
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            TRACEABLE was born when pharmaceutical formulation scientist <strong>Nayan Solanki</strong> and 
            technology innovator <strong>Yagnik Vadher</strong> realized the supplement industry had it backwards.
          </p>
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              Instead of creating more products, what people need are experts who find the few that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-black rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-inter font-bold text-black mb-4">Proven Efficacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Peer-reviewed research demonstrating real health benefits
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-inter font-bold text-black mb-4">Optimal Bioavailability</h3>
              <p className="text-gray-600 leading-relaxed">
                The most absorbable form for maximum effectiveness
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-black rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-inter font-bold text-black mb-4">Complete Traceability</h3>
              <p className="text-gray-600 leading-relaxed">
                Every element verified from source to supplement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-8">Our Mission</h2>
          <p className="text-2xl text-gray-800 leading-relaxed font-medium">
            To cut through the noise and deliver only the 5-8 supplements with proven efficacy, 
            optimal bioavailability, and verifiable quality. No marketing hype. No unnecessary products. 
            Just what your body actually needs, backed by peer-reviewed science.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <Problem />

      {/* The TRACEABLE 5-8 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              Our Curated Collection
            </div>
            <h2 className="text-5xl md:text-6xl font-inter font-bold text-black mb-6">
              The TRACEABLE 5-8
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
              Each product has passed our three non-negotiable criteria: proven efficacy, optimal bioavailability, and complete traceability.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-inter font-bold text-black mb-2">40,000+</div>
                <p className="text-gray-600 font-medium">Supplements Reviewed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-inter font-bold text-black mb-2">5-8</div>
                <p className="text-gray-600 font-medium">Made Our Cut</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-inter font-bold text-black mb-2">99.98%</div>
                <p className="text-gray-600 font-medium">Rejection Rate</p>
              </div>
            </div>
          </div>

          {/* Supplements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Vitamin D3 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Bone & Immune Health</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Vitamin D3</h3>
              <p className="text-gray-600 mb-4 text-sm">Cholecalciferol 2000 IU</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Strongest evidence</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Bone health</li>
                <li>• Immune function</li>
                <li>• Mood support</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

            {/* Magnesium L-Threonate */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Cognitive Health</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Magnesium L-Threonate</h3>
              <p className="text-gray-600 mb-4 text-sm">Brain bioavailable form</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Breakthrough research</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Memory enhancement</li>
                <li>• Cognitive function</li>
                <li>• Sleep quality</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

            {/* Omega-3 EPA/DHA */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Heart & Brain Health</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Omega-3 EPA/DHA</h3>
              <p className="text-gray-600 mb-4 text-sm">Molecular distilled</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Extensive clinical trials</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Cardiovascular health</li>
                <li>• Brain function</li>
                <li>• Inflammation</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

            {/* Methylated B12 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Energy & Nervous System</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Methylated B12</h3>
              <p className="text-gray-600 mb-4 text-sm">Most bioavailable form</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Gold standard form</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Energy production</li>
                <li>• Nervous system</li>
                <li>• DNA synthesis</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Folate (5-MTHF) */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Cellular Health</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Folate (5-MTHF)</h3>
              <p className="text-gray-600 mb-4 text-sm">Active form</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Active metabolite</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Cell division</li>
                <li>• DNA synthesis</li>
                <li>• Pregnancy support</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

            {/* Iron Bisglycinate */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Blood Health</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Iron Bisglycinate</h3>
              <p className="text-gray-600 mb-4 text-sm">Gentle, highly absorbable</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Superior absorption</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Oxygen transport</li>
                <li>• Energy</li>
                <li>• Immune function</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

            {/* Zinc L-OptiZinc */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Immune & Skin Health</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Zinc L-OptiZinc</h3>
              <p className="text-gray-600 mb-4 text-sm">Patented bioavailable form</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Patented technology</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Immune support</li>
                <li>• Skin health</li>
                <li>• Wound healing</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

            {/* Curcumin with Piperine */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">Inflammation</div>
              <h3 className="text-xl font-inter font-bold text-black mb-2">Curcumin with Piperine</h3>
              <p className="text-gray-600 mb-4 text-sm">Enhanced absorption</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Bioavailability</span>
                  <span className="text-lg font-bold text-black">2000% ↑</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mb-4">Enhanced bioavailability</div>
              
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>• Anti-inflammatory</li>
                <li>• Antioxidant</li>
                <li>• Joint health</li>
              </ul>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
                <button className="flex-1 px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Research
                </button>
              </div>
            </div>

          </div>

          {/* Why These 8 */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-3xl p-12">
              <h3 className="text-3xl font-inter font-bold text-black mb-6">Why These 8?</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                Out of 40,000+ supplement options, only these 8 meet our rigorous standards for scientific evidence, 
                bioavailability, and traceability. We don't make supplements—we find the exceptional ones.
              </p>
              <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Our Selection Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We created a new standard for supplement curation - one based on science, not marketing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Process */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-inter font-bold text-black mb-8">
                Our Rigorous Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Clinical Evidence Review
                    </h4>
                    <p className="text-gray-600">
                      We analyze peer-reviewed studies and clinical trials to identify supplements with proven efficacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Bioavailability Testing
                    </h4>
                    <p className="text-gray-600">
                      We test absorption rates and bioavailability to ensure your body can actually use what you take.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Third-Party Verification
                    </h4>
                    <p className="text-gray-600">
                      Every supplement is independently tested for purity, potency, and contamination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Expert Panel Review
                    </h4>
                    <p className="text-gray-600">
                      Our panel of pharmaceutical experts and nutritionists review every selection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-3xl font-inter font-bold text-black mb-8">
                Our Promise to You
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Only What Works
                    </h4>
                    <p className="text-gray-600">
                      We only sell supplements with proven clinical efficacy. No filler products, no marketing hype.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Maximum Absorption
                    </h4>
                    <p className="text-gray-600">
                      We use the most bioavailable forms and optimal dosages for maximum effectiveness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-gray-900 mb-2">
                      Complete Transparency
                    </h4>
                    <p className="text-gray-600">
                      Every ingredient is traced to its source. We provide complete transparency about what's in your supplements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-black rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-inter font-bold mb-4">
                Experience the Difference
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands who have already discovered what it means to take supplements that actually work.
              </p>
              <button className="px-12 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                Shop Our Selection
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
