// components/Cursor.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ variant = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference'
    },
    cta: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 3,
      backgroundColor: '#8b5cf6',
      mixBlendMode: 'normal'
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="cursor fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50"
        variants={variants}
        animate={variant}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default Cursor;