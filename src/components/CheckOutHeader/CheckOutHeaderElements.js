import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 3;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  
  .logo-image {
    margin-right: 10px;
    height: 30px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;
  
  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const NavItem = styled.li`
  height: 40px;
  border-radius: 20px;
  border: 4px solid white;
`;

export const NavRouterLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;


