"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const snapTarget = target.closest(".cursor-snap");
      if (snapTarget) {
        setIsSnapping(true);
        setIsHovering(true);
        return;
      } else {
        setIsSnapping(false);
      }

      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isSnapping ? 1.5 : isHovering ? 2.5 : 1,
        borderWidth: "1px",
        borderColor: isSnapping ? "rgba(255, 255, 255, 1)" : isHovering ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)",
        backgroundColor: isSnapping ? "rgba(255, 255, 255, 1)" : isHovering ? "rgba(255, 255, 255, 0.05)" : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
        mass: 0.5,
      }}
    />
  );
}
