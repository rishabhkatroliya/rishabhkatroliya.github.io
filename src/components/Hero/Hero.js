import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../Assets/rishu.png";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
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
          <HeroLeft>
            <h1>Hi, I'm Rishabh Gupta</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              My passion lies in creating elegantly simple designs and writing
              clean code. I find immense joy in the work I do and take pride in
              my abilities.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image src={profile} alt="man-svgrepo" />
          </HeroRight>
        </HeroWrapper>

       
        
      </HeroContainer>
    </main>
  );
}

export default Hero;

