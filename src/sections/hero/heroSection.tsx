import React from "react";

import Section from "../../components/section";
import HeroText from "./heroText";
import HeroImage from "./heroImage";

export default function HeroSection() {
  return (
    <Section className="h-[85lvh]">
      <HeroImage initialTranslateY={-80} parallaxPercentage={20} />
      <HeroText />
    </Section>
  );
}
