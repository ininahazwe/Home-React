import React from 'react';
import {PartnerH2, PartnersCard, LogoWrapper, PartnerIcon} from "./Partner.elements";

const PartnerBlock = ({id, img, alt, lightText, headline}) => {
    return(
        <>
            <PartnersCard id={id}>
                <LogoWrapper>
                    <PartnerIcon src={img} alt={alt} />
                </LogoWrapper>
                <PartnerH2 lightText={lightText}>{headline}</PartnerH2>
            </PartnersCard>
        </>
    )
}

export default PartnerBlock;