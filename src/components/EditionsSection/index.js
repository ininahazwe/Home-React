import React from "react";
import {AboutPart, AboutDescription, AboutTitle, AboutSectionWrapper, Height} from "../AboutSection/About.elements";
import {ImgEdition, EditionWrapper, EditionBigWrapper} from "./Editions.elements";
import {NavLink} from "react-router-dom";
import {Background1} from "../BackgroundElements";
import {PartnerH2} from "../Team/Team.elements";

// read JSON data
const postsData = require("./_posts.json");

export default function EditionSection(img, alt) {
    const editions = postsData.map(edition => {
        return (
            <NavLink to={"/edition/" + edition.slug} key={edition.slug}>
                <EditionWrapper>
                    <ImgEdition src={edition.image} alt={alt} />
                    <PartnerH2>{edition.title}</PartnerH2>
                </EditionWrapper>
            </NavLink>
        );
    });

    return (
        <>
            <Background1>
                <Height>
                    <AboutTitle>Previous editions</AboutTitle>
                    <AboutSectionWrapper id="editions">
                            <AboutPart>
                                <AboutDescription>
                                    After a successful experience in Ghana, we were empowered by our mentors and peers at CRI-Paris to continue our educational efforts. Furthermore, we were able to put out together our specializations around the implementation of digital and frugal technologies for sustainable solutions.<br /><br />
                                    Therefore, over the course of the 2019-2020 academic year we focused on the development of project-based activities to create a summer school for students with the goal of developing new skills.
                                </AboutDescription>
                            </AboutPart>
                            <EditionBigWrapper>
                                {editions}
                            </EditionBigWrapper>
                    </AboutSectionWrapper>
                </Height>
            </Background1>
        </>
    )
}