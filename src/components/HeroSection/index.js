import gsap from 'gsap/gsap-core';
import React from 'react';
import {
  HeroBg,
  HeroBtn,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroDesc,
  HeroH1,
  HeroP,
  HexCont,
  Hex,
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
          My name is Fernando and I am a Software Engineer graduate focusing on
          the development of web design, functionality and User Interface.
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
