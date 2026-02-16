import React from "react";
import Footer from "@/components/sections/Footer";

interface PricesBeehivesClosingProps {
  onContactClick?: () => void;
}

const PricesBeehivesClosing: React.FC<PricesBeehivesClosingProps> = ({
  onContactClick,
}) => {
  return (
    <Footer
      formTitle="обсудим ваш случай"
      titleColor="#2E261D"
      onContactClick={onContactClick}
    />
  );
};

export default PricesBeehivesClosing;
