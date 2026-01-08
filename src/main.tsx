import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { getViewportLineHeight } from "./config/typography";

const applySiteLineHeight = () => {
  const value = getViewportLineHeight();
  document.documentElement.style.setProperty("--site-line-height", value.toString());
};

if (typeof window !== "undefined") {
  applySiteLineHeight();
  window.addEventListener("resize", applySiteLineHeight);
}

createRoot(document.getElementById("root")!).render(<App />);
