import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imgBig from '@/assets/concept/slide5/big.png';
import imgSmall1 from '@/assets/concept/slide5/small 1.png';
import imgSmall2 from '@/assets/concept/slide5/small 2.png';
import imgSmall3 from '@/assets/concept/slide5/small 3.png';
import { FONT_SIZES } from '@/config/typography';

// Types
interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  desc: string;
}

// Data
const TEAM_DATA: TeamMember[] = [
  {
    id: 1,
    image: imgBig,
    name: "Соколов Дмитрий",
    position: "Основатель",
    desc: "Две строчки дополнительного описания подкрепляющего заголовок",
  },
  {
    id: 2,
    image: imgSmall1,
    name: "Иванов Иван",
    position: "Главный пчеловод",
    desc: "Любит пчел больше, чем людей. Знает все о меде.",
  },
  {
    id: 3,
    image: imgSmall2,
    name: "Петрова Анна",
    position: "Агроном",
    desc: "Следит за цветением медоносов и здоровьем растений.",
  },
  {
    id: 4,
    image: imgSmall3,
    name: "Сидоров Алексей",
    position: "Технолог",
    desc: "Отвечает за переработку и упаковку продукции.",
  },
];

// Slots Configuration
const SLOT_STYLES = {
  big: {
    left: '49.31%',
    top: '0.00%',
    width: '15.49%',
    height: '77.98%',
    zIndex: 20,
  },
  small1: {
    left: '0.00%',
    top: '51.28%',
    width: '14.17%',
    height: '26.70%',
    zIndex: 10,
  },
  small2: {
    left: '15.56%',
    top: '51.28%',
    width: '15.49%',
    height: '26.70%',
    zIndex: 10,
  },
  small3: {
    left: '32.43%',
    top: '51.28%',
    width: '15.49%',
    height: '26.70%',
    zIndex: 10,
  },
};

const ConceptSlide5 = () => {
    // Initial order: [2, 3, 4, 1] means:
    // Index 0 (Slot Small1): ID 2
    // Index 1 (Slot Small2): ID 3
    // Index 2 (Slot Small3): ID 4
    // Index 3 (Slot Big):    ID 1
    const [order, setOrder] = useState<number[]>([2, 3, 4, 1]);
    const [isAnimating, setIsAnimating] = useState(false);
    const aspectRatio = 663 / 1440;

    // Active member is always the one at index 3 (Big Slot)
    const activeMemberId = order[3];
    const activeMember = TEAM_DATA.find((m) => m.id === activeMemberId) || TEAM_DATA[0];

    const rotateRight = () => {
        setOrder(prev => {
            const newOrder = [...prev];
            const last = newOrder.pop();
            if (last) newOrder.unshift(last);
            return newOrder;
        });
    };

    const handleHover = (targetId: number) => {
        if (isAnimating || targetId === activeMemberId) return;

        // Find where the target is currently
        const currentIndex = order.indexOf(targetId);
        if (currentIndex === -1 || currentIndex === 3) return;

        setIsAnimating(true);

        const stepsNeeded = 3 - currentIndex;
        let stepsTaken = 0;

        const interval = setInterval(() => {
            rotateRight();
            stepsTaken++;
            if (stepsTaken >= stepsNeeded) {
                clearInterval(interval);
                // Add delay before unlocking to prevent accidental re-triggers
                // Wait for spring animation to settle (~500ms)
                setTimeout(() => {
                    setIsAnimating(false);
                }, 500);
            }
        }, 300);
    };

    return (
        <section 
            className="relative w-full overflow-hidden bg-background"
            style={{
                height: `calc(100vw * ${aspectRatio})`,
                minHeight: '600px'
            }}
        >
      
      {/* Scroll decorative line */}
      <div 
         className="absolute border-b border-[#D87A46]/40"
         style={{
           left: '0%', 
           top: '31.5%', 
           width: '84%', 
         }}
      />
       <div 
         className="absolute border-r border-[#D87A46]/40"
         style={{
           left: '84%', 
           top: '0%', 
           height: '31.5%', 
         }}
      />
        {/* Dot at intersection */}
       <div
        className="absolute rounded-full border-2 border-[#D87A46] bg-white z-10"
        style={{
          left: '66.5%', 
          top: '31.5%',
          width: '1.5vw',
          height: '1.5vw',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="absolute inset-0 m-auto w-2/3 h-2/3 bg-[#D87A46] rounded-full opacity-60" />
      </div>

       {/* Title "КОМАНДА" */}
      <h2
        className="absolute font-['UA-brand'] font-bold text-[#2E261D] uppercase tracking-wider"
        style={{
          left: '8.83%',
          top: '3.08%',
          width: '33.57%',
          fontSize: '6vw', 
          lineHeight: 1
        }}
      >
        КОМАНДА
      </h2>

      {/* Circle Decoration */}
       <div
        className="absolute rounded-full border border-[#D87A46]/40"
        style={{
          left: '8%', 
          top: '16%',
          width: '10vw',
          height: '10vw',
        }}
      />

      {/* --- Images with Layout Animation --- */}
      <AnimatePresence initial={false} mode="popLayout">
        {order.map((memberId, index) => {
           let style = {};
           let isInteractive = false;
           // Find the member object
           const member = TEAM_DATA.find(m => m.id === memberId);
           if (!member) return null;
           
           if (index === 3) { // Last index is ALWAYS Big slot
             style = SLOT_STYLES.big;
           } else {
             if (index === 0) style = SLOT_STYLES.small1;
             else if (index === 1) style = SLOT_STYLES.small2;
             else if (index === 2) style = SLOT_STYLES.small3;
             isInteractive = true;
           }

           return (
             <motion.div
               key={member.id}
               layoutId={`team-member-${member.id}`}
               className="absolute cursor-pointer overflow-hidden"
               style={style}
               transition={{ type: "spring", stiffness: 120, damping: 20 }}
               onMouseEnter={() => isInteractive && handleHover(member.id)}
             >
                <motion.img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  layoutId={`team-img-${member.id}`}
                />
             </motion.div>
           );
        })}
      </AnimatePresence>


      {/* --- Text Info (Right) --- */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <AnimatePresence mode='wait'>
            <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
            >
                {/* Name */}
                <h3
                    className="absolute font-['Glametrix'] font-bold text-foreground"
                    style={{
                    left: '67.64%',
                    top: '36.83%',
                    width: '13.33%',
                    fontSize: FONT_SIZES.medium
                    }}
                >
                    {activeMember.name}
                </h3>

                {/* Position */}
                <p
                    className="absolute font-['Glametrix'] text-foreground italic"
                    style={{
                    left: '67.60%',
                    top: '41.85%',
                    width: '20%',
                    fontSize: FONT_SIZES.small
                    }}
                >
                    {activeMember.position}
                </p>

                {/* Description */}
                <p
                    className="absolute font-['Glametrix'] text-foreground"
                    style={{
                    left: '67.60%',
                    top: '50.59%',
                    width: '18.92%',
                    fontSize: FONT_SIZES.body,
                    lineHeight: '1.4'
                    }}
                >
                    {activeMember.desc}
                </p>
            </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};

export default ConceptSlide5;
