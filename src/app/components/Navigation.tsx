import { Home, Calendar, Info, Users, BookOpen, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const leftItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'events', icon: Calendar, label: 'Events' },
    // CHANGED: Projects -> About
    { id: 'about', icon: Info, label: 'About' },
  ];

  const rightItems = [
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'blog', icon: BookOpen, label: 'Blog' },
    { id: 'join', icon: Mail, label: 'Join' },
  ];

  const skylineEntrance = {
    hidden: { y: -150, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1, 
        type: "spring" as const, 
        bounce: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* --- DESKTOP NAVIGATION --- */}
      <motion.header
        variants={skylineEntrance}
        initial="hidden"
        animate="visible"
        className="hidden md:flex fixed top-0 left-0 w-full justify-center z-50 pointer-events-none" 
      >
        <div className="relative flex items-start pointer-events-auto filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          
          {/* Left Wing */}
          <div className="
            flex items-center gap-1 px-4 py-3
            bg-white h-16 mt-4
            rounded-bl-2xl rounded-tl-lg
            border-b-4 border-[#00539B]
          ">
            {leftItems.map((item) => (
              <NavItem 
                key={item.id} 
                item={item} 
                isActive={currentPage === item.id} 
                onClick={() => onNavigate(item.id)} 
              />
            ))}
          </div>

          {/* Center Tower (Logo Only) */}
          <motion.div 
            className="
              relative z-10 
              flex flex-col items-center justify-center
              w-48 h-28
              bg-white
              rounded-b-[2rem] rounded-t-none
              shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)]
              cursor-pointer
            "
            onClick={() => onNavigate('home')}
            whileHover={{ y: 2 }}
          >
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent"></div>
            
            <img 
              src="/ASCE-PEC.svg" 
              alt="ASCE Logo" 
              className="h-24 w-auto object-contain"
            />
          </motion.div>

          {/* Right Wing */}
          <div className="
            flex items-center gap-1 px-4 py-3
            bg-white h-16 mt-4
            rounded-br-2xl rounded-tr-lg
            border-b-4 border-[#00539B]
          ">
            {rightItems.map((item) => (
              <NavItem 
                key={item.id} 
                item={item} 
                isActive={currentPage === item.id} 
                onClick={() => onNavigate(item.id)} 
              />
            ))}
          </div>
        </div>
      </motion.header>

      {/* --- MOBILE NAV (Unchanged) --- */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-full px-6 py-4 shadow-2xl flex justify-between items-center">
            {[...leftItems, ...rightItems].map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="relative group"
                >
                  <Icon className={`w-6 h-6 transition-colors ${isActive ? 'stroke-[#00539B] stroke-2' : 'stroke-slate-400'}`} />
                  {isActive && <motion.div layoutId="mobileIndicator" className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00A3E0] rounded-full" />}
                </button>
              );
            })}
        </div>
      </motion.nav>
    </>
  );
}

function NavItem({ item, isActive, onClick }: { item: any, isActive: boolean, onClick: () => void }) {
  const Icon = item.icon;
  return (
    <motion.button
      onClick={onClick}
      className="relative group flex flex-col items-center justify-center w-20 h-full rounded-lg transition-all duration-300 hover:bg-slate-50"
    >
      <Icon className={`w-5 h-5 mb-1 transition-all duration-300 ${isActive ? 'stroke-[#00539B] -translate-y-1' : 'stroke-slate-500 group-hover:stroke-[#00539B]'}`} />
      <span className={`text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${isActive ? 'text-[#00539B]' : 'text-slate-400 group-hover:text-[#00539B]'}`}>
        {item.label}
      </span>
      {isActive && (
        <motion.div layoutId="activeWindow" className="absolute bottom-[-14px] w-12 h-1 bg-[#00A3E0] shadow-[0_-5px_10px_rgba(0,163,224,0.5)] rounded-t-sm" />
      )}
    </motion.button>
  );
}