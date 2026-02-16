import React from 'react';
import Header from '@/components/shared/Header';
import VolunteeringHero from '@/components/sections/volunteering/VolunteeringHero';
import VolunteeringSlide2 from '@/components/sections/volunteering/VolunteeringSlide2';
import VolunteeringSlide3 from '@/components/sections/volunteering/VolunteeringSlide3';
import VolunteeringSlide4 from '@/components/sections/volunteering/VolunteeringSlide4';
import VolunteeringSlide5 from '@/components/sections/volunteering/VolunteeringSlide5';
import { Footer } from '@/components/sections';

const Volunteering = () => {
    return (
        <main className="w-full bg-background">
            <Header activeSection="history" />
            <VolunteeringHero />
            <VolunteeringSlide2 />
            <VolunteeringSlide3 />
            <VolunteeringSlide4 />
            <VolunteeringSlide5 />
            <div style={{ marginTop: '-15vh', position: 'relative', zIndex: 30 }}>
                <Footer formTitle="обсудим ваш случай" />
            </div>
        </main>
    );
};

export default Volunteering;
