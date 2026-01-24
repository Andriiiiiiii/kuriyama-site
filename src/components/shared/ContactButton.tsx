import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import './ContactButton.css';

interface ContactButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string; 
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick, text = "Связаться", className = "" }) => {
  return (
    <button
      className={`contact-button ${className}`}
      onClick={onClick}
      style={{ fontSize: FONT_SIZES.body }}
    >
      {text}
    </button>
  );
};

export default ContactButton;