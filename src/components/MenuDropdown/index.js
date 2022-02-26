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
                    <MenuLink to={'/'}>ציוד טיולים</MenuLink>
                    <MenuLink to={'/'}>תינוק</MenuLink>
                    <MenuLink to={'/'}>עציצים</MenuLink>
                    <MenuLink to={'/'}>ילדים</MenuLink>
                    <MenuLink to={'/'}>חדר שינה</MenuLink>
                    <MenuLink to={'/'}>סלון</MenuLink>
                 </Menu>
            </MenuWrapper>
        </MenuContainer>
    );
};

export default menuDropdown;