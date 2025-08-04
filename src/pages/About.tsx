// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <main className="mt-24 p-4 md:p-8">
    <div className="min-h-screen p-4 md:p-8 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed max-w-2xl">
        Welcome to our multi-theme app! This app was built using React and Tailwind CSS to demonstrate theme switching and responsive design.
        <br />
        <br />
        Switch themes from the dropdown in the header and enjoy a consistent experience across different pages.
      </p>
    </div>
    </main>
  );
};

export default About;
