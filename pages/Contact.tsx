import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
            alt="Woman on phone"
          />
        </div>
        {/* Bottom Title Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-[#003666]/90 to-[#004b8d]/80 flex items-center justify-center">
             <h1 className="text-white text-5xl font-bold font-sans tracking-wide drop-shadow-md">Contact Us</h1>
        </div>
      </section>

      {/* Breadcrumb & Intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
         <div className="text-sm text-[#004b8d] mb-4">
            <Link to="/" className="hover:underline">Home</Link> » Contact Us
         </div>
         <div className="border-b border-gray-200 border-dotted pb-6 mb-8">
            <p className="text-gray-600 text-sm">
                Contact us to learn more about our services.
            </p>
         </div>
      </section>

      {/* Form Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="border border-gray-100 shadow-sm p-8 md:p-10 rounded-sm">
            
            <p className="text-[#e31837] text-sm mb-6">* Required Information</p>
            
            <form className="space-y-6">
                
                {/* Full Name */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                        Full Name <span className="text-[#e31837]">*</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Enter full name here"
                        className="w-full border border-gray-300 rounded-[3px] p-3 text-sm focus:outline-none focus:border-[#004b8d] transition-colors placeholder-gray-300" 
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                        Address <span className="text-[#e31837]">*</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Enter address here"
                        className="w-full border border-gray-300 rounded-[3px] p-3 text-sm focus:outline-none focus:border-[#004b8d] transition-colors placeholder-gray-300" 
                    />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                            Email Address <span className="text-[#e31837]">*</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="example@domain.com"
                            className="w-full border border-gray-300 rounded-[3px] p-3 text-sm focus:outline-none focus:border-[#004b8d] transition-colors placeholder-gray-300" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                            Phone Number <span className="text-[#e31837]">*</span>
                        </label>
                        <div className="flex items-stretch border border-gray-300 rounded-[3px] overflow-hidden">
                            <div className="bg-gray-50 px-3 flex items-center border-r border-gray-200">
                                <span className="text-lg">🇺🇸</span>
                                <span className="ml-1 text-xs text-gray-500">▼</span>
                            </div>
                            <input 
                                type="tel" 
                                placeholder="+1 (number)"
                                className="w-full p-3 text-sm focus:outline-none focus:border-[#004b8d] transition-colors placeholder-gray-300" 
                            />
                        </div>
                    </div>
                </div>

                {/* Question / Comment */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                        Question / Comment
                    </label>
                    <textarea 
                        rows={5}
                        placeholder="Enter your question or comment here"
                        className="w-full border border-gray-300 rounded-[3px] p-3 text-sm focus:outline-none focus:border-[#004b8d] transition-colors placeholder-gray-300 resize-y" 
                    ></textarea>
                </div>

                {/* Bottom Action Row */}
                <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                    {/* Fake Recaptcha */}
                    <div className="w-full md:w-[300px] h-[74px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] flex items-center justify-between px-3 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 border-2 border-[#c1c1c1] rounded-[2px] bg-white hover:border-gray-400 cursor-pointer"></div>
                            <span className="text-sm font-normal text-black/80">I'm not a robot</span>
                        </div>
                        <div className="flex flex-col items-center">
                             <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8 h-8 opacity-70" alt="captcha"/>
                             <div className="text-[10px] text-gray-500 mt-1 text-center leading-tight">reCAPTCHA<br/>Privacy - Terms</div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full md:w-auto bg-[#8cc63f] hover:bg-[#7db536] text-white font-bold text-sm uppercase px-12 py-4 rounded-[3px] shadow-sm transition-colors tracking-wide">
                        Submit
                    </button>
                </div>
            </form>
        </div>
      </section>

    </div>
  );
};

export default Contact;