import React, { useState } from "react";
import Header from "@/components/shared/Header";
import {
  PricesBeehivesSlide7,
  PricesBeehivesClosing,
} from "@/components/sections";
import PricesBeehivesContactModal from "@/components/sections/prices-beehives/PricesBeehivesContactModal";

const PricesBeehives: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="w-full bg-background">
      <Header
        activeSection="prices-beehives"
        onContactClick={() => setIsContactModalOpen(true)}
      />
      <PricesBeehivesSlide7 />
      <PricesBeehivesClosing
        onContactClick={() => setIsContactModalOpen(true)}
      />
      <PricesBeehivesContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
};

export default PricesBeehives;
