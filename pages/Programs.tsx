import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: React.ReactNode;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceItem> = ({ title, image, link }) => (
  <div className="group flex flex-col h-full bg-white shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt="Service" 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
    </div>
    
    {/* Title Container */}
    <div className="p-8 flex items-center justify-center text-center min-h-[120px] bg-white relative z-10">
       <div className="text-[#004b8d] font-bold uppercase text-xl leading-tight tracking-tight">
         {title}
       </div>
    </div>

    {/* Footer Button */}
    <div className="mt-auto bg-[#004b8d] py-4 px-6 flex justify-between items-center text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#003666] transition-colors cursor-pointer">
      Click Here <ArrowRight className="h-3.5 w-3.5" />
    </div>
  </div>
);

const Programs: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: <>Career<br/>Planning</>,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Community-Based<br/><span className="text-2xl">Supports</span></>,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Community Inclusion<br/><span className="text-2xl">Services</span></>,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Individual Supports &<br/>Community Care<br/><span className="text-2xl">Programs</span></>,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Natural Supports<br/><span className="text-2xl">Training</span></>,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Occupational<br/><span className="text-2xl">Therapy</span></>,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Physical<br/><span className="text-2xl">Therapy</span></>,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Pre-Vocational<br/><span className="text-2xl">Training</span></>,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <span className="text-2xl">Training</span>,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <span className="text-2xl">Housing</span>,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <span className="text-2xl">Respite</span>,
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Supported Employment –<br/><span className="text-2xl">Individual</span></>,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>Supported Employment –<br/><span className="text-2xl">Small Group</span></>,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: <>CPR & First<br/><span className="text-2xl">Aid Training</span></>,
      image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ];

  return (
    <div className="font-sans flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="Services Banner"
          />
          {/* Blue Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#004b8d]/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 flex items-end justify-center pb-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-wide drop-shadow-md">Services</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Bordered Box Message */}
        <div className="border border-[#e31837] border-dashed p-1 inline-block mb-10 shadow-sm max-w-4xl mx-auto bg-white">
           <div className="border border-[#e31837] px-6 py-6 md:px-16 md:py-8 bg-white">
             <h2 className="text-2xl md:text-3xl text-gray-600 font-normal leading-tight">
               We offer everything necessary to help you flourish in your community.
             </h2>
           </div>
        </div>

        {/* Text Content */}
        <div className="max-w-6xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed text-justify md:text-left mb-8">
          <p>
            <span className="font-bold text-[#e31837]">Inspiring Community Supports</span> offers everything necessary to help you and your loved ones flourish in your community. Our skilled professionals are available to deliver care and community activities to promote independence and achieve your aspirations. We’ll help you reach your full potential by providing a variety of services tailored to your unique requirements. We believe that everyone deserves the opportunity to contribute to their community, and we are here to help make this a reality.
          </p>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;