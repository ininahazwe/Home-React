import React from "react";
import { useParams } from "react-router";
import Flottant from "../Flottant";
import { HashLink as Link } from 'react-router-hash-link';
import {
    ProjectContainer,
    ProjectImage,
    ServicesH1,
    ProjectAbstract,
    Content,
    DivClose
} from "./Projects.elements";
import Slide from 'react-reveal/Slide';

const postsData = require("./_posts.json");

export default function ProjectPost() {
    var { slug } = useParams(),
        project = findPostBySlug(slug);

    return (
        <>
            <Flottant />
            <Link to='/#projects'>
                <DivClose />
            </Link>
                <ProjectContainer>
                    <Slide bottom>
                    <div>
                        <ServicesH1>{project.title}</ServicesH1>
                        <ProjectAbstract>{project.description}</ProjectAbstract>
                    </div>

                    <Content><div dangerouslySetInnerHTML={{__html: project.content }} /></Content>
                    <ProjectImage src={project.image}/>
                    </Slide>
                </ProjectContainer>
        </>
    );
}

function findPostBySlug(slug) {
    return postsData.find(o => o.slug === slug);
}