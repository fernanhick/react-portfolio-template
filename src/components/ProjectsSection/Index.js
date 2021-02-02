import React from 'react';
import Projects from './Projects';
import {ProjectsContainer} from './ProjectsElements';

import {SectionsHeader} from '../SectionsHeaderStyle';
const ProjectsSection = () => {
  return (
    <>
      <SectionsHeader>Projects</SectionsHeader>
      <ProjectsContainer id='projects'>
        <Projects />
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
