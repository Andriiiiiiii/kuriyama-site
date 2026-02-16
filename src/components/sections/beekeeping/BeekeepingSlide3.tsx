import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FONT_SIZES } from '@/config/typography';
import MoreButton from '@/components/shared/MoreButton';
import image1 from '@/assets/beekeeping/3_top_image.webp';
import image2 from '@/assets/beekeeping/2 right photo.webp';
import centralPicture from '@/assets/beekeeping/3_central_picture.webp';

const rightItems = [
  {
    id: 1,
    image: image1,
    title: "Личное\nпчеловодство",
    description: "Описание, подробнее раскрывающее заголовок",
    link: "/personal-beekeeping"
  },
  {
    id: 2,
    image: image2,
    title: "Корпоративное\nпчеловодство",
    description: "Описание, подробнее раскрывающее заголовок",
    link: "/corporate-beekeeping"
  },
  {
    id: 3,
    image: image1, // Reusing image1 as placeholder for variant 3
    title: "Опыление",
    description: "Описание, подробнее раскрывающее заголовок",
    link: "/pollination"
  }
];

const BeekeepingSlide3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-white flex">
      {/* Left Sticky Column */}
      <div className="w-2/5 h-layout sticky top-0 flex flex-col justify-center relative overflow-hidden">
        
        {/* Title */}
        <h2
          className="absolute z-10 font-ua-brand font-bold uppercase tracking-wide text-black"
          style={{
            left: '26%',
            top: '12.73%',
            width: '71.2%',
            fontSize: FONT_SIZES.heading,
            lineHeight: 2
          }}
        >
          Выберите
          <br />
          свой
          <br />
          вариант
        </h2>

        {/* Central Picture */}
        <div
           className="absolute z-10"
           style={{
             left: '87%', 
             top: '17%',
             width: '16.12%',
             height: '28.02%'
           }}
        >
          <img
            src={centralPicture}
            alt=""
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Additional Description */}
        <p
          className="absolute z-10 font-['Glametrix'] text-foreground"
          style={{
            left: '28%',
            top: '61.81%',
            width: '78.08%',
            fontSize: FONT_SIZES.body,
            lineHeight: 1.4
          }}
        >
          Здесь можно добавить дополнительное описание, которое дает пользователю <br />
          представление об услуге <span className="text-[#C65A32]">пчеловодства на пасеке Курияма.</span>
        </p>
      </div>

      {/* Right Scrollable Column */}
      <div className="w-4/5 flex flex-col py-24 gap-12 pr-24"> 
        {rightItems.map((item) => (
          <div key={item.id} className="w-full relative overflow-hidden shadow-lg group">
            <div className="relative w-full">
               <img 
                 src={item.image} 
                 alt={item.title.replace('\n', ' ')} 
                 className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* Content Top Left */}
            <div className="absolute z-20 top-12 left-12 max-w-md">
                <h3
                    className="font-ua-brand font-bold uppercase text-white whitespace-pre-line"
                    style={{ fontSize: FONT_SIZES.subheading }}
                >
                    {item.title}
                </h3>

                <p
                    className="font-['Glametrix'] text-white mt-4"
                    style={{ fontSize: FONT_SIZES.body }}
                >
                    {item.description}
                </p>
            </div>

            {/* More Button Bottom Right */}
            <div className="absolute z-20 bottom-12 right-12">
                <MoreButton onClick={() => navigate(item.link)} />
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeekeepingSlide3;
