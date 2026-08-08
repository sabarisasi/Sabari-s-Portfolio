import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 right-6 z-40 p-3 rounded-2xl bg-blue-600/90 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 border border-blue-400/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
