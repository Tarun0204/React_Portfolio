import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { About as AboutData } from "../MyData";
import { Education as StudyData } from "../MyData";

const AboutApp = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  background-color: #090917;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  background-image: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

const LeftContainer = styled.div`
  flex: 1;
  max-width: 48%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
  }
`;

const RightContainer = styled.div`
  height: auto;
  flex: 1;
  margin-left: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #1c1e27;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const TextContent = styled.div`
  width: 100%;
  overflow: hidden;
`;

const RoundedBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Border = styled(RoundedBox)`
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BorderHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const RedCircle = styled(Circle)`
  background-color: red;
`;

const YellowCircle = styled(Circle)`
  background-color: yellow;
`;

const GreenCircle = styled(Circle)`
  background-color: green;
`;

const TextContentInner = styled.div`
  padding: 20px;
  color: #ffffff;
  background-color: #1c1e27;
  text-align: justify;
  font-size: 1.32rem;
  line-height: 2;
  overflow-y: auto;
`;

const Greeting = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;

const RightHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
`;

const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EduContainer = styled.div`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background-color: #090917;
  color: #ffffff;
  border-radius: 12px;
`;

const Edu = styled.h3`
  font-size: 16px;
`;

const EduPara = styled.p`
  font-size: 15px;
  font-style: italic;
`;

const DownloadBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-align: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { aboutDescription, resumeLink } = AboutData;

  return (
    <AboutApp id="aboutSection">
      <Title>About Me</Title>
      <LeftContainer data-aos="fade-right">
        <TextContent>
          <Border>
            <BorderHeader>
              <RedCircle />
              <YellowCircle />
              <GreenCircle />
            </BorderHeader>
            <TextContentInner>
              <Greeting>Hello! :)</Greeting>
              <ContentText>{aboutDescription}</ContentText>
              <div className="buttons-container">
                <DownloadBtn type="button" href={resumeLink}>
                  Download CV <FaFileDownload />
                </DownloadBtn>
              </div>
            </TextContentInner>
          </Border>
        </TextContent>
      </LeftContainer>

      <RightContainer data-aos="fade-left">
        <RightHeading>
          <FaGraduationCap /> My Education
        </RightHeading>
        <EducationContent data-aos="fade-up">
          {StudyData.map(({ id, collegeName, Stream, duration }) => (
            <EduContainer key={id}>
              <Edu>{collegeName}</Edu>
              <EduPara>
                {Stream}, {duration}
              </EduPara>
            </EduContainer>
          ))}
        </EducationContent>
      </RightContainer>
    </AboutApp>
  );
};

export default About;
