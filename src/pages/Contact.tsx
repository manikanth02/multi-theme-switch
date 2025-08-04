import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="mt-24 p-4 md:p-8">
    <div className="min-h-screen p-4 md:p-8 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg leading-relaxed max-w-2xl">
        We'd love to hear from you! You can reach us at:
      </p>

      <ul className="mt-4 list-disc list-inside">
        <li>Email: support@example.com</li>
        <li>Phone: +91-123-456-7890</li>
        <li>Twitter: @ourapp</li>
      </ul>
    </div>
    </main>
  );
};

export default Contact;
