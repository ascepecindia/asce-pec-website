import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { HelmetProvider } from 'react-helmet-async';

// --- CORRECTED CSS IMPORT PATHS ---
// Based on your screenshot, index.css is inside the 'styles' folder
import './styles/index.css'; 
// If you are using tailwind.css separately, import it here too:
import './styles/tailwind.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);