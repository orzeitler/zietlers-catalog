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
                    <MenuLink to={'חדר שינה'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>חדר שינה</MenuLink>
                    <MenuLink to={'ילדים'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>ילדים</MenuLink>
                    <MenuLink to={'עציצים'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>עציצים</MenuLink>
                    <MenuLink to={'תינוק'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>תינוק</MenuLink>
                    <MenuLink to={'ציוד טיולים'} smooth={true} duration={500} spy={true} offset={-80} onClick={toggleMenu}>ציוד טיולים</MenuLink>
                </Menu>
            </MenuWrapper>
        </MenuContainer>
    );
};

export default menuDropdown;