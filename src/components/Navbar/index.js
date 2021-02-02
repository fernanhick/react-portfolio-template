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
            <NavLink
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='projects'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='hobbies'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
            >
              Contact Me!
            </NavLink>
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
