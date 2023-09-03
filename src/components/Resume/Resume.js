import Rishabh_Resume from "./Rishabh_Gupta_Resume.pdf";
import styled from "styled-components";
import { Button } from "./ResumeElements";
export const Resume2 = () => {
  const openResume = () => {
     // window.open(
        //   "https://drive.google.com/file/d/1IXncN2l--by_B3-ANHbsHAIRIiEARqKy/view"
        // );
  };

  return (
    <div>
      <a
       href={Rishabh_Resume}
       download="Rishabh_Gupta_Resume"
        className="nav-link resume"
        id="resume-button-1 resume-link-1"
      >
        <Button
          onClick={openResume}
          id="resume-button-1 resume-link-1"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};