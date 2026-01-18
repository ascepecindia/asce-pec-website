import { SEO } from '../SEO';
import React from "react";

export default function Header() {
  return (
    // This container sits at the very top of the page
    <header className="w-full flex justify-center py-6 relative z-50">
      
      {/* Logo Container with a hover effect */}
      <div className="relative group cursor-pointer transition-transform hover:scale-105 duration-300">
        
        {/* Optional: Blue Glow Effect behind the logo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        {/* The Logo Image */}
        <img 
          src="asce-logo.png" // This looks in the 'public' folder automatically
          alt="ASCE PEC Logo" 
          className="relative h-20 w-auto object-contain drop-shadow-xl"
        />
        
      </div>
    </header>
  );
}