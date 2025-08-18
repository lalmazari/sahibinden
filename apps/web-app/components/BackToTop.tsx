"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200); // show after scrolling 200px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 hover:cursor-pointer transition-all"
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
      <span className="text-sm font-medium">Back to Top</span>
    </button>
  );
}
