import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  background: 
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);

  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  padding: 0;
  height: 150px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  } ;
`;

export const SidebarLink = styled(LinkS)`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 30%;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  background: rgba(255, 11, 170, 1);
  &:hover {
    transition: 100 0.2s ease-in-out;
    transform: scale(1.02);
    box-shadow: 3px 2px -5px;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
