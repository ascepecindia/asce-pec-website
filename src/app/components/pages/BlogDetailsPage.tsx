import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { blogsData } from '../../data/blogsData';
import { SEO } from '../SEO';

interface Props {
  blogId: string;
  onNavigate: (page: string) => void;
}

export function BlogDetailsPage({ blogId, onNavigate }: Props) {
  const blog = blogsData.find((b) => b.id === blogId);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  if (!blog) return <div className="pt-32 text-center text-[#00539B]">Article not found</div>;

  return (
    <>
      <SEO title={blog.title} description={blog.excerpt} />

      <article className="min-h-screen bg-white pb-20">
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[#00A3E0] origin-left z-50"
          style={{ scaleX: useScroll().scrollYProgress }} 
        />

        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </motion.div>

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={() => onNavigate('blog')}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-bold text-sm uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Feed
              </button>
              
              <div className="flex gap-2 mb-4">
                {blog.tags.map(tag => (
                  <span key={tag} className="bg-[#00A3E0] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {blog.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-mono text-white/80">
                <span className="flex items-center gap-2"><User className="w-4 h-4" /> {blog.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blog.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-6 pt-16">
          <div className="flex justify-between items-start mb-8">
             <p className="text-xl font-serif leading-relaxed text-slate-600 italic border-l-4 border-[#00A3E0] pl-4">
               {blog.excerpt}
             </p>
             <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#00539B] transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-[#00539B] prose-a:text-[#00A3E0] prose-img:rounded-xl"
          >
            {/* Renders HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </motion.div>

          <hr className="my-12 border-slate-200" />
          
          <div className="bg-[#F5F7FA] p-8 rounded-2xl text-center">
            <h3 className="font-bold text-[#00539B] mb-2">Join the Discussion</h3>
            <p className="text-sm text-slate-500 mb-6">Have insights on this topic? Connect with us.</p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#00539B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003d73] transition-colors"
            >
              Contact Team
            </button>
          </div>
        </div>
      </article>
    </>
  );
}