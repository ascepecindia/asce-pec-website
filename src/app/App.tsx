import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { EventsPage } from './components/pages/EventsPage';
import { ProjectsPage as AboutPage } from './components/pages/ProjectsPage'; 
import { TeamPage } from './components/pages/TeamPage';
import { BlogPage } from './components/pages/BlogPage';
import { JoinPage } from './components/pages/JoinPage';

// --- NEW IMPORTS ---
import { EventDetailsPage } from './components/pages/EventDetailsPage';
import { EventGalleryPage } from './components/pages/EventGalleryPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // Store the ID of the specific event being viewed (e.g., 'rec-25')
  const [currentEventId, setCurrentEventId] = useState<string>('');

  // --- ROUTING LOGIC ---
  useEffect(() => {
    const handleInitialLoad = () => {
      // Get path (remove leading slash)
      const path = window.location.pathname.substring(1) || 'home';
      
      // 1. Check for Gallery Route (e.g. "events/rec-25/gallery")
      if (path.includes('/gallery')) {
        const parts = path.split('/');
        // Format: events/[id]/gallery -> parts[1] is the ID
        if (parts[1]) {
          setCurrentEventId(parts[1]);
          setCurrentPage('event-gallery');
          return;
        }
      }

      // 2. Check for Event Details Route (e.g. "events/rec-25")
      else if (path.startsWith('events/')) {
        const eventId = path.split('/')[1];
        if (eventId) {
          setCurrentEventId(eventId);
          setCurrentPage('event-details');
          return;
        }
      }

      // 3. Normal Pages
      const validPages = ['home', 'events', 'about', 'team', 'blog', 'join'];
      if (validPages.includes(path)) {
        setCurrentPage(path);
      }
    };

    // Handle browser back/forward buttons
    window.addEventListener('popstate', handleInitialLoad);
    
    // Run on first load
    handleInitialLoad();

    return () => window.removeEventListener('popstate', handleInitialLoad);
  }, []);

  const handleNavigate = (page: string) => {
    // 1. Gallery Navigation
    if (page.includes('/gallery')) {
      const parts = page.split('/');
      if (parts[1]) {
        setCurrentEventId(parts[1]);
        setCurrentPage('event-gallery');
        window.history.pushState({}, '', `/${page}`);
      }
    }
    // 2. Event Details Navigation
    else if (page.startsWith('events/')) {
      const eventId = page.split('/')[1];
      setCurrentEventId(eventId);
      setCurrentPage('event-details');
      window.history.pushState({}, '', `/${page}`);
    } 
    // 3. Normal Navigation
    else {
      setCurrentPage(page);
      const url = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({}, '', url);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'events': return <EventsPage />;
      
      // --- NEW PAGES ---
      case 'event-details': 
        return <EventDetailsPage eventId={currentEventId} onNavigate={handleNavigate} />;
      case 'event-gallery': 
        return <EventGalleryPage eventId={currentEventId} onNavigate={handleNavigate} />;
      // ----------------

      case 'about': return <AboutPage />; 
      case 'team': return <TeamPage />;
      case 'blog': return <BlogPage />;
      case 'join': return <JoinPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Hide Navigation on the immersive Gallery page */}
      {currentPage !== 'event-gallery' && (
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + currentEventId} // Unique key ensures animation triggers when switching events
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          // Remove top padding only for the gallery page to make it full screen
          className={currentPage === 'event-gallery' ? "" : "pt-6 md:pt-52"} 
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Hide Footer on the immersive Gallery page */}
      {currentPage !== 'event-gallery' && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
}