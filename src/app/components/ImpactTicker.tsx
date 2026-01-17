import { motion } from 'framer-motion';

const updates = [
  '📢 LATEST: ASCE India Student Symposium 2026 Dates Announced: March 25–28, 2026',
  '📍 Co-Hosted by: Punjab Engineering College (PEC) & UPES Dehradun',
  '📨 MAILER 2 RELEASED (Jan 15): Individual Registration Guidelines Available Now',
  '🔗 Official Info & Mailers: studentsymposium.asce.org/india/mailers',
  '🚀 Competitions: Concrete Canoe, Sustainable Solutions, UESI Surveying & More',
  '#ASCEIndia2026 #Reconnaissance2026 #CivilEngineering #FutureEngineers #PECChandigarh #UPESDehradun #ConcreteCanoe #SteelBridge',
  '📝 Chapter Participation Forms Due Soon - Don\'t Miss Out!',
  '🌍 Theme: Building a Sustainable Future Through Innovation',
];

export function ImpactTicker() {
  return (
    // Increased vertical padding (py-4) and border visibility
    <div className="bg-white border-y-2 border-[#00539B]/10 py-4 overflow-hidden relative z-20">
      <motion.div
        animate={{
          x: [0, -2500], // Increased travel distance for longer text
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 45, // Slightly slower for readability of links
            ease: "linear",
          },
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {/* Tripled the array to ensure seamless looping without gaps */}
        {[...updates, ...updates, ...updates].map((update, index) => (
          <div key={index} className="flex items-center gap-6">
            <span
              // Increased text size to text-lg (was text-sm) and added hover effect
              className="text-lg tracking-wide hover:text-[#00A3E0] transition-colors cursor-default"
              style={{ 
                fontFamily: 'JetBrains Mono, monospace', 
                color: '#00539B', 
                fontWeight: 600 
              }}
            >
              {update}
            </span>
            {/* Separator Dot */}
            <div className="w-2 h-2 bg-[#9E1B32] rounded-full shadow-sm" />
          </div>
        ))}
      </motion.div>
      
      {/* Optional: Fade effect on edges for professional look */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}