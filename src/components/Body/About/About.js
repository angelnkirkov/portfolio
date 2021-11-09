import React from "react";
import SocialContact from "../../common/Social-contact/Social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, My name is <br />
          <span className="info-name">Angel Kirkov!</span>
          <br /> I'm looking for my first Frontend Developer job!
        </div>
        <div className="about-photo">
          <img
            src={require("../../../img/me.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
