import React from "react";
import { stackList } from "../../data/ProjectData";
import {
    Image,
    Technologies,
    Tech,
    TechImg,
    TechName,
    ContactWrapper,
} from "./SkillsElements";
function Skills() {
    return (
        <>
            <ContactWrapper id="skills">
                <div className="Container">
                    <div className="SectionTitle" style={{ "margin-top": "50px", "margin-bottom": "0.5rem" }} >Skills</div>
                    <div className="BigCard">
                        <Technologies>
                            {stackList.map((stack, index) => (
                                <Tech key={index} className="tech">
                                    <TechImg src={stack.img} alt={stack.name} />
                                    <TechName>{stack.name}</TechName>
                                </Tech>
                            ))}
                        </Technologies>
                    </div>
                </div>
            </ContactWrapper>
        </>
    );
}

export default Skills;
