import React from 'react';
import {
  Decription,
  Detail,
  Heading,
  ProjectCont,
  Topline,
  ProjectImg,
} from './ProjectsStyle';
import {projectsList} from './data';

const Projects = ({topLine, headLine, description}) => {
  return (
    <>
      <ProjectCont>
        <ProjectImg></ProjectImg>
        <Detail>
          <Topline>{topLine}</Topline>
          <Heading>{headLine}</Heading>
          <Decription>{description}</Decription>
        </Detail>
      </ProjectCont>
    </>
  );
};

export default Projects;
