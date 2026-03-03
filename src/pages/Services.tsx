import React from 'react';
import { Globe, Code, Zap, MessageSquare, Camera, Monitor, Cpu, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const detailedServices = [
  { 
    icon: <Globe size={40} />, 
    title: "Web Design", 
    desc: "Cutting-edge interfaces that convert visitors into customers. We focus on high-performance, responsive designs that tell your brand's story.",
    features: ["UI/UX Design", "Responsive Layouts", "Interactive Prototypes", "Visual Storytelling"]
  },
  { 
    icon: <Code size={40} />, 
    title: "IT Solutions", 
    desc: "Robust backend systems and scalable cloud infrastructure. Our technical team builds the engine that drives your digital presence.",
    features: ["Custom CMS", "API Integration", "Cloud Architecture", "Performance Optimization"]
  },
  { 
    icon: <Zap size={40} />, 
    title: "Digital Art", 
    desc: "Bespoke visual content crafted by our lead artist Serena. From custom illustrations to complex motion graphics.",
    features: ["Custom Illustration", "Motion Graphics", "3D Modeling", "Brand Visuals"]
  },
  { 
    icon: <MessageSquare size={40} />, 
    title: "Strategy", 
    desc: "Data-driven marketing and sales growth strategies. We help you navigate the digital landscape to find your audience.",
    features: ["Market Analysis", "SEO/SEM", "Content Strategy", "Conversion Tracking"]
  },
  { 
    icon: <Camera size={40} />, 
    title: "360˚/VR", 
    desc: "Award-winning expert in immersive tech. We create virtual experiences that transport your users to another world.",
    features: ["Virtual Tours", "VR Experiences", "360 Video", "Immersive Training"]
  },
  { 
    icon: <Cpu size={40} />, 
    title: "App Development", 
    desc: "Native and cross-platform mobile applications built for speed and reliability.",
    features: ["iOS/Android", "React Native", "App Store Strategy", "User Maintenance"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter mb-12">Services</h1>
          <p className="text-2xl md:text-3xl font-light text-white/60 leading-tight border-l-2 border-nrg-green pl-8">
            Full-stack digital production. We provide the energy and the expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-nrg-gray border border-white/5 hover:border-nrg-green/30 transition-all group"
            >
              <div className="text-nrg-green mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-3xl font-serif italic tracking-tighter mb-6">{service.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map((f, j) => (
                  <li key={j} className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <div className="w-1 h-1 bg-nrg-green rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-nrg-green text-black text-center">
          <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter mb-8">Need a Custom Solution?</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">Our team thrives on complex challenges. If you have a unique project, we have the energy to build it.</p>
          <button className="bg-black text-white px-12 py-6 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
