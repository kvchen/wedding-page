import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import Hero from "../components/hero";
import Section from "../components/section";
import Footer from "../components/footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-bg-primary font-body">
      <Header />
      <Hero />
      <Section className="bg-primary h-[64rem]">Our Wedding</Section>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
