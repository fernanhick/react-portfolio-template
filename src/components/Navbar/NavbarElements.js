import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  justify-content: center;
`;
export const NavContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const NavLink = styled(LinkR)`
  text-decoration: none;
`;
export const NavButton = styled.button``;
export const NavLogo = styled(LinkS)``;
