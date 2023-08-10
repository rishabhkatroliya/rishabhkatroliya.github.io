import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../Assets/rishu.png";
import { Resume2 } from "../Resume/Resume";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  NavBtn,
  Image
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper id="home">
          <HeroLeft id="user-detail-intro">
            <h1 id="user-detail-name">Hi, I'm Rishabh Gupta</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              My passion lies in creating elegantly simple designs and writing
              clean code. I specialize in efficient React apps that just work 
              across all platforms and browsers. 
            </p>
          </HeroLeft>
          <HeroRight>
            <Image className="home-img" src={profile} alt="man-svgrepo" />
          </HeroRight>
        </HeroWrapper>
        <NavBtn id="resume-button-2 resume-link-2" className="">
          <Resume2 id="resume-link-2 resume-button-2" />
        </NavBtn>
       
        
      </HeroContainer>
    </main>
  );
}

export default Hero;

