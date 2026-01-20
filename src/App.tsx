import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Visit from "./pages/Visit";
import Beekeeping from "./pages/Beekeeping";
import PersonalBeekeeping from "./pages/PersonalBeekeeping";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/beekeeping" element={<Beekeeping />} />
      <Route path="/personal-beekeeping" element={<PersonalBeekeeping />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
