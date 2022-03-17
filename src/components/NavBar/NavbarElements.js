import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  direction: rtl;
  background: #ffff;
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  font-family: 'Assistant';
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: right;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 37px;
  font-weight: 800;
  width: max-content;
  white-space: pre;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const CartIcon = styled.div`
    color: #000;
    font-size: 13px;
    cursor: pointer;
    z-index: 10;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    left: 50px;  }
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 8px;
    left: 50px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  direction: rtl;
  margin-right: 20px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  white-space: pre;
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavRouterLink = styled(LinkR)`
  text-decoration: none;
  color: #E87171;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Seperator = styled.div`
  color: #000;
  margin: 0 10px;
`
export const ItemCounter = styled.div`
  color: #000;
  font-size: 13px;
  white-space: pre;
  margin-left: 5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

