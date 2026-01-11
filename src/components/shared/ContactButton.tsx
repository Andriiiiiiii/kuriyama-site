import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import './ContactButton.css';

interface ContactButtonProps {
  onClick?: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <button
      className="contact-button"
      onClick={onClick}
      style={{ fontSize: FONT_SIZES.body }}
    >
      Связаться
    </button>
  );
};

export default ContactButton;