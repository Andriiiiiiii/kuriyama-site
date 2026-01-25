import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";
import {
  Footer,
  CorporateBeekeepingHero,
  CorporateBeekeepingSlide2,
  CorporateBeekeepingSlide3,
  CorporateBeekeepingSlide4,
  CorporateBeekeepingSlide5,
  CorporateBeekeepingSlide6,
  CorporateBeekeepingSlide7,
  CorporateBeekeepingSlide8,
  CorporateBeekeepingSlide9,
  CorporateBeekeepingSlide10,
  CorporateBeekeepingSlide11,
  CorporateBeekeepingSlide12
} from "@/components/sections";

const CorporateBeekeeping = () => {
  return (
    <main className="w-full bg-background min-h-screen flex flex-col">
      <Header activeSection="corporate-beekeeping" />
      <CorporateBeekeepingHero />
      <CorporateBeekeepingSlide2 />
      <CorporateBeekeepingSlide3 />
      <CorporateBeekeepingSlide4 />
      <CorporateBeekeepingSlide5 />
      <CorporateBeekeepingSlide6 />
      <CorporateBeekeepingSlide7 />
      <CorporateBeekeepingSlide8 />
      <CorporateBeekeepingSlide9 />
      <CorporateBeekeepingSlide10 />
      <CorporateBeekeepingSlide11 />
      <CorporateBeekeepingSlide12 />
      <div className="-mt-[8%] relative z-10">
        <Footer />
      </div>
    </main>
  );
};

export default CorporateBeekeeping;
