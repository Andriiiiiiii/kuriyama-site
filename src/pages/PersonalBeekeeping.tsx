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
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow text-primary hover:text-primary/80"
        >
          ← Главная
        </Link>
      </div>
      <Header activeSection="personal-beekeeping" />
      <PersonalBeekeepingHero />
      <PersonalBeekeepingClosing />
      <Footer />
    </main>
  );
};

export default PersonalBeekeeping;
