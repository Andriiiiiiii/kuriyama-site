import React from 'react';
import './SelectTariffButton.css';

interface SelectTariffButtonProps {
  width?: string;
  onClick?: () => void;
}

const SelectTariffButton: React.FC<SelectTariffButtonProps> = ({
  width = '15.2%',
  onClick
}) => {
  const radius = 105;  // Внешняя дуга (уменьшено с 109.5)

  return (
    <button
      className="select-tariff-button"
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
          stroke="#C65A32"
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
          stroke="#C65A32"
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
          stroke="#C65A32"
          strokeWidth="1"
          fill="none"
        />

        {/* Круг (диаметр 179 -> 171) */}
        <circle
          cx="109.5"
          cy="109.5"
          r="85.5"
          fill="#C65A32"
        />

        {/* Текст */}
        <text
          x="109.5"
          y="109.5"
          textAnchor="middle"
          dominantBaseline="middle"
          className="select-tariff-button__text"
        >
          Выбрать тариф
        </text>
      </svg>
    </button>
  );
};

export default SelectTariffButton;