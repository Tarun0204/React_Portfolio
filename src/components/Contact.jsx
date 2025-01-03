import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Home as HomeData } from "../MyData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactSectionContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #090917;
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

const ContactHeading = styled.h1`
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
  min-width: 300px;
  padding: 30px;
  border-radius: 12px;
  color: #ffffff;
  background-color: #1c1e27;
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
  color: #ffffff;
`;

const TouchPara = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: darkgray;
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
  color: #ffffff;
  font-weight: 200;

  &:hover {
    color: #854ce6;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 30px;
  border-radius: 12px;
  color: #ffffff;
  background-color: #1c1e27;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
    padding: 15px;
  }
`;

const NameInput = styled.input`
  color: #ffffff;
  width: 95%;
  background-color: transparent;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid;
  border-image-source: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  border-image-slice: 1;
  outline: none;
  font-size: 1rem;
  font-family: bold;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-bottom-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextareaInput = styled.textarea`
  color: #ffffff;
  width: 95%;
  background-color: transparent;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid;
  border-image-source: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  border-image-slice: 1;
  outline: none;
  font-size: 1rem;
  font-family: bold;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  resize: none;
  height: 120px;
  transition: border-bottom-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MsgButton = styled.button`
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-align: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { phoneNo, gmail, githubLink, linkedInLink } = HomeData;
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.user_email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_h9gtv6f", "template_hdki21j", form.current, {
        publicKey: "kIP0Z0pMM5B8c90GE",
      })
      .then(
        () => {
          setFormData({ user_name: "", user_email: "", message: "" });
          msgSent();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  const msgSent = () => {
    toast.success("Message Sent Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <ContactSectionContainer id="contactSection">
      <ContactContent>
        <ContactHeading>Contact Me</ContactHeading>
      </ContactContent>
      <LeftContainer data-aos="fade-right">
        <TouchHeading>Get In Touch</TouchHeading>
        <TouchPara>
          Feel free to reach out to me for any questions or opportunities!
        </TouchPara>
        <IconsContent>
          <IconsContentContainer>
            <FaPhoneAlt />{" "}
            <IconLink href={`tel:${phoneNo}`}>{phoneNo}</IconLink>
          </IconsContentContainer>
          <IconsContentContainer>
            <FaEnvelope /> <IconLink href={`mailto:${gmail}`}>{gmail}</IconLink>
          </IconsContentContainer>
          <IconsContentContainer>
            <FaLinkedin />{" "}
            <IconLink
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </IconLink>
          </IconsContentContainer>
          <IconsContentContainer>
            <FaGithub />{" "}
            <IconLink
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </IconLink>
          </IconsContentContainer>
        </IconsContent>
      </LeftContainer>

      <RightContainer data-aos="fade-left">
        <form ref={form} onSubmit={sendEmail}>
          <NameInput
            type="text"
            placeholder="Enter your Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <NameInput
            type="email"
            placeholder="Enter your Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <TextareaInput
            placeholder="Enter your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <MsgButton type="submit" value="Send" disabled={loading}>
            {loading ? "Sending..." : "Send Message"} <FaTelegramPlane />
          </MsgButton>
        </form>
      </RightContainer>
      <ToastContainer />
    </ContactSectionContainer>
  );
};

export default Contact;
