import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ title: React.ReactNode; image: string; link: string }> = ({ title, image, link }) => (
  <Link to={link} className="group relative flex flex-col h-full bg-white shadow-sm hover:shadow-lg transition-shadow">
    <div className="relative h-72 overflow-hidden">
      <img src={image} alt="Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 mx-4 mb-4 shadow-sm text-center min-h-[80px] flex items-center justify-center">
         <div className="text-[#8C41D2] font-bold uppercase text-base leading-tight tracking-tight">
           {title}
         </div>
      </div>
    </div>
    <div className="mt-auto bg-[#8C41D2] py-3 px-4 flex justify-between items-center text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#6B2FA8] transition-colors cursor-pointer">
      Click Here <ArrowRight className="h-3 w-3" />
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[650px] w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="Mother and child smiling"
          />
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="bg-white p-10 md:p-14 max-w-lg shadow-2xl animate-fade-in-up">
            <h4 className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-2">Community Support</h4>
            <div className="text-[#8C41D2] text-4xl font-light leading-none mb-1">FOR A</div>
            <h1 className="text-[#FC7801] text-6xl md:text-7xl font-extrabold leading-[0.9] mb-4 tracking-tight">
              BRIGHTER<br/>TOMORROW
            </h1>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-6">
              You and your family will never have to worry about a lack of options. There is no limit to what you or your loved ones can accomplish.
            </p>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section className="bg-white pt-20 pb-10 text-center">
        <div className="inline-block bg-[#FC7801] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-5">
          What We Do
        </div>
        <h3 className="text-gray-400 font-light text-2xl uppercase tracking-wide mb-1">We Offer The Following</h3>
        <h2 className="text-[#8C41D2] text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6">Services</h2>
        <p className="text-gray-500 max-w-2xl mx-auto px-4 text-sm leading-relaxed">
          Our services are designed to be flexible and adaptable to meet your unique needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Community Inclusion Services" 
            image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
            link="/services/community-inclusion"
          />
          <ServiceCard 
            title={<>Supported Employment<br/><span className="text-xl">INDIVIDUAL</span></>}
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            link="/services/supported-employment"
          />
          <ServiceCard 
            title={<>Community-Based<br/><span className="text-xl">SUPPORTS</span></>}
            image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" 
            link="/services/community-based-supports"
          />
          <ServiceCard 
            title={<>Individual Supports &<br/>Community<br/><span className="text-xl">CARE PROGRAMS</span></>}
            image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
            link="/services/individual-supports"
          />
          <ServiceCard 
            title={<>Occupational<br/><span className="text-xl">THERAPY</span></>}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
            link="/services/occupational-therapy"
          />
          <ServiceCard 
            title={<>View More<br/><span className="text-xl">SERVICES</span></>}
            image="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800" 
            link="/programs"
          />
        </div>
      </section>

      {/* Bento Grid Section - Full Width */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[600px]">
          
          {/* Column 1 (Left) */}
          <div className="flex flex-col h-full">
            <div className="h-1/2 relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Staff member" />
            </div>
            <div className="h-1/2 bg-[#8C41D2] p-10 flex flex-col justify-center items-start text-white hover:bg-[#6B2FA8] transition-colors group cursor-pointer relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-sm font-medium uppercase mb-1 opacity-80">Submit Your</h3>
                 <h2 className="text-3xl font-bold uppercase mb-4 leading-none">Referrals</h2>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
          </div>

          {/* Column 2 (Middle-Left) */}
          <div className="flex flex-col h-full">
            <div className="h-1/2 bg-[#FC7801] p-10 flex flex-col justify-center items-center text-center text-white hover:bg-[#D96600] transition-colors group cursor-pointer relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-sm font-medium uppercase mb-1 opacity-80">Meet With</h3>
                 <h2 className="text-3xl font-bold uppercase mb-4 leading-none">Our Staff</h2>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
            <div className="h-1/2 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Happy activity" />
            </div>
          </div>

          {/* Column 3 & 4 (Right - Large Purple Box) */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#8C41D2] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
               <div className="inline-block border border-white/30 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-8 bg-[#FC7801]">
                 Welcome To
               </div>
               <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 uppercase tracking-tight">Accessibility</h2>
               <h3 className="text-3xl md:text-4xl font-light text-white mb-8 uppercase tracking-wide">Community Supports</h3>
               <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                 Looking for structured community care that puts your needs first? ACS is all about empowering you to live your life to the fullest. We offer a range of person-centered services that are right for you, including transportation, community support, and more, to help you thrive in your community. Our team of experts is here to offer a range of services to help your loved ones with a disability maintain their independence and achieve their aspirations. We provide the kind of assistance that emphasizes choice and puts you at the center of everything. When you choose us, you are choosing a team that is committed to your success.
               </p>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-tr-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center items-start">
             <div className="bg-[#FC7801] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-8 inline-block">
               We Are Committed
             </div>
             <h2 className="text-[#8C41D2] text-5xl md:text-6xl font-bold uppercase mb-0 leading-none">Our Mission</h2>
             <h2 className="text-gray-300 text-5xl md:text-6xl font-light uppercase mb-10 leading-none">Statement</h2>
             <p className="text-gray-500 leading-relaxed mb-10 max-w-md text-sm md:text-base">
               Our mission is to promote your well-being by providing comprehensive and compassionate support services that foster community inclusion, personal growth, and independence.
             </p>
             <Link to="/about" className="bg-[#FC7801] text-white px-8 py-5 flex items-center gap-6 hover:bg-[#D96600] transition-colors shadow-lg group">
                <div className="text-left flex flex-col">
                  <span className="text-[10px] font-bold uppercase opacity-80 tracking-wider mb-1">Learn More</span>
                  <span className="text-xl font-bold uppercase leading-none">About Us</span>
                </div>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
          <div className="h-[500px] lg:h-auto relative">
             <img src="https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Mission context" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#FC7801] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-6">
             Reach Out To Us
          </div>
          <h2 className="text-5xl text-gray-700 uppercase mb-2 font-light tracking-tight">Send Us A <span className="text-[#8C41D2] font-bold">Message</span></h2>
          <p className="text-gray-500 text-sm mb-12">Talk to us today to learn more about us and how we can help you.</p>
          
          <form className="space-y-4 text-left max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input type="text" placeholder="Full Name" className="w-full bg-[#f8f9fa] border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#8C41D2] transition-colors placeholder-gray-400" />
               <input type="email" placeholder="Email Address" className="w-full bg-[#f8f9fa] border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#8C41D2] transition-colors placeholder-gray-400" />
            </div>
            <textarea rows={5} placeholder="Message(s)" className="w-full bg-[#f8f9fa] border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#8C41D2] transition-colors placeholder-gray-400 resize-none"></textarea>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
              <div className="h-14 w-full md:w-64 bg-[#f1f1f1] border border-gray-300 rounded flex items-center justify-center text-gray-400 text-xs shadow-inner">
                 I'm not a robot
              </div>
              <button className="bg-[#039161] text-white font-bold py-4 px-12 hover:bg-[#027a52] transition-colors shadow-lg uppercase tracking-wider flex items-center gap-2 w-full md:w-auto justify-center text-sm">
                Submit <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;