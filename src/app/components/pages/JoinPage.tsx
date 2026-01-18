import { SEO } from '../SEO';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    department: '',
    interests: '',
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 bg-[#F5F7FA]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
          >
            JOIN THE CORPS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl"
            style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}
          >
            Become part of something greater
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Membership Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-md h-64 cursor-pointer"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 rounded-2xl shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(135deg, #00539B 0%, #00A3E0 100%)',
                  }}
                >
                  <div className="h-full p-8 flex flex-col justify-between text-white">
                    <div>
                      <div
                        className="text-sm mb-2"
                        style={{ fontFamily: 'JetBrains Mono, monospace', opacity: 0.8 }}
                      >
                        MEMBER ID: #PEC-ASCE-2026
                      </div>
                      <div
                        className="text-3xl mb-1"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                      >
                        YOUR NAME
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                        Student Member
                      </div>
                    </div>

                    {/* Chip */}
                    <div className="flex justify-between items-end">
                      <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded opacity-80" />
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}>
                        ASCE PEC
                      </div>
                    </div>
                  </div>

                  {/* Holographic Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                      animation: 'shimmer 3s infinite',
                    }}
                  />
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 rounded-2xl shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, #00A3E0 0%, #00539B 100%)',
                  }}
                >
                  <div className="h-full p-8 flex flex-col justify-between text-white">
                    <div>
                      <div
                        className="text-xl mb-4"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                      >
                        Member Benefits
                      </div>
                      <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" /> Access to all workshops & events
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" /> Competition participation
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" /> Networking opportunities
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4" /> Research collaboration
                        </li>
                      </ul>
                    </div>

                    <div className="text-xs" style={{ fontFamily: 'JetBrains Mono, monospace', opacity: 0.7 }}>
                      Valid: Academic Year 2025-26
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#00539B]/10"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2
                  className="text-2xl mb-6"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
                >
                  Membership Application
                </h2>

                <div>
                  <label
                    className="block mb-2 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', fontWeight: 600 }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full pb-2 bg-transparent border-b-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', fontWeight: 600 }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full pb-2 bg-transparent border-b-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', fontWeight: 600 }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full pb-2 bg-transparent border-b-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-2 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', fontWeight: 600 }}
                    >
                      Year
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      required
                      className="w-full pb-2 bg-transparent border-b-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                    >
                      <option value="">Select</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block mb-2 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', fontWeight: 600 }}
                    >
                      Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      required
                      className="w-full pb-2 bg-transparent border-b-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                    >
                      <option value="">Select</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="environmental">Environmental Engineering</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', fontWeight: 600 }}
                  >
                    Areas of Interest
                  </label>
                  <textarea
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    required
                    rows={3}
                    className="w-full p-3 bg-[#F5F7FA] border-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors rounded-lg"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                    placeholder="Tell us what you're passionate about..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#00539B] text-white rounded-xl relative overflow-hidden group"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}
                >
                  <span className="relative z-10">Initiate Membership</span>
                  <motion.div
                    className="absolute inset-0 bg-[#00A3E0]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Check className="w-12 h-12 text-white" strokeWidth={3} />
                  </motion.div>
                </motion.div>

                <h3
                  className="text-3xl mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
                >
                  Welcome Aboard!
                </h3>
                <p
                  className="text-lg mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}
                >
                  Your application has been submitted successfully.
                  <br />
                  We'll contact you within 2-3 business days.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 border-2 border-[#00539B] text-[#00539B] rounded-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  Submit Another
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#00539B]/10">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#00A3E0]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <h3
              className="text-lg mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
            >
              Email Us
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}>
             asce.pec.india@gmail.com
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#00539B]/10">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#00A3E0]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>
            <h3
              className="text-lg mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
            >
              Visit Us
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}>
              Punjab Engineering College
              <br />
              Chandigarh, India
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#00539B]/10">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#00A3E0]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
            <h3
              className="text-lg mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
            >
              Follow Us
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}>
              @ascepec on all platforms
            </p>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
