import React from 'react';
import {ServicesWrapper, ServicesContainer} from "../Projects/Projects.elements";
import PartnerBlock from "./PartnerBlock";
import {PartnersWrapper} from "../Partners/Partner.elements"
import {PartnerOne, PartnerThree, PartnerTwo} from "./Data";
import {Background1} from "../BackgroundElements";
import {AboutTitle} from "../AboutSection/About.elements";
import Flip from 'react-reveal/Flip';

const Partners = () => {
    return(
        <>
            <Background1 color='var(--color1'>
                <ServicesContainer id="partners">
                    <AboutTitle>Our Partners</AboutTitle>
                    <PartnersWrapper>
                        <Flip bottom>
                            <PartnerBlock {...PartnerOne} />
                            <PartnerBlock {...PartnerTwo} />
                            <PartnerBlock {...PartnerThree} />
                        </Flip>
                    </PartnersWrapper>
                </ServicesContainer>
            </Background1>
        </>
    )
}

export default Partners;