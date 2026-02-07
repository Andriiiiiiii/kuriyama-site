import React from "react";
import Header from "@/components/shared/Header";
import { ConceptHero, ConceptSlide2, ConceptSlide3, ConceptSlide4, ConceptSlide5, ConceptSlide6, Footer } from "@/components/sections";

const Concept = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="history" />
      <ConceptHero />
      <ConceptSlide2 />
      <ConceptSlide3 />
      <ConceptSlide4 />
      <ConceptSlide5 />
      <ConceptSlide6 />
      <Footer />
    </main>
  );
};

export default Concept;
