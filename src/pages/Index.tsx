import React from 'react';
import HeroVisit from '@/components/HeroVisit';
import WhatIsThisPlace from '@/components/WhatIsThisPlace';
import KuriyamaPlan from '@/components/KuriyamaPlan';
import DayPassJapan from '@/components/DayPassJapan';
import Products from '@/components/Products';
import DailyPassBanner from '@/components/DailyPassBanner';
import VisitProcess from '@/components/VisitProcess';
import SeasonalActivities from '@/components/SeasonalActivities';
import Rules from '@/components/Rules';
import HorizontalGallery from '@/components/HorizontalGallery';
import DailyPass from '@/components/DailyPass';
import FAQ from '@/components/FAQ';
import Reviews from '@/components/Reviews';
import Tariffs from '@/components/Tariffs';
import Footer from '@/components/Footer';

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
