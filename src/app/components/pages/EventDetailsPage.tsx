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

  if (!event) return <div className="p-20 text-center">Event not found</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00A3E0] selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
          <button 
            onClick={() => onNavigate('events')}
            className="flex items-center gap-2 text-[#00A3E0] mb-6 hover:underline uppercase tracking-widest text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Timeline
          </button>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight max-w-4xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-lg md:text-xl font-light text-gray-300">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-[#00A3E0]" /> {event.date}</span>
            <span className="bg-[#00A3E0]/20 text-[#00A3E0] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide border border-[#00A3E0]/30">
              {event.category}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_300px] gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#00A3E0]">Event Overview</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light border-l-4 border-[#00A3E0] pl-6 mb-12">
            {event.description}
          </p>
          
          <div className="flex gap-4">
             <button 
               onClick={() => onNavigate(`events/${event.id}/gallery`)}
               className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00A3E0] hover:text-white transition-all flex items-center gap-3 transform hover:scale-105"
             >
               Access Full Report <ExternalLink className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}