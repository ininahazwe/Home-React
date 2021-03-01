import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu} from "./Sidebar.elements";
import {FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="editions" onClick={toggle}>Editions</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="partners" onClick={toggle}>Partners</SidebarLink>
                    <a href="https://platform.home-education.fr/">Platform</a>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>
                        <Link to="/donation"><FaHeart /> Donate</Link>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;