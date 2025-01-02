import styled from "styled-components";
import { useState } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import projectsData from "../projectsData";

const projectsTabsList = [
  { tabId: "All", displayText: "ALL" },
  { tabId: "React", displayText: "React JS" },
  { tabId: "Php", displayText: "PHP & MySQL" },
  { tabId: "Basics", displayText: "Basic Web Development" },
];

const ProjectsApp = styled.div`
  overflow-x: hidden;
  padding: 20px;
`;

const ProjectsHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectsMainHeading = styled.h2`
  color: #000000;
  text-align: center;
  margin: 0;
`;

const ProjectsPara = styled.p`
  color: #000000;
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
  color: #000000;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;

  &.active {
    border-color: #db1c48;
    font-weight: bold;
  }

  &:hover {
    border-color: #db1c48;
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
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectHeading = styled.h3`
  color: #000000;
  margin: 10px 0 5px;
`;

const ProjectDescription = styled.p`
  color: #555555;
  margin: 5px 0 10px;
`;

const TechnologiesUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

const TechnologyItem = styled.span`
  background-color: #f3f3f3;
  color: #000000;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: #db1c48;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a51536;
  }
`;

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <ProjectsApp>
      <ProjectsHeaderContent>
        <ProjectsMainHeading>Projects</ProjectsMainHeading>
        <ProjectsPara>Explore my Projects</ProjectsPara>
      </ProjectsHeaderContent>

      <ProjectsTabContainer>
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
        {filteredProjects.map((eachProject) => (
          <ProjectItemData key={eachProject.id}>
            <ProjectImage
              src={eachProject.imageUrl}
              alt={eachProject.projectName}
            />
            <ProjectHeading>{eachProject.projectName}</ProjectHeading>
            <ProjectDescription>
              {eachProject.projectDescription || "No description available."}
            </ProjectDescription>
            <TechnologiesUsed>
              {eachProject.technologies.map((tech, index) => (
                <TechnologyItem key={index}>{tech}</TechnologyItem>
              ))}
            </TechnologiesUsed>
            <ButtonsContainer>
              <Button
                href={eachProject.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
                <FaGithub />
              </Button>
              <Button
                href={eachProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <FaEye />
              </Button>
            </ButtonsContainer>
          </ProjectItemData>
        ))}
      </ProjectsContainer>
    </ProjectsApp>
  );
};

export default Projects;
