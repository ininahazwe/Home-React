import React from "react";
import { useParams } from "react-router";
import Flottant from "../Flottant";
import { HashLink as Link } from 'react-router-hash-link';
import {ProjectAbstract, Content, DivClose} from "../Projects/Projects.elements";
import {EditionPageImage, EditionContainer, Sticky, EditionH1, SideText} from "./Editions.elements";
import YoutubePlayer from "../VideoPlayer";
import Footer from "../Footer";
import Slide from 'react-reveal/Slide';

const postsData = require("./_posts.json");

export default function EditionPost() {
    var { slug } = useParams(),
        edition = findPostBySlug(slug);

    return (
        <>
            <Flottant />

            <Link to='/#editions'>
                <DivClose />
            </Link>
            <EditionContainer>
                <Slide bottom>
                <Sticky>
                    <EditionPageImage src={edition.image}/>
                </Sticky>
                <SideText>
                    <EditionH1>{edition.title}</EditionH1>
                    <ProjectAbstract>{edition.description}</ProjectAbstract>
                    <Content>
                        <div dangerouslySetInnerHTML={{__html: edition.content }} />
                    </Content>
                </SideText>
                </Slide>
            </EditionContainer>
            <YoutubePlayer videoId = {edition.videoId} />
            <Footer />
        </>
    );
}

function findPostBySlug(slug) {
    return postsData.find(o => o.slug === slug);
}