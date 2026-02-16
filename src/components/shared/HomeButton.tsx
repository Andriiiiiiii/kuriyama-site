import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import './HomeButton.css';

interface HomeButtonProps {
  onClick?: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <button
      className="contact-button"
      onClick={handleClick}
      style={{ fontSize: FONT_SIZES.body }}
    >
      На главную
    </button>
  );
};

export default HomeButton;
