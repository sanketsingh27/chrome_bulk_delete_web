import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-neo-pink border-b-4 border-black">
      <div className="neo-container text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6">
          Ready to clean up your photos?
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Install Bulk Delete All Google Photos extension today and start
          managing your Google Photos library more efficiently.
        </p>

        <Button className="neo-button text-lg md:text-xl py-3 md:py-4 px-6 md:px-8">
          Install Extension Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
