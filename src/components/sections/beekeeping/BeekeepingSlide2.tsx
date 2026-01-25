import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import leftPhoto from '@/assets/beekeeping/2 left photo.png';
import rightPhoto from '@/assets/beekeeping/2 right photo.png';
import number1 from '@/assets/visit/number-1.svg';
import number2 from '@/assets/visit/number-2.svg';
import number3 from '@/assets/visit/number-3.svg';

const BeekeepingSlide2: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Title - left 50.95%, top 2.81%, width 33.57%, height 21.90% */}
      <motion.h2
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
        style={{
          left: '50.95%',
          top: '2.81%',
          width: '33.57%',
          color: '#C65A32',
          fontSize: FONT_SIZES.heading,
          lineHeight: 1.1
        }}
      >
        Как это
        <br />
        работает
      </motion.h2>

      {/* Decorative Lines */}
      {/* Line 1 - left 8.23%, top 2.61%, width 0.07%, height 27.65% */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bg-[#C65A32] origin-top"
        style={{
          left: '8.23%',
          top: '2.61%',
          width: '0.07vw',
          height: '27.65%'
        }}
      />

      {/* Line 2 - left 8.23%, top 35.63%, width 0.07%, height 27.65% */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bg-[#C65A32] origin-top"
        style={{
          left: '8.23%',
          top: '35.63%',
          width: '0.07vw',
          height: '27.65%'
        }}
      />

      {/* Line 3 - left 43.53%, top 35.63%, width 0.07%, height 27.65% */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bg-[#C65A32] origin-top"
        style={{
          left: '43.53%',
          top: '35.63%',
          width: '0.07vw',
          height: '27.65%'
        }}
      />

      {/* Numbers */}
      {/* Number 1 - left 9.60%, top 2.92%, width 2.15%, height 10.54% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute"
        style={{
          left: '9.60%',
          top: '2.92%',
          width: '2.15%',
          height: '10.54%'
        }}
      >
        <img src={number1} alt="1" className="w-full h-full object-contain" />
      </motion.div>

      {/* Number 2 - left 9.37%, top 35.94%, width 4.84%, height 10.64% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute"
        style={{
          left: '9.37%',
          top: '35.94%',
          width: '4.84%',
          height: '10.64%'
        }}
      >
        <img src={number2} alt="2" className="w-full h-full object-contain" />
      </motion.div>

      {/* Number 3 - left 44.46%, top 35.91%, width 4.23%, height 10.56% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute"
        style={{
          left: '44.46%',
          top: '35.91%',
          width: '4.23%',
          height: '10.56%'
        }}
      >
        <img src={number3} alt="3" className="w-full h-full object-contain" />
      </motion.div>

      {/* Subtitle 1 - left 9.78%, top 18.67%, width 12.60%, height 3.26% */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '9.78%',
          top: '18.67%',
          width: '12.60%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        Выберите тариф
      </motion.h3>

      {/* Text 1 - left 9.71%, top 24.66%, width 23.89%, height 2.07% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '9.71%',
          top: '24.66%',
          width: '23.89%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Описание, подробнее раскрывающее заголовок
      </motion.p>

      {/* Subtitle 2 - left 9.78%, top 51.68%, width 12.60%, height 3.26% */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '9.78%',
          top: '51.68%',
          width: '12.60%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        Выберите тариф
      </motion.h3>

      {/* Text 2 - left 9.71%, top 57.68%, width 23.89%, height 2.07% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '9.71%',
          top: '57.68%',
          width: '23.89%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Описание, подробнее раскрывающее заголовок
      </motion.p>

      {/* Subtitle 3 - left 45.08%, top 51.68%, width 12.60%, height 3.26% */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute font-['Glametrix'] font-bold text-foreground"
        style={{
          left: '45.08%',
          top: '51.68%',
          width: '12.60%',
          fontSize: FONT_SIZES.subheading
        }}
      >
        Выберите тариф
      </motion.h3>

      {/* Text 3 - left 45.00%, top 57.68%, width 12.94%, height 5.24% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '45.00%',
          top: '57.68%',
          width: '12.94%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Описание, подробнее раскрывающее заголовок
      </motion.p>

      {/* Right Photo - left 64.77%, top 31.77%, width 26.89%, height 51.99% */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-10"
        style={{
          left: '64.77%',
          top: '31.77%',
          width: '26.89%',
          height: '51.99%'
        }}
      >
        <img
          src={rightPhoto}
          alt="Пчеловодство"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Left Photo - left 8.27%, top 67.40%, width 26.89%, height 32.60% */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute z-10"
        style={{
          left: '8.27%',
          top: '67.40%',
          width: '26.89%',
          height: '32.60%'
        }}
      >
        <img
          src={leftPhoto}
          alt="Пчеловодство"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Bottom Text - left 43.61%, top 91.10%, width 46.81%, height 7.95% */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute font-['Glametrix'] text-foreground"
        style={{
          left: '43.61%',
          top: '91.10%',
          width: '46.81%',
          fontSize: FONT_SIZES.body,
          lineHeight: 1.4
        }}
      >
        Здесь можно добавить дополнительное описание, которое дает пользователю представление об услуге <span className="text-[#C65A32]">пчеловодства на пасеке Курияма</span>. Можно вкратце добавить про качество исполнения и экологичности пасеки.
      </motion.p>
    </section>
  );
};

export default BeekeepingSlide2;
