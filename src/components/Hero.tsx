
import React from 'react';
import { Button } from "@/components/ui/button";
import { Images, Trash2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-20 px-4 bg-neo-yellow border-b-4 border-black relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-neo-pink border-4 border-black rounded-full opacity-50"></div>
      {!isMobile && (
        <div className="absolute left-10 bottom-10 w-20 h-20 bg-neo-blue border-4 border-black animate-float"></div>
      )}
      
      <div className="neo-container relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6">Clean up your Google Photos in bulk.</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Select and delete multiple photos at once with our easy-to-use Chrome extension. Save time and keep your photo library tidy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="neo-button">Install Extension</Button>
              <Button variant="outline" className="border-4 border-black bg-white shadow-neo font-bold py-3 px-6 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {isMobile ? (
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 w-56 h-56 bg-white border-4 border-black shadow-neo rotate-6">
                  <div className="grid grid-cols-3 gap-2 p-3 h-full">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-full h-auto aspect-square bg-neo-gray border-2 border-black">
                        {i % 3 === 0 && <div className="w-full h-full flex items-center justify-center">
                          <Images size={16} />
                        </div>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-neo-blue border-4 border-black shadow-neo -rotate-3 flex items-center justify-center">
                  <Trash2 size={40} />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white border-4 border-black shadow-neo-lg rotate-6">
                  <div className="flex items-center justify-center h-full">
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-12 h-12 bg-neo-gray border-2 border-black">
                          {i % 3 === 0 && <div className="w-full h-full flex items-center justify-center">
                            <Images size={20} />
                          </div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-neo-blue border-4 border-black shadow-neo-lg -rotate-3 flex items-center justify-center">
                  <Trash2 size={64} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
