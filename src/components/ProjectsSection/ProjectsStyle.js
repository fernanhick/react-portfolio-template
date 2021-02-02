import styled from 'styled-components';

export const ProjectCont = styled.div`
  position: relative;
  height: 100%;
  max-width: 300px;
  box-shadow: inset 0px 0px 15px;

  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 1px;
  flex-direction: row;
  @media screen and (max-width: 789px) {
    width: 90%;
    min-width: 90%;
  }
`;

export const Mark = styled.div`
  position: relative;
  height: 2em;
  width: 210px;
  font-size: 1.1rem;
  top: 1.5em;
  left: -3.5em;
  padding-top: 0.3rem;
  box-shadow: 0px 7px 15px;
  transform: rotate(-45deg);
`;
export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  flex: 1 1 1px;
`;
export const DevTools = styled.ul`
  margin: 0;
  padding: 0;
  background: white;
  flex-basis: 25%;
`;
export const ProjectImg = styled.div`
  width: 400px;
  min-width: 300px;
  min-height: 260px;
  display: flex;

  justify-content: space-between;
  flex: 1 1 1px;
  margin: 2rem;
`;
export const ImgM = styled.img`
  width: 40%;
  min-height: 30%;

  max-height: 40%;
  box-shadow: 8px 8px 15px;
  transform: scale(0.7) translateX(-150%) translateY(50px);
`;
export const ImgD = styled.img`
  width: 100%;
  height: 100%;
  max-height: 50%;
  box-shadow: 8px 8px 15px;
  flex-basis: 25%;
`;
export const Detail = styled.div`
  background: rgba(0, 0, 0, 0.8);
  flex: 1 0 1px;
  display: flex;
  flex-direction: column;
  min-width: 70%;
  /*   height: 100%;
 */
  height: 30em;

  alig-items: center;
  justify-content: space-beteween;
  box-shadow: 0px -8px 10px;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 789px) {
  } ;
`;
export const Topline = styled.h2`
  font-size: 1rem;
  color: grey;
  text-align: right;
  background: rgba(0, 0, 0, 0.3);
  padding-right 0.8rem;
`;
export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #d6d6d6;
  height: 5rem;
`;
export const Decription = styled.p`
  color: #bdbdbd;
  margin: 0 0.8rem;
  min-width: 70%;
  flex-basis: 70%;
`;
