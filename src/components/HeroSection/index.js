import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, ArrowForward, ArrowRight, HeroBtnWrapper, HeroContent, HeroP, HeroDate, HeroHashTag} from "./Hero.elements";
import {Button} from "../ButtonElements";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const HeroSection = () => {

    const fadeLeft = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4 '/>
            </HeroBg>
            <HeroContent>
                <motion.h1
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                >HOME SDG<br/>Digital School</motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <HeroDate>The World to KIGALI<br/>from 8 October 2020</HeroDate>
                    <HeroP>
                        Interdisciplinary summer school to be an agent of change
                    </HeroP>
                    <HeroHashTag>digital</HeroHashTag>
                    <HeroHashTag>frugaltech</HeroHashTag>
                    <HeroBtnWrapper>
                        <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            <Link to="/edition/kigali2">Learn more</Link>  {hover? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </motion.div>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;