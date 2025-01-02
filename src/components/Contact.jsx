import React from "react";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ContactContent = styled.div`
  width: 100%;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
`;

const LeftContainer = styled.div`
  flex: 1;
  min-width: 320px;
  padding: 30px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto 20px auto;
    padding: 15px;
  }
`;

const TouchHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const TouchPara = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;
`;

const IconsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconsContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconLink = styled.a`
  text-decoration: none;
  color: #0073b1;
  font-weight: 200;

  &:hover {
    color: #005582;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  min-width: 320px;
  padding: 30px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
    padding: 15px;
  }
`;

const NameInput = styled.input`
  width: 95%;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #bbb;
  border-radius: 6px;
  font-size: 1rem;
  font-family: bold;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);

  &:focus {
    border: 2px solid #0073b1;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextareaInput = styled.textarea`
  width: 95%;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #bbb;
  border-radius: 6px;
  font-size: 1rem;
  font-family: bold;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  resize: none;
  height: 120px;

  &:focus {
    border: 2px solid #0073b1;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MsgButton = styled.button`
  background-color: #0073b1;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005582;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const Contact = () => (
  <ContactSectionContainer id="contactSection">
    <ContactContent>
      <ContactHeading>Contact Me</ContactHeading>
    </ContactContent>
    <LeftContainer>
      <TouchHeading>Get In Touch</TouchHeading>
      <TouchPara>
        Feel free to reach out to me for any questions or opportunities!
      </TouchPara>
      <IconsContent>
        <IconsContentContainer>
          <FaPhoneAlt />{" "}
          <IconLink href="tel:+919849267182">+91 9849267182</IconLink>
        </IconsContentContainer>
        <IconsContentContainer>
          <FaEnvelope />{" "}
          <IconLink href="mailto:pottitarun32@gmail.com">
            pottitarun32@gmail.com
          </IconLink>
        </IconsContentContainer>
        <IconsContentContainer>
          <FaLinkedin />{" "}
          <IconLink
            href="https://www.linkedin.com/in/tarun-kumar-potti-440a74268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </IconLink>
        </IconsContentContainer>
        <IconsContentContainer>
          <FaGithub />{" "}
          <IconLink
            href="https://github.com/Tarun0204"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </IconLink>
        </IconsContentContainer>
      </IconsContent>
    </LeftContainer>
    <RightContainer>
      <form>
        <NameInput type="text" placeholder="Enter your Name" />
        <NameInput type="email" placeholder="Enter your Email" />
        <TextareaInput placeholder="Enter your Message"></TextareaInput>
        <MsgButton>
          Send Message <FaTelegramPlane />
        </MsgButton>
      </form>
    </RightContainer>
  </ContactSectionContainer>
);

export default Contact;


