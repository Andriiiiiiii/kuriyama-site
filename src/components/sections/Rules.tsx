import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import MoreButton from '@/components/shared/MoreButton';
import photo1 from '@/assets/visit/9-photo-1.png';
import photo2 from '@/assets/visit/9-photo-2.png';

const Rules: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* 9 Title (1:121) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="absolute font-ua-brand text-primary font-bold uppercase"
          style={{
            left: '8.3472%',
            top: '10%',
            width: '31.0217%',
            height: '8.9012%',
            fontSize: FONT_SIZES.heading,
          }}
        >
          правила
        </motion.h1>

        {/* 9 photo 2 (1:226) */}
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src={photo2}
          alt="Правила фото"
          className="absolute object-cover"
          style={{
            left: '68%',
            top: '10%',
            width: '20%',
            height: '35.3827%',
          }}
        />

        {/* 9 small title 1 (1:200) */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute font-glametrix text-secondary font-bold"
          style={{
            left: '15.4722%',
            top: '30.1667%',
            width: '7.7892%',
            height: '2.4197%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Заголовок
        </motion.h2>

        {/* 9 small subtitle 1 (1:213) */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute font-glametrix text-foreground"
          style={{
            left: '15.4829%',
            top: '36.2654%',
            width: '46.9303%',
            height: '5.2890%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Описание, подробнее раскрывающее заголовок. Описание одного из главных правил посещения Куриямы
        </motion.p>

        {/* 9 small title 2 (1:201) */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute font-glametrix text-secondary font-bold"
          style={{
            left: '29.5000%',
            top: '50.6914%',
            width: '7.7892%',
            height: '2.4197%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Заголовок
        </motion.h2>

        {/* 9 small subtitle 2 (1:214) */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute font-glametrix text-foreground"
          style={{
            left: '29.5107%',
            top: '56.7901%',
            width: '46.9303%',
            height: '5.2890%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Описание, подробнее раскрывающее заголовок. Описание одного из главных правил посещения Куриямы
        </motion.p>

        {/* 9 photo 1 (1:227) */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          src={photo1}
          alt="Пчеловод"
          className="absolute object-cover"
          style={{
            left: '8.3472%',
            top: '49.3827%',
            width: '15%',
            height: '40%',
          }}
        />

        {/* 9 small title 3 (1:202) */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute font-glametrix text-secondary font-bold"
          style={{
            left: '43.5972%',
            top: '71.2161%',
            width: '7.7892%',
            height: '2.4197%',
            fontSize: FONT_SIZES.subheading,
          }}
        >
          Заголовок
        </motion.h2>

        {/* 9 small subtitle 3 (1:215) */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="absolute font-glametrix text-foreground"
          style={{
            left: '43.6079%',
            top: '77.3148%',
            width: '46.9303%',
            height: '5.2890%',
            fontSize: FONT_SIZES.body,
          }}
        >
          Описание, подробнее раскрывающее заголовок. Описание одного из главных правил посещения Куриямы
        </motion.p>

        {/* 9 more button (1:157) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute"
          style={{
            left: '81.3889%',
            top: '89.3519%',
            width: '10.0694%',
            height: '5.7099%'
          }}
        >
          <MoreButton onClick={() => console.log('More clicked')} />
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;
