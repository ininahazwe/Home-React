import React from "react";
import { NavLink } from "react-router-dom";
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesDescription
} from "./Projects.elements";
import {Background2} from "../BackgroundElements";
import {AboutTitle} from "../AboutSection/About.elements";
import Fade from 'react-reveal/Fade';

// read JSON data
const postsData = require("./_posts.json");

export default function Project(img, alt) {
    const projects = postsData.map(project => {
        return (
            <>
                <NavLink to={"/project/" + project.slug} key={project.slug}>
                    <Fade bottom>
                        <ServicesCard>
                            <ServicesH2>{project.title}</ServicesH2>
                            <ServicesIcon src={project.image} alt={alt} />
                            <ServicesDescription>
                                {project.description}
                            </ServicesDescription>
                        </ServicesCard>
                    </Fade>
                </NavLink>
            </>
        );
    });

    return (
        <>
            <Background2>
                <ServicesContainer id="projects">
                <AboutTitle>Projects</AboutTitle>
                <ServicesWrapper>
                    {projects}
                </ServicesWrapper>
            </ServicesContainer>
            </Background2>
        </>
    )
}