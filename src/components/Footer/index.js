import React from 'react';
import { FooterContainer, FooterWrap, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./Footer.elements";
import {animateScroll as scroll} from "react-scroll";
import Logo from "../../images/logo.png";
import {LogoSrc} from "../Navbar/Navbar.elements";
import {Link} from "react-router-dom";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <LogoSrc src={Logo} />
                        </SocialLogo>
                        <FooterLink><Link to="/mentions">Legal mentions</Link></FooterLink>
                        <WebsiteRights>Home © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;