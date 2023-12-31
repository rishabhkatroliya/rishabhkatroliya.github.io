import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card className="project-card" key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight className="project-title">
            <h4>{list.title}</h4>
            <p className="project-description">{list.description}</p>
            <Stack className="project-tech-stack">
              <span className="stackTitle">Tech Stack-</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn project-github-link"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"

              >
                Github
              </a>
              <a
                className="btn PrimaryBtn project-deployed-link"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
