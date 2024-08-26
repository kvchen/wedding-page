import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import TypedText from "./typedText";

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function HeroText() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y = useTransform(scrollY, [0, 100], [0, 40], {
    clamp: false,
  });

  return (
    <motion.div
      className="absolute left-0 right-0 top-32 flex flex-col items-center gap-8 text-center md:top-48"
      style={{ opacity, y }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="flex flex-row items-center"
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className={`font-heading text-primary-900 inline-block align-middle text-6xl font-thin md:text-8xl`}
        >
          Kevin <motion.span className="text-accent-green">&</motion.span> Lena
        </motion.span>
      </motion.div>
      <motion.div
        className={`text-secondary-700 flex flex-col items-center text-xl uppercase`}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        <TypedText
          firstLine="Saturday, May 31, 2025"
          secondLine="Walnut Creek, CA"
        />
      </motion.div>
    </motion.div>
  );
}
