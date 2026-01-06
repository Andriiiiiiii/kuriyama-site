import React from 'react';
import SeasonalActivities from '@/components/SeasonalActivities';
import Rules from '@/components/Rules';
import HorizontalGallery from '@/components/HorizontalGallery';
import DailyPass from '@/components/DailyPass';
import Tariffs from '@/components/Tariffs';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="w-full bg-background">
      <SeasonalActivities />
      <Rules />
      <HorizontalGallery />
      <DailyPass />
      <Tariffs />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
