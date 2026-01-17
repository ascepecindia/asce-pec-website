import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 0.1,
        y: (e.clientY / window.innerHeight - 0.5) * 0.1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Bridge structure points
    const generateBridgeStructure = () => {
      const points: Array<[number, number, number]> = [];
      const segments = 20;
      const width = 400;
      const height = 200;
      const depth = 300;

      // Main deck
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = (t - 0.5) * width;
        const y = Math.sin(t * Math.PI) * 20;
        const z = (t - 0.5) * depth;
        points.push([x, y, z]);
        points.push([x + width / 10, y, z]);
      }

      // Support trusses
      for (let i = 0; i <= segments; i += 2) {
        const t = i / segments;
        const x = (t - 0.5) * width;
        const z = (t - 0.5) * depth;
        points.push([x, 0, z]);
        points.push([x, -height, z]);
        points.push([x + width / 10, 0, z]);
        points.push([x + width / 10, -height, z]);
      }

      return points;
    };

    const structure = generateBridgeStructure();
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      rotation += 0.002;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Project 3D to 2D
      const project = (x: number, y: number, z: number) => {
        const rotX = x * Math.cos(rotation + mousePos.current.x) - z * Math.sin(rotation + mousePos.current.x);
        const rotZ = x * Math.sin(rotation + mousePos.current.x) + z * Math.cos(rotation + mousePos.current.x);
        const rotY = y * Math.cos(mousePos.current.y * 0.5) - rotZ * Math.sin(mousePos.current.y * 0.5);
        const finalZ = y * Math.sin(mousePos.current.y * 0.5) + rotZ * Math.cos(mousePos.current.y * 0.5);

        const scale = 800 / (800 + finalZ);
        return {
          x: centerX + rotX * scale,
          y: centerY + rotY * scale,
          scale,
        };
      };

      // Draw connections
      ctx.strokeStyle = '#00539B';
      ctx.lineWidth = 1;

      for (let i = 0; i < structure.length - 1; i++) {
        const [x1, y1, z1] = structure[i];
        const [x2, y2, z2] = structure[i + 1];

        const p1 = project(x1, y1, z1);
        const p2 = project(x2, y2, z2);

        const opacity = Math.min(p1.scale, p2.scale);
        ctx.globalAlpha = opacity * 0.6;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // Draw nodes
      ctx.fillStyle = '#00A3E0';
      structure.forEach(([x, y, z]) => {
        const p = project(x, y, z);
        ctx.globalAlpha = p.scale * 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrame.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #00539B 1px, transparent 1px),
            linear-gradient(to bottom, #00539B 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 
            className="text-6xl md:text-8xl mb-4 tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
          >
            WE BUILD
            <br />
            CIVILIZATIONS.
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.8 }}
          >
            The Official Student Chapter of ASCE at Punjab Engineering College.
          </p>
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="bg-white/40 backdrop-blur-xl border border-[#00539B]/20 rounded-2xl px-8 py-4 shadow-2xl">
              <button className="relative group">
                <span 
                  className="text-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#00539B' }}
                >
                  Start Your Build
                </span>
                <motion.div
                  className="absolute -inset-2 bg-[#9E1B32] rounded-lg -z-10 opacity-0 group-hover:opacity-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
