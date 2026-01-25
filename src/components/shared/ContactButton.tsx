import React from 'react';
import { FONT_SIZES } from '@/config/typography';

interface ContactButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string; 
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick, text = "Связаться", className = "" }) => {
  return (
    <button
      className={`w-[8.4%] h-1/2 min-w-fit px-[2%] bg-[#C65A32] text-white border-none rounded-[50vh] cursor-pointer flex items-center justify-center font-['Glametrix'] leading-none whitespace-nowrap transition-opacity duration-200 shrink-0 hover:opacity-90 max-md:w-[10%] max-md:px-[1.5%] ${className}`}
      onClick={onClick}
      style={{ fontSize: FONT_SIZES.body }}
    >
      {text}
    </button>
  );
};

export default ContactButton;