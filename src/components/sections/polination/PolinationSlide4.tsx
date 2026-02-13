import React, { useRef, useEffect } from 'react';
import { useInView } from "framer-motion";
import { FONT_SIZES } from '@/config/typography';
import centerImg from '@/assets/pollination/fourth_slide_center_images.png';

interface PolinationSlide4Props {
    step: number; 
    setStep: (step: number) => void;
    prevFinished?: boolean;
    onInView?: () => void;
}

const PolinationSlide4: React.FC<PolinationSlide4Props> = ({ step, setStep, prevFinished = true, onInView }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if(isInView && onInView) onInView();
    }, [isInView, onInView]);

    useEffect(() => {
        if (isInView && step === 0 && prevFinished) {
            setStep(1);
        }
    }, [isInView, step, setStep, prevFinished]);

    // Original Size: 1439 x 817
    // Inner Border: x=21449, y=13268, w=1200, h=477
    // Group "frame": x=21440, y=13259, w=1218, h=495 (Outer context)
    // Relative to slide:
    // Outer Frame (Rectangle 223):
    // x_rel = (21440 - 21329) / 1439 = 111 / 1439 = 7.71%
    // y_rel = (13259 - 13028) / 817 = 231 / 817 = 28.27%
    // w_rel = 1218 / 1439 = 84.64%
    // h_rel = 495 / 817 = 60.59%
    
    // Inner Frame (Rectangle 200):
    // x_rel = (21449 - 21329) / 1439 = 120 / 1439 = 8.34%
    // y_rel = (13268 - 13028) / 817 = 240 / 817 = 29.37%
    // w_rel = 1200 / 1439 = 83.39%
    // h_rel = 477 / 817 = 58.38%

    const items = [
    {
      id: 1,
      title: "Заголовок",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      titleTop: 27.26,
      titleLeft: 11.17,
      descTop: 32.4,
      descLeft: 11.15
    },
    {
      id: 2,
      title: "Заголовок",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      titleTop: 62.27,
      titleLeft: 11.17,
      descTop: 67.41,
      descLeft: 11.15
    },
    {
      id: 3,
      title: "Заголовок",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      titleTop: 27.26,
      titleLeft: 69.20,
      descTop: 32.4,
      descLeft: 69.18
    },
    {
      id: 4,
      title: "Заголовок",
      desc: "Две строчки дополнительного описания подкрепляющего заголовок",
      titleTop: 62.27,
      titleLeft: 69.20,
      descTop: 67.41,
      descLeft: 69.18
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white" style={{ height: '56.77vw' }}>
        {/* Outer Frame */}
        <div 
            className="absolute border border-[#C65A32]"
            style={{
                left: '7.71%',
                top: '19%',
                width: '84.64%',
                height: '60.59%',
                zIndex: 10
            }}
        />

        {/* Inner Frame */}
        <div 
            className="absolute border-[2px] border-[#C65A32]"
            style={{
                left: '8.34%',
                top: '20.1%',
                width: '83.39%',
                height: '58.38%',
                zIndex: 10
            }}
        />
        {/* Center Image */}
        <div
            className="absolute z-0"
            style={{
                left: '42.04%', 
                top: '21.33%', 
                width: '16.67%', 
                height: '58.62%', 
            }}
        >
             <img src={centerImg} alt="Pollination Process" className="w-full h-full object-contain" />
        </div>

        {/* Title */}
        <h2
            className="absolute font-['UA-brand'] font-bold text-[#C65A32] uppercase tracking-tight w-full"
            style={{
                top: '5%',
                left: '8.5%',
                fontSize: FONT_SIZES.heading
            }}
        >
            ПРЕИМУЩЕСТВА
        </h2>

      {/* Text Items */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <div
            className="absolute z-20 font-['Glametrix'] font-bold text-[#2E261D]"
            style={{
              left: `${item.titleLeft}%`,
              top: `${item.titleTop}%`,
              fontSize: FONT_SIZES.subheading
            }}
          >
            {item.title}
          </div>
          <div
            className="absolute z-20 font-['Glametrix'] text-[#2E261D]/70"
            style={{
              left: `${item.descLeft}%`,
              top: `${item.descTop}%`,
              width: '18%',
              fontSize: FONT_SIZES.body,
              lineHeight: '1.3'
            }}
          >
            {item.desc}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default PolinationSlide4;
