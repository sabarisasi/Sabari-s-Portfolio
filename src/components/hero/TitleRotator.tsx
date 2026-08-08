import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profile';

export const TitleRotator: React.FC = () => {
  const titles = profileData.rotatableTitles || [
    "AI-Assisted Developer",
    "No-Code Developer",
    "Full-Stack Web Developer",
    "Web Application Developer",
    "AI Application Builder",
    "Digital Product Builder"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 400); // fade duration
    }, 2800); // rotation cadence

    return () => clearInterval(interval);
  }, [titles.length]);

  if (reducedMotion) {
    return (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-extrabold">
        {titles[0]}
      </span>
    );
  }

  return (
    <span className="relative inline-block overflow-hidden align-bottom min-h-[1.25em]">
      {/* Invisible placeholder for longest title to prevent ANY layout shift */}
      <span className="opacity-0 pointer-events-none select-none font-extrabold inline-block px-1">
        Web Application Developer
      </span>

      {/* Animated active title */}
      <span
        className={`absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-extrabold transition-all duration-500 ease-out flex items-center ${
          isAnimating
            ? 'opacity-0 -translate-y-2 blur-xs'
            : 'opacity-100 translate-y-0 blur-none'
        }`}
      >
        {titles[currentIndex]}
      </span>
    </span>
  );
};
