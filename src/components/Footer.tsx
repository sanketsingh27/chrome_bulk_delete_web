
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 bg-black text-white">
      <div className="neo-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-8 h-8 bg-neo-blue border-2 border-white"></div>
              <h2 className="text-xl font-bold">Bulk Delete Google Photos</h2>
            </div>
            <p>© 2025 Pixel Cleanup Crew. All rights reserved.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4 text-center md:text-left">
            <a href="#features" className="hover:underline">Features</a>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <a href="#how-it-works" className="hover:underline">How It Works</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/30 text-center text-sm">
          <p>Bulk Delete Google Photos is not affiliated with Google or Google Photos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
