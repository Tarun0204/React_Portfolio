import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const FooterContainer = styled.footer`
  overflow-x: hidden;
  background-color: #000000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterIcons = styled.div`
  margin-bottom: 20px;
`;

const FooterIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  margin: 0 10px;
  text-decoration: none;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: aqua;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const StyledHashLink = styled(HashLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: aqua;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: aqua;
    font-weight: bold;
  }
`;

const FooterBottom = styled.div`
  font-size: 16px;
`;

const Span = styled.span`
  background-image: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
`

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <FooterContainer>
      <FooterIcons data-aos="fade-up">
        <FooterIconLink
          href="https://www.linkedin.com/in/tarun-kumar-potti-440a74268/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </FooterIconLink>
        <FooterIconLink
          href="https://github.com/Tarun0204"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </FooterIconLink>
        <FooterIconLink href="mailto:pottitarun32@gmail.com">
          <SiGmail />
        </FooterIconLink>
      </FooterIcons>
      <FooterLinks>
        <FooterLink>
          <StyledHashLink smooth to="/#aboutSection">
            About
          </StyledHashLink>
        </FooterLink>
        <FooterLink>
          <StyledHashLink smooth to="/#skillsSection">
            Skills
          </StyledHashLink>
        </FooterLink>
        <FooterLink>
          <StyledLink to="/experience">Experience</StyledLink>
        </FooterLink>
        <FooterLink>
          <StyledLink to="/projects">Projects</StyledLink>
        </FooterLink>
        <FooterLink>
          <StyledHashLink smooth to="/#contactSection">
            Contact
          </StyledHashLink>
        </FooterLink>
      </FooterLinks>
      <FooterBottom>
        <p>© Portfolio developed by <Span>Tarun Kumar Potti</Span></p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
