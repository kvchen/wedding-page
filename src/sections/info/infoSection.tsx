import React from "react";

import Section from "../../components/section";
import { StaticImage } from "gatsby-plugin-image";
import Cursor from "../../components/cursor";

export default function InfoSection() {
  return (
    <Section className="bg-background flex flex-col items-stretch">
      <div className="grid grid-cols-1 gap-12 px-8 py-12 lg:grid-cols-2 lg:px-24 lg:py-16">
        <div className="flex flex-col gap-6 text-xl">
          <h1 className="font-heading text-6xl">We're getting married!</h1>
          <div>
            <p className="text-secondary-400">Date</p>
            <p>May 31, 2025</p>
          </div>
          <div>
            <p className="text-secondary-400">Location</p>
            <p>The Ruth Bancroft Garden</p>
            <p>1552 Bancroft Rd</p>
            <p>Walnut Creek, CA 94598</p>
          </div>
          <div>
            <p className="text-secondary-400 lg:mt-12">
              Additional details to follow.
              <Cursor className="bg-secondary-400" />
            </p>
          </div>
        </div>
        <StaticImage
          className="h-[48rem]"
          objectPosition="center 20%"
          alt="Kevin and Lena"
          src="../../images/RRV04319.jpg"
          draggable={false}
        />
      </div>
    </Section>
  );
}
