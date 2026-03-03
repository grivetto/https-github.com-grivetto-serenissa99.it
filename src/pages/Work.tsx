import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: "Cyber-Punk Retail",
    category: "E-Commerce / UI",
    description: "Next-gen shopping experience with real-time 3D product previews.",
    image: "https://picsum.photos/seed/wa1/800/600",
  },
  {
    title: "Neon Logistics",
    category: "Dashboard / IT",
    description: "Complex data visualization for global supply chain management.",
    image: "https://picsum.photos/seed/wa2/800/600",
  },
  {
    title: "Virtual Atelier",
    category: "360˚ / VR",
    description: "Immersive digital showroom for luxury fashion brands.",
    image: "https://picsum.photos/seed/wa3/800/600",
  },
  {
    title: "Quantum Banking",
    category: "Fintech / App",
    description: "Secure and ultra-fast mobile banking for the next generation.",
    image: "https://picsum.photos/seed/wa4/800/600",
  },
  {
    title: "Solaris Energy",
    category: "Branding / Web",
    description: "Visual identity and platform for a renewable energy startup.",
    image: "https://picsum.photos/seed/wa5/800/600",
  },
  {
    title: "Aether Music",
    category: "Streaming / UI",
    description: "Immersive audio streaming platform with spatial sound focus.",
    image: "https://picsum.photos/seed/wa6/800/600",
  },
];

export default function Work() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter mb-12">Our Work</h1>
          <p className="text-2xl md:text-3xl font-light text-white/60 leading-tight border-l-2 border-nrg-green pl-8">
            A showcase of creative and energetic productions. Each project is a testament to our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {allProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-nrg-gray aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-nrg-black via-nrg-black/40 to-transparent">
                <span className="text-nrg-green text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-4xl font-serif italic tracking-tighter mb-4">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-md">
                  {project.description}
                </p>
                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="flex items-center gap-2 text-nrg-green text-[10px] font-black uppercase tracking-widest">
                    View Case Study <ArrowRight size={14} />
                  </button>
                  <button className="flex items-center gap-2 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
                    Live Site <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold mb-8 italic">And many more energetic productions...</p>
          <button className="border border-white/20 text-white px-12 py-6 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
