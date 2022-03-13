import React from 'react';
import {MenuContainer, Icon, CloseIcon, MenuLink, MenuWrapper, Menu } from './MenuElements';

const menuDropdown = ({isMenuOpen, toggleMenu}) => {
    return (
        <MenuContainer onClick={toggleMenu} isOpen={isMenuOpen} >
            <Icon>
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <Menu>
                    <MenuLink to={'סלון'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>סלון</MenuLink>
                    <MenuLink to={'מטבח'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>מטבח</MenuLink>
                    <MenuLink to={'ציוד תינוקות'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>ציוד תינוקות</MenuLink>
                    <MenuLink to={'חדר ילדים'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>חדר ילדים</MenuLink>
                    <MenuLink to={'משרד ביתי'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>משרד ביתי</MenuLink>
                    <MenuLink to={'ציוד טיולים'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>ציוד טיולים</MenuLink>
                    <MenuLink to={'דברים נוספים'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>דברים נוספים</MenuLink>
                </Menu>
            </MenuWrapper>
        </MenuContainer>
    );
};

export default menuDropdown;