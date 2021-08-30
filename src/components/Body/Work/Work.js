import React from "react";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";
import Separator from "../../common/Separator/Separator";
import "./work.css";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
