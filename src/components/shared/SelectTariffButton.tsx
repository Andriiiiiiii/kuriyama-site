import React from 'react';
import './SelectTariffButton.css';

interface SelectTariffButtonProps {
  width?: string;
  onClick?: () => void;
  variant?: 'orange' | 'white';
}

const SelectTariffButton: React.FC<SelectTariffButtonProps> = ({
  width = '15.2%',
  onClick,
  variant = 'orange'
}) => {
  const radius = 105;
  const mainColor = variant === 'orange' ? '#C65A32' : '#FFFFFF';
  const textColor = variant === 'orange' ? '#FFFFFF' : '#000000';
  const fillColor = variant === 'orange' ? '#C65A32' : '#FFFFFF'; // For the inner circle

  return (
    <button
      className={`select-tariff-button ${variant === 'white' ? 'select-tariff-button--white' : ''}`}
      onClick={onClick}
      style={{ width }}
    >
      <svg
        className="select-tariff-button__svg"
        viewBox="0 0 219 219"
        fill="none"
      >
        {/* Дуга исчезающая: правая нижняя (от 3π/2 до 2π) */}
        <circle
          className="select-tariff-button__arc-disappear"
          cx="109.5"
          cy="109.5"
          r={radius}
          stroke={mainColor}
          strokeWidth="1"
          fill="none"
          strokeDasharray="165 660"
          strokeDashoffset="-495"
          transform="rotate(90 109.5 109.5)"
        />

        {/* Дуга появляющаяся: от 0 до 3π/2 (три четверти против часовой) */}
        <circle
          className="select-tariff-button__arc-appear"
          cx="109.5"
          cy="109.5"
          r={radius}
          stroke={mainColor}
          strokeWidth="1"
          fill="none"
          strokeDasharray="0 660"
          strokeDashoffset="0"
          transform="rotate(90 109.5 109.5)"
        />

        {/* Окружность (диаметр 197) */}
        <circle
          cx="109.5"
          cy="109.5"
          r="93.5"
          stroke={mainColor}
          strokeWidth="1"
          fill="none"
        />

        {/* Круг (диаметр 179 -> 171) */}
        <circle
          cx="109.5"
          cy="109.5"
          r="85.5"
          fill={fillColor}
        />

        {/* Текст */}
        <text
          x="109.5"
          y="109.5"
          textAnchor="middle"
          dominantBaseline="middle"
          className="select-tariff-button__text"
          fill={textColor}
        >
          Выбрать тариф
        </text>
      </svg>
    </button>
  );
};

export default SelectTariffButton;