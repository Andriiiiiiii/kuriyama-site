import React from "react";
import { Link } from "react-router-dom";
import {
  BeekeepingHero,
  Reviews,
  Footer,
} from "@/components/sections";

const Beekeeping = () => {
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
      <BeekeepingHero />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Beekeeping;
