import React from "react";
import styled, { keyframes } from "styled-components";
import skillsData from "../skillsData";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SkillsContainer = styled.div`
  overflow-x: hidden;
  text-align: center;
  padding: 20px;
  position: relative;
  background-color: #090917;
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

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
`;

const MarqueeContent = styled.div`
  display: flex;
  animation: ${scroll} 20s linear infinite;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1c1e27;
  color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 5px;
  margin: 0 10px;
  width: 150px;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 10px;
`;

const SkillName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const Skills = () => (
  <SkillsContainer id="skillsSection">
    <Title>Skills</Title>
    <Marquee>
      <MarqueeContent>
        {skillsData.map((skill) => (
          <SkillItem key={skill.id}>
            <SkillIcon src={skill.skillImg} alt={skill.skillName} />
            <SkillName>{skill.skillName}</SkillName>
          </SkillItem>
        ))}
        {skillsData.map((skill) => (
          <SkillItem key={`${skill.id}-duplicate`}>
            <SkillIcon src={skill.skillImg} alt={skill.skillName} />
            <SkillName>{skill.skillName}</SkillName>
          </SkillItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </SkillsContainer>
);

export default Skills;
