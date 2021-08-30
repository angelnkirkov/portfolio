import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fi-rr-subtitles option-icon"></i> Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-computer option-icon"></i> Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i> Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-comment-alt option-icon"></i> Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
