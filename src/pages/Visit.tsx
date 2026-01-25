import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/shared/Header";
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
      <Header activeSection="visit" />
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
