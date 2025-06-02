import Navbar from "./components/Navbar";
import MainHeader from "./components/Hero.jsx";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ProfileCard from "./components/ProfileCard";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <Timeline />
      <Tech />
      <ProfileCard />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
