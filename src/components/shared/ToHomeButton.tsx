import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FONT_SIZES } from '@/config/typography';
import './ToHomeButton.css';

const ToHomeButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className="to-home-button"
      onClick={() => navigate('/')}
      style={{ fontSize: FONT_SIZES.body }}
    >
      На главную
    </button>
  );
};

export default ToHomeButton;
