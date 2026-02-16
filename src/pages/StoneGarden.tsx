import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/sections/Footer";
import StoneGardenHero from "@/components/sections/stone-garden/StoneGardenHero";
import StoneGardenSlide2 from "@/components/sections/stone-garden/StoneGardenSlide2";
import StoneGardenSlide3 from "@/components/sections/stone-garden/StoneGardenSlide3";
import StoneGardenSlide5 from "@/components/sections/stone-garden/StoneGardenSlide5";
import StoneGardenSlide6 from "@/components/sections/stone-garden/StoneGardenSlide6";
import HorizontalGallery from "@/components/sections/visit/HorizontalGallery";

const StoneGarden: React.FC = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="visit" />
      <StoneGardenHero />
      <StoneGardenSlide2 />
      <StoneGardenSlide3 />
      <HorizontalGallery />
      <StoneGardenSlide5 />
      <StoneGardenSlide6 />
      <div
        style={{
          marginTop: "calc(var(--layout-height-ratio, 56.25vw) * -0.08)",
          position: "relative",
          zIndex: 6,
        }}
      >
        <Footer formTitle="обсудим ваш случай" />
      </div>
    </main>
  );
};

export default StoneGarden;
