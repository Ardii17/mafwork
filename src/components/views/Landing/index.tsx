import NavbarLanding from "./NavbarLanding";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const LandingView = () => {
  const [toTop, setToTop] = useState(false);
  const featureRef: any = useRef();
  const aboutRef: any = useRef();
  const contactRef: any = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavbarLanding
        featureRef={featureRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <HeroSection />
      <FeaturesSection featureRef={featureRef} />
      <AboutSection aboutRef={aboutRef} />
      <ContactSection contactRef={contactRef} />
      <i
        className={`${
          toTop ? "block" : "hidden"
        } bx bx-chevron-up bg-white text-3xl py-1 px-2 z-40 fixed bottom-8 rounded-lg right-8 cursor-pointer shadow`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default LandingView;
