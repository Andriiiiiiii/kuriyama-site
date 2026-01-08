import React from 'react';
import moreButtonSvg from '@/assets/visit/more-button.svg';

interface MoreButtonProps {
  onClick?: () => void;
  className?: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:opacity-90 transition-opacity cursor-pointer ${className}`}
      aria-label="Подробнее"
    >
      <img src={moreButtonSvg} alt="Подробнее" className="w-[145px] h-[37px]" />
    </button>
  );
};

export default MoreButton;
