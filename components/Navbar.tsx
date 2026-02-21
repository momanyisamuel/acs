import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Smartphone, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'ICS', path: '/about' },
  { label: 'SERVICES', path: '/programs' },
  { label: 'CONTACT US', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full font-sans shadow-sm relative z-50 bg-white">
      
      {/* Desktop Layout: Side-by-Side */}
      <div className="flex flex-col lg:flex-row items-stretch">
        
        {/* LEFT COLUMN: Logo Area 
            Fixed width on desktop, full width on mobile.
            This container stretches to match the height of the right column.
        */}
        <div className="lg:w-[340px] flex-shrink-0 bg-white border-r border-gray-200 flex flex-col justify-center items-center p-6 relative z-20">
            <Link to="/" className="flex flex-col items-center group">
              {/* Logo Image Placeholder */}
              <div className="relative h-28 w-28 md:h-32 md:w-32 flex items-center justify-center mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/2942/2942544.png" alt="ICS Logo" className="w-full h-full object-contain" />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col items-center text-center">
                 <span className="text-[#004b8d] font-extrabold text-[11px] uppercase tracking-[0.2em] leading-tight mb-1">
                   Inspiring Community<br/>Supports
                 </span>
                 <div className="bg-[#004b8d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm mb-1">I C S</div>
                 <span className="font-serif italic text-[#004b8d] text-xl md:text-2xl mt-1">Enhancing Lives</span>
              </div>
            </Link>

             {/* Mobile Toggle (Absolute) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden absolute top-6 right-6 text-gray-500 hover:text-[#004b8d] p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
        </div>

        {/* RIGHT COLUMN: Info Stack */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* ROW 1: Blue Info Bar */}
          <div className="bg-[#004b8d] text-white h-[50px] px-16 flex justify-between items-center text-[13px] font-medium w-full">
            <div className="flex items-center gap-3 group cursor-pointer">
              <span>Service Areas Covered</span>
              <div className="bg-[#e31837] h-[22px] w-[34px] flex items-center justify-center group-hover:bg-[#c41530] transition-colors shadow-sm">
                <ArrowRight className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block text-right ml-4 tracking-tight opacity-95">
              324 Bound Brook Rd., Middlesex, NJ 08846
            </div>
          </div>

          {/* ROW 2: Red Action Bar */}
          <div className="bg-[#e31837] text-white h-full  px-16 flex items-center justify-between w-full">
             {/* Phone Section */}
             <div className="flex items-center gap-5">
               <Smartphone className="h-10 w-10 text-white/90" strokeWidth={1.5} />
               <div className="flex flex-col">
                 <div className="text-[13px] font-medium opacity-95 leading-tight">Have a Question? Call Us Today!</div>
                 <div className="text-[17px] font-bold leading-tight mt-0.5">
                   Cell: 908-627-1109 <span className="font-normal text-[15px] opacity-80 mx-1">or</span> 908-405-1979
                 </div>
               </div>
             </div>

             {/* Socials Section */}
             <div className="hidden md:flex items-center gap-4">
               <div className="text-right leading-tight">
                 <div className="text-[13px] font-medium">Like, Share</div>
                 <div className="text-[13px] font-medium">or Comment!</div>
               </div>
               <div className="flex gap-2">
                 <a href="#" className="bg-white h-9 w-9 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                   <Facebook className="h-5 w-5 text-[#3b5998] fill-current" />
                 </a>
                 <a href="#" className="bg-white h-9 w-9 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                   <Twitter className="h-4 w-4 text-black fill-current" />
                 </a>
               </div>
             </div>
          </div>

          

        </div>
      </div>
      <div className="border-t border-gray-100 flex px-32">
      {/* ROW 3: Navigation Bar */}
          <nav className="bg-white flex-1 flex flex-col justify-end hidden lg:flex">
             <div className="flex items-stretch h-full w-full">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex-1 flex items-center justify-center text-[13px] font-bold tracking-wider px-2 py-5 border-r border-gray-100 hover:text-[#e31837] hover:bg-gray-50 transition-all relative group h-[60px]`}
                >
                  {/* Active Indicator Line - Positioned absolutely at bottom */}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#e31837]"></div>
                  )}
                  
                  <span className={`${isActive(item.path) ? 'text-[#004b8d]' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                </Link>
              ))}
              {/* Empty spacer to fill remaining width if needed, though flex-1 on links handles it usually. 
                  If we wanted links to not stretch, we'd remove flex-1 from links and add a spacer here. 
                  The reference shows they seem to fill the space. */}
             </div>
          </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 w-full shadow-xl animate-fade-in-down">
          <div className="flex flex-col divide-y divide-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-wider ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-[#004b8d] border-l-4 border-[#e31837]'
                    : 'text-gray-600 hover:text-[#004b8d] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;