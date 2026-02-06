import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import SelectTariffButton from '@/components/shared/SelectTariffButton';
import imgRight from '@/assets/vacancies/img right_3.svg';

const VacanciesSlide3: React.FC = () => {
    const textColor = '#2E261D';
    const accentColor = '#C65A32';
    const cardBgColor = '#EFE3D6';

    const vacancies = [
        {
            id: 0,
            title: "Название",
            format: "Формат работы | Тип занятости",
            description: "Небольшое описание вакансии в две-три строчки, включая информацию о ключевых задачах",
            requirements: ["Описание требования", "Описание требования", "Описание требования"]
        },
        {
            id: 1,
            title: "Название 1",
            format: "Офис | Полная занятость",
            description: "Первая вакансия: ищем специалиста для работы над интересными задачами в дружном коллективе.",
            requirements: ["Требование 1.1", "Требование 1.2", "Требование 1.3"]
        },
        {
            id: 2,
            title: "Название 2",
            format: "Удаленно | Частичная занятость",
            description: "Вторая вакансия: требуется сотрудник для поддержки текущих проектов и разработки новых.",
            requirements: ["Требование 2.1", "Требование 2.2", "Требование 2.3"]
        },
        {
            id: 3,
            title: "Название 3",
            format: "Гибрид | Проектная работа",
            description: "Третья вакансия: уникальная возможность поучаствовать в запуске нового продукта.",
            requirements: ["Требование 3.1", "Требование 3.2", "Требование 3.3"]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = vacancies.length - 1;
            if (nextIndex >= vacancies.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    const currentVacancy = vacancies[currentIndex];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white">
            
            {/* Title */}
            <div
                className="absolute z-10 font-ua-brand font-bold uppercase tracking-tight"
                style={{
                    left: '8.33%',
                    top: '5.67%',
                    width: '80.5%',
                    color: textColor,
                    fontSize: FONT_SIZES.heading,
                    lineHeight: 1
                }}
            >
                доступные вакансии
            </div>

            {/* Img Right */}
            <div
                className="absolute"
                style={{
                    left: '60.9%',
                    top: '15.44%',
                    width: '27.22%',
                    height: '31.15%',
                    transform: 'rotate(-180deg)'
                }}
            >
                <img src={imgRight} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Card Container */}
            <div
                className="absolute z-10"
                style={{
                    left: '29.51%',
                    top: '18.32%',
                    width: '40.97%',
                    height: '69.50%',
                }}
            >
                 <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="w-full h-full flex flex-col p-8 md:p-10 lg:p-12 justify-between"
                        style={{
                            backgroundColor: cardBgColor,
                            border: `1px solid ${accentColor}`,
                            boxSizing: 'border-box'
                        }}
                    >
                        <div>
                        <h3 
                                className="font-ua-brand font-bold uppercase mb-2"
                                style={{ fontSize: FONT_SIZES.subheading, color: textColor }}
                        >
                            {currentVacancy.title}
                        </h3>
                        <p 
                                className="font-glametrix mb-6"
                                style={{ fontSize: FONT_SIZES.body, color: textColor }}
                        >
                            {currentVacancy.format}
                        </p>
                        <p 
                                className="font-glametrix mb-8"
                                style={{ fontSize: FONT_SIZES.body, color: textColor }}
                        >
                            {currentVacancy.description}
                        </p>

                        <h4 
                                className="font-ua-brand font-bold mb-4"
                                style={{ fontSize: FONT_SIZES.medium, color: textColor }}
                        >
                            Требования
                        </h4>
                        <ul className="list-disc pl-5 font-glametrix space-y-2" style={{ fontSize: FONT_SIZES.body, color: textColor }}>
                            {currentVacancy.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Left Arrow */}
            <button
                onClick={() => paginate(-1)}
                className="absolute z-20 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
                style={{
                    left: '24.06%',
                    top: '51.69%',
                    transform: 'translate(-50%, -50%)',
                    width: '3%', 
                    aspectRatio: '1'
                }}
            >
                <svg width="100%" height="100%" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.5 11.0469L0.5 11.0469M0.5 11.0469L11.5 21.0469M0.5 11.0469L11.5 1.04688" stroke={textColor} strokeOpacity="0.3" strokeWidth="2"/>
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                onClick={() => paginate(1)}
                className="absolute z-20 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
                style={{
                    left: '73.33%',
                    top: '51.69%',
                    transform: 'translate(-50%, -50%)',
                    width: '3%',
                     aspectRatio: '1'
                }}
            >
                <svg width="100%" height="100%" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11.0469L35.5 11.0469M35.5 11.0469L24.5 21.0469M35.5 11.0469L24.5 1.04688" stroke={textColor} strokeOpacity="0.3" strokeWidth="2"/>
                </svg>
            </button>


            {/* Join Team Button */}
            <div
                className="absolute z-20"
                style={{
                    left: '62.91%',
                    top: '65.96%',
                    width: '15.20%',
                }}
            >
                 <SelectTariffButton width="100%" /> 
            </div>

        </section>
    );
};

export default VacanciesSlide3;
