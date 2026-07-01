import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import WhatWeLike from "@/components/WhatWeLike";
import Team from "@/components/Team";
import Regions from "@/components/Regions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Approach />
        <WhatWeLike />
        <Team />
        <Regions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
