import React from 'react';
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroDesc,
  HeroH1,
  HeroP,
  Img,
  ImgWrap,
} from './HeroSectionElements';
import './style.css';
function HeroSection() {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <ImgWrap>
          <Img src='/images/1024.svg' />
        </ImgWrap>
      </HeroBg>
      <HeroContent>
        <HeroH1 className='box'>Welcome, Bienvenido </HeroH1>
        <HeroP>
          My name is Fernando Andres Fernandez Hickman, I am a Software Engineer
          graduated with Honor's 2:1 in the university of John Moore's in
          Liverpool.
        </HeroP>
        <HeroP>
          This is my portfolio site where you can find some information about me
          and current projects that I am working on.
        </HeroP>
        <HeroBtnWrapper>
          <a className='hero-btn' href='about'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Learn More
          </a>
          <HeroDesc>Follow the link to know more about me!</HeroDesc>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
