import { SEO } from '../SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, Activity, Archive, ExternalLink, History, FileText, AlertCircle } from 'lucide-react';
import { eventHistory, EventItem } from '../../data/eventHistory';

// --- Types ---
interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'happening' | 'tba';
  description: string;
  category: string;
  link?: string; // Added link property
}

// --- UPDATED LIVE DATA ---
const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: 'ASCE India Student Symposium 2026',
    date: 'March 25-28, 2026',
    time: '09:00 AM',
    location: 'PEC Chandigarh & UPES Dehradun',
    status: 'upcoming',
    description: 'The largest civil engineering gathering in India. Co-hosted by Punjab Engineering College and UPES.',
    category: 'FLAGSHIP',
    link: 'https://asceindiasymposium.org' // Replace with actual link
  },
  {
    id: 2,
    title: 'Reconnaissance 2026',
    date: 'Dates To Be Announced',
    time: '--:--',
    location: 'Punjab Engineering College',
    status: 'tba',
    description: 'Our annual technical fest returns. Prepare for Concrete Canoe, Bridge Building, and more.',
    category: 'FEST',
    link: '#'
  },
];

// --- "LATEST INTEL" LINKS (Viral Bar Data) ---
const latestDocs = [
  { label: 'Symposium 2026 Brochure', url: '#' },
  { label: 'Rulebook: Concrete Canoe', url: '#' },
  { label: 'Sponsorship Proposal', url: '#' }
];

interface EventsPageProps {
  onNavigate?: (page: string) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedArchiveYear, setSelectedArchiveYear] = useState(
    Object.keys(eventHistory).sort((a, b) => Number(b) - Number(a))[0]
  );

  const archiveYears = Object.keys(eventHistory).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 bg-[#F5F7FA]">
      <SEO 
        title="Events & Symposium" 
        description="Upcoming ASCE PEC events including ASCE India Student Symposium 2026. View our event archive." 
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* --- HEADER --- */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
            >
              CONTROL ROOM
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${viewMode === 'upcoming' ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
              <p className="text-xl" style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}>
                {viewMode === 'upcoming' ? 'Monitoring Upcoming Operations' : 'Accessing Past Mission Logs'}
              </p>
            </motion.div>
          </div>

          {/* --- VIEW SWITCHER --- */}
          <div className="bg-white p-1 rounded-xl border border-[#00539B]/10 flex shadow-sm">
            <button
              onClick={() => setViewMode('upcoming')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                viewMode === 'upcoming' ? 'bg-[#00539B] text-white shadow-md' : 'text-[#00539B]/60 hover:bg-[#00539B]/5'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span className="font-bold font-mono text-sm">UPCOMING</span>
            </button>
            <button
              onClick={() => setViewMode('past')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                viewMode === 'past' ? 'bg-[#00539B] text-white shadow-md' : 'text-[#00539B]/60 hover:bg-[#00539B]/5'
              }`}
            >
              <Archive className="w-4 h-4" />
              <span className="font-bold font-mono text-sm">PAST EVENTS</span>
            </button>
          </div>
        </div>

        {/* --- LATEST INTEL BAR (Visible only in Upcoming) --- */}
        <AnimatePresence>
          {viewMode === 'upcoming' && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="bg-[#00539B] rounded-lg p-1 flex items-center overflow-hidden">
                <div className="bg-[#00A3E0] px-4 py-2 rounded font-bold text-white text-sm whitespace-nowrap z-10 shadow-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 animate-pulse" /> LATEST INTEL
                </div>
                <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-4 px-4 py-2">
                   {latestDocs.map((doc, idx) => (
                     <a 
                       key={idx} 
                       href={doc.url} 
                       className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 rounded transition-all text-sm font-mono whitespace-nowrap"
                     >
                       <FileText className="w-3 h-3" /> {doc.label}
                     </a>
                   ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {/* === VIEW 1: UPCOMING EVENTS === */}
          {viewMode === 'upcoming' ? (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`
                      group relative bg-white rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all
                      ${event.status === 'tba' ? 'border-dashed border-slate-300' : 'border-solid border-[#00539B]/10 hover:border-[#00539B]/30'}
                    `}
                  >
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 bg-[#00A3E0]/10 text-[#00A3E0] rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                        {event.category}
                      </span>
                      {event.status === 'tba' ? (
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold">ANNOUNCEMENT PENDING</span>
                      ) : (
                        <span className="flex h-3 w-3 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#00539B] mb-3 group-hover:text-[#00A3E0] transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-sm text-[#00539B]/70">
                        <CalendarIcon className="w-5 h-5 text-[#00A3E0]" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#00539B]/70">
                        <MapPin className="w-5 h-5 text-[#00A3E0]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                      {event.description}
                    </p>

                    {event.status === 'tba' ? (
                      <button disabled className="w-full py-3 bg-slate-100 text-slate-400 rounded-lg text-sm font-bold cursor-not-allowed">
                        REGISTRATION LOCKED
                      </button>
                    ) : (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="block w-full py-3 bg-[#00539B] text-white rounded-lg text-center text-sm font-bold shadow-lg shadow-[#00539B]/20 hover:bg-[#003d73] hover:translate-y-[-2px] transition-all"
                      >
                        REGISTER NOW
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            
            /* === VIEW 2: PAST EVENTS (ARCHIVES) === */
            <motion.div
              key="past"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Year Selector */}
              <div className="sticky top-24 z-30 bg-[#F5F7FA]/95 backdrop-blur-md py-4 mb-8 border-b border-[#00539B]/10">
                <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
                  {archiveYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedArchiveYear(year)}
                      className={`
                        px-5 py-2 rounded-lg font-mono font-bold text-sm transition-all whitespace-nowrap
                        ${selectedArchiveYear === year 
                          ? 'bg-[#00539B] text-white shadow-lg scale-105' 
                          : 'bg-white text-[#00539B]/50 hover:bg-[#00539B]/5'}
                      `}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Historical List */}
              <div className="space-y-6">
                {eventHistory[selectedArchiveYear]?.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#00539B]/10 flex flex-col md:flex-row h-full md:h-64"
                  >
                    {/* Archive Image */}
                    <div className="w-full md:w-1/3 relative h-48 md:h-full bg-slate-100 group cursor-pointer" onClick={() => onNavigate && onNavigate(`events/${event.id}`)}>
                       <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {e.currentTarget.src = 'https://images.unsplash.com/photo-1517581177697-00bbec98b99f?q=80&w=1000'}} 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-mono rounded">
                          ARCHIVE_REF_{event.id.toUpperCase()}
                        </span>
                      </div>
                      {/* View Report Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="px-4 py-2 bg-white/90 text-[#00539B] rounded-full text-xs font-bold shadow-lg">VIEW REPORT</span>
                      </div>
                    </div>

                    {/* Archive Content */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <History className="w-4 h-4 text-[#00A3E0]" />
                        <span className="text-xs font-mono text-[#00A3E0] uppercase tracking-wider">Mission Log: {event.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#00539B] mb-4 hover:text-[#00A3E0] cursor-pointer transition-colors" onClick={() => onNavigate && onNavigate(`events/${event.id}`)}>
                        {event.title}
                      </h3>
                      <p className="text-[#00539B]/70 mb-6 leading-relaxed max-w-2xl">
                        {event.description}
                      </p>
                      
                      {/* Only show 'Access Full Report' if it's a 2025 event or has a gallery */}
                      <button 
                         onClick={() => onNavigate && onNavigate(`events/${event.id}`)}
                         className="flex items-center gap-2 text-sm font-bold text-[#00539B] cursor-pointer hover:gap-4 transition-all w-fit"
                      >
                         ACCESS ARCHIVED REPORT <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}