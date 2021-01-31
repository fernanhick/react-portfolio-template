import styled from 'styled-components';

export const AboutSec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4em 0;
`;
export const AboutCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0);
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);

  max-width: 80%;

  align-items: center;
  border-radius: 8px;
  padding: 20px;
  flex: 1 1 50%;
`;
export const AboutWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  padding: 3rem 0;
  flex: 1 1 50%;
`;
export const AboutHeader = styled.h1`
  font-size: 2.5rem;
  opacity: 1;
`;
export const AboutSub = styled.h2`
  font-size: 1.5rem;
`;
export const AboutDesc = styled.p`
  font-size: 1.1rem;
`;
export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 3rem;
`;
