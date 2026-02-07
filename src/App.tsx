import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Visit from "./pages/Visit";
import Beekeeping from "./pages/Beekeeping";
import PersonalBeekeeping from "./pages/PersonalBeekeeping";
import CorporateBeekeeping from "./pages/CorporateBeekeeping";
import Production from "./pages/Production";
import Concept from "./pages/Concept";
import Volunteering from "./pages/Volunteering";
import Vacancies from "./pages/Vacancies";
import NotFound from "./pages/NotFound";

const App = () => (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
