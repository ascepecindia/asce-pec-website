import { SEO } from '../SEO';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Clock, TrendingUp } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  author: string;
  trending: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The Future of Sustainable Concrete',
    excerpt: 'Exploring innovative approaches to eco-friendly concrete using recycled materials and geopolymer technology.',
    category: 'Structural',
    readTime: 8,
    date: '2026-01-14',
    author: 'Priya Sharma',
    trending: true,
  },
  {
    id: 2,
    title: 'Smart Cities: IoT in Infrastructure',
    excerpt: 'How Internet of Things is revolutionizing urban infrastructure monitoring and maintenance.',
    category: 'Technology',
    readTime: 6,
    date: '2026-01-12',
    author: 'Vikram Singh',
    trending: true,
  },
  {
    id: 3,
    title: 'Structural Analysis with AI',
    excerpt: 'Machine learning applications in predicting structural behavior and optimizing designs.',
    category: 'Research',
    readTime: 10,
    date: '2026-01-10',
    author: 'Arjun Mehta',
    trending: true,
  },
  {
    id: 4,
    title: 'Earthquake-Resistant Design Principles',
    excerpt: 'Understanding seismic design codes and implementing resilient structural systems.',
    category: 'Structural',
    readTime: 12,
    date: '2026-01-08',
    author: 'Dr. Rajesh Kumar',
    trending: false,
  },
  {
    id: 5,
    title: 'BIM: The Future of Construction',
    excerpt: 'Building Information Modeling is transforming how we plan, design, and construct infrastructure.',
    category: 'Technology',
    readTime: 7,
    date: '2026-01-05',
    author: 'Ananya Patel',
    trending: false,
  },
  {
    id: 6,
    title: 'Water Resource Management',
    excerpt: 'Sustainable approaches to managing water resources in urban environments.',
    category: 'Environmental',
    readTime: 9,
    date: '2026-01-03',
    author: 'Divya Reddy',
    trending: false,
  },
];

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(articles.map(a => a.category)));
  const trendingArticles = articles.filter(a => a.trending);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 bg-white">
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
            THE CIVILVERSE
          </h1>
          <p
            className="text-xl"
            style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}
          >
            Research papers, insights, and engineering perspectives
          </p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#00539B' }} />
            <input
              type="text"
              placeholder="> Search archives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#F5F7FA] border-b-2 border-[#00539B]/20 focus:border-[#00A3E0] outline-none transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00539B' }}
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex flex-wrap gap-3 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-[#00539B] text-white'
                : 'bg-white border border-[#00539B]/20 text-[#00539B]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-[#00539B] text-white'
                  : 'bg-white border border-[#00539B]/20 text-[#00539B]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              #{category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 83, 155, 0.1)' }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-[#00539B]/10 cursor-pointer"
                >
                  {/* Category Tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 bg-[#00A3E0]/10 rounded text-xs"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00A3E0', fontWeight: 600 }}
                    >
                      #{article.category}
                    </span>
                    {article.trending && (
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#9E1B32' }}>
                        <TrendingUp className="w-3 h-3" />
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                          TRENDING
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2
                    className="text-3xl mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="mb-4 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.7 }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#00539B]/10">
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.6 }}
                    >
                      {article.author}
                    </span>
                    <span className="w-1 h-1 bg-[#00539B]/30 rounded-full" />
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.6 }}
                    >
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="w-1 h-1 bg-[#00539B]/30 rounded-full" />
                    <span
                      className="flex items-center gap-1 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.6 }}
                    >
                      <Clock className="w-3 h-3" />
                      {article.readTime} min read
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <p
                  className="text-xl"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.5 }}
                >
                  No articles found matching your search.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sticky top-24"
            >
              {/* Quick Reads */}
              <div className="bg-[#F5F7FA] rounded-2xl p-6 mb-6">
                <h3
                  className="text-xl mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00539B' }}
                >
                  <TrendingUp className="w-5 h-5" />
                  Quick Reads
                </h3>
                <div className="space-y-4">
                  {trendingArticles.slice(0, 5).map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="cursor-pointer group"
                    >
                      <div className="flex gap-3">
                        <span
                          className="text-2xl"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#00A3E0' }}
                        >
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4
                            className="mb-1 group-hover:text-[#00A3E0] transition-colors"
                            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, color: '#00539B' }}
                          >
                            {article.title}
                          </h4>
                          <p
                            className="text-xs flex items-center gap-1"
                            style={{ fontFamily: 'Inter, sans-serif', color: '#00539B', opacity: 0.6 }}
                          >
                            <Clock className="w-3 h-3" />
                            {article.readTime} min read
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#00539B] to-[#00A3E0] rounded-2xl p-6 text-white">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
                >
                  Stay Updated
                </h3>
                <p className="mb-4 text-sm" style={{ fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
                  Get the latest technical articles and research papers delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg mb-3 text-[#00539B] outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-white text-[#00539B] rounded-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
