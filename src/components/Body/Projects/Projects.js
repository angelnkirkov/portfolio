import React from "react";
import Separator from "../../common/Separator/Separator";
import { ProjectData } from "../../data/projects";
import Projectcard from "./Project-card";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <Projectcard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
