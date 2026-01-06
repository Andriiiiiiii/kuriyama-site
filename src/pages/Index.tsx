import React from 'react';
import SeasonalActivities from '@/components/SeasonalActivities';
import Rules from '@/components/Rules';
import DailyPass from '@/components/DailyPass';

const Index = () => {
  return (
    <main className="w-full bg-background">
      <SeasonalActivities />
      <Rules />
      <DailyPass />
    </main>
  );
};

export default Index;
