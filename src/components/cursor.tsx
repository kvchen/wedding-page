import React from "react";

import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function Cursor({ className }: Readonly<{ className: string }>) {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={`inline-block h-[20px] w-[12px] translate-y-[2px] ${className}`}
    />
  );
}
