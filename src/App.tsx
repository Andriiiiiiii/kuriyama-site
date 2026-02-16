import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Visit from "./pages/Visit";
import Beekeeping from "./pages/Beekeeping";
import PersonalBeekeeping from "./pages/PersonalBeekeeping";
import CorporateBeekeeping from "./pages/CorporateBeekeeping";
import Production from "./pages/Production";
import Concept from "./pages/Concept";
import Volunteering from "./pages/Volunteering";
import Vacancies from "./pages/Vacancies";
import Polination from "./pages/Polination";
import ApiaryVisit from "./pages/ApiaryVisit";
import Events from "./pages/Events";
import PhotoVideo from "./pages/PhotoVideo";
import Blog from "./pages/Blog";
import PricesVisit from "./pages/PricesVisit";
import PricesBeehives from "./pages/PricesBeehives";
import VisitingRules from "./pages/VisitingRules";
import StoneGarden from "./pages/StoneGarden";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/shared/ScrollToTop";

const App = () => {
  useEffect(() => {
    const setAspectRatio = () => {
      const isDesktop = window.innerWidth >= 1024;
      const layoutRatioVw = isDesktop
        ? 50
        : (window.innerHeight / window.innerWidth) * 100 * 0.8;

      document.documentElement.style.setProperty(
        "--layout-height-ratio",
        `${layoutRatioVw}vw`
      );
    };

    setAspectRatio();
    window.addEventListener("resize", setAspectRatio);
    return () => window.removeEventListener("resize", setAspectRatio);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/beekeeping" element={<Beekeeping />} />
        <Route path="/personal-beekeeping" element={<PersonalBeekeeping />} />
        <Route path="/corporate-beekeeping" element={<CorporateBeekeeping />} />
        <Route path="/production" element={<Production />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/pollination" element={<Polination />} />
        <Route path="/apiary-visit" element={<ApiaryVisit />} />
        <Route path="/events" element={<Events />} />
        <Route path="/photo-video" element={<PhotoVideo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/prices-visit" element={<PricesVisit />} />
        <Route path="/prices-beehives" element={<PricesBeehives />} />
        <Route path="/visiting-rules" element={<VisitingRules />} />
        <Route path="/stone-garden" element={<StoneGarden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;