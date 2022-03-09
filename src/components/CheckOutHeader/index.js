import React from 'react';
import {Nav, NavContainer, NavLogo, NavItem, NavMenu, NavRouterLink} from "./CheckOutHeaderElements";
import logo from "../../images/homeLogo.png";

const CheckOutHeader = () => {

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to={'/'}>
                        <img src={logo} className={'logo-image'} alt={'The Zeitlers Catalog'}/>
                        The Zeitlers Catalog
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavRouterLink
                                to={'/'}
                            >חזרה לקטלוג</NavRouterLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
};

export default CheckOutHeader;