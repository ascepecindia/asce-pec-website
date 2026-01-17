import { motion } from 'motion/react';

const updates = [
  'LATEST: Reconnaissance 2026 Dates Announced',
  'Concrete Canoe Casting: 85% Complete',
  'New Internship Opportunities Added',
  'Student Paper Competition Registration Open',
  'Annual General Meeting: Feb 15, 2026',
  'Workshop: Structural Analysis Software - Coming Soon',
];

export function ImpactTicker() {
  return (
    <div className="bg-white border-y border-[#00539B]/10 py-3 overflow-hidden">
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...updates, ...updates, ...updates].map((update, index) => (
          <div key={index} className="flex items-center gap-8">
            <span
              className="text-sm tracking-wide"
              style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00539B', fontWeight: 500 }}
            >
              {update}
            </span>
            <div className="w-1 h-1 bg-[#00A3E0] rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
