import Rishabh_Resume from "./Rishabh_Gupta_Resume.pdf";
import styled from "styled-components"
import { Button } from "./ResumeElements";
export const Resume2 = () => {
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/1IXncN2l--by_B3-ANHbsHAIRIiEARqKy/view"
        );
      }

      return (
        <div>
          <a
            href={Rishabh_Resume}
            download="Rishabh_Gupta_Resume"
          >
            <Button
              onClick={openResume}
              className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg"
            >
              Resume
            </Button>
          </a>
        </div>
      );
}