import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import centerImg from '@/assets/pollination/fourth_slide_center_images.png';

const PolinationSlide4: React.FC = () => {
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
    <section className="relative h-layout bg-white overflow-hidden flex items-center justify-center">
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

        {/* Inner Frame - Thicker (implied by "в два раза больше") */}
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
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute z-0"
            style={{
                left: '42.04%', // 21934 - 21329 = 605 ; 605/1439 = 42.04%
                top: '21.33%', // 13278 - 13028 = 250 ; 250/817 = 30.60%
                width: '16.67%', // 240/1439
                height: '58.62%', // 479/817
            }}
        >
             <img src={centerImg} alt="Pollination Process" className="w-full h-full object-contain" />
        </motion.div>

        {/* Title "ПРЕИМУЩЕСТВА" */}
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute font-['UA-brand'] font-bold text-[#C65A32] uppercase tracking-tight w-full"
            style={{
                top: '5%',
                left: '8.5%',
                fontSize: FONT_SIZES.heading
            }}
        >
            ПРЕИМУЩЕСТВА
        </motion.h2>

      {/* Text Items */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <motion.div
            initial={{ opacity: 0, x: item.id % 2 !== 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * item.id }}
            className="absolute z-20 font-['Glametrix'] font-bold text-[#2E261D]"
            style={{
              left: `${item.titleLeft}%`,
              top: `${item.titleTop}%`,
              fontSize: FONT_SIZES.subheading
            }}
          >
            {item.title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 * item.id }}
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
          </motion.div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default PolinationSlide4;
