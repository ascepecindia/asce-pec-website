import { motion } from 'motion/react';
import { Code } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'About ASCE', href: '#' },
      { label: 'Membership', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Resources', href: '#' },
    ],
    'Connect': [
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Code of Conduct', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-[#00539B] text-white pt-20 pb-8 overflow-hidden">
      {/* Massive Background Text */}
      <div 
        className="absolute top-0 left-0 right-0 text-center select-none pointer-events-none"
        style={{
          fontSize: 'clamp(4rem, 15vw, 12rem)',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.03)',
          lineHeight: 1,
          paddingTop: '2rem',
        }}
      >
        ASCE PEC
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
              >
                ASCE PEC
              </h3>
              <p
                className="text-white/80 mb-4"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
              >
                Building the future of civil engineering, one project at a time.
              </p>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm">🏗️</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm">🌉</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm">🏛️</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4
                className="mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.125rem' }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-white transition-colors inline-block"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p
            className="text-white/60 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {currentYear} ASCE Punjab Engineering College. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="text-white/60 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Designed by PEC Tech Team
            </span>
            <Code className="w-4 h-4 text-[#00A3E0]" />
          </div>
        </motion.div>

        {/* Grid Pattern */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </footer>
  );
}
