import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks} from "./NavbarElements";
import logo from "../../images/homeLogo.png";

const NavBar = ({toggleMenu}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to={'/'}>
                        <img src={logo} className={'logo-image'} alt={'The Zeitlers Catalog'}/>
                        The Zeitlers Catalog
                    </NavLogo>
                    <MobileIcon onClick={toggleMenu}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to={'/'}>ציוד טיולים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'/'}>תינוק</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'/'}>עציצים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'/'}>ילדים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'/'}>חדר שינה</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'/'}>סלון</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
};

export default NavBar;