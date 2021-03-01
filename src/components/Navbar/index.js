import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink, LogoSrc, HeartIcon} from './Navbar.elements';
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";

const Navbar = ({toggle}) => {


    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color:'var(--color1)'}}>
                <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>
                      <LogoSrc src={Logo} />
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                          >About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='editions'
                                    smooth={true} duration={500} spy={true} exact='true' offset={0}
                          >Editions</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='projects'
                                    smooth={true} duration={500} spy={true} exact='true' offset={0}
                          >Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='partners'
                                    smooth={true} duration={500} spy={true} exact='true' offset={0}
                          >Partners</NavLinks>
                      </NavItem>
                      <NavItem>
                          <a href="https://platform.home-education.fr/">Platform</a>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink>
                          <Link to="/donation"><HeartIcon /> Donate</Link>
                      </NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
