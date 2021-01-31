import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useIntersection} from 'react-use';
import {
  AboutCont,
  AboutSec,
  AboutWrapper,
  AboutHeader,
  AboutSub,
  AboutDesc,
  ImgWrap,
} from './InfoSectionsElements';
const AboutSection = () => {
  return (
    <>
      <AboutSec id='section'>
        <AboutCont>
          <ImgWrap>
            <img id='profile' width='200px' height='200px' background='grey' />
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
