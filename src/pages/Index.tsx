import React from 'react';
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
