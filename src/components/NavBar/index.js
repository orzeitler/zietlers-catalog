import React from 'react';
import {FaBars} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Nav, NavContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavRouterLink, CartIcon} from "./NavbarElements";
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
                            <NavLinks
                                to={'ציוד טיולים'}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >ציוד טיולים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'תינוק'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>תינוק</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'עציצים'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>עציצים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'ילדים'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>ילדים</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'חדר שינה'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>חדר שינה</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'סלון'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>סלון</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
                <CartIcon>
                    <NavRouterLink to='/checkOut'>
                        <AiOutlineShoppingCart />
                    </NavRouterLink>
                </CartIcon>
            </Nav>
        </>
    );
};

export default NavBar;