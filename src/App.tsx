import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Visit from "./pages/Visit";
import Beekeeping from "./pages/Beekeeping";
import PersonalBeekeeping from "./pages/PersonalBeekeeping";
import CorporateBeekeeping from "./pages/CorporateBeekeeping";
import Production from "./pages/Production";
import Concept from "./pages/Concept";
import Volunteering from "./pages/Volunteering";
import Vacancies from "./pages/Vacancies";
import Polination from "./pages/Polination";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    // Calculate aspect ratio based on screen dimensions to set layout height relative to width
    const setAspectRatio = () => {
      // Use 0.9 factor to make slides slightly shorter than full screen height to account for browser UI
      const screenRatio = (window.screen.height / window.screen.width) * 0.8;
      document.documentElement.style.setProperty('--layout-height-ratio', `${screenRatio * 100}vw`);
    };

    setAspectRatio();
    
    // Optional: Update if moved to a different screen with different Aspect Ratio, 
    // but typically we want it locked to the initial screen AR per request.
    window.addEventListener('resize', setAspectRatio); 
    return () => window.removeEventListener('resize', setAspectRatio);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/visit" replace />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/beekeeping" element={<Beekeeping />} />
        <Route path="/personal-beekeeping" element={<PersonalBeekeeping />} />
        <Route path="/corporate-beekeeping" element={<CorporateBeekeeping />} />
        <Route path="/production" element={<Production />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/pollination" element={<Polination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
