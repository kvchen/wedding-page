import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroImage({
  initialTranslateY,
  parallaxPercentage,
}: Readonly<{ initialTranslateY: number; parallaxPercentage: number }>) {
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [0, 100],
    [initialTranslateY, initialTranslateY + parallaxPercentage],
    { clamp: false },
  );

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <StaticImage
        alt="Kevin and Lena"
        src="../../images/DSC04609.jpg"
        className="h-[100lvh] object-cover"
        quality={80}
        draggable={false}
        loading="eager"
        layout="fullWidth"
      />
    </motion.div>
  );
}
