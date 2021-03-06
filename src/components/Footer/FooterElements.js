import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: rgba(255, 11, 170, 1);
  width: 100%;
`;
export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alignt-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FoooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  } ;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (mex-width: 820px) {
    flex-direction: column;
  } ;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: var(--light-text);

  @media screen and (max-width: 420px);
  margin: 0;
  padding: 10px;
  width: 100%;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: var(--light-text);
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--secondary);
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1100px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  padding: 0.5em;
  /*   margin: 40px auto 0 auto;
 */
  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;

export const SocialLogo = styled(Link)`
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: white;
  margin: 0.4rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled(Link)`
  font-size: 24px;
  color: white;
`;
