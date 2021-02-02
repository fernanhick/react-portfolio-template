import React from 'react';
import {
  AboutCont,
  AboutDesc,
  AboutHeader,
  AboutSec,
  AboutSub,
  AboutWrapper,
  ImgWrap,
} from './InfoSectionsElements';
const AboutSection = () => {
  return (
    <>
      <AboutSec id='about'>
        <AboutCont>
          <ImgWrap>
            <img
              src='/images/prof.jpg'
              id='profile'
              width='200px'
              height='200px'
              background='grey'
              alt='profile pic'
            />
          </ImgWrap>
          <AboutWrapper>
            <AboutHeader>Fernando Andres Fernandez Hickman</AboutHeader>

            <AboutSub className='fade-In'>Front-End Web Developer</AboutSub>
            <AboutDesc>
              I am a Software Engineer graduated with honor's in United Kingdom
              and mostly focusing as a Front-End Web Developer with knowledge in
              Backn-End.{' '}
            </AboutDesc>
            <AboutDesc>
              Experience with the front-end stack HTML, CSS, Javascript and
              currently implementing React library into my development stack.{' '}
            </AboutDesc>
            <AboutDesc>
              Passionate for design as well as functionality of the product with
              a keen eye for details.
            </AboutDesc>
          </AboutWrapper>
        </AboutCont>
      </AboutSec>
    </>
  );
};

export default AboutSection;
