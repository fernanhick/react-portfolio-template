import React, {useEffect} from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
  const handleKeyDown = (event) => {
    console.log('A key was pressed', event.keyCode);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <SidebarContainer isOpen={!isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='projects'
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}
          >
            Projects
          </SidebarLink>

          <SidebarLink
            to='contact'
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
