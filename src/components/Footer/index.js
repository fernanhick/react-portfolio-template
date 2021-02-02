import React from 'react';
import {
  FoooterLinksContainer,
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  SocialMediaWrap,
  SocialMedia,
} from './FooterElements';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FoooterLinksContainer>
            <FooterLinksWrapper></FooterLinksWrapper>
          </FoooterLinksContainer> */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                Fernando A F Hickman
              </SocialLogo>
              <WebsiteRights>
                All right are reserved for this website{' '}
                {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  to='/home'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink to='/#' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink to='/#' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink to='/#' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink to='/#' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
