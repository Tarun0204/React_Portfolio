import React from "react";
import styled from "styled-components";

const AboutApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #090917;
  padding: 20px;

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

const RightContainer = styled.div`
  height: 45vh;
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

const LeftContainer = styled.div`
  flex: 1;
  max-width: 48%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextContent = styled.div`
  width: 100%;
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

const About = () => {
  return (
    <AboutApp id="aboutSection">
      <Title>About Me</Title>
      <LeftContainer>
        <TextContent>
          <Border>
            <BorderHeader>
              <RedCircle />
              <YellowCircle />
              <GreenCircle />
            </BorderHeader>
            <TextContentInner>
              <Greeting>Hello! :)</Greeting>
              <ContentText>
                An aspiring web developer with a passion for creating innovative
                and functional websites. I love diving into both the creative
                and technical aspects of web development, from designing
                intuitive user interfaces to building efficient back-end
                systems. My goal is to continually learn and grow in the field,
                while bringing fresh ideas and practical solutions to the
                projects I work on. Whether it's mastering new technologies or
                optimizing existing code, I thrive on challenges and am always
                excited to explore new opportunities.
              </ContentText>
              <div className="buttons-container">
                <button type="button">Download CV</button>
                <button type="button">Projects</button>
              </div>
            </TextContentInner>
          </Border>
        </TextContent>
      </LeftContainer>

      <RightContainer>
        <RightHeading>My Education</RightHeading>
        <EducationContent>
          <EduContainer>
            <Edu>BTech in Computer Science</Edu>
            <p>2020 - 2024</p>
          </EduContainer>
          <EduContainer>
            <Edu>BTech in Computer Science</Edu>
            <p>2020 - 2024</p>
          </EduContainer>
        </EducationContent>
      </RightContainer>
    </AboutApp>
  );
};

export default About;
