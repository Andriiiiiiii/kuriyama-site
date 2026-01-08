import React from "react";
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

const Index = () => {
  return (
    <main className="w-full bg-background">
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

export default Index;
