import { SEO } from '../SEO';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  email: string;
  linkedin: string;
  level: number;
  connections: number[];
}

// --- CORE TEAM DATA ---
const team: TeamMember[] = [
  {
    id: 0,
    name: 'Har Amrit Singh Sandhu',
    role: 'Faculty Advisor',
    department: 'Civil Engineering',
    image: 'https://pec.ac.in/sites/default/files/faculty_profile/images/haramrit.jpeg',
    email: 'haramrit@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/har-amrit-singh-sandhu/',
    level: 0,
    connections: [1, 2, 3],
  },
  {
    id: 1,
    name: 'Balkaran Singh Sohal',
    role: 'Secretary',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGLovoGaBDYVA/profile-displayphoto-shrink_400_400/B56ZWtIEvSGsAg-/0/1742366331110?e=1770249600&v=beta&t=770Ac0kMfEz-gGJOF6WixkEXDeJWRKtTz75LXR-VPw4',
    email: 'balkaran.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/balkaran-singh-sohal',
    level: 1,
    connections: [4, 5, 6, 7],
  },
  {
    id: 2,
    name: 'Kartik Kumar',
    role: 'Jt. Secretary',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQGfBV905YIsXA/profile-framedphoto-shrink_400_400/B4EZhZ.Xz1GwAc-/0/1753856179722?e=1769263200&v=beta&t=FXtDq2O-DJDDsVoFg7ZQu0FybFI5cLi6ZuEwtSOu6Dk',
    email: 'kartik.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/kartik-kumar',
    level: 1,
    connections: [8, 9],
  },
  {
    id: 3,
    name: 'Shubham',
    role: 'Jt. Secretary & Treasurer',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFanwjsRP-17g/profile-displayphoto-scale_400_400/B56Zhb4HbcHQAg-/0/1753888097539?e=1770249600&v=beta&t=sS_deSABHKwAa7mdplisvAPYGVK7F5pNeyY7zF1wvZQ',
    email: 'shubham.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/shubham-sharma',
    level: 1,
    connections: [10, 11],
  },
  // --- GENERAL SECRETARIES ---
  {
    id: 4,
    name: 'Vishwam',
    role: 'General Secretary',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFbGMpDlBJp3g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720634250941?e=1770249600&v=beta&t=HVZcsBes-U9-Y7eBHgupvThVhO5Kp62eyYwkmVK_6lY',
    email: 'vishwam.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/vishwam-pec',
    level: 2,
    connections: [],
  },
  {
    id: 5,
    name: 'Shreya',
    role: 'General Secretary',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHpU9BSX-lbNA/profile-displayphoto-scale_400_400/B56ZrJrw_xJQAg-/0/1764320286087?e=1770249600&v=beta&t=CF41Wbo7LtEJxSeQuSXxejLnX1EDMGNKmm2C6eS_qqI',
    email: 'shreya.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/shreya-pec',
    level: 2,
    connections: [],
  },
  // --- CREATIVE HEADS ---
  {
    id: 6,
    name: 'Suruchi',
    role: 'Creative & Social Head',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGCgRu1wJpWpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719752947169?e=1770249600&v=beta&t=3FgqRXZi8wAB2iFWxJiGyjAmmC6uzW9j9aaZXTp59YY',
    email: 'suruchi.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/suruchi-pec',
    level: 2,
    connections: [],
  },
  {
    id: 7,
    name: 'Arjun',
    role: 'Creative & Social Head',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH1vpMUrilsCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719160235473?e=1770249600&v=beta&t=sGr_nnUc8a2IiPNuQe8sP-wBTY18bdk_x87GbsN0YIk',
    email: 'arjun.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/arjun-pec',
    level: 2,
    connections: [],
  },
  // --- EVENT HEADS ---
  {
    id: 8,
    name: 'Arush',
    role: 'Event Head',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEswzgvmcottg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720882962138?e=1770249600&v=beta&t=s7BLTLtRF0LHNhCebQ6HMmdNLM5pfbsYjvj0xmOIKAA',
    email: 'arush.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/arush-pec',
    level: 2,
    connections: [],
  },
  {
    id: 9,
    name: 'Vaibhav',
    role: 'Event Head',
    department: 'Civil Engineering',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEceiCwn8F9ug/profile-displayphoto-shrink_400_400/B56ZOiYi27GgAk-/0/1733596165617?e=1770249600&v=beta&t=rSCTtbmkQyRReb7OD2GI5nnTYrsjb9ENPwfdkuabLAM',
    email: 'vaibhav.bt22civil@pec.edu.in',
    linkedin: 'https://www.linkedin.com/in/vaibhav-pec',
    level: 2,
    connections: [],
  },
];

// --- UPDATED ALUMNI LOCATIONS ---
const alumniLocations = [
  { name: 'Akhilesh Malguria', company: 'Exxon Mobil', location: 'Bangalore', lat: 40.1020, lng: -88.2272 },
  { name: 'Rishant Thakur', company: 'MSIL', location: 'New Delhi', lat: 28.6139, lng: 77.2090 },
  { name: 'Jahanvi Deshmukh', company: 'J P Morgan', location: '', lat: 19.0760, lng: 72.8777 },
  { name: 'Palak Sharma', company: 'L&T', location: 'Gurugram', lat: 12.9716, lng: 77.5946 },
  { name: 'Kirti Bhaskar', company: 'Govt Of Punjab', location: 'Punjab', lat: 18.5204, lng: 73.8567 },
  { name: 'Sarthak Randev', company: 'Servinsky Engineering and Associates', location: 'Chandigarh', lat: 30.7333, lng: 76.7794 },
  { name: 'Tarun Jangra', company: 'DCM Shriram LTD', location: 'Gurgaon', lat: 28.4595, lng: 77.0266 },
];

export function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [globeRotation, setGlobeRotation] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe outline
      ctx.strokeStyle = '#00539B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw latitude lines
      ctx.strokeStyle = '#00539B';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
      for (let i = -2; i <= 2; i++) {
        const y = centerY + (i * radius) / 3;
        const width = Math.sqrt(radius * radius - ((i * radius) / 3) ** 2) * 2;
        ctx.beginPath();
        ctx.ellipse(centerX, y, width / 2, 10, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + globeRotation;
        const x = Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, Math.abs(x), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      // Draw location dots
      alumniLocations.forEach((location) => {
        const angle = (location.lng / 180) * Math.PI + globeRotation;
        const latAngle = (location.lat / 90) * (Math.PI / 2);
        
        const x = centerX + Math.cos(angle) * Math.cos(latAngle) * radius;
        const y = centerY + Math.sin(latAngle) * radius;
        const z = Math.sin(angle) * Math.cos(latAngle) * radius;

        if (z > 0) {
          ctx.fillStyle = '#00A3E0';
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Draw pulse effect
          ctx.strokeStyle = '#00A3E0';
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      setGlobeRotation((prev) => prev + 0.005);
      requestAnimationFrame(animate);
    };

    animate();
  }, [globeRotation]);

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 bg-[#F5F7FA]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
          >
            THE NETWORK
          </h1>
          <p
            className="text-xl"
            style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}
          >
            The minds building the future
          </p>
        </div>

        {/* Network Visualization */}
        <div className="mb-20">
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#00539B' }}
          >
            Organization Structure
          </h2>

          <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-[#00539B]/10">
            <svg width="100%" height="600" className="overflow-visible">
              {/* Draw connections */}
              {team.map((member) =>
                member.connections.map((connId) => {
                  const target = team.find((m) => m.id === connId);
                  if (!target) return null;

                  const x1 = 100 + member.level * 300;
                  const y1 = 100 + member.id * 50;
                  const x2 = 100 + target.level * 300;
                  const y2 = 100 + target.id * 50;

                  const isHighlighted =
                    hoveredMember === member.id || hoveredMember === connId;

                  return (
                    <motion.line
                      key={`${member.id}-${connId}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isHighlighted ? '#00A3E0' : '#00539B'}
                      strokeWidth={isHighlighted ? 2 : 1}
                      opacity={isHighlighted ? 0.8 : 0.2}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: member.id * 0.1 }}
                    />
                  );
                })
              )}

              {/* Draw nodes */}
              {team.map((member) => {
                const x = 100 + member.level * 300;
                const y = 100 + member.id * 50;

                return (
                  <g key={member.id}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={20}
                      fill={member.level === 0 ? '#9E1B32' : '#00539B'}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: member.id * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                      className="cursor-pointer"
                    />
                    <text
                      x={x + 30}
                      y={y - 10}
                      fill="#00539B"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', fontWeight: 600 }}
                    >
                      {member.name}
                    </text>
                    <text
                      x={x + 30}
                      y={y + 10}
                      fill="#00539B"
                      opacity={0.6}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
                    >
                      {member.role}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-20">
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#00539B' }}
          >
            Core Committee
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#00539B]/10"
              >
                {/* --- IMAGE FRAME (Updated Design) --- */}
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00539B] to-[#00A3E0] p-1">
                    <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                    <h3
                    className="text-xl mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
                    >
                    {member.name}
                    </h3>
                    <p
                    className="text-sm mb-1"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00A3E0', fontWeight: 600 }}
                    >
                    {member.role}
                    </p>
                    <p
                    className="text-sm mb-4"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.6 }}
                    >
                    {member.department}
                    </p>

                    <div className="flex justify-center gap-3">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center cursor-pointer hover:bg-blue-50"
                        title={member.email}
                    >
                        <Mail className="w-4 h-4" style={{ color: '#00539B' }} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center cursor-pointer hover:bg-blue-50"
                        title="LinkedIn Profile"
                    >
                        <Linkedin className="w-4 h-4" style={{ color: '#00539B' }} />
                    </motion.a>
                    {/* Optional: GitHub Button (Hidden if irrelevant for Civil, or you can keep it) */}
                    {/* <motion.button className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center"> <Github className="w-4 h-4" /> </motion.button> */}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alumni Globe */}
        <div>
          <h2
            className="text-3xl mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#00539B' }}
          >
            Alumni Network
          </h2>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#00539B]/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <canvas ref={canvasRef} width={400} height={400} />
              </div>

              <div className="flex-1">
                <p
                  className="text-lg mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}
                >
                  Our alumni are making an impact across the globe
                </p>

                <div className="space-y-3">
                  {alumniLocations.map((alumni, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F7FA]"
                    >
                      <div className="w-2 h-2 bg-[#00A3E0] rounded-full" />
                      <div className="flex-1">
                        <p
                          className="font-semibold"
                          style={{ fontFamily: 'Inter, sans-serif', color: '#00539B' }}
                        >
                          {alumni.name}
                        </p>
                        <p
                          className="text-sm"
                          style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.6 }}
                        >
                          {alumni.company} • {alumni.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}