import React from "react";
import Header from "@/components/shared/Header";
import {
  PolinationHero,
  PolinationSlide2,
  PolinationSlide3,
  PolinationSlide4,
  PolinationSlide5,
  PolinationSlide6,
  PolinationSlide7,
  PolinationSlide8,
  PolinationSlide9,
  PolinationSlide10,
  Footer,
  
} from "@/components/sections";

const Polination = () => {
  return (
    <main className="w-full bg-background whitespace-normal">
      <Header activeSection="beekeeping" />
      <PolinationHero />
      <PolinationSlide2 />
      <PolinationSlide3 />
      <PolinationSlide4 />
      <PolinationSlide5 />
      <PolinationSlide6 />
      <PolinationSlide7 />
      <PolinationSlide8 />
      <PolinationSlide9 />
      <PolinationSlide10 />
      <div className="relative z-10 -mt-[10vw]">
        <Footer />
      </div>
    </main>
  );
};

export default Polination;
