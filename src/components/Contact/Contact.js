import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt,FaLinkedin,FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Outer>
            <Box1>
              <FaMobileAlt />
              <p id="contact-phone">+91 7895945566</p>
            </Box1>
            <Box1 id="contact-email">
              <HiMail />
              <p>rishabh.katroliya999@gmail.com</p>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Agra</p>
            </Box1>
            <Box1 id="linkdin">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/rishabh-gupta-a0b5a888/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rishabh Gupta
              </a>
            </Box1>
            <Box1 id="github">
              <FaGithub />
              <a
                href="https://github.com/rishabhkatroliya"
                target="_blank"
                rel="noopener noreferrer"
              >
                rishabhkatroliya
              </a>
            </Box1>
          </Outer>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
