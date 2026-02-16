import React from 'react';
import Header from '@/components/shared/Header';
import VacanciesHero from '@/components/sections/vacancies/VacanciesHero';
import VacanciesSlide2 from '@/components/sections/vacancies/VacanciesSlide2';
import VacanciesSlide3 from '@/components/sections/vacancies/VacanciesSlide3';
import { Footer } from '@/components/sections';

const Vacancies = () => {
    return (
        <main className="w-full bg-background">
            <Header activeSection="history" />
            <VacanciesHero />
            <VacanciesSlide2 />
            <VacanciesSlide3 />
            <Footer formTitle="обсудим ваш случай" />
        </main>
    );
};

export default Vacancies;
