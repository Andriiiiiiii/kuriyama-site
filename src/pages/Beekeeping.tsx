import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";
import {
  BeekeepingHero,
  BeekeepingSlide2,
  BeekeepingSlide3,
  BeekeepingSlide4,
  BeekeepingSlide5,
  BeekeepingSlide6,
  BeekeepingClosing,
  Reviews,
  Footer,
} from "@/components/sections";

const Beekeeping = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="beekeeping" />
      <BeekeepingHero />
      <BeekeepingSlide2 />
      <BeekeepingSlide3 />
      <BeekeepingSlide4 />
      <BeekeepingSlide5 />
      <BeekeepingSlide6 />
      <Reviews />
      <BeekeepingSlide4 />
      <BeekeepingClosing />
      <Footer />
    </main>
  );
};

export default Beekeeping;
