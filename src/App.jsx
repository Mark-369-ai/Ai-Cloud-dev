import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

const App = () => {
  // Refs for each section
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const workflowRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Optional: Pass scroll function to Navbar as a prop

  return (
    <>
      <Navbar
        onNavClick={(section) => {
          switch (section) {
            case "hero":
              scrollToSection(heroRef);
              break;
            case "features":
              scrollToSection(featuresRef);
              break;
            case "workflow":
              scrollToSection(workflowRef);
              break;
            case "pricing":
              scrollToSection(pricingRef);
              break;
            case "testimonials":
              scrollToSection(testimonialsRef);
              break;
            case "contact":
              scrollToSection(contactRef);
              break;
            default:
              break;
          }
        }}
      />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div ref={featuresRef}>
          <FeatureSection />
        </div>
        <div ref={workflowRef}>
          <Workflow />
        </div>
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
