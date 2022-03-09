import styled from 'styled-components';
import { Link } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const MenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0f0f0f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top ${({ isOpen }) => (isOpen ? '0' : '-200%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MenuWrapper = styled.div`
 color: white;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  } 
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;
  
  &:hover {
    color: lightgray;
    transition: 0.2s ease-in-out;
  }
`;
