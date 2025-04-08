
import React from 'react';
import { Check, Images, Trash2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Bulk Selection",
      description: "Select multiple photos at once with simple checkbox selection",
      icon: <Images size={32} />
    },
    {
      title: "Batch Delete",
      description: "Remove multiple photos with a single click",
      icon: <Trash2 size={32} />
    },
    {
      title: "Time-Saving",
      description: "Cleanup your photo library in minutes instead of hours",
      icon: <Check size={32} />
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 px-4 bg-neo-blue border-b-4 border-black">
      <div className="neo-container">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 md:mb-16 text-center">Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="neo-card bg-white transform hover:-translate-y-2 transition-transform duration-300 text-center md:text-left"
            >
              <div className="w-16 h-16 mx-auto md:mx-0 bg-neo-yellow border-4 border-black rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
