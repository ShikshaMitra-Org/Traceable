import React from 'react';

const Experts: React.FC = () => {
  const experts = [
    {
      id: 1,
      name: "Nayan Solanki",
      title: "Co-Founder & Chief Formulation Scientist",
      specialization: "Pharmaceutical Formulation Science",
      credentials: "PhD Pharmaceutical Sciences",
      experience: "12+ years",
      image: "/api/placeholder/300/300",
      bio: "Leading formulation scientist specializing in bioavailability optimization and pharmaceutical-grade supplement development. Former research scientist at major pharmaceutical companies where he developed innovative drug delivery systems.",
      achievements: [
        "Developed proprietary absorption enhancement techniques",
        "Published 40+ research papers on bioavailability",
        "Expert in pharmaceutical manufacturing standards",
        "Consultant for supplement bioavailability optimization"
      ]
    },
    {
      id: 2,
      name: "Kishor Khava",
      title: "Co-Founder & Manufacturing Expert",
      specialization: "Pharmaceutical Manufacturing & Quality Control",
      credentials: "MS Manufacturing Engineering, GMP Certified",
      experience: "15+ years",
      image: "/api/placeholder/300/300",
      bio: "Manufacturing excellence expert with deep expertise in pharmaceutical production processes and quality assurance. Previously managed manufacturing operations at leading nutraceutical facilities, ensuring every product meets the highest industry standards.",
      achievements: [
        "Managed pharmaceutical facilities producing 100M+ units annually",
        "Implemented zero-defect quality control systems",
        "Expert in GMP compliance and international standards",
        "Developed traceability systems from raw material to finished product"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            Meet the Team
          </div>
          <h1 className="text-5xl md:text-6xl font-inter font-bold text-black mb-6">
            Our Expert Team
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Meet the co-founders behind Traceable - a pharmaceutical formulation scientist and manufacturing expert 
            who combined their expertise to revolutionize supplement quality and bioavailability.
          </p>
          
          {/* Team Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-4xl font-inter font-bold text-black mb-2">27+</div>
              <p className="text-gray-600 font-medium">Years Combined Experience</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-4xl font-inter font-bold text-black mb-2">40+</div>
              <p className="text-gray-600 font-medium">Research Publications</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-4xl font-inter font-bold text-black mb-2">100M+</div>
              <p className="text-gray-600 font-medium">Units Manufactured Annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-20">
            {experts.map((expert, index) => (
              <div key={expert.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                
                {/* Expert Image */}
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-gray-600/10 rounded-3xl blur-xl transform translate-x-2 translate-y-2"></div>
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Expert Info */}
                <div className="lg:w-2/3">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-3xl md:text-4xl font-inter font-bold text-black">
                        {expert.name}
                      </h2>
                      <div className="px-3 py-1 bg-black text-white text-sm rounded-full">
                        {expert.credentials}
                      </div>
                    </div>
                    
                    <p className="text-xl font-inter font-semibold text-gray-800 mb-2">
                      {expert.title}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {expert.specialization}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {expert.experience}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {expert.bio}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h3 className="text-lg font-inter font-semibold text-black mb-4">Key Achievements</h3>
                      <ul className="space-y-3">
                        {expert.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-6">
              Our Scientific Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              How our experts ensure every supplement in our selection meets the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Scientific Literature Review",
                description: "Nayan analyzes peer-reviewed research to identify supplements with proven efficacy"
              },
              {
                step: "02", 
                title: "Formulation Optimization",
                description: "Selection of optimal forms and dosages for maximum bioavailability"
              },
              {
                step: "03",
                title: "Manufacturing Standards",
                description: "Kishor ensures pharmaceutical-grade production and quality control"
              },
              {
                step: "04",
                title: "Complete Traceability",
                description: "Every ingredient traced from source to final product verification"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl font-inter font-bold text-xl mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-inter font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-black rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6">
              Trust the Experts
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              When you choose Traceable, you're not just buying supplements - 
              you're accessing decades of pharmaceutical expertise.
            </p>
            <button className="px-12 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Shop Expert-Selected Supplements
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Experts;
