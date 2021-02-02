import React from 'react';
import {
  Decription,
  Detail,
  Heading,
  ProjectCont,
  Topline,
  ProjectImg,
  ImgD,
  ImgM,
  Mark,
  MarkWrap,
  DescWrap,
  DevTools,
} from './ProjectsStyle';
import {projectsList} from './data';

const Projects = () => {
  return (
    <>
      {projectsList.map((data, key) => {
        return (
          <ProjectCont key={key}>
            <ProjectImg>
              <ImgD src={data.imgDesktop} alt={data.alt} />
              <ImgM src={data.imgMobile} alt={data.alt} />
            </ProjectImg>
            <Detail>
              {data.dev == 'true' ? (
                <Mark style={{background: 'green'}}>Working</Mark>
              ) : (
                <Mark style={{background: 'orangeRed'}}>Developing</Mark>
              )}
              <Topline>{data.topLine}</Topline>
              <Heading>{data.headLine}</Heading>
              <DescWrap>
                <Decription>{data.description}</Decription>
                <DevTools>
                  Languages:
                  {/*  {data.languages.map((key) => {
                    return <p key={key}>{key}</p>;
                  })} */}
                  <p>{data.languages}</p>
                </DevTools>
              </DescWrap>
            </Detail>
          </ProjectCont>
        );
      })}
    </>
  );
};

export default Projects;
