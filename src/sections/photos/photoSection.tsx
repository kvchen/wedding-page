import React from "react";

import Section from "../../components/section";
import { StaticImage } from "gatsby-plugin-image";

export default function PhotosSection() {
  return (
    <Section className="bg-background flex flex-col items-stretch">
      <div className="grid grid-cols-1 gap-12 px-12 py-16 lg:grid-cols-2 lg:px-24">
        <div className="flex flex-col gap-6 text-xl">
          <h1 className="font-heading text-6xl">We're getting married!</h1>
          <div>
            <p className="text-secondary-400">Date/Time</p>
            <p>May 31, 2025</p>
            <p>5:00 PM - 10:00 PM</p>
          </div>
          <div>
            <p className="text-secondary-400">Location</p>
            <p>The Ruth Bancroft Garden</p>
            <p>1552 Bancroft Rd, Walnut Creek, CA 94598</p>
          </div>
          <div>
            <p className="text-secondary-400">Attire</p>
            <p>Black Tie encouraged</p>
          </div>
        </div>
        <StaticImage
          className="h-[48rem]"
          objectPosition="center 20%"
          alt="Kevin and Lena"
          src="../../images/RRV04319.jpg"
          draggable={false}
          loading="eager"
          layout="fullWidth"
        />
      </div>
    </Section>
  );
}
