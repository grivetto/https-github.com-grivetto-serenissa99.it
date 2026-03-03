import React from 'react';
import { motion } from 'motion/react';

export default function Agency() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter mb-12">The Agency</h1>
          <p className="text-2xl md:text-3xl font-light text-white/60 leading-tight border-l-2 border-nrg-green pl-8">
            WebAgency2000 is a powerhouse of creative and technical talent. We don't just build websites; we create digital legacies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
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
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                Our team is led by visionaries who understand the intersection of art and technology. We believe that the best digital solutions are born from a perfect balance between aesthetic beauty and functional excellence.
              </p>
              <p>
                <span className="text-white font-bold">Serena represents WebAgency2000</span> as our lead Digital Artist and Sales Representative. She is the face of our innovation, bridging the gap between your wildest creative dreams and our technical implementation.
              </p>
              <p>
                When you work with Serena, you gain access to the full power of the WebAgency2000 ecosystem—ensuring every project is both a masterpiece and a business success.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-nrg-green">250+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-black text-nrg-green">15+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Global Awards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-white/5">
          <div>
            <h3 className="text-nrg-green text-xs font-black uppercase tracking-widest mb-4">Our Vision</h3>
            <p className="text-white/60">To be the global benchmark for digital experiences that combine artistic soul with industrial-grade technology.</p>
          </div>
          <div>
            <h3 className="text-nrg-green text-xs font-black uppercase tracking-widest mb-4">Our Mission</h3>
            <p className="text-white/60">Empowering brands with energetic digital productions that push the boundaries of what's possible online.</p>
          </div>
          <div>
            <h3 className="text-nrg-green text-xs font-black uppercase tracking-widest mb-4">Our Values</h3>
            <p className="text-white/60">Transparency, energy, technical rigor, and an uncompromising commitment to visual excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
