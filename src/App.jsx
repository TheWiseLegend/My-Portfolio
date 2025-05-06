import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import VolunteerExp from "./sections/VolunteerExp";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            {/* <LogoSection /> */}
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <VolunteerExp />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
