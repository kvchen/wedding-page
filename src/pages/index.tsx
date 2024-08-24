import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import Hero from "../components/hero";
import Section from "../components/section";
import Footer from "../components/footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-bg-primary font-body">
      {/* <Header /> */}
      <Hero />
      <Section className="bg-primary h-[64rem]">
        <h1>Our Wedding</h1>
        <p>May 31, 2025</p>
        <p>5:00 PM - 10:00 PM</p>
        <br />
        <p>The Ruth Bancroft Garden</p>
        <p>1552 Bancroft Rd, Walnut Creek, CA 94598</p>
        <br />
        <p>Attire: Black Tie Encouraged</p>
      </Section>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
