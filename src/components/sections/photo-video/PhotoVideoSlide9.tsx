// src/components/sections/photo-video/PhotoVideoSlide9.tsx
import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import cherryImage from '@/assets/photo-video/9-cherry.png';

const PhotoVideoSlide9: React.FC = () => {
    // Layout Logic based on 1440x530 Group "block 9"
    // Origin: x=39116, y=4745

    return (
        <section className="relative w-full overflow-visible bg-white z-20" style={{ height: '530px' }}>
            <div className="relative w-full h-full"> 
                {/* Background Shape */}
                <div 
                    className="absolute w-full bg-[#EFE3D6] border-t border-[#C65A32]"
                    style={{
                        top: '20.75%', // 110/530
                        height: '100%', // Extended height to cover the gap
                        left: 0
                    }}
                />

                {/* Cherry Image */}
                <div
                    className="absolute z-10"
                    style={{
                        left: '46.24%',
                        top: '5.65%',
                        width: '32.5%',
                        height: 'auto',
                        transform: 'rotate(-95.36deg)'
                    }}
                >
                    <img 
                        src={cherryImage} 
                        alt="Cherry" 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Title */}
                <h2
                    className="absolute font-['UA-brand'] uppercase text-[#2E261D] flex flex-col items-start leading-none"
                    style={{
                        left: '8.61%',
                        top: '31.89%',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)', // Slightly larger than standard heading
                        lineHeight: '1.1',
                        zIndex: 20
                    }}
                >
                    <span>Оставьте</span>
                    <span>заявку</span>
                </h2>

                {/* Description */}
                <p
                    className="absolute font-['Manrope'] text-[#2E261D]"
                    style={{
                        left: '8.33%',
                        top: '66.98%',
                        width: '12.9%', // 186/1440
                        fontSize: FONT_SIZES.small,
                        zIndex: 20
                    }}
                >
                    Описание, подробнее раскрывающее заголовок
                </p>

                {/* Lead Button */}
                <div
                    className="absolute z-20"
                    style={{
                        left: '76.39%',
                        top: '33.2%',
                        width: '15.2%',
                    }}
                >
                    <SelectTariffButton 
                        width="100%" 
                        variant="orange" 
                        text="Выбрать тариф"
                    />
                </div>
            </div>
        </section>
    );
};

export default PhotoVideoSlide9;
