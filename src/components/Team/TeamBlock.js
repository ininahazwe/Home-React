import React from 'react';
import {PartnerH2, PartnersCard, TeamWrapper, Photo} from "./Team.elements";

const TeamBlock = ({id, img, alt, lightText, headline}) => {
    return(
        <>
            <PartnersCard id={id}>
                <TeamWrapper>
                    <Photo src={img} alt={alt} />
                </TeamWrapper>
                <PartnerH2 lightText={lightText}>{headline}</PartnerH2>
            </PartnersCard>
        </>
    )
}

export default TeamBlock;