import React from 'react';
import {
  Nav,
  NavButton,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './NavbarElements';

function Navbar() {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to='#'></NavLogo>
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
          <NavButton></NavButton>
        </NavContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
