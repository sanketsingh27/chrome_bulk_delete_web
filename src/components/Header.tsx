
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b-4 border-black py-4 bg-neo-gray sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-neo-blue border-4 border-black"></div>
            <h1 className="text-xl font-bold">Bulk Delete Google Photos</h1>
          </Link>
        </div>
        
        {isMobile ? (
          <div className="flex items-center">
            <Button className="neo-button" size="sm">Install Now</Button>
            <button 
              onClick={toggleMenu} 
              className="ml-4 p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        ) : (
          <>
            <nav>
              <ul className="flex gap-8">
                <li><a href="#features" className="font-bold hover:underline">Features</a></li>
                <li><a href="#how-it-works" className="font-bold hover:underline">How It Works</a></li>
                <li><a href="#faq" className="font-bold hover:underline">FAQ</a></li>
                <li><Link to="/privacy-policy" className="font-bold hover:underline">Privacy</Link></li>
              </ul>
            </nav>
            <Button className="neo-button">Install Now</Button>
          </>
        )}
      </div>
      
      {isMobile && isMenuOpen && (
        <div className="container mt-4 pb-4 animate-in fade-in slide-in-from-top-5">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="#features" 
                  className="font-bold hover:underline block py-2 border-b-2 border-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="font-bold hover:underline block py-2 border-b-2 border-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="font-bold hover:underline block py-2 border-b-2 border-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="font-bold hover:underline block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
