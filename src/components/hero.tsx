"use client";

import { StaticImage } from "gatsby-plugin-image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Section from "./section";

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 100], [0, 20], { clamp: false });
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Section className="h-[85lvh]">
      <motion.div
        style={{ y: heroY }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <StaticImage
          alt="Kevin and Lena walking down a street in an Italian villa"
          src="../images/hero_bg.jpg"
          className="sepia-[.1] object-cover h-[100lvh]"
          sizes="100vw"
          placeholder="blurred"
          draggable={false}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center text-center mt-24 sm:mt-36 gap-4"
        style={{ opacity: textOpacity }}
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
            className={`font-headings font-light align-middle inline-block text-4xl sm:text-6xl lg:text-8xl`}
          >
            Kevin{" "}
            <motion.span className="text-accent-green text-3xl sm:text-5xl lg:text-7xl">
              &
            </motion.span>{" "}
            Lena
          </motion.span>
        </motion.div>
        <motion.div
          className={`flex flex-col items-center font-light text-xl`}
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl mb-2">Saturday, May 31, 2025</span>
          <span>The Ruth Bancroft Garden</span>
          <span>Walnut Creek, CA</span>
        </motion.div>
      </motion.div>
    </Section>
  );
}
