import React from "react";
import { Link } from "react-router-dom";
import {
  HeroVisit,
  WhatIsThisPlace,
  KuriyamaPlan,
  DayPassJapan,
  Products,
  DailyPassBanner,
  VisitProcess,
  SeasonalActivities,
  Rules,
  HorizontalGallery,
  DailyPass,
  FAQ,
  Reviews,
  Tariffs,
  Footer,
} from "@/components/sections";

const Visit = () => {
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
      <HeroVisit />
      <WhatIsThisPlace />
      <KuriyamaPlan />
      <DayPassJapan />
      <Products />
      <DailyPassBanner />
      <VisitProcess />
      <SeasonalActivities />
      <Rules />
      <HorizontalGallery />
      <DailyPass />
      <FAQ />
      <Reviews />
      <Tariffs />
      <Footer />
    </main>
  );
};

export default Visit;
