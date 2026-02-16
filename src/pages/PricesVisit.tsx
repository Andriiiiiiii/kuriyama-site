import React, { useState } from "react";
import Header from "@/components/shared/Header";
import { PricesVisitSlide7, PricesVisitClosing } from "@/components/sections";
import PricesVisitContactModal from "@/components/sections/prices-visit/PricesVisitContactModal";

const PricesVisit: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="w-full bg-background">
      <Header
        activeSection="prices-visit"
        onContactClick={() => setIsContactModalOpen(true)}
      />
      <PricesVisitSlide7 />
      <PricesVisitClosing onContactClick={() => setIsContactModalOpen(true)} />
      <PricesVisitContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
};

export default PricesVisit;
