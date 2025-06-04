import { LanguageProvider } from "./i18n/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ProfileCard from "./components/ProfileCard";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero.jsx"

function App() {
  const [shouldResetNavbar, setShouldResetNavbar] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShouldResetNavbar(true);
  };

  useEffect(() => {
    if (shouldResetNavbar) {
      // Reset the state after animation is triggered
      const timer = setTimeout(() => setShouldResetNavbar(false), 100);
      return () => clearTimeout(timer);
    }
  }, [shouldResetNavbar]);

  return (
    <Router>
      <LanguageProvider>
        <div className="relative min-h-screen">
          {/* Navbar mit höchstem z-index */}
          <div className="relative z-[10000]">
            {shouldResetNavbar ? null : <Navbar />}
            {shouldResetNavbar && <Navbar key="reset" />}
          </div>

          {/* Main content */}
          <div className="relative z-0">
            <main>
              {/* Home section ist bereits in Navbar/MainHeader enthalten */}
              <section id="Hero">
                <Hero />
              </section>
              <section id="timeline">
                <Timeline />
              </section>
              <section id="tech">
                <Tech />
              </section>
              <section id="about">
                <ProfileCard />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
            <Footer onScrollToTop={handleScrollToTop} />
          </div>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;