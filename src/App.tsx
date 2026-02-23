/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail, ArrowRight, ExternalLink, Zap, Monitor, Code, Camera, Globe, Users, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: "CYBER-PUNK RETAIL",
    category: "E-COMMERCE / UI",
    description: "Next-gen shopping experience with real-time 3D product previews.",
    image: "https://picsum.photos/seed/wa1/800/600",
  },
  {
    title: "NEON LOGISTICS",
    category: "DASHBOARD / IT",
    description: "Complex data visualization for global supply chain management.",
    image: "https://picsum.photos/seed/wa2/800/600",
  },
  {
    title: "VIRTUAL ATELIER",
    category: "360˚ / VR",
    description: "Immersive digital showroom for luxury fashion brands.",
    image: "https://picsum.photos/seed/wa3/800/600",
  },
];

const services = [
  { icon: <Globe size={24} />, title: "WEB DESIGN", desc: "Cutting-edge interfaces that convert visitors into customers." },
  { icon: <Code size={24} />, title: "IT SOLUTIONS", desc: "Robust backend systems and scalable cloud infrastructure." },
  { icon: <Zap size={24} />, title: "DIGITAL ART", desc: "Bespoke visual content crafted by our lead artist Serena." },
  { icon: <MessageSquare size={24} />, title: "STRATEGY", desc: "Data-driven marketing and sales growth strategies." },
];

export default function App() {
  return (
    <div className="min-h-screen bg-nrg-black text-white selection:bg-nrg-green selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-nrg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nrg-green flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">W</span>
          </div>
          <span className="font-serif italic tracking-tighter text-xl">WebAgency2000</span>
        </div>
        <div className="space-x-8 text-[10px] font-bold uppercase tracking-[0.3em] hidden md:flex">
          <a href="#about" className="hover:text-nrg-green transition-colors">Agency</a>
          <a href="#services" className="hover:text-nrg-green transition-colors">Services</a>
          <a href="#projects" className="hover:text-nrg-green transition-colors">Work</a>
          <a href="#contact" className="hover:text-nrg-green transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-nrg-gradient opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-nrg-green text-black text-[10px] font-black uppercase tracking-widest mb-6">
              Future-proof Digital Solutions
            </div>
            <h1 className="text-[10vw] md:text-[7vw] font-serif italic leading-[0.9] tracking-tighter mb-8">
              Serena Represents<br />
              <span className="text-nrg-green text-glow">webagency2000</span><br />
              Digital Excellence.
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="text-lg md:text-xl font-light max-w-xl text-white/60 border-l-2 border-nrg-green pl-6">
                Bridging the gap between visionary digital art and high-performance IT solutions. Serena is your direct link to the future of web production.
              </p>
              <div className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-nrg-green text-black px-8 py-4 text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Our Work
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Contact Sales
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Element */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-[1px] border-nrg-green rounded-full flex items-center justify-center"
          >
            <div className="w-[80%] h-[80%] border-[1px] border-dashed border-nrg-green rounded-full" />
            <div className="w-[60%] h-[60%] border-[1px] border-nrg-green rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Meet the Team / Serena Section */}
      <section id="about" className="py-32 bg-nrg-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
              >
                <img 
                  src="https://picsum.photos/seed/serena_agency/800/1000" 
                  alt="Serena - Sales Representative & Digital Artist" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 bg-nrg-green p-8 hidden md:block">
                <p className="text-black font-black text-2xl uppercase leading-none">Serena</p>
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mt-2">Sales Rep & Artist</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-5xl font-serif italic tracking-tighter mb-8 leading-tight">
                Human Creativity<br />
                <span className="text-nrg-green">Technical Precision</span>
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  At webagency2000, we don't just build websites; we create digital legacies. Our team is led by visionaries who understand the intersection of art and technology.
                </p>
                <p>
                  <span className="text-white font-bold">Serena represents webagency2000</span> as our lead Digital Artist and Sales Representative. She is the face of our innovation, bridging the gap between your wildest creative dreams and our technical implementation.
                </p>
                <p>
                  When you work with Serena, you gain access to the full power of the webagency2000 ecosystem—ensuring every project is both a masterpiece and a business success.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-black text-nrg-green">250+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-nrg-green">15+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Global Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-serif italic tracking-tighter mb-4">Our Expertise</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">Full-stack digital production</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                className="p-12 border border-white/5 transition-all"
              >
                <div className="text-nrg-green mb-8">{service.icon}</div>
                <h3 className="text-xl font-serif italic tracking-tighter mb-4">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-32 bg-nrg-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-6xl font-serif italic tracking-tighter mb-4">Case Studies</h2>
              <div className="h-1 w-20 bg-nrg-green" />
            </div>
            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">The webagency2000 standard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                className="group relative overflow-hidden bg-nrg-black"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-nrg-black via-nrg-black/20 to-transparent">
                  <span className="text-nrg-green text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-serif italic tracking-tighter mb-4">{project.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                  <motion.div className="mt-6 flex items-center gap-2 text-nrg-green text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project <ArrowRight size={14} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-nrg-black py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif italic tracking-tighter mb-8 italic">Ready to<br /><span className="text-nrg-green">Level Up?</span></h2>
              <p className="text-white/40 max-w-md mb-12">
                Connect with Serena to discuss your next project and see how webagency2000 can transform your digital presence.
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
