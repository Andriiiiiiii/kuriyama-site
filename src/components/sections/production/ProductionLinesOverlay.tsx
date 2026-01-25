import React from 'react';
import productionLines from '@/assets/production/ProductionLines.svg';

const ProductionLinesOverlay: React.FC = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-full z-40 pointer-events-none overflow-hidden"
      style={{ width: '100%', marginTop: '-3%' }}
    >
      <img
        src={productionLines}
        alt=""
        className="w-full h-full object-fill"
      />
    </div>
  );
};

export default ProductionLinesOverlay;
