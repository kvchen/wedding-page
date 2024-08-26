import React from "react";

import Section from "../../components/section";
import { Link } from "gatsby";

export default function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <Section className="flex flex-col items-stretch bg-accent-orange">
      <div className="px-12 py-8 text-center lg:px-24">
        <span className="inline-block">
          Copyright &copy; {year} Kevin Chen & Lena Wu.
        </span>{" "}
        <Link
          to="https://github.com/kvchen/wedding-page"
          className="inline-block underline underline-offset-4"
          target="_blank"
        >
          Source code available on Github.
        </Link>
      </div>
    </Section>
  );
}
