import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Play, ExternalLink, ArrowRight } from 'lucide-react';

// --- DATA ---
const socialStats = [
  { 
    id: 'insta', 
    icon: Instagram, 
    label: 'Instagram', 
    handle: '@asce.pec', 
    link: 'https://www.instagram.com/asce.pec/',
    color: 'from-pink-600 via-red-500 to-orange-500',
    followers: '2.1K+',
    subtext: 'Active Community'
  },
  { 
    id: 'linkedin', 
    icon: Linkedin, 
    label: 'LinkedIn', 
    handle: 'ASCE PEC Chapter', 
    link: 'https://www.linkedin.com/company/asce-pec/',
    color: 'from-blue-700 to-blue-900',
    followers: '1.5K+',
    subtext: 'Professional Network'
  },
  { 
    id: 'youtube', 
    icon: Youtube, 
    label: 'YouTube', 
    handle: 'ASCE PEC', 
    link: 'https://www.youtube.com/@ascepec',
    color: 'from-red-600 to-red-800',
    followers: '500+',
    subtext: 'Educational Archives'
  }
];

// --- SPONSOR LIST ---
const sponsors = [
  { name: "Tata Tiscon", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Tiscon_Logo.png" },
  { name: "UltraTech", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/UltraTech_Cement_Logo.svg/1200px-UltraTech_Cement_Logo.svg.png" },
  { name: "SBI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png" },
  { name: "Amul", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Amul_official_logo.svg/1200px-Amul_official_logo.svg.png" },
  { name: "British Council", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/British_Council_Logo.svg/2560px-British_Council_Logo.svg.png" },
  { name: "Unacademy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Unacademy_Logo.png/640px-Unacademy_Logo.png" },
  { name: "Hitbullseye", logo: "https://www.hitbullseye.com/app_images/hitbullseye-logo.png" },
  { name: "Abhibus", logo: "https://static.abhibus.com/assets/img/abhibus-logo.svg" },
  { name: "JK Cement", logo: "https://www.jkcement.com/wp-content/uploads/2023/06/JK-Cement-Logo.png" },
  { name: "Verka", logo: "https://verka.coop/wp-content/themes/verka/images/logo.png" },
  { name: "Career Launcher", logo: "https://www.careerlauncher.com/images/cl-logo.svg" },
  { name: "IMS", logo: "https://www.imsindia.com/wp-content/themes/ims/img/logo.png" },
  { name: "The Zirk", logo: "https://thezirk.biz/wp-content/uploads/2021/09/logo.png" },
  { name: "GMI Infra", logo: "https://www.gmiinfra.com/assets/img/logo.png" },
  { name: "City Woofer", logo: "https://www.citywoofer.com/images/logo.png" },
  { name: "Horizon Belmond", logo: "https://reconsultadvisory.com/wp-content/uploads/2023/05/Horizon-Belmond-Mohali-Logo.png" },
  { name: "Rakhra Associates", logo: "" }, 
  { name: "EVCA", logo: "" },
  { name: "CIZ Plus", logo: "" }
];

export function JoinPage() {
  return (
    <div className="min-h-screen pt-24 pb-0 bg-[#F5F7FA] overflow-x-hidden">
      <SEO title="Connect" description="Join the ASCE PEC network. Follow us on Instagram, LinkedIn and YouTube." />

      <div className="max-w-5xl mx-auto px-4 mb-24">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-[#00539B] mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            THE NETWORK
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-[#00539B]/60 font-light"
          >
            Stay synchronized with the Corps.
          </motion.p>
        </div>

        <div className="space-y-16">
          
          {/* --- VIRAL VIDEO PANEL --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-video md:aspect-[21/9] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
          >
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">TRENDING NOW</span>
                  <span className="text-white/60 text-sm font-mono">PEC CAMPUS • 2025</span>
                </div>
                <h3 className="text-white text-3xl md:text-5xl font-bold font-sans mb-4 leading-tight">
                  Engineering The Future: <br/> A Glimpse Inside ASCE
                </h3>
                <a 
                  href="https://youtu.be/D72AWmcV9Ng?si=pxQ_Lpz5igrqecUR" // Replace with your actual Reel URL
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#00A3E0] hover:text-white transition-all transform hover:scale-105"
                >
                  <Play className="w-5 h-5 fill-current" /> Watch Full Reel
                </a>
              </div>
            </div>
            
            {/* Background Image/Thumbnail */}
            <img 
              src="https://i.ytimg.com/vi/D72AWmcV9Ng/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBv_TtLU_d-DA2tkqc_jnDSMRSU-w" 
              alt="Viral Video Thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s]"
            />
          </motion.div>

          {/* --- SOCIAL COMMAND CENTER --- */}
          <div className="grid md:grid-cols-3 gap-6">
            {socialStats.map((social, idx) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-[#00539B]/10 flex flex-col items-center text-center gap-6 group hover:shadow-2xl transition-all relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white z-10 group-hover:bg-white group-hover:text-black transition-colors shadow-xl`}>
                  <social.icon className="w-10 h-10" />
                </div>
                
                <div className="z-10 group-hover:text-white transition-colors">
                  <h4 className="font-bold text-2xl mb-1">{social.label}</h4>
                  <p className="text-sm opacity-60 group-hover:opacity-80 font-mono">{social.handle}</p>
                </div>

                <div className="z-10 group-hover:text-white mt-auto">
                  <span className="block font-black text-4xl mb-1 tracking-tight">{social.followers}</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-90">{social.subtext}</span>
                </div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* --- EMAIL CTA --- */}
          <div className="text-center">
             <p className="text-[#00539B]/50 font-mono text-sm mb-4">OFFICIAL CORRESPONDENCE</p>
             <a href="mailto:asce.pec.india@gmail.com" className="text-2xl md:text-4xl font-bold text-[#00539B] hover:text-[#00A3E0] transition-colors flex items-center justify-center gap-3">
               asce.pec.india@gmail.com <ArrowRight className="w-8 h-8" />
             </a>
          </div>

        </div>
      </div>

      {/* --- SPONSORS TICKER SECTION --- */}
      <div className="bg-white border-y border-[#00539B]/10 py-16 overflow-hidden">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold tracking-[0.2em] text-[#00539B]/40 uppercase">Powered By Industry Leaders</h3>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* The Scrolling Marquee */}
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group shrink-0">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                  }}
                />
                <span className="hidden text-xl font-bold text-slate-400 font-sans">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}