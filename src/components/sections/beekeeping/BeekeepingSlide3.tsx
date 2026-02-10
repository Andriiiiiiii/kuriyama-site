import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import MoreButton from '@/components/shared/MoreButton';
import image1 from '@/assets/beekeeping/3_top_image.png';
import image2 from '@/assets/beekeeping/2 right photo.png';
import centralPicture from '@/assets/beekeeping/3_central_picture.svg';

const rightItems = [
  {
    id: 1,
    image: image1,
    title: "Личное\nпчеловодство",
    description: "Описание, подробнее раскрывающее заголовок",
  },
  {
    id: 2,
    image: image2,
    title: "Корпоративное\nпчеловодство",
    description: "Описание, подробнее раскрывающее заголовок",
  },
  {
    id: 3,
    image: image1, // Reusing image1 as placeholder for variant 3
    title: "Опыление",
    description: "Описание, подробнее раскрывающее заголовок",
  }
];

const BeekeepingSlide3: React.FC = () => {
  return (
    <section className="relative w-full bg-white flex">
      {/* Left Sticky Column */}
      <div className="w-1/2 h-layout sticky top-0 flex flex-col justify-center relative overflow-hidden">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight text-black"
          style={{
            left: '17.2%',
            top: '12.73%',
            width: '71.2%',
            fontSize: FONT_SIZES.heading,
            lineHeight: 1
          }}
        >
          Выберите
          <br />
          свой
          <br />
          вариант
        </motion.h2>

        {/* Central Picture */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="absolute z-10"
           style={{
             left: '87%', 
             top: '12.73%',
             width: '16.12%',
             height: '28.02%'
           }}
        >
          <img
            src={centralPicture}
            alt=""
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </motion.div>

        {/* Additional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute z-10 font-['Glametrix'] text-foreground"
          style={{
            left: '16.62%',
            top: '61.81%',
            width: '78.08%',
            fontSize: FONT_SIZES.body,
            lineHeight: 1.4
          }}
        >
          Здесь можно добавить дополнительное описание, которое поможет пользователю определиться с выбором.
        </motion.p>
      </div>

      {/* Right Scrollable Column */}
      <div className="w-1/2 flex flex-col py-24 gap-12">
        {rightItems.map((item) => (
          <div key={item.id} className="h-[80vh] w-[90%] mx-auto relative overflow-hidden shadow-lg">
            <div className="absolute inset-0">
               <img 
                 src={item.image} 
                 alt={item.title.replace('\n', ' ')} 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Top Left */}
            <div className="absolute z-20 top-12 left-12 max-w-md">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="font-ua-brand font-bold uppercase text-white whitespace-pre-line"
                    style={{ fontSize: FONT_SIZES.subheading }}
                >
                    {item.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-['Glametrix'] text-white mt-4"
                    style={{ fontSize: FONT_SIZES.body }}
                >
                    {item.description}
                </motion.p>
            </div>

            {/* More Button Bottom Right */}
            <div className="absolute z-20 bottom-12 right-12">
                <MoreButton />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeekeepingSlide3;
