import { SEO } from '../SEO';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, BookOpen, Users, Award, ChevronDown, ArrowRight, Building2 } from 'lucide-react';

// --- DATA: ASCE & ASCE PEC INFO ---
const coreValues = [
  {
    id: 1,
    title: "Global Leadership",
    icon: Globe,
    description: "Founded in 1852, ASCE is the nation's oldest engineering society. We represent more than 150,000 members of the civil engineering profession in 177 countries.",
    stats: "150k+ Members"
  },
  {
    id: 2,
    title: "Local Excellence",
    icon: Building2,
    description: "The PEC Student Chapter, established in 2014, bridges the gap between academic theory and industry practice through workshops, site visits, and competitions.",
    stats: "Est. 2014"
  },
  {
    id: 3,
    title: "Student Growth",
    icon: Users,
    description: "We empower the next generation of civil engineers with technical skills, professional networking, and leadership opportunities.",
    stats: "500+ Alumni"
  }
];

const highlights = [
  { title: "Best Student Chapter", desc: "Awarded for excellence in 2019 & 2022", icon: Award },
  { title: "Technical Innovation", desc: "Pioneers of the Concrete Canoe competition in North India", icon: BookOpen },
  { title: "Community Impact", desc: "Regular road safety drives and sustainability workshops", icon: Users },
];

export function ProjectsPage() {
  const { scrollY } = useScroll();
  const [activeTab, setActiveTab] = useState<'global' | 'local'>('local');

  // PARALLAX ANIMATIONS
  const heroTextY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // "Pillar" Animations for the Core Values Section
  const pillarY = useTransform(scrollY, [300, 800], [100, 0]);
  const pillarScale = useTransform(scrollY, [300, 800], [0.9, 1]);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* --- BACKGROUND: DYNAMIC BLUEPRINT GRID --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00539B 1px, transparent 1px),
            linear-gradient(to bottom, #00539B 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00539B]/10 to-transparent"
          animate={{ y: [0, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* --- HERO SECTION: THE MONOLITH --- */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="text-center z-10 max-w-4xl"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-[#00539B]/30 text-[#00539B] font-mono text-sm tracking-widest bg-white/50 backdrop-blur-sm">
              EST. 1852 — GLOBAL • EST. 2014 — PEC
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#00539B] mb-6 tracking-tight leading-none">
            WE BUILD <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00539B] to-[#00A3E0]">
              CIVILIZATIONS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            From the oldest engineering society in the US to the most vibrant student chapter in Punjab. This is our story.
          </p>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#00539B]/40"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE FOUNDATION (Core Values) --- */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            style={{ y: pillarY, scale: pillarScale }}
            className="grid md:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group"
              >
                {/* Decorative background number */}
                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 select-none">
                  0{value.id}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00539B] transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-[#00539B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[#00A3E0] font-bold">{value.stats}</span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#00539B] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: THE DUALITY (Global vs Local Toggle) --- */}
      <section className="py-20 px-6 bg-[#00539B] text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-center mb-16">
            <div className="bg-white/10 p-1 rounded-full backdrop-blur-md inline-flex">
              <button
                onClick={() => setActiveTab('local')}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'local' ? 'bg-white text-[#00539B] shadow-lg' : 'text-white/70 hover:text-white'
                }`}
              >
                ASCE PEC Chapter
              </button>
              <button
                onClick={() => setActiveTab('global')}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'global' ? 'bg-white text-[#00539B] shadow-lg' : 'text-white/70 hover:text-white'
                }`}
              >
                ASCE Global
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {activeTab === 'local' ? "Building Leaders at PEC" : "A Global Engineering Community"}
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                {activeTab === 'local' 
                  ? "At Punjab Engineering College, we don't just study civil engineering; we live it. From constructing concrete canoes to analyzing smart city layouts, our members gain hands-on experience that textbooks can't provide."
                  : "The American Society of Civil Engineers represents more than 150,000 members of the civil engineering profession in 177 countries. Founded in 1852, ASCE is the nation's oldest engineering society."
                }
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <item.icon className="w-6 h-6 text-[#00A3E0]" />
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-blue-100/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={`${activeTab}-img`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20"
            >
               {/* Placeholder Images - Replace src with actual photos */}
               <img 
                src={activeTab === 'local' 
                  ? "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000" // PEC Campus/Event Photo
                  : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" // Global Skyscraper/Engineering
                } 
                alt="About Image" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00539B] to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-6xl font-black text-white/20">
                  {activeTab === 'local' ? "2014" : "1852"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CALL TO ACTION --- */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#00539B] mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Join a legacy of excellence. Be part of the ASCE PEC Student Chapter today.
          </p>
          <button className="bg-[#00539B] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#003d73] hover:scale-105 transition-all duration-300">
            Become a Member
          </button>
        </motion.div>
      </section>

    </div>
  );
}