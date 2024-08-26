import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import HeroSection from "../sections/hero/heroSection";
import InfoSection from "../sections/info/infoSection";
import FooterSection from "../sections/footer/footerSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-bg-primary flex min-h-screen flex-col items-stretch font-body text-xl">
      <HeroSection />
      <InfoSection />
      <FooterSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kevin & Lena</title>;
