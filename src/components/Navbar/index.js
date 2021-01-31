import React from 'react';
import {
  Nav,
  NavButton,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  MenuIcon,
} from './NavbarElements';

function Navbar({toggle}) {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='#'>Fernando H</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink to='about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='projects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='hobbies'>Hobbies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='contact'>Contact</NavLink>
          </NavItem>
        </NavMenu>
        <NavButton onClick={toggle}>
          <MenuIcon />
        </NavButton>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
