import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 3;
  direction: rtl;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  white-space: pre;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled.div`
  padding-right: 10px;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 20px;
  list-style: none;
  text-align: center;
  margin-left: 50px;
  
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const NavItem = styled.li`
  height: 30px;
  border-radius: 30px;
  background: #61dafb;
  border: 2px solid black;
`;

export const NavRouterLink = styled(LinkR)`
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;


