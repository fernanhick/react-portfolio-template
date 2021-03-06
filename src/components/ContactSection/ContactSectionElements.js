import styled from 'styled-components';

export const ContanctContainer = styled.section`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;
export const CWrapr = styled.div`
  width: 25em;
  margin: 1.5em;
  height: 50vh;

  background: papayawhip;

  box-shadow: inset 0 0 40px rgba(240, 110, 170, 1),
    0 0 40px rgba(240, 110, 170, 1);
  /*   border: 0.2rem solid rgba(240, 110, 170, 1);
 */
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 10;
  @media screen and (max-width: 489px) {
    width: 90%;
    height: 70%;
  }
`;
export const SubmitForm = styled.form`
  display: flex;
  /*   flex-wrap: wrap;
 */
  padding: 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 11, 170, 1);
  height: 70vh;
`;
export const SubmitLabel = styled.input`
  cursor: pointer;

  padding: 0.5em;
  margin: 0.5em;
  width: 20vw;
  color: white;
  background: black;
  min-width: 20em;
  max-width: 20em;

  max-height: 2vh;
  border: none;
  border-radius: 3px;
  @media screen and (max-width: 489px) {
    width: 90%;
    min-width: 10em;
  }
`;
export const SubmitButton = styled.button`
  flex: 0 0 1px;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  padding: 0.3rem 3rem;
  cursor: pointer;
  transition: all 0.5s ease-in;
  background: rgba(255, 255, 250, 0.4);
  &:hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  }
`;
export const SubmitDetails = styled.div`
  color: black;
  z-index: 10;
`;
export const SubmitDetHeader = styled.h1``;
export const SunHead = styled.h1`
  padding-top: 0.6em;
  color: black;
  font-size: 2.5rem;
  background: rgba(255, 11, 250, 0.2);
  margin: 0;
`;
export const SubmitDetDesc = styled.p`
  padding: 0 2rem;
  font-size: 1.2rem;
  color: white;
`;
export const SubImg = styled.img`
  display: flex;
  position: absolute;
  transform: scale(0.5);
  z-index: 1;
`;
