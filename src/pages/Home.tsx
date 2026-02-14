import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/shared/Header';
import { Footer } from '@/components/sections';
import { FONT_SIZES } from '@/config/typography';
import heroBg from '@/assets/home/hero-bg.png';

const Home = () => {
  return (
    <main className="w-full min-h-screen relative bg-[#F5F5F5] overflow-x-hidden flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Пасека-сад" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay for readability */}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-center h-full pb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-ua-brand leading-tight font-bold mb-6 uppercase tracking-wider text-center"
            style={{ fontSize: FONT_SIZES.heading }}
          >
            Пасека-сад<br />для отдыха и бизнеса
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-glametrix max-w-2xl mx-auto mb-12"
            style={{ fontSize: FONT_SIZES.subheading }}
          >
            Две строчки описания, про главные услуги и предложения
          </motion.p>
        </div>
      </section>

      {/* Cards Section - Absolute positioned over the bottom of Hero or just below with negative margin */}
      <section className="relative z-20 -mt-32 pb-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Visit */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Link to="/visit" className="block h-full group">
              <div className="bg-[#F8F5F1] p-10 border border-[#C65A32] h-[300px] flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2">
                <div>
                  <h3 className="font-ua-brand text-4xl mb-4 text-[#2E261D]">Посещение</h3>
                  <p className="font-glametrix text-[#2E261D] text-lg opacity-80">
                    Две строчки описания, про то, что предлагается
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-end">
                  <div className="bg-[#C65A32] text-white px-6 py-2 rounded-full flex items-center gap-2 group-hover:bg-[#a04828] transition-colors">
                    <span className="text-sm uppercase tracking-wider font-semibold font-ua-brand">Подробнее</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Beekeeping */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <Link to="/beekeeping" className="block h-full group">
              <div className="bg-[#F8F5F1] p-10 border border-[#C65A32] h-[300px] flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2">
                <div>
                  <h3 className="font-ua-brand text-4xl mb-4 text-[#2E261D]">Пчеловодство</h3>
                  <p className="font-glametrix text-[#2E261D] text-lg opacity-80">
                    Две строчки описания, про то, что предлагается
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-end">
                  <div className="bg-[#C65A32] text-white px-6 py-2 rounded-full flex items-center gap-2 group-hover:bg-[#a04828] transition-colors">
                    <span className="text-sm uppercase tracking-wider font-semibold font-ua-brand">Подробнее</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Production */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <Link to="/production" className="block h-full group">
              <div className="bg-[#F8F5F1] p-10 border border-[#C65A32] h-[300px] flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2">
                <div>
                  <h3 className="font-ua-brand text-4xl mb-4 text-[#2E261D]">Продукция</h3>
                  <p className="font-glametrix text-[#2E261D] text-lg opacity-80">
                    Две строчки описания, про то, что предлагается
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-end">
                  <div className="bg-[#C65A32] text-white px-6 py-2 rounded-full flex items-center gap-2 group-hover:bg-[#a04828] transition-colors">
                    <span className="text-sm uppercase tracking-wider font-semibold font-ua-brand">Подробнее</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default Home;
