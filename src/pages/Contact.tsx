import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter mb-12">Contact</h1>
          <p className="text-2xl md:text-3xl font-light text-white/60 leading-tight border-l-2 border-nrg-green pl-8">
            Ready to get energized? Connect with Serena to discuss how WebAgency2000 can transform your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif italic tracking-tighter mb-12">Get in Touch</h2>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                <input type="text" className="w-full bg-nrg-gray border border-white/10 p-4 focus:border-nrg-green outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address</label>
                <input type="email" className="w-full bg-nrg-gray border border-white/10 p-4 focus:border-nrg-green outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={6} className="w-full bg-nrg-gray border border-white/10 p-4 focus:border-nrg-green outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-nrg-green text-black py-6 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-4">
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-nrg-green text-xs font-black uppercase tracking-widest mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:serena@webagency2000.com" className="flex items-center gap-4 text-2xl font-serif italic hover:text-nrg-green transition-colors">
                    <Mail size={24} className="text-nrg-green" /> serena@webagency2000.com
                  </a>
                  <a href="tel:+39021234567" className="flex items-center gap-4 text-2xl font-serif italic hover:text-nrg-green transition-colors">
                    <Phone size={24} className="text-nrg-green" /> +39 02 123 4567
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-nrg-green text-xs font-black uppercase tracking-widest mb-6">Our Hubs</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-nrg-green mt-1" />
                    <div>
                      <p className="font-serif italic text-xl">Milan</p>
                      <p className="text-white/40 text-sm">Via Tortona 35, 20144 Milano, Italy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-nrg-green mt-1" />
                    <div>
                      <p className="font-serif italic text-xl">London</p>
                      <p className="text-white/40 text-sm">Shoreditch High St, London E1 6JE, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex gap-8">
              <a href="https://www.instagram.com/nena.snena99/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-nrg-green transition-colors flex items-center gap-2 uppercase text-[10px] font-black tracking-widest">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://www.linkedin.com/in/serena-franceri-9a53411b7/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-nrg-green transition-colors flex items-center gap-2 uppercase text-[10px] font-black tracking-widest">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
