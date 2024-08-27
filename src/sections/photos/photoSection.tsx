import React from "react";

import Section from "../../components/section";
import { StaticImage } from "gatsby-plugin-image";

export default function PhotosSection() {
  return (
    <Section className="flex flex-col items-stretch bg-[#769250]">
      <div className="grid grid-flow-row auto-rows-[minmax(0,36rem)] grid-cols-1 gap-12 px-12 py-16 lg:grid-cols-2 lg:px-24">
        <StaticImage
          className="lg:row-span-2"
          objectPosition="80% bottom"
          alt="In front of Cafe de la Presse"
          src="../../images/DSC04246.jpg"
          draggable={false}
        />
        <StaticImage
          objectPosition="bottom"
          alt="In front of Wayfare Tavern"
          src="../../images/DSC04520.jpg"
          draggable={false}
        />
        <StaticImage
          objectPosition="center"
          alt="In the dome at the Villa Melzi D'Eril"
          src="../../images/Lena&Kevin_122.jpg"
          draggable={false}
        />
      </div>
    </Section>
  );
}
