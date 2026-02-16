import React from 'react';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import img5 from '@/assets/volonteering/img 5.svg';

const VolunteeringSlide5: React.FC = () => {
    const textColor = '#2E261D';
    const accentColor = '#C65A32';
    // const bgColor = '#EFE3D6'; // Using a beige tone similar to other slides for the shape

    return (
        <section className="relative w-full h-layout overflow-hidden bg-transparent -mt-[16.5%] z-20">
            
            {/* Background Shape */}
            <div
                className="absolute w-full bg-[#EFE3D6]" // Assuming beige color for the shape
                style={{
                    left: '0.00%',
                    top: '28.29%',
                    width: '100.00%',
                    height: '71.71%'
                }}
            />

            {/* Image 5 */}
            <div
                className="absolute z-10"
                style={{
                    left: '58.68%',
                    top: '0.00%',
                    width: '36.88%',
                    height: '96.22%'
                }}
            >
                <img src={img5} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Title: хотите присоединиться? */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight leading-none"
                style={{
                    left: '8.36%',
                    top: '42.31%',
                    width: '68.05%',
                    // height: '34.02%',
                    color: accentColor,
                    fontSize: FONT_SIZES.heading
                }}
            >
                хотите<br />присоединиться?
            </div>

            {/* Text: Приглашение... */}
            <p
                className="absolute z-10 font-glametrix leading-tight"
                style={{
                    left: '8.42%',
                    top: '68.00%', // Moved up closer to title (was 79.19%)
                    width: '23.27%',
                    // height: '2.98%',
                    color: textColor,
                    fontSize: FONT_SIZES.body
                }}
            >
                Приглашение посетить страницу с вакансиями
            </p>

            {/* Lead Button Group */}
            <div
                className="absolute z-20"
                style={{
                    left: '76.46%',
                    top: '41.63%',
                    width: '15.21%',
                    height: '43.63%' // Preserving height from JSON, though button is circular
                }}
            >
                {/* 
                   The JSON suggests a vertical oval. 
                   SelectTariffButton is circular. 
                   I will render it with width=100% of the container.
                   To respect the visual center of the "Group", I might need to center it if the group is taller.
                   However, usually these "groups" are just the bounding box of the button.
                   If the height is 43% (very tall), maybe the button IS that big/distorted 
                   OR it's just a circular button inside a large area.
                   Given "Ellipse 31" dimensions inside (width 12%, height 35%) -> It IS an oval.
                   But reusing SelectTariffButton (Circle) is safer/standard.
                   I will render the circular button.
                */}
                <SelectTariffButton width="100%" /> 
            </div>

        </section>
    );
};

export default VolunteeringSlide5;
