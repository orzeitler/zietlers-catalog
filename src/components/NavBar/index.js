import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavRouterLink, CartIcon, Seperator, ItemCounter, FavIconWrapper} from "./NavbarElements";
import {Favorite} from "@material-ui/icons";

const NavBar = ({toggleMenu}) => {

    return (
            <Nav>
                <NavContainer>
                    <NavLogo to={'intro'} smooth={true} duration={500} spy={true} offset={-80}>
                        馃彙 诪讻讬专转 讞讬住讜诇 ;
                    </NavLogo>
                    <MobileIcon onClick={toggleMenu}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to={'住诇讜谉'}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >住诇讜谉</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'诪讟讘讞'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>诪讟讘讞</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'诪砖专讚 讘讬转讬'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>诪砖专讚 讘讬转讬</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'爪讬讜讚 转讬谞讜拽讜转'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>爪讬讜讚 转讬谞讜拽讜转</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'讞讚专 讬诇讚讬诐'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>讞讚专 讬诇讚讬诐</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'爪讬讜讚 讟讬讜诇讬诐'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>爪讬讜讚 讟讬讜诇讬诐</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'诪诇讗 讚讘专讬诐 讗讞专讬诐'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>诪诇讗 讚讘专讬诐 讗讞专讬诐</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
                <CartIcon>
                    <NavRouterLink to='/checkOut'>
                        <ItemCounter>驻专讟讬诐 砖讗讛讘转讬</ItemCounter>
                        <Favorite />
                    </NavRouterLink>
                </CartIcon>
            </Nav>
    );
};

export default NavBar;