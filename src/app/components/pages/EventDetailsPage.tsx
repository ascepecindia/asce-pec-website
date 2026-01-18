import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Share2 } from 'lucide-react';
import { eventHistory } from '../../data/eventHistory';

interface Props {
  eventId: string;
  onNavigate: (page: string) => void;
}

export function EventDetailsPage({ eventId, onNavigate }: Props) {
  const allEvents = Object.values(eventHistory).flat();
  const event = allEvents.find((e) => e.id === eventId);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00A3E0] selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </motion.div>

        {/* Floating Title */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
          <motion.button 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => onNavigate('events')}
            className="flex items-center gap-2 text-[#00A3E0] mb-6 hover:underline uppercase tracking-widest text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Timeline
          </motion.button>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-6 leading-tight max-w-4xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {event.title}
          </motion.h1>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 text-lg md:text-xl font-light text-gray-300"
          >
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-[#00A3E0]" /> {event.date}</span>
            <span className="bg-[#00A3E0]/20 text-[#00A3E0] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide border border-[#00A3E0]/30">
              {event.category}
            </span>
          </motion.div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_300px] gap-16">
        
        {/* Left: Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#00A3E0]">Event Overview</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light border-l-4 border-[#00A3E0] pl-6 mb-12">
            {event.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
             {/* --- THIS BUTTON TRIGGERS THE VIRAL PAGE --- */}
             <button 
               onClick={() => onNavigate(`events/${event.id}/gallery`)}
               className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00A3E0] hover:text-white transition-all flex items-center gap-3 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
             >
               Access Full Report <ExternalLink className="w-5 h-5" />
             </button>
             
             <button className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-all">
               <Share2 className="w-6 h-6" />
             </button>
          </div>
        </motion.div>

        {/* Right: Info Box */}
        <div className="space-y-8">
           <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Organized By</h3>
              <p className="text-xl font-bold">ASCE PEC Chapter</p>
           </div>
           <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Venue</h3>
              <p className="text-xl font-bold">Punjab Engineering College</p>
           </div>
        </div>
      </div>
    </div>
  );
}