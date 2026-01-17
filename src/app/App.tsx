import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { EventsPage } from './components/pages/EventsPage';
import { ProjectsPage as AboutPage } from './components/pages/ProjectsPage'; 
import { TeamPage } from './components/pages/TeamPage';
import { BlogPage } from './components/pages/BlogPage';
import { JoinPage } from './components/pages/JoinPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  // Initialize state based on the current URL, default to 'home'
  const [currentPage, setCurrentPage] = useState('home');

  // --- ROUTING LOGIC STARTS HERE ---
  useEffect(() => {
    // 1. Check URL on Initial Load
    const handleInitialLoad = () => {
      // Get path (e.g., "team" from "https://site.com/team")
      // If path is empty (root "/"), default to 'home'
      const path = window.location.pathname.substring(1) || 'home';
      
      const validPages = ['home', 'events', 'about', 'team', 'blog', 'join'];
      
      if (validPages.includes(path)) {
        setCurrentPage(path);
      }
    };

    // 2. Handle Browser Back/Forward Buttons
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      setCurrentPage(path);
    };

    // Run initial check
    handleInitialLoad();

    // Listen for history changes (Back button)
    window.addEventListener('popstate', handlePopState);

    // Cleanup listener when app unmounts
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 3. Update URL without reloading the page
    // If page is 'home', we use '/' otherwise '/pageName'
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
  };
  // --- ROUTING LOGIC ENDS HERE ---

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage />;
      case 'about':
        return <AboutPage />; 
      case 'team':
        return <TeamPage />;
      case 'blog':
        return <BlogPage />;
      case 'join':
        return <JoinPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          // Pushes content down to clear the Skyline Navbar
          className="pt-6 md:pt-52" 
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}