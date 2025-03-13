import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import projectsData from "../projectsData";
import Aos from "aos";
import "aos/dist/aos.css";

const projectsTabsList = [
  { tabId: "All", displayText: "ALL" },
  { tabId: "React", displayText: "React JS" },
  { tabId: "Php", displayText: "PHP & MySQL" },
  { tabId: "Basics", displayText: "Basic Web Development" },
];

const ProjectsApp = styled.div`
  background-color: #090917;
  overflow-x: hidden;
  padding: 20px;
`;

const ProjectsHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectsMainHeading = styled.h1`
  background-image: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin: 0;
`;

const ProjectsPara = styled.p`
  color: darkgray;
  text-align: center;
`;

const ProjectsTabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  color: #ffffff;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;

  &.active {
    border-color: #854ce6;
    font-weight: bold;
  }

  &:hover {
    border-color: #854ce6;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Dropdown = styled.select`
  display: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #1c1e27;
  color: #ffffff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProjectItemData = styled.div`
  background-color: #1c1e27;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin-right: 20px;
    width: 86%;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectHeading = styled.h3`
  color: #ffffff;
  margin: 10px 0 5px;
`;

const ProjectDescription = styled.p`
  color: #b1b2b3;
  margin: 5px 0 10px;
`;

const TechnologiesUsed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  justify-content: center;
`;

const TechnologyItem = styled.span`
  background-color: #1a0c2b;
  color: #854ce6;
  font-size: 13px;
  font-weight: 400px;
  padding: 5px 10px;
  border-radius: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const SourceBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  color: #854ce6;
  border: 2px solid hsla(271, 100%, 50%, 1);
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    border: none;
    color: #ffffff;
  }
`;

const LiveBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: #854ce6;
  border: none;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #854ce3;
  }
`;

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <ProjectsApp style={{ width: "90%", overflow: "hidden" }}>
      <ProjectsHeaderContent>
        <ProjectsMainHeading>Projects</ProjectsMainHeading>
        <ProjectsPara>Explore my Projects</ProjectsPara>
      </ProjectsHeaderContent>

      <ProjectsTabContainer data-aos="fade-down">
        {projectsTabsList.map((tab) => (
          <TabButton
            key={tab.tabId}
            className={activeTab === tab.tabId ? "active" : ""}
            onClick={() => setActiveTab(tab.tabId)}
          >
            {tab.displayText}
          </TabButton>
        ))}
        <Dropdown
          onChange={(e) => setActiveTab(e.target.value)}
          value={activeTab}
        >
          {projectsTabsList.map((tab) => (
            <option key={tab.tabId} value={tab.tabId}>
              {tab.displayText}
            </option>
          ))}
        </Dropdown>
      </ProjectsTabContainer>

      <ProjectsContainer>
        {filteredProjects.map((eachProject, aosIndex) => (
          <ProjectItemData key={eachProject.id} 
            data-aos={aosIndex % 2 === 0 ? "zoom-out" : "zoom-in"}
            >
            <ProjectImage
              src={eachProject.imageUrl}
              alt={eachProject.projectName}
            />
            <ProjectHeading>{eachProject.projectName}</ProjectHeading>
            <TechnologiesUsed>
              {eachProject.technologies.map((tech, index) => (
                <TechnologyItem key={index}>{tech}</TechnologyItem>
              ))}
            </TechnologiesUsed>
            <ButtonsContainer>
              <SourceBtn
                href={eachProject.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
                <FaGithub />
              </SourceBtn>
              <LiveBtn
                href={eachProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <FaEye />
              </LiveBtn>
            </ButtonsContainer>
          </ProjectItemData>
        ))}
      </ProjectsContainer>
    </ProjectsApp>
  );
};

export default Projects;
