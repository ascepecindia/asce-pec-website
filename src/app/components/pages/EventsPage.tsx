import { SEO } from '../SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, Users, X, History, Activity, ChevronRight, Archive, ExternalLink } from 'lucide-react';
import { eventHistory } from '../../data/eventHistory'; // Import your history data

// --- Types ---
interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'happening' | 'completed';
  description: string;
  category: string;
}

// Dummy Data for "Active" Future Events
const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: 'Reconnaissance 2026',
    date: '2026-02-15',
    time: '09:00 AM',
    location: 'PEC Main Auditorium',
    attendees: 250,
    status: 'upcoming',
    description: 'Annual technical symposium featuring competitions, workshops, and guest lectures.',
    category: 'FEST',
  },
  {
    id: 2,
    title: 'Concrete Canoe Workshop',
    date: '2026-01-20',
    time: '02:00 PM',
    location: 'Civil Engineering Lab',
    attendees: 45,
    status: 'upcoming',
    description: 'Hands-on workshop for designing and building concrete canoes.',
    category: 'WORKSHOP',
  },
  {
    id: 3,
    title: 'Structural Analysis Seminar',
    date: '2026-01-18',
    time: '11:00 AM',
    location: 'Lecture Hall 3',
    attendees: 120,
    status: 'happening',
    description: 'Expert session on modern structural analysis techniques and software.',
    category: 'SEMINAR',
  },
];

export function EventsPage() {
  const [viewMode, setViewMode] = useState<'active' | 'archive'>('active');
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);
  const [selectedArchiveYear, setSelectedArchiveYear] = useState(Object.keys(eventHistory).sort((a, b) => Number(b) - Number(a))[0]);

  // Archive Years
  const archiveYears = Object.keys(eventHistory).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 bg-[#F5F7FA]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* --- HEADER SECTION --- */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
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
              <div className={`w-2 h-2 rounded-full ${viewMode === 'active' ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
              <p className="text-xl" style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}>
                {viewMode === 'active' ? 'Monitoring Active Operations' : 'Accessing Classified Archives'}
              </p>
            </motion.div>
          </div>

          {/* --- VIEW SWITCHER --- */}
          <div className="bg-white p-1 rounded-xl border border-[#00539B]/10 flex shadow-sm">
            <button
              onClick={() => setViewMode('active')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                viewMode === 'active' 
                ? 'bg-[#00539B] text-white shadow-md' 
                : 'text-[#00539B]/60 hover:bg-[#00539B]/5'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span className="font-bold font-mono text-sm">LIVE OPS</span>
            </button>
            <button
              onClick={() => setViewMode('archive')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                viewMode === 'archive' 
                ? 'bg-[#00539B] text-white shadow-md' 
                : 'text-[#00539B]/60 hover:bg-[#00539B]/5'
              }`}
            >
              <Archive className="w-4 h-4" />
              <span className="font-bold font-mono text-sm">ARCHIVES</span>
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <AnimatePresence mode="wait">
          
          {/* === VIEW 1: ACTIVE OPERATIONS (UPCOMING) === */}
          {viewMode === 'active' ? (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Live Status Banner */}
              {upcomingEvents.some(e => e.status === 'happening') && (
                <div className="mb-8 bg-white rounded-2xl p-6 border border-[#9E1B32]/20 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#9E1B32]"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9E1B32] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9E1B32]"></span>
                    </span>
                    <span className="text-sm font-mono font-bold text-[#9E1B32] tracking-wider">CRITICAL ALERT: EVENT IN PROGRESS</span>
                  </div>
                  {upcomingEvents.filter(e => e.status === 'happening').map(event => (
                    <div key={event.id} className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#00539B]">{event.title}</h3>
                      <span className="text-[#00539B]/60 font-mono">{event.location}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Upcoming Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedEvent(event)}
                    className="group cursor-pointer bg-white rounded-2xl p-6 border border-[#00539B]/10 shadow-sm hover:shadow-xl hover:border-[#00539B]/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-[#00A3E0]/10 text-[#00A3E0] rounded-full text-xs font-mono font-bold">
                        {event.category}
                      </span>
                      <span className="text-[#00539B]/40 text-xs font-mono">ID: EV-{202600 + event.id}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#00539B] mb-2 group-hover:text-[#00A3E0] transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-[#00539B]/70">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#00539B]/70">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>

                    <div className="w-full py-2 border border-[#00539B]/20 rounded-lg text-center text-[#00539B] text-sm font-bold group-hover:bg-[#00539B] group-hover:text-white transition-all">
                      View Protocol
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            
            /* === VIEW 2: MISSION ARCHIVES (HISTORY) === */
            <motion.div
              key="archive"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Year Selector Timeline */}
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

              {/* Historical Events List */}
              <div className="space-y-6">
                {eventHistory[selectedArchiveYear]?.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#00539B]/10 flex flex-col md:flex-row h-full md:h-64"
                  >
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 relative h-48 md:h-full bg-slate-100 group">
                       <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {e.currentTarget.src = 'https://images.unsplash.com/photo-1517581177697-00bbec98b99f?q=80&w=1000'}} 
                      />
                      <div className="absolute inset-0 bg-[#00539B]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-mono rounded">
                          IMG_REF_{event.id.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <History className="w-4 h-4 text-[#00A3E0]" />
                        <span className="text-xs font-mono text-[#00A3E0] uppercase tracking-wider">Mission Log: {event.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#00539B] mb-4">{event.title}</h3>
                      <p className="text-[#00539B]/70 mb-6 leading-relaxed max-w-2xl">
                        {event.description}
                      </p>
                      
                      {/* --- CONDITIONAL LINK BUTTON --- */}
                      {event.link ? (
                        <a 
                          href={event.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold text-[#00539B] cursor-pointer hover:gap-4 transition-all w-fit"
                        >
                          ACCESS FULL REPORT <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                         <span className="flex items-center gap-2 text-sm font-bold text-slate-400 italic cursor-not-allowed">
                          REPORT CLASSIFIED <Archive className="w-4 h-4" />
                        </span>
                      )}

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- MODAL FOR UPCOMING EVENTS --- */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-[#001f3f]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00539B] to-[#00A3E0]"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                   <span className="text-xs font-mono text-[#00539B]/50 block mb-1">CLASSIFIED EVENT PROTOCOL</span>
                   <h2 className="text-3xl font-bold text-[#00539B]">{selectedEvent.title}</h2>
                </div>
                <button onClick={() => setSelectedEvent(null)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X className="w-6 h-6 text-[#00539B]" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Clock className="text-[#00A3E0]" />
                  <span className="text-[#00539B] font-mono">{selectedEvent.time}</span>
                </div>
                 <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <MapPin className="text-[#00A3E0]" />
                  <span className="text-[#00539B] font-mono">{selectedEvent.location}</span>
                </div>
              </div>

              <p className="text-[#00539B]/80 mb-8 leading-relaxed">
                {selectedEvent.description}
              </p>

              <button className="w-full py-4 bg-[#00539B] text-white rounded-xl font-bold hover:bg-[#003d73] transition-colors shadow-lg shadow-[#00539B]/20">
                INITIATE REGISTRATION SEQUENCE
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}