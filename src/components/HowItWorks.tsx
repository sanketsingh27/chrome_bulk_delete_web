import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Extension",
      description:
        "AddBulk Delete Google Photosto Chrome from the Chrome Web Store",
    },
    {
      number: "02",
      title: "Go to Google Photos",
      description: "Navigate to photos.google.com in your browser",
    },
    {
      number: "03",
      title: "Select Multiple Photos",
      description: "Use our extension to easily select photos in bulk",
    },
    {
      number: "04",
      title: "Delete with One Click",
      description: "Remove all selected photos at once",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 md:py-20 px-4 bg-white border-b-4 border-black"
    >
      <div className="neo-container">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-16 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`neo-card ${
                index % 4 === 0
                  ? "bg-neo-yellow"
                  : index % 4 === 1
                  ? "bg-neo-blue text-white"
                  : index % 4 === 2
                  ? "bg-neo-pink"
                  : "bg-neo-green"
              }`}
            >
              <div className="text-4xl md:text-5xl font-black mb-4">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
