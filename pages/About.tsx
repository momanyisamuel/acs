import React from 'react';
import { Search } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="ACS Care Team"
          />
          {/* Blue Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#8C41D2]/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 flex items-end justify-center pb-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-wide drop-shadow-md">ACS</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Bordered Box Message */}
        <div className="border border-[#FC7801] border-dashed p-1 inline-block mb-10 shadow-sm max-w-3xl mx-auto bg-white">
           <div className="border border-[#FC7801] px-6 py-4 md:px-12 md:py-6 bg-white">
             <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-tight">
               Let us help you lead a fulfilling life and become an active member of your community.
             </h2>
           </div>
        </div>

        {/* Happy Person Image */}
        <div className="flex justify-center mb-10">
          <div className="p-1 border-4 border-[#FC7801] inline-block shadow-lg">
             <img 
               src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600&h=450" 
               alt="Happy woman smiling" 
               className="w-full max-w-md object-cover h-64 md:h-80"
             />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-center mb-16">
          <p>
            If you're looking for quality support and assistance for persons with disabilities, <span className="font-bold text-[#FC7801]">Accessibility Community Supports (ACS)</span> is your provider of choice. We strive to be a leading provider of inclusive support services, fostering a culture of acceptance, respect, and empowerment for all. We believe that everyone has the potential to make a valuable contribution to their community, and our range of services is designed to support and empower you in realizing that potential.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-4">
          <h2 className="text-[#8C41D2] text-3xl md:text-4xl font-bold uppercase mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left max-w-6xl mx-auto">
            
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will be transparent to all stakeholders
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will emphasize Community Inclusion/ Integration and self-advocacy
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will promote Family involvement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will continuously evolve in staff training to enhance the quality of services to meet the demands of ever-changing expectations.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will provide support with integrity, quality, safe, healthy place to live while maximizing the independence of each client
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will utilize employment agency apps, social media, and word of mouth for employing staff
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-[#8C41D2] flex-shrink-0 mt-1 stroke-[3]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-[#FC7801]">ACS</span> will focus on investing in staff through mentorship programs, and professional development to minimize burnout and mental health issues.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision Philosophy Grid */}
      <section className="w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Mission */}
          <div className="bg-[#8C41D2] text-white p-10 md:p-14">
            <h3 className="text-3xl font-bold uppercase mb-4">Mission</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Our mission is to promote your well-being by providing comprehensive and compassionate support services that foster community inclusion, personal growth, and independence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#FC7801] text-white p-10 md:p-14">
            <h3 className="text-3xl font-bold uppercase mb-4">Vision</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Our vision is to see every individual enjoy full participation in their community, pursue their goals, and lead a fulfilling life while expanding our services and to continue growing our operations.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-[#8C41D2] text-white p-10 md:p-14">
            <h3 className="text-3xl font-bold uppercase mb-4">Philosophy</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Through the empowerment of self-choice and the implementation of Person-Centered Tools, it is the philosophy of <span className="font-bold">Accessibility Community Supports (ACS)</span> to provide the highest level of opportunities for each individual to utilize their homes, workplaces, and communities to their greatest potential.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#FC7801] p-1 shadow-lg">
          <div className="border-2 border-white p-8 md:p-12">
             <h2 className="text-3xl font-bold uppercase mb-8 text-white">Core Values</h2>
             
             <div className="space-y-6 text-white">
                <div>
                   <h4 className="flex items-center text-lg font-bold mb-1">
                     <Search className="h-4 w-4 mr-2 stroke-[3]" /> Integrity and Ethics
                   </h4>
                   <p className="pl-6 text-sm opacity-90">
                     We are guided by the principles that truthfulness, honesty, and transparency are key standards in all our business practices.
                   </p>
                </div>

                <div>
                   <h4 className="flex items-center text-lg font-bold mb-1">
                     <Search className="h-4 w-4 mr-2 stroke-[3]" /> Accountability
                   </h4>
                   <p className="pl-6 text-sm opacity-90">
                     We all are responsible not only to our consumers, families, and guardians but to each other, our co-workers. Be the best team member you can be, be sure to arrive at work on time, respect one another, complete all your assignments, and meet your deadlines. We acknowledge that an effective working team is an important key to the success of the agency.
                   </p>
                </div>

                <div>
                   <h4 className="flex items-center text-lg font-bold mb-1">
                     <Search className="h-4 w-4 mr-2 stroke-[3]" /> Diversity
                   </h4>
                   <p className="pl-6 text-sm opacity-90">
                     We hold great value and appreciation for the uniqueness of our backgrounds, cultures, and talents, and embracing differences provides learning opportunities and fosters growth.
                   </p>
                </div>

                <div>
                   <h4 className="flex items-center text-lg font-bold mb-1">
                     <Search className="h-4 w-4 mr-2 stroke-[3]" /> Safety First
                   </h4>
                   <p className="pl-6 text-sm opacity-90">
                     We strive for achieving best practices, compliance with standards, and ensuring that safety is an integral part of all decision-making processes of our workforce for the overall well-being of our individuals.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#FC7801] p-1 shadow-lg">
          <div className="border-2 border-white p-8 md:p-12">
            <h2 className="text-3xl font-bold uppercase mb-2 text-white">Who We Serve</h2>
            <h3 className="font-bold mb-6 text-white">ACS will serve clients:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
               <div className="flex items-center gap-2">
                 <Search className="h-4 w-4 stroke-[3]" />
                 <span className="text-sm">Aged 23 and above</span>
               </div>
               <div className="flex items-center gap-2">
                 <Search className="h-4 w-4 stroke-[3]" />
                 <span className="text-sm">Has assisted walking (crutches and walkers) needs</span>
               </div>
               <div className="flex items-center gap-2">
                 <Search className="h-4 w-4 stroke-[3]" />
                 <span className="text-sm">Has non-urgent care medical needs</span>
               </div>
               <div className="flex items-center gap-2">
                 <Search className="h-4 w-4 stroke-[3]" />
                 <span className="text-sm">Has verbal and nonverbal needs</span>
               </div>
               <div className="flex items-center gap-2">
                 <Search className="h-4 w-4 stroke-[3]" />
                 <span className="text-sm">Has ambulatory and non-ambulatory needs</span>
               </div>
               <div className="flex items-center gap-2">
                 <Search className="h-4 w-4 stroke-[3]" />
                 <span className="text-sm">Has behavioral needs</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center md:text-left">
        <p className="text-gray-600">
          To help us better assist you, don't hesitate to <span className="font-bold text-[#8C41D2]">leave us a call</span>.
        </p>
      </section>

    </div>
  );
};

export default About;