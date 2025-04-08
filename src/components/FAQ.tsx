
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this extension free to use?",
      answer: "Yes, Pixel Cleanup Crew is completely free to download and use."
    },
    {
      question: "Does it work with other photo services besides Google Photos?",
      answer: "Currently, our extension only works with Google Photos, but we're considering expanding to other services in the future."
    },
    {
      question: "Will this extension access my Google account?",
      answer: "The extension only operates within your browser and doesn't access your Google account credentials. It simply provides an interface to interact with Google Photos more efficiently."
    },
    {
      question: "Can I recover photos after deletion?",
      answer: "Deleted photos will be moved to the trash in Google Photos, where they'll remain for 60 days before being permanently deleted. You can recover them from the trash during this period."
    }
  ];

  return (
    <section id="faq" className="py-12 md:py-20 px-4 bg-neo-gray border-b-4 border-black">
      <div className="neo-container">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-16 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-4 border-black shadow-neo bg-white"
              >
                <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 font-bold text-lg md:text-xl hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 py-3 md:py-4 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
