import React from 'react';
import heroBg from '@/assets/1-background.png';
// Using require or just direct import if Vite supports spaces in imports, which it usually does. 
// But safeguard with simpler names or just imports.
import img from '@/assets/vacancies/img.png';
// For the file with spaces/cyrillic, it's better to use a relative path with import.
// Vite should handle it.
import calligraphy from '@/assets/vacancies/курияма каллиграф-8 1.png'; 

import SelectTariffButton from '@/components/shared/SelectTariffButton';
import { FONT_SIZES } from '@/config/typography';

const VacanciesHero = () => {
    return (
        <section className="relative w-full h-layout overflow-hidden bg-background">
             {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt=""
                    className="w-full h-full object-fill"
                />
            </div>

            {/* Breadcrumbs */}
            <div
                className="absolute z-10 font-['Glametrix'] text-foreground/50 whitespace-nowrap"
                style={{
                    left: '8.42%',
                    top: '11.50%',
                    fontSize: FONT_SIZES.body,
                    width: '9.45%',
                    height: '1.73%'
                }}
            >
                Главная/ Вакансии
            </div>

            {/* Calligraphy - based on "курияма каллиграф-8 1 (id: 448:492): left 52.15%, top 10.47%" */}
            {/* The user listed it AFTER img in the list, but typically calligraphy is decorative backgroundish. 
                However, looking at the layout, it's at 52% left, img at 57% left. 
                If img is a photo, calligraphy might be behind or overlay. 
                I'll place it based on DOM order from user provided list: img first then calligraphy? 
                Actually generally in Figma lists: top item is top layer. 
                List: 
                 - img (id: 448:490)
                 - lead button
                 - курияма каллиграф-8 1 (id: 448:492)
                So calligraphy is ON TOP of img? Or wait, if "lead button" is in between?
                Usually the list provided is top-to-bottom in the layer list (so top is front). 
                Or bottom-to-top?
                Let's assume standard "CSS order" -> last in list is on top. 
                So: img -> button -> calligraphy.
            */}
             
             {/* Main Image */}
             <div
                className="absolute z-10"
                style={{
                    left: '57.78%',
                    top: '19.12%',
                    width: '19.79%',
                    height: '60.08%'
                }}
             >
                 <img src={img} alt="Vacancy" className="w-full h-full object-cover" />
             </div>

              {/* Calligraphy */}
              <div
                className="absolute z-10 pointer-events-none"
                style={{
                    left: '52.15%',
                    top: '10.47%',
                    width: '12.43%',
                    height: '38.76%'
                }}
             >
                 <img src={calligraphy} alt="" className="w-full h-full object-contain" />
             </div>

            {/* Title */}
            <h1
                className="absolute z-10 font-['UA-brand'] font-bold text-foreground uppercase tracking-tight leading-none"
                style={{
                    left: '8.83%',
                    top: '58.97%',
                    width: '36.03%',
                    fontSize: FONT_SIZES.heading,
                    // height is 7.65% ~ 80px. FONT_SIZES.heading is ~70px.
                }}
            >
                вакансии
            </h1>

            {/* Description */}
            <p
                className="absolute z-10 font-['Glametrix'] text-foreground leading-tight"
                style={{
                    left: '8.36%',
                    top: '71.24%',
                    width: '19.86%',
                    fontSize: FONT_SIZES.body
                }}
            >
                Две строчки дополнительного описания подкрепляющего заголовок
            </p>

            {/* Select Tariff Button */}
            <div
                className="absolute z-20"
                style={{
                    left: '74.24%', // from group spec
                    top: '35.79%', // from group spec
                    width: '15.21%', // from group spec
                    height: '28.29%' // from group spec
                }}
            >
                {/* The button component itself handles the circle shape usually, but here we have a group with ellipses. 
                    SelectTariffButton usually renders the whole circle button.
                    The 'SelectTariffButton.tsx' component renders an SVG. 
                    I'll wrap it to match the position.
                */}
                <SelectTariffButton width="100%" /> 
            </div>

        </section>
    );
};

export default VacanciesHero;
