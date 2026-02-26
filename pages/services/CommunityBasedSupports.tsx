import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityBasedSupports: React.FC = () => {
  const features = [
    "Daily living skills development",
    "Money management and budgeting assistance",
    "Health and wellness support",
    "Transportation and mobility training",
    "Social skills development",
    "Community navigation and resource connection"
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Banner */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2000"
            alt="Community-Based Supports"
          />
          <div className="absolute inset-0 bg-[#8C41D2]/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h4 className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">Our Services</h4>
            <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
              Community-Based<br/>
              <span className="text-[#FC7801]">Supports</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Description */}
            <div>
              <div className="inline-block bg-[#FC7801] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-6">
                About This Service
              </div>
              <h2 className="text-[#8C41D2] text-4xl font-bold uppercase mb-6">
                Support Where You Need It
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Community-Based Supports program provides individualized assistance to help people with 
                disabilities live as independently as possible within their communities. We meet you where you 
                are and work with you to achieve your personal goals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our trained support staff help with a wide range of daily activities, from developing life 
                skills to navigating community resources. We focus on building your capabilities and confidence 
                so you can participate fully in your community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need help with household management, health maintenance, or accessing community 
                services, our team provides the flexible, person-centered support you need to thrive.
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="bg-[#f8f9fa] p-10">
              <h3 className="text-[#8C41D2] text-2xl font-bold uppercase mb-8">What We Offer</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#FC7801] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-6">
                  Learn more about how our Community-Based Supports can help you live more independently.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-[#FC7801] text-white px-8 py-4 inline-flex items-center gap-3 hover:bg-[#D96600] transition-colors font-bold uppercase text-sm tracking-wider"
                >
                  Contact Us Today <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#8C41D2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-bold uppercase mb-4">
            Explore Our Other Services
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We offer a comprehensive range of support services designed to meet your unique needs.
          </p>
          <Link 
            to="/programs" 
            className="bg-[#FC7801] text-white px-10 py-4 inline-flex items-center gap-3 hover:bg-[#D96600] transition-colors font-bold uppercase tracking-wider"
          >
            View All Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CommunityBasedSupports;
