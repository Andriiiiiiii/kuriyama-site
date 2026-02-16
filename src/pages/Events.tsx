import React from "react";
import Header from "@/components/shared/Header";
import EventsSlide1 from "@/components/sections/events/EventsSlide1";
import EventsSlide2 from "@/components/sections/events/EventsSlide2";
import EventsSlide3 from "@/components/sections/events/EventsSlide3";
import { CorporateBeekeepingSlide12, Footer } from "@/components/sections";

const Events = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="visit" />
      <EventsSlide1 />
      <EventsSlide2 />
      <EventsSlide3 />
      <CorporateBeekeepingSlide12 />
      <div className="-mt-[8%] relative z-10">
        <Footer />
      </div>
    </main>
  );
};

export default Events;
