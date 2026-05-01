import { Suspense, lazy, useEffect, useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import BottomDock from "@/components/BottomDock";
import Hero from "@/components/sections/Hero";

const Scene3D = lazy(() => import("@/components/Scene3D"));
const About = lazy(() => import("@/components/sections/About"));
const Achievements = lazy(() => import("@/components/sections/Achievements"));
const Education = lazy(() => import("@/components/sections/Education"));
const Works = lazy(() => import("@/components/sections/Works"));
const Documentation = lazy(() => import("@/components/sections/Documentation"));
const Footer = lazy(() => import("@/components/sections/Footer"));

function LightweightBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,124,255,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.18),transparent_50%)]" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,transparent_30%,rgba(5,7,13,0.45)_75%)]" />
    </div>
  );
}

function useDeferredDesktopScene() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const saveData = navigator.connection?.saveData;

    if (prefersReducedMotion || isMobile || saveData) return undefined;

    const loadScene = () => setShouldLoad(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadScene, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(loadScene, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return shouldLoad;
}

function App() {
  const shouldLoadScene = useDeferredDesktopScene();

  return (
    <LanguageProvider>
      <div className="noise relative min-h-screen overflow-x-hidden bg-bg text-white selection:bg-electric/30">
        <LightweightBackground />
        {shouldLoadScene ? (
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        ) : null}
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Achievements />
            <Education />
            <Works />
            <Documentation />
            <Footer />
          </Suspense>
        </main>
        <BottomDock />
      </div>
    </LanguageProvider>
  );
}

export default App;
