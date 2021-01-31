import React, {useEffect} from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements';
const Sidebar = ({isOpen, toggle, a, d, themeName}) => {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

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
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to='hobbies' onClick={toggle}>
            Hobbies
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
