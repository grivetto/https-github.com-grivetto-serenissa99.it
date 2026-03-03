import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, Camera, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Cyber-Punk Retail",
    category: "E-Commerce / UI",
    image: "https://picsum.photos/seed/wa1/800/600",
  },
  {
    title: "Neon Logistics",
    category: "Dashboard / IT",
    image: "https://picsum.photos/seed/wa2/800/600",
  },
];

export default function Home() {
  return (
    <>
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
                <Link to="/work">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-nrg-green text-black px-8 py-4 text-xs font-black uppercase tracking-widest transition-colors"
                  >
                    Our Work
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Contact Sales
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
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

      {/* Quick Services Grid */}
      <section className="py-32 bg-nrg-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: <Globe />, title: "Web Design" },
              { icon: <Code />, title: "IT Solutions" },
              { icon: <Zap />, title: "Digital Art" },
              { icon: <Camera />, title: "360˚/VR" }
            ].map((s, i) => (
              <div key={i} className="p-8 border border-white/5 flex items-center gap-4 group hover:border-nrg-green/30 transition-colors">
                <div className="text-nrg-green group-hover:scale-110 transition-transform">{s.icon}</div>
                <span className="font-serif italic text-lg">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-serif italic tracking-tighter">Featured Work</h2>
            <Link to="/work" className="text-nrg-green text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group relative aspect-video overflow-hidden bg-nrg-gray">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-all duration-700" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-nrg-green text-[10px] font-black uppercase tracking-widest mb-2">{p.category}</span>
                  <h3 className="text-3xl font-serif italic tracking-tighter">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
