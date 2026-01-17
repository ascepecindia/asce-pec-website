import { motion } from 'motion/react';
import { Calendar, Briefcase, BookOpen } from 'lucide-react';

interface FeatureDeckProps {
  onNavigate: (page: string) => void;
}

export function FeatureDeck({ onNavigate }: FeatureDeckProps) {
  const features = [
    {
      id: 'events',
      title: 'Events',
      description: 'From competitions to conferences, experience engineering excellence',
      icon: Calendar,
      gradient: 'from-[#00539B] to-[#00A3E0]',
      date: 'Next: Feb 15, 2026',
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Innovative solutions built by student engineers',
      icon: Briefcase,
      gradient: 'from-[#00A3E0] to-[#00539B]',
      date: 'Active: 12 Projects',
    },
    {
      id: 'blog',
      title: 'Blog',
      description: 'Technical insights and engineering perspectives',
      icon: BookOpen,
      gradient: 'from-[#00539B] to-[#9E1B32]',
      date: 'Latest: 2 days ago',
    },
  ];

  return (
    <div className="py-20 px-4 bg-[#F5F7FA]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2
          className="text-4xl md:text-5xl mb-12 text-center"
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
        >
          Explore Our World
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => onNavigate(feature.id)}
                className="cursor-pointer group"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden bg-white shadow-xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`} />
                  
                  {/* Blueprint Grid */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div>
                      <Icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                      <h3
                        className="text-3xl mb-3 text-white"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-white/90"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {feature.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm text-white/80"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {feature.date}
                      </span>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.3)' }}
                      >
                        <span className="text-white text-xl">→</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/0"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
