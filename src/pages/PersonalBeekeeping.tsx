import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";
import {
  PersonalBeekeepingHero,
  PersonalBeekeepingSlide2,
  PersonalBeekeepingSlide3,
  PersonalBeekeepingSlide4,
  PersonalBeekeepingSlide5,
  PersonalBeekeepingSlide6,
  PersonalBeekeepingSlide7,
  PersonalBeekeepingSlide8,
  PersonalBeekeepingSlide9,
  PersonalBeekeepingSlide10,
  PersonalBeekeepingSlide11,
  Footer,
} from "@/components/sections";

const PersonalBeekeeping = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="personal-beekeeping" />
      <PersonalBeekeepingHero />
      <PersonalBeekeepingSlide2 />
      <PersonalBeekeepingSlide3 />
      <PersonalBeekeepingSlide4 />
      <PersonalBeekeepingSlide5 />
      <PersonalBeekeepingSlide6 />
      <PersonalBeekeepingSlide7 />
      <PersonalBeekeepingSlide8 />
      <PersonalBeekeepingSlide9 />
      <PersonalBeekeepingSlide10 />
      <PersonalBeekeepingSlide11 />
      <Footer />
    </main>
  );
};

export default PersonalBeekeeping;
