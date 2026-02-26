import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndividualSupports: React.FC = () => {
  const features = [
    "Personalized care planning",
    "In-home support services",
    "Behavioral health support",
    "Crisis intervention and prevention",
    "Family support and training",
    "Coordination with other service providers"
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Banner */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000"
            alt="Individual Supports & Community Care Programs"
          />
          <div className="absolute inset-0 bg-[#8C41D2]/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h4 className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">Our Services</h4>
            <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
              Individual Supports &<br/>
              Community <span className="text-[#FC7801]">Care Programs</span>
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
                Comprehensive Care Tailored to You
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Individual Supports and Community Care Programs provide comprehensive, person-centered 
                services for individuals with disabilities and their families. We understand that every 
                person's needs are unique, which is why we develop customized support plans that address 
                your specific goals and challenges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our dedicated team works closely with you and your family to ensure you receive the 
                right level of support at the right time. From daily living assistance to crisis 
                intervention, we're here to help you navigate life's challenges and celebrate your 
                successes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in a holistic approach to care that considers all aspects of your well-being. 
                Our programs are designed to enhance your quality of life while promoting independence 
                and community integration.
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
                  Discover how our Individual Supports and Community Care Programs can benefit you and your family.
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

export default IndividualSupports;
