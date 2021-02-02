import {MenuAltRight} from '@styled-icons/boxicons-regular/MenuAltRight';
import {Link as LinkS} from 'react-scroll';
import styled, {keyframes} from 'styled-components';

export const MenuIcon = styled(MenuAltRight)`
  color: white;
`;

const neonbar = keyframes`
0%,100%   { background-color: cyan;);}
50%  {background-color: violet;}
`;

export const Nav = styled.nav`
  height: 2.4em;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 30;
  box-shadow: 0px 10px 25px;
  background: rgba(0, 0, 0, 1);

  justify-content: center;
  @media screen and (max-width: 678px) {
  }
  /*   animation: ${neonbar} 5s infinite;
 */
`;
export const NavContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 70vw;
  padding: 0 0.7rem;
  @media screen and (max-width: 678px) {
    width: 100vw;
  } ;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;

  margin: 0;
  @media screen and (max-width: 678px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const NavLink = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  padding: 0 0.7rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #fff;

  transition: all 0.2s ease-out;
  &:hover {
    text-shadow: 0px 0px 50px violet, 0px 0px 35px violet, 0px 0px 60px violet;
  }
`;
export const NavButton = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  text-color: white;
  @media screen and (max-width: 678px) {
    display: flex;
  }
`;
export const NavLogo = styled(LinkS)`
  font-size: 1.3rem;
  position: relative;
  color: white;
  padding: 0rem 0.5rem;
`;
