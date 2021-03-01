import React from "react";
import {AboutPart, AboutSectionWrapper2, AccordionPart} from "../AboutSection/About.elements";
import {Description, ImageGrande, ImagePetite, SmallTitle} from "./AboutHeader.elements";
import bgAbout1 from "../../images/Kigali1-1.JPG";
import bgAbout3 from "../../images/ghana1-2.JPG";
import bgAbout4 from "../../images/kigali1-2.JPG";

const AboutDescription = () => {

    return(
            <AboutSectionWrapper2>
                <AboutPart>
                    <Description>
                        <SmallTitle>Who we are - what we do</SmallTitle>
                        <p>Our motivation towards novel educational strategy originated from our
                        interactions and experience at CRI-Paris, an educational institute in Paris. Their
                        emphasis and specialization are on interdisciplinary actions towards creating a
                        collaborative community for scientific research and education. </p>
                            <p>Consequently,
                        Home team is composed of students and staff members from CRI-Paris who
                        come from different cultural and educational backgrounds. The culmination of
                        each team members experience has intersected at CRI-Paris, where we all
                        share a passion for transforming educational experiences on an international
                            scale.</p>
                        <ImagePetite src={bgAbout1}/>
                    </Description>
                </AboutPart>
                <AccordionPart>
                    <ImageGrande src={bgAbout3}/>
                    <ImagePetite src={bgAbout4}/>
                </AccordionPart>
            </AboutSectionWrapper2>
    );
};

export default AboutDescription;