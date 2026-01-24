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
      <div className="fixed top-4 left-4 z-[100]">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow text-primary hover:text-primary/80 cursor-pointer"
        >
          ← Главная
        </Link>
      </div>
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
