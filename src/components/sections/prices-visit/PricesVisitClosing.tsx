import React from "react";
import Footer from "@/components/sections/Footer";

interface PricesVisitClosingProps {
  onContactClick?: () => void;
}

const PricesVisitClosing: React.FC<PricesVisitClosingProps> = ({ onContactClick }) => {
  return (
    <Footer
      formTitle="обсудим ваш случай"
      titleColor="#2E261D"
      onContactClick={onContactClick}
    />
  );
};

export default PricesVisitClosing;
