import { SEO } from '../SEO';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Instagram, Linkedin, Youtube, Play, ExternalLink, Globe } from 'lucide-react';

// --- DATA ---
const socialStats = [
  { 
    id: 'insta', 
    icon: Instagram, 
    label: 'Instagram', 
    handle: '@asce.pec', 
    link: 'https://instagram.com/asce.pec',
    color: 'from-pink-500 to-orange-500',
    followers: '2.5K+' 
  },
  { 
    id: 'linkedin', 
    icon: Linkedin, 
    label: 'LinkedIn', 
    handle: 'ASCE PEC Chapter', 
    link: 'https://linkedin.com',
    color: 'from-blue-600 to-blue-800',
    followers: '1.2K+' 
  },
  { 
    id: 'youtube', 
    icon: Youtube, 
    label: 'YouTube', 
    handle: 'ASCE PEC Media', 
    link: 'https://youtube.com',
    color: 'from-red-600 to-red-800',
    followers: '500+' 
  }
];

const sponsors = [
  "Larsen & Toubro", "DLF", "Ambuja Cement", "Hitbullseye", 
  "UltraTech", "Jindal Steel", "Tata Projects", "HCC", "Gammon India"
];

export function JoinPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 3 seconds for demo
    setTimeout(() => { setIsSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }) }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-0 bg-[#F5F7FA] overflow-x-hidden">
      <SEO title="Contact & Connect" description="Get in touch with ASCE PEC. Connect via social media or send us a message." />

      <div className="max-w-7xl mx-auto px-4 mb-20">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#00539B] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            ESTABLISH COMMS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#00539B]/70"
          >
            Connect with the Corps. Expand the Network.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* --- LEFT COL: VIRAL VIDEO & SOCIALS --- */}
          <div className="space-y-8">
            
            {/* Viral Video Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-black rounded-3xl overflow-hidden shadow-2xl relative group aspect-video border-4 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col justify-end p-6">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2 animate-pulse">LIVE FEED</span>
                <h3 className="text-white text-2xl font-bold font-sans">ASCE PEC: Year in Review</h3>
                <p className="text-white/80 text-sm">Experience the engineering marvels and campus energy.</p>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Placeholder Image (Replace with actual Thumbnail or Video) */}
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000" 
                alt="Viral Video Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Social Command Center */}
            <div className="grid gap-4">
              {socialStats.map((social, idx) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="bg-white p-4 rounded-2xl shadow-md border border-[#00539B]/10 flex items-center gap-4 group hover:shadow-lg transition-all relative overflow-hidden"
                >
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white z-10 group-hover:scale-110 transition-transform`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 z-10 group-hover:text-white transition-colors">
                    <h4 className="font-bold text-lg leading-none">{social.label}</h4>
                    <p className="text-sm opacity-70 font-mono">{social.handle}</p>
                  </div>

                  <div className="text-right z-10 group-hover:text-white">
                    <span className="block font-bold text-xl">{social.followers}</span>
                    <span className="text-xs opacity-70">Subscribers</span>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-[#00539B]/30 z-10 group-hover:text-white/50" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* --- RIGHT COL: CONTACT FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-[#00539B]/10 relative overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#00539B] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Direct Line</h2>
              <p className="text-[#00539B]/60">Have a query? Drop us a message directly.</p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="h-64 flex flex-col items-center justify-center text-center bg-green-50 rounded-2xl border border-green-100"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-200">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Message Sent!</h3>
                <p className="text-green-600">We will respond within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#00539B]">Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border-2 border-transparent focus:border-[#00A3E0] focus:bg-white outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#00539B]">Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border-2 border-transparent focus:border-[#00A3E0] focus:bg-white outline-none transition-all"
                      placeholder="john@pec.edu.in"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#00539B]">Subject</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border-2 border-transparent focus:border-[#00A3E0] focus:bg-white outline-none transition-all text-[#00539B]"
                    value={formState.subject}
                    onChange={e => setFormState({...formState, subject: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>Sponsorship Opportunity</option>
                    <option>Event Registration Issue</option>
                    <option>Membership Query</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#00539B]">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F7FA] border-2 border-transparent focus:border-[#00A3E0] focus:bg-white outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#00539B] text-white font-bold rounded-xl hover:bg-[#003d73] transition-colors shadow-lg shadow-[#00539B]/30 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
                  Transmit Message
                </button>
              </form>
            )}

            {/* Quick Contact Info */}
            <div className="mt-8 pt-8 border-t border-[#00539B]/10 flex flex-col md:flex-row gap-6 justify-between text-sm text-[#00539B]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A3E0]" />
                <span>PEC Sector 12, Chandigarh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A3E0]" />
                <span>asce.pec.india@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- SPONSORS TICKER SECTION --- */}
      <div className="bg-white border-y border-[#00539B]/10 py-12 overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold tracking-widest text-[#00539B]/40 uppercase">Our Past Alliances & Sponsors</h3>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          {/* Gradients to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* The Scrolling Marquee */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Repeat list twice for seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="mx-12 flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                {/* Logo Placeholder (Circle) */}
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-slate-400" />
                </div>
                {/* Logo Text */}
                <span className="text-2xl font-bold text-slate-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Custom Animation Style for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}