import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  background: black;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 789px) {
    min-width: 90%;
  } ;
`;
