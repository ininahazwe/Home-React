import React, {useState} from "react";
import Accordion from "../Accordion";
import {Link} from 'react-router-dom';
import {Button} from "../ButtonElements";
import {AboutSectionWrapper, AboutPart, AccordionPart, AboutTitle, AboutDescription, Height} from "./About.elements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../HeroSection/Hero.elements";
import Fade from 'react-reveal/Fade';

const AboutSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return(
        <>
            <Height>
                <AboutTitle>What is it about</AboutTitle>
                <AboutSectionWrapper id="about">
                        <AboutPart>
                            <Fade bottom>
                                <AboutDescription>
                                    Founded in Paris, France, Home Association is a volunteer-based organization
                                    that focuses on the digitization of educational strategies through project-based
                                    activities.
                                </AboutDescription>
                                <HeroBtnWrapper>
                                    <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                                        <Link to="/about">Learn more</Link>  {hover? <ArrowForward /> : <ArrowRight />}
                                    </Button>
                                </HeroBtnWrapper>
                            </Fade>
                        </AboutPart>
                        <AccordionPart>
                            <Fade bottom>
                                <Accordion />
                            </Fade>
                        </AccordionPart>
                </AboutSectionWrapper>
            </Height>
        </>
    );
};

export default AboutSection;