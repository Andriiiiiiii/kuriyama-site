import React from "react";
import Header from "@/components/shared/Header";
import {
  PolinationHero,
  PolinationSlide2,
  PolinationSlide3,
  PolinationSlide4,
  PolinationSlide5,
  PolinationSlide6,
  PolinationSlide7,
  PolinationSlide8,
  PolinationSlide9,
  PolinationSlide10,
  Footer,
  
} from "@/components/sections";

const Polination = () => {
  const [heroStep, setHeroStep] = React.useState(0);
  const [slide2Step, setSlide2Step] = React.useState(0);
  const [slide3Step, setSlide3Step] = React.useState(0);
  const [slide4Step, setSlide4Step] = React.useState(0);
  const [slide5Step, setSlide5Step] = React.useState(0);
  const [slide6Step, setSlide6Step] = React.useState(0);
  const [slide7Step, setSlide7Step] = React.useState(0);
  const [slide8Step, setSlide8Step] = React.useState(0);
  const [slide9Step, setSlide9Step] = React.useState(0);
  const [slide10Step, setSlide10Step] = React.useState(0);

  // States to track if a slide has finished its main animation sequence
  const isHeroDone = heroStep >= 3; 
  const isSlide2Done = slide2Step >= 5;
  const isSlide3Done = slide3Step >= 3;
  const isSlide4Done = slide4Step >= 1;
  const isSlide5Done = slide5Step >= 2;
  const isSlide6Done = slide6Step >= 4;
  const isSlide7Done = slide7Step >= 1;
  const isSlide8Done = slide8Step >= 3;
  const isSlide9Done = slide9Step >= 1;
  
  // Handlers to synchronize "Catch-up" logic
  // If user scrolls to Slide 5, we force 1..3 to be DONE instantly.
  const handleInView = (index: number) => {
      // Index: 0=Hero, 1=Slide2, etc.
      
      // 1. Force slides far behind to be "Static Done" (Instant)
      // Logic: If I see Slide 5 (index 4), Slide 0,1,2 (1,2,3) should be static done.
      if (index > 1) {
          setHeroStep(prev => prev < 3 ? 10 : prev);
      }
      if (index > 2) {
          setSlide2Step(prev => prev < 5 ? 10 : prev);
      }
      if (index > 3) {
          setSlide3Step(prev => prev < 3 ? 10 : prev);
      }
      // Index 4 is Slide 5. If we are at 6 (index 5):
      if (index > 4) {
          setSlide4Step(prev => prev < 1 ? 10 : prev);
          setSlide5Step(prev => prev < 2 ? 10 : prev);
      }
      if (index > 5) {
          setSlide6Step(prev => prev < 4 ? 10 : prev);
      }
      if (index > 6) {
           setSlide7Step(prev => prev < 1 ? 10 : prev); // Slide 7 max is 1, so done is 1 or 10
      }
      if (index > 7) {
           setSlide8Step(prev => prev < 3 ? 10 : prev);
      }
      if (index > 8) {
           setSlide9Step(prev => prev < 1 ? 10 : prev);
      }

      // 2. Ensure PREVIOUS slide is at least STARTED (Animation chain trigger)
      // Not strictly necessary if we rely on "Done" cascade, but helps if user jumped
      if (index === 1 && heroStep === 0) setHeroStep(1);
      if (index === 2 && slide2Step === 0) setSlide2Step(1);
      if (index === 3 && slide3Step === 0) setSlide3Step(1);
      if (index === 4 && slide4Step === 0) setSlide4Step(1);
      if (index === 5 && slide5Step === 0) setSlide5Step(1);
      if (index === 6 && slide6Step === 0) setSlide6Step(1);
      if (index === 7 && slide7Step === 0) setSlide7Step(1);
      if (index === 8 && slide8Step === 0) setSlide8Step(1);
      if (index === 9 && slide9Step === 0) setSlide9Step(1); 
  };

  return (
    <main className="w-full bg-background whitespace-normal">
      <Header activeSection="beekeeping" />
      
      {/* 0. Hero */}
      <PolinationHero 
        step={heroStep} 
        setStep={setHeroStep} 
        onInView={() => handleInView(0)}
      />
      
      {/* 1. Slide 2 */}
      <PolinationSlide2 
        step={slide2Step} 
        setStep={setSlide2Step} 
        prevFinished={isHeroDone}
        onInView={() => handleInView(1)}
        key={`slide2-${slide2Step === 10 ? 'static' : 'anim'}`}
      />
      
      {/* 2. Slide 3 */}
      <PolinationSlide3 
        step={slide3Step} 
        setStep={setSlide3Step} 
        prevFinished={isSlide2Done}
        onInView={() => handleInView(2)}
        key={`slide3-${slide3Step === 10 ? 'static' : 'anim'}`}
      />
      
      {/* 3. Slide 4 */}
      <PolinationSlide4 
        step={slide4Step} 
        setStep={setSlide4Step} 
        prevFinished={isSlide3Done}
        onInView={() => handleInView(3)}
      />
      
      {/* 4. Slide 5 */}
      <PolinationSlide5 
        step={slide5Step} 
        setStep={setSlide5Step} 
        prevFinished={isSlide4Done}
        onInView={() => handleInView(4)}
        key={`slide5-${slide5Step === 10 ? 'static' : 'anim'}`}
      />
      
      {/* 5. Slide 6 */}
      <PolinationSlide6 
         step={slide6Step} 
         setStep={setSlide6Step} 
         prevFinished={isSlide5Done}
         onInView={() => handleInView(5)}
         key={`slide6-${slide6Step === 10 ? 'static' : 'anim'}`}
      />
      
      {/* 6. Slide 7 */}
      <PolinationSlide7 
         step={slide7Step} 
         setStep={setSlide7Step} 
         prevFinished={isSlide6Done}
         onInView={() => handleInView(6)}
         key={`slide7-${slide7Step === 10 ? 'static' : 'anim'}`}
      />
      
      {/* 7. Slide 8 */}
      <PolinationSlide8 
         step={slide8Step} 
         setStep={setSlide8Step} 
         prevFinished={isSlide7Done}
         onInView={() => handleInView(7)}
         key={`slide8-${slide8Step === 10 ? 'static' : 'anim'}`}
      />
      
      {/* 8. Slide 9 */}
      <PolinationSlide9 
         step={slide9Step} 
         setStep={setSlide9Step} 
         prevFinished={isSlide8Done}
         onInView={() => handleInView(8)}
      />
      
      {/* 9. Slide 10 */}
      <PolinationSlide10 
         step={slide10Step} 
         setStep={setSlide10Step} 
         prevFinished={isSlide9Done}
         onInView={() => handleInView(9)}
         key={`slide10-${slide10Step === 10 ? 'static' : 'anim'}`}
      />
      
      <div className="relative z-10 -mt-[10vw]">
        <Footer />
      </div>
    </main>
  );
};

export default Polination;
