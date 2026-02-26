import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full font-sans">
      {/* Orange Contact Bar */}
      <div className="bg-[#FC7801] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          
          {/* Brand/Logo Area */}
          <div className="flex flex-col items-center justify-center text-center">
             <div className="bg-white rounded-full p-2 h-24 w-24 flex items-center justify-center mb-3 shadow-lg">
                <img src="/logo.png" alt="Logo" className="w-16 h-16" />
             </div>
             <div className="font-serif italic text-xl tracking-wider">Enhancing Lives</div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-8 md:mr-10">
            <div className="hidden md:block border-2 border-white/30 p-5 rounded-full">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold uppercase mb-2 tracking-tight">Call Or Message</h3>
              <div className="text-base opacity-95 space-y-1">
                <p><span className="font-bold">Phone:</span> (732) 822-7353</p>
                <p><span className="font-bold ml-[54px]"></span> (732) 357-5702</p>
                <p className="mt-2"><a href="mailto:info@accessibilitycs.org" className="hover:underline"><span className="font-bold">info@accessibilitycs.org</span></a> - Community Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="bg-[#8C41D2] text-white py-8 border-t border-[#6B2FA8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">ACS</Link>
            <Link to="/programs" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link to="/resources" className="hover:text-gray-300 transition-colors">Resources</Link>
            <Link to="/careers" className="hover:text-gray-300 transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
          <div className="flex items-center gap-4 text-white/70 font-medium">
             <span>© Copyright 2023 - 2026</span>
             <span className="text-white/30">|</span>
             <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
             <span className="text-white/30">|</span>
             <span>Designed by Proweaver</span>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#039161] text-white p-3 rounded-full shadow-xl hover:bg-[#027a52] transition-colors border-2 border-white animate-bounce-slow">
          <Heart className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;