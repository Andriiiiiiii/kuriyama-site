import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/sections/Footer";
import VisitingRulesHero from "@/components/sections/visiting-rules/VisitingRulesHero";
import VisitingRulesSlide2 from "@/components/sections/visiting-rules/VisitingRulesSlide2";
import VisitingRulesSlide3 from "@/components/sections/visiting-rules/VisitingRulesSlide3";
import VisitingRulesSlide4 from "@/components/sections/visiting-rules/VisitingRulesSlide4";
import VisitingRulesSlide5 from "@/components/sections/visiting-rules/VisitingRulesSlide5";
import VisitingRulesSlide6 from "@/components/sections/visiting-rules/VisitingRulesSlide6";
import VisitingRulesSlide7 from "@/components/sections/visiting-rules/VisitingRulesSlide7";
import VisitingRulesSlide8 from "@/components/sections/visiting-rules/VisitingRulesSlide8";

const VisitingRules: React.FC = () => {
  return (
    <main className="w-full bg-background">
      <Header activeSection="visit" />
      <VisitingRulesHero />
      <VisitingRulesSlide2 />
      <VisitingRulesSlide3 />
      <VisitingRulesSlide4 />
      <VisitingRulesSlide5 />
      <VisitingRulesSlide6 />
      <VisitingRulesSlide7 />
      <VisitingRulesSlide8 />
      <div style={{ marginTop: "calc(var(--layout-height-ratio, 56.25vw) * -0.08)", position: "relative", zIndex: 6 }}>
        <Footer formTitle="обсудим ваш случай" />
      </div>
    </main>
  );
};

export default VisitingRules;
