import { SEO } from '../SEO';
import { Hero3D } from '../Hero3D'; // Check your import paths (might be ../Hero3D or ./components/Hero3D)
import { ImpactTicker } from '../ImpactTicker';
import { FeatureDeck } from '../FeatureDeck';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, Sparkles, ExternalLink } from 'lucide-react';
import React, { useRef } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* 1. HERO SECTION */}
      <Hero3D />
      
      {/* 2. TICKER */}
      <ImpactTicker />

      {/* 3. NEW: INTERACTIVE FLYER SHOWCASE */}
      <FlyerShowcase />

      {/* 4. FEATURE DECK (Preserved) */}
      <FeatureDeck onNavigate={onNavigate} />
    </div>
  );
}

// --- SUB-COMPONENT: 3D FLYER CARD ---
function FlyerShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#00539B40_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#00A3E0] text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              INCOMING TRANSMISSION
            </span>
            <span className="text-[#00A3E0] font-mono text-xs tracking-widest">
              SECURE CHANNEL ESTABLISHED
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            SYMPOSIUM <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-white">
              2026
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed border-l-4 border-[#00539B] pl-6">
            The flagship convergence of civil engineering intellect. Co-hosted by 
            <span className="text-white font-bold"> PEC Chandigarh</span> & 
            <span className="text-white font-bold"> UPES Dehradun</span>.
            <br />
            <span className="italic text-sm mt-2 block opacity-70">Prepare for the ultimate structural challenge.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#00A3E0] hover:text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <ExternalLink className="w-5 h-5" href='https://docs.google.com/forms/d/e/1FAIpQLSc4w3D1GjEo42Qvu36ttg7l81QPmVt6nHBi0PXK1ys1lA1UiQ/viewform?usp=header' /> Register Now
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-all">
              <Download className="w-5 h-5" href='https://drive.google.com/file/d/1_Jedn0c4YmL98c0XqWfswGNiVX1Ghu01/view?usp=sharing' /> Download Flyer
            </button>
          </div>
        </motion.div>

        {/* RIGHT: 3D INTERACTIVE CARD */}
        <div className="perspective-1000 flex justify-center">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[350px] md:w-[450px] aspect-[3/4] rounded-xl cursor-pointer group"
          >
            {/* The Image Itself */}
            <div 
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-4 border-[#00539B]/30 bg-[#111]"
              style={{ transform: "translateZ(50px)" }}
            >
              {/* REPLACE '/flyer.jpg' WITH YOUR ACTUAL FLYER IMAGE PATH */}
              <img 
                src="/flyer.png" 
                alt="ASCE Symposium Flyer 2026" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Glossy Glare Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                style={{ transform: "translateZ(60px)" }}
              />
            </div>

            {/* Floating Elements (Depth Effect) */}
            <motion.div 
              style={{ transform: "translateZ(100px)" }}
              className="absolute -top-6 -right-6 bg-[#00A3E0] text-white p-4 rounded-xl shadow-xl font-bold font-mono text-center border-2 border-black"
            >
              MAR<br/>25-28
            </motion.div>

            <motion.div 
              style={{ transform: "translateZ(80px)" }}
              className="absolute -bottom-6 -left-6 bg-white text-black px-6 py-3 rounded-xl shadow-xl font-bold flex items-center gap-2 border-2 border-[#00539B]"
            >
              <Sparkles className="w-5 h-5 text-[#00539B]" /> OFFICIAL
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}