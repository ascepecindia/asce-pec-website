import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Download, Maximize2 } from 'lucide-react';
import { eventHistory } from '../../data/eventHistory';

interface Props {
  eventId: string;
  onNavigate: (page: string) => void;
}

export function EventGalleryPage({ eventId, onNavigate }: Props) {
  const allEvents = Object.values(eventHistory).flat();
  const event = allEvents.find((e) => e.id === eventId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!event || !event.gallery || event.gallery.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
        <h1 className="text-2xl font-mono text-red-500 mb-4">ERROR 404: EVIDENCE MISSING</h1>
        <button onClick={() => onNavigate(`events/${eventId}`)} className="text-[#00A3E0] hover:underline">
          Return to Briefing
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] overflow-hidden relative">
      
      {/* --- HEADER --- */}
      <div className="absolute top-0 left-0 w-full z-20 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <button 
          onClick={() => onNavigate(`events/${eventId}`)}
          className="pointer-events-auto flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-md"
        >
          <ArrowLeft className="w-5 h-5" /> Return to Briefing
        </button>
        <div className="text-right">
          <h1 className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            EVIDENCE BOARD
          </h1>
          <p className="text-[#00A3E0] text-xs font-mono uppercase">CASE FILE: {event.id.toUpperCase()}</p>
        </div>
      </div>

      {/* --- SCATTERED GALLERY AREA --- */}
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden p-20 pb-40 relative">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />

        <div className="flex flex-wrap justify-center items-center gap-16 pt-20 min-h-[80vh]">
          {event.gallery.map((img, index) => {
            // Randomize position slightly for "scattered" look
            const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: rotation }}
                transition={{ 
                  type: "spring", 
                  bounce: 0.5, 
                  delay: index * 0.15 
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 0, 
                  zIndex: 50,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedImage(img)}
                className="relative bg-white p-3 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer max-w-xs md:max-w-sm group"
              >
                {/* "Tape" Effect at top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/20 backdrop-blur-sm rotate-1 shadow-sm border border-white/10"></div>

                {/* Photo */}
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500">
                  <img src={img} alt="Evidence" className="w-full h-full object-cover" />
                </div>
                
                {/* Handwritten Caption */}
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <p className="text-gray-600 font-mono text-xs uppercase tracking-widest opacity-60">
                    FIG. 0{index + 1} // {event.date.split(',')[0]}
                  </p>
                </div>
                
                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- LIGHTBOX (FULL SCREEN VIEW) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img 
                src={selectedImage} 
                alt="Full Evidence" 
                className="w-full h-full object-contain rounded-sm shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/10"
              />
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a 
                  href={selectedImage} 
                  download 
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-md transition-colors text-sm font-bold"
                >
                  <Download className="w-4 h-4" /> SAVE EVIDENCE
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}