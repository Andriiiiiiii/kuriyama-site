import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';

const PersonalBeekeepingClosing: React.FC = () => {
  return (
    <section className="relative w-full h-layout overflow-hidden bg-[#2E261D]" style={{ minHeight: '100vh' }}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #C65A32 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-[8.83%]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="font-['UA-brand'] font-bold text-white uppercase text-center mb-8"
          style={{
            fontSize: FONT_SIZES.heading,
            lineHeight: 1.2
          }}
        >
          Начните своё<br/>
          пчеловодство<br/>
          с Курияма
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Glametrix'] text-white/80 text-center max-w-2xl mb-12"
          style={{
            fontSize: FONT_SIZES.body,
            lineHeight: 1.8
          }}
        >
          Мы предоставим всё необходимое для успешного старта:<br/>
          профессиональное оборудование, обучение и постоянную поддержку
        </motion.p>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mb-12 w-full max-w-4xl"
        >
          {[
            { title: 'Свой улей', desc: 'Собственная пчелиная семья под вашим руководством' },
            { title: 'Обучение', desc: 'Полный курс по уходу и работе с пчёлами' },
            { title: 'Урожай мёда', desc: 'До 30 кг натурального мёда в сезон' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3
                className="font-['UA-brand'] font-bold text-primary mb-3"
                style={{ fontSize: FONT_SIZES.subheading }}
              >
                {item.title}
              </h3>
              <p
                className="font-['Glametrix'] text-white/70"
                style={{ fontSize: FONT_SIZES.body }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-white font-['Glametrix'] px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all"
          style={{
            fontSize: FONT_SIZES.body
          }}
        >
          Забронировать улей
        </motion.button>

        {/* Contact info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-['Glametrix'] text-white/60 mt-8"
          style={{ fontSize: FONT_SIZES.body }}
        >
          Свяжитесь с нами для консультации: +7 999 999 99 99
        </motion.p>
      </div>

      {/* Decorative element - bottom corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10"
        style={{
          background: 'radial-gradient(circle, #C65A32 0%, transparent 70%)'
        }}
      />
    </section>
  );
};

export default PersonalBeekeepingClosing;
