import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavRouterLink, CartIcon, Seperator, ItemCounter, FavIconWrapper} from "./NavbarElements";
import {Favorite} from "@material-ui/icons";

const NavBar = ({toggleMenu}) => {

    return (
            <Nav>
                <NavContainer>
                    <NavLogo to={'intro'} smooth={true} duration={500} spy={true} offset={-80}>
                        🏡 מכירת חיסול ;
                    </NavLogo>
                    <MobileIcon onClick={toggleMenu}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to={'סלון'}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >סלון</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'מטבח'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>מטבח</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'משרד ביתי'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>משרד ביתי</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'ציוד תינוקות'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>ציוד תינוקות</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'חדר ילדים'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>חדר ילדים</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'ציוד טיולים'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>ציוד טיולים</NavLinks>
                        </NavItem>
                        <Seperator>/</Seperator>
                        <NavItem>
                            <NavLinks to={'מלא דברים אחרים'}
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      offset={-80}>מלא דברים אחרים</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
                <CartIcon>
                    <NavRouterLink to='/checkOut'>
                        <ItemCounter>פרטים שאהבתי</ItemCounter>
                        <Favorite />
                    </NavRouterLink>
                </CartIcon>
            </Nav>
    );
};

export default NavBar;