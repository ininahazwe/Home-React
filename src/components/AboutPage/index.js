import React from "react";
import {AboutPart, AccordionPart, AboutSectionWrapper2} from "../AboutSection/About.elements";
import {BigTitle, SmallTitle, Description} from "./AboutHeader.elements";

const AboutHeader = () => {

    return(
        <>

            <AboutSectionWrapper2>
                <AboutPart>
                  <Description>
                      While traditional pedagogy focuses on a lecturer and student
                      audience, our motivation stems from creating interactive, collaborative and
                      communities to understand theories and concepts through practice.
                  </Description>
                </AboutPart>
                <AccordionPart>
                        <BigTitle>HOME</BigTitle>
                    <SmallTitle>education - change making</SmallTitle>
                </AccordionPart>
            </AboutSectionWrapper2>
        </>
    );
};

export default AboutHeader;