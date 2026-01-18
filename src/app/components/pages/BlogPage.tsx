import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, TrendingUp } from 'lucide-react';
import { blogsData } from '../../data/blogsData';

interface Props {
  onNavigate?: (page: string) => void;
}

export function BlogPage({ onNavigate }: Props) {
  // Highlight the first post as "Featured"
  const featuredPost = blogsData[0];
  const otherPosts = blogsData.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-[#F5F7FA]">
      <SEO title="Engineering Insights" description="Latest trends, research, and viral topics in Civil Engineering." />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h1 className="text-5xl font-black text-[#00539B] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              INTEL FEED
            </h1>
            <p className="text-xl text-[#00539B]/60">Decoded trends for the modern engineer.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-red-500 font-bold bg-red-50 px-4 py-2 rounded-full animate-pulse">
            <TrendingUp className="w-5 h-5" /> LIVE TRENDS
          </div>
        </div>

        {/* Featured Post (Hero) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group cursor-pointer aspect-[16/9] md:aspect-[21/9]"
          onClick={() => onNavigate && onNavigate(`blog/${featuredPost.id}`)}
        >
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
            <div className="flex gap-2 mb-4">
              {featuredPost.tags.map(tag => (
                <span key={tag} className="bg-[#00A3E0] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
              {featuredPost.title}
            </h2>
            <div className="flex items-center gap-6 text-white/80 text-sm font-mono">
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              onClick={() => onNavigate && onNavigate(`blog/${post.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#00539B]/10 hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#00539B] text-xs font-bold px-3 py-1 rounded-full">
                  {post.tags[0]}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#00539B] mb-3 group-hover:text-[#00A3E0] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#00A3E0] font-bold text-sm group-hover:gap-3 gap-2 transition-all">
                  READ ARTICLE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}