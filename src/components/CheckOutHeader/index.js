import React from 'react';
import {Nav, NavContainer, NavLogo, NavItem, NavMenu, NavRouterLink} from "./CheckOutHeaderElements";

const CheckOutHeader = () => {

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        🏡 מכירת חיסול ;
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavRouterLink to={'/'}>חזרה לקטלוג ⬅️ </NavRouterLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
};

export default CheckOutHeader;