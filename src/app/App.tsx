import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { EventsPage } from './components/pages/EventsPage';
import { ProjectsPage as AboutPage } from './components/pages/ProjectsPage'; 
import { TeamPage } from './components/pages/TeamPage';
import { BlogPage } from './components/pages/BlogPage';
import { JoinPage } from './components/pages/JoinPage'; // Contact Page
import { EventDetailsPage } from './components/pages/EventDetailsPage';
import { EventGalleryPage } from './components/pages/EventGalleryPage';
// NEW IMPORT FOR BLOGS
import { BlogDetailsPage } from './components/pages/BlogDetailsPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // We use this single state to store either Event ID or Blog ID
  const [currentId, setCurrentId] = useState<string>(''); 

  useEffect(() => {
    const handleInitialLoad = () => {
      const path = window.location.pathname.substring(1) || 'home';
      
      // 1. Check for Blog Details Route (e.g. "blog/ai-revolution")
      if (path.startsWith('blog/')) {
        const parts = path.split('/');
        if (parts[1]) {
          setCurrentId(parts[1]);
          setCurrentPage('blog-details');
          return;
        }
      }

      // 2. Check for Event Routes
      if (path.startsWith('events/')) {
        const parts = path.split('/');
        // Check for Gallery first: events/[id]/gallery
        if (path.includes('/gallery')) {
           setCurrentId(parts[1]);
           setCurrentPage('event-gallery');
           return;
        }
        // Check for Details: events/[id]
        if (parts[1]) {
           setCurrentId(parts[1]);
           setCurrentPage('event-details');
           return;
        }
      }

      // 3. Normal Pages
      const validPages = ['home', 'events', 'about', 'team', 'blog', 'contact'];
      if (validPages.includes(path)) {
        setCurrentPage(path);
      }
    };

    window.addEventListener('popstate', handleInitialLoad);
    handleInitialLoad();
    return () => window.removeEventListener('popstate', handleInitialLoad);
  }, []);

  const handleNavigate = (page: string) => {
    // BLOG NAVIGATION LOGIC
    if (page.startsWith('blog/')) {
      const parts = page.split('/');
      if (parts[1]) {
        setCurrentId(parts[1]);
        setCurrentPage('blog-details');
        window.history.pushState({}, '', `/${page}`);
      }
    }
    // EVENT GALLERY LOGIC
    else if (page.includes('/gallery')) {
      const parts = page.split('/');
      if (parts[1]) {
        setCurrentId(parts[1]);
        setCurrentPage('event-gallery');
        window.history.pushState({}, '', `/${page}`);
      }
    }
    // EVENT DETAILS LOGIC
    else if (page.startsWith('events/')) {
      const parts = page.split('/');
      if (parts[1]) {
        setCurrentId(parts[1]);
        setCurrentPage('event-details');
        window.history.pushState({}, '', `/${page}`);
      }
    } 
    // NORMAL NAVIGATION
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
      case 'events': return <EventsPage onNavigate={handleNavigate} />;
      
      case 'event-details': return <EventDetailsPage eventId={currentId} onNavigate={handleNavigate} />;
      case 'event-gallery': return <EventGalleryPage eventId={currentId} onNavigate={handleNavigate} />;
      
      // BLOG CASES
      case 'blog': return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-details': return <BlogDetailsPage blogId={currentId} onNavigate={handleNavigate} />;
      
      case 'about': return <AboutPage />; 
      case 'team': return <TeamPage />;
      case 'contact': return <JoinPage />; 
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hide Navigation on immersive Gallery page */}
      {currentPage !== 'event-gallery' && (
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + currentId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={currentPage === 'event-gallery' ? "" : "pt-6 md:pt-52"} 
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Hide Footer on immersive Gallery page */}
      {currentPage !== 'event-gallery' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}