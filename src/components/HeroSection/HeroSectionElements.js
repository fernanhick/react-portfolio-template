import styled, {keyframes} from 'styled-components';
import {Hexagon} from '@styled-icons/feather/Hexagon';

export const bgmotion = keyframes`
0%,100%   { background-color: cyan;);}
50%  {background-color: violet;}


`;

export const fadeIn = keyframes`
0%   {opacity:0;}
100%  {opacity:1;}
`;
export const slideInLeft = keyframes`
0%   {
  opacity:0 ;
  transform: translateX(50px)  ;  
}
100%  {
  opacity:1;
  transform: translateX(0px)  ;  
}
`;
export const slideInRight = keyframes`
0%   {
  opacity:0 ;
  transform: translateX(-50px)  ;  
}
100%  {
  opacity:1;
  transform: translateX(0px)  ;  
}
`;
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  height: 100vh;
  align-items: center;
  width: 100vw;
  z-index: 10;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(255, 30, 239);
  background: linear-gradient(
    128deg,
    rgba(255, 30, 239, 1) 20%,
    rgba(50, 139, 156, 1) 40%,
    rgba(199, 60, 216, 1) 60%,
    rgba(69, 192, 215, 1) 16%,
    rgba(255, 105, 244, 1) 17%,
    rgba(255, 255, 255, 0) 65%,
    rgba(255, 255, 255, 0) 80%
  );
  z-index: 3;
`;

export const ImgWrap = styled.div`
  width: 100%;
`;
export const Img = styled.img`
  opacity: 0.4;
  z-index: 6;
  width: 300%;
  height: 300%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 800px;
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  border-radius: 5%;
  padding: 8px 32px;
  background: rgba(0, 0, 0, 0.23);
  backdrop-filter: blur(6px);

  @media screen and (max-width: 480px) {
    width: 80%;
  } ;
`;

const neonbar = keyframes`
0%,100%   { border-color: cyan;);}
50%  {border-color: violet;}




`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: right;
  width: 80%;
  animation: ${fadeIn} 1s;
`;
export const HeroDesc = styled.p`
  display: flex;
  margin-top: 24px;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  animation: ${slideInRight} 5s forwards;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #bdbdbd;
  border-radius: 5px;
  padding: 12px;
  font-size: 1.1rem;
  text-align: right;
  width: 80%;
  animation: ${slideInLeft} 2s forwards;
`;
export const HeroBtnWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 32px;
  justify-content: space-between;
  align-items: center;

  border-top: 0.1rem solid cyan;
  animation: ${neonbar} 5s infinite;
`;
export const HeroBtn = styled.div`
  margin-left: 8px;
  font-size: 2rem;
  color: #fff;
`;
