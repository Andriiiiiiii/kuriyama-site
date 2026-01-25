import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";
import {
  PersonalBeekeepingHero,
  PersonalBeekeepingClosing,
  Footer,
} from "@/components/sections";

const PersonalBeekeeping = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="personal-beekeeping" />
      <PersonalBeekeepingHero />
      <PersonalBeekeepingClosing />
      <Footer />
    </main>
  );
};

export default PersonalBeekeeping;
