import React from 'react';
import {MenuContainer, Icon, CloseIcon, MenuLink, MenuWrapper, Menu } from './MenuElements';

const menuDropdown = ({isMenuOpen, toggleMenu}) => {
    return (
        <MenuContainer onClick={toggleMenu} isOpen={isMenuOpen}>
            <Icon>
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <Menu>
                    <MenuLink to={'/'} onClick={toggleMenu}>ציוד טיולים</MenuLink>
                    <MenuLink to={'/'} onClick={toggleMenu}>תינוק</MenuLink>
                    <MenuLink to={'/'} onClick={toggleMenu}>עציצים</MenuLink>
                    <MenuLink to={'/'} onClick={toggleMenu}>ילדים</MenuLink>
                    <MenuLink to={'/'} onClick={toggleMenu}>חדר שינה</MenuLink>
                    <MenuLink to={'/'} onClick={toggleMenu}>סלון</MenuLink>
                 </Menu>
            </MenuWrapper>
        </MenuContainer>
    );
};

export default menuDropdown;