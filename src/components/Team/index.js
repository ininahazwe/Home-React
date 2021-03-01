import React from 'react';
import {ServicesContainer} from "../Projects/Projects.elements";
import TeamBlock from "./TeamBlock";
import {Member1, Member2, Member3, Member4, Member5, Member6} from "./Data";
import {TeamWrapper} from "./Team.elements";
import {AboutTitle} from "../AboutSection/About.elements";
import Flip from 'react-reveal/Flip';

const Team = (lightBg) => {
    return(
        <>
            <ServicesContainer lightBg={lightBg} id="team">
                <AboutTitle>The Team</AboutTitle>
                <TeamWrapper>
                    <Flip top>
                        <TeamBlock {...Member1}/>
                        <TeamBlock {...Member2}/>
                        <TeamBlock {...Member3}/>
                        <TeamBlock {...Member4}/>
                        <TeamBlock {...Member5}/>
                        <TeamBlock {...Member6}/>
                    </Flip>
                </TeamWrapper>
            </ServicesContainer>
        </>
    )
}

export default Team;