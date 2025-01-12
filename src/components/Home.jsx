import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Tarun_Kumar from "../assets/Tarun_Kumar.jpg";
import { Home as HomeData } from "../MyData";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #090917;

  @media (min-width: 769px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  flex: 1;
  text-align: left;
  padding: 20px;
`;

const HiText = styled.p`
  font-size: 1.5rem;
  color: #854ce6;
  margin-bottom: 10px;
`;

const NameText = styled.h1`
  font-size: 2.5rem;
  color: darkgray;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const JobRole = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: inline-block;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const ParaText = styled.p`
  font-size: 1rem;
  color: #b1b2b3;
  text-align: justify;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 640px) {
    max-width: 250px;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProjectsBtn = styled.button`
  background-color: transparent;
  color: #854ce6;
  font-weight: bold;
  border: 2px solid hsla(271, 100%, 50%, 1);
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  color: #ffffff;
`;

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <HomeContainer id="homeSection">
        <ContentContainer>
          <Content data-aos="fade-up">
            <HiText>Hey Everyone!</HiText>
            <NameText>
              I'M <Span>{HomeData.name}</Span>
            </NameText>
            <JobRole>
              <Typewriter
                options={{
                  strings: HomeData.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </JobRole>
            <ParaText>{HomeData.myDescription}</ParaText>
            <ButtonsContainer>
              <Link to="/projects">
                <ProjectsBtn type="button">Projects</ProjectsBtn>
              </Link>
              <HashLink smooth to="/#contactSection">
                <ProjectsBtn type="button">Contact Info</ProjectsBtn>
              </HashLink>
            </ButtonsContainer>
          </Content>
          <ImageContainer data-aos="fade-down">
            <ProfileImg src={Tarun_Kumar} alt="Profile" />
          </ImageContainer>
        </ContentContainer>
      </HomeContainer>
      <>
        <About />
        <Skills />
        <Contact />
      </>
    </>
  );
};

export default Home;
