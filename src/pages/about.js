import React from 'react';
import Flottant from "../components/Flottant";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutPage";
import AboutDescription from "../components/AboutPage/AboutDescription";
import YoutubePlayer from "../components/VideoPlayer";
import {Background1} from "../components/BackgroundElements";
import {DivClose} from "../components/Projects/Projects.elements";
import {HashLink as Link} from "react-router-hash-link";

const AboutPage = () => {

    return(
        <>
            <Link to='/#about'>
                <DivClose />
            </Link>
            <Background1>
                <Flottant />
                <AboutHeader />
                    <YoutubePlayer videoId = '6AczfCLJkCQ' />
                <AboutDescription />
                <Footer />
            </Background1>
        </>
    );
};

export default AboutPage;