import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Flottant from "../components/Flottant";
import AboutSection from "../components/AboutSection";
import EditionSection from "../components/EditionsSection";
import Partners from "../components/Partners";
import Team from "../components/Team";
import Blog from "../components/Projects";
import CookieConsent from "react-cookie-consent";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <Flottant />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection />
            <EditionSection />
            <Blog />
            <Team />
            <Partners />
            <CookieConsent
                location="bottom"
                buttonText="I understand"
                cookieName="myAwesomeCookieName2"
                style={{ background: "whitesmoke", color: "gray" }}
                buttonStyle={{ color: "#fff", fontSize: "13px", background: "#f07f22" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
            <Footer />
            </>
    );
};

export default Home;