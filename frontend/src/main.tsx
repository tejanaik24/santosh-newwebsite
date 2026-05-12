import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App.tsx";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
