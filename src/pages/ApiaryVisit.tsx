import React from "react";
import Header from "@/components/shared/Header";
import ApiaryVisitHero from "@/components/sections/apiary-visit/ApiaryVisitHero";
import ApiaryVisitSlide2 from "@/components/sections/apiary-visit/ApiaryVisitSlide2";
import ApiaryVisitSlide3 from "@/components/sections/apiary-visit/ApiaryVisitSlide3";
import ApiaryVisitSlide4 from "@/components/sections/apiary-visit/ApiaryVisitSlide4";
import ApiaryVisitSlide5 from "@/components/sections/apiary-visit/ApiaryVisitSlide5";
import ApiaryVisitSlide6 from "@/components/sections/apiary-visit/ApiaryVisitSlide6";
import {
  FAQ,
  Reviews,
  CorporateBeekeepingSlide12,
  Footer,
} from "@/components/sections";

const ApiaryVisit = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="visit" />
      <ApiaryVisitHero />
      <ApiaryVisitSlide2 />
      <ApiaryVisitSlide3 />
      <div className="-mt-[25vh] relative z-20">
        <ApiaryVisitSlide4 />
      </div>
      <ApiaryVisitSlide5 />
      <Reviews />
      <ApiaryVisitSlide6 />
      <FAQ questionText="Вопрос о мероприятии" />
      <CorporateBeekeepingSlide12 />
      <div className="-mt-[8%] relative z-10">
        <Footer />
      </div>
    </main>
  );
};

export default ApiaryVisit;
