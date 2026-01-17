import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { EventsPage } from './components/pages/EventsPage';
// This is your new "About" page (formerly ProjectsPage)
import { ProjectsPage as AboutPage } from './components/pages/ProjectsPage'; 
import { TeamPage } from './components/pages/TeamPage';
import { BlogPage } from './components/pages/BlogPage';
import { JoinPage } from './components/pages/JoinPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage />;
      
      // --- CHANGED HERE: Connects 'about' ID to the AboutPage component ---
      case 'about':
        return <AboutPage />; 
      // -------------------------------------------------------------------

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