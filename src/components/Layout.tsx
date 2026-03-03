import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-nrg-black text-white selection:bg-nrg-green selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-nrg-black/80 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nrg-green flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">W</span>
          </div>
          <span className="font-serif italic tracking-tighter text-xl">WebAgency2000</span>
        </Link>
        <div className="space-x-8 text-[10px] font-bold uppercase tracking-[0.3em] hidden md:flex">
          <Link to="/agency" className={`hover:text-nrg-green transition-colors ${location.pathname === '/agency' ? 'text-nrg-green' : ''}`}>Agency</Link>
          <Link to="/services" className={`hover:text-nrg-green transition-colors ${location.pathname === '/services' ? 'text-nrg-green' : ''}`}>Services</Link>
          <Link to="/work" className={`hover:text-nrg-green transition-colors ${location.pathname === '/work' ? 'text-nrg-green' : ''}`}>Work</Link>
          <Link to="/contact" className={`hover:text-nrg-green transition-colors ${location.pathname === '/contact' ? 'text-nrg-green' : ''}`}>Contact</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {/* Contact Footer */}
      <footer className="bg-nrg-black py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif italic tracking-tighter mb-8">Ready to<br /><span className="text-nrg-green">Level Up?</span></h2>
              <p className="text-white/40 max-w-md mb-12">
                Connect with Serena to discuss your next project and see how WebAgency2000 can transform your digital presence.
              </p>
              <div className="space-y-6">
                <a href="mailto:serena@webagency2000.com" className="text-2xl md:text-3xl font-serif italic hover:text-nrg-green transition-colors flex items-center gap-4">
                  sales@webagency2000.com <ArrowRight className="text-nrg-green" />
                </a>
                <p className="text-white/20 text-xs uppercase tracking-widest font-bold">Milan / London / New York</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-end items-start md:items-end">
              <div className="flex gap-8 mb-12">
                <a href="https://www.instagram.com/nena.snena99/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-nrg-green transition-colors uppercase text-[10px] font-black tracking-widest">Instagram</a>
                <a href="https://www.linkedin.com/in/serena-franceri-9a53411b7/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-nrg-green transition-colors uppercase text-[10px] font-black tracking-widest">LinkedIn</a>
              </div>
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
                &copy; {new Date().getFullYear()} WebAgency2000 / All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
