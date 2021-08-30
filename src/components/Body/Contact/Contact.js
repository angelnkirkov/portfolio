import React from "react";
import Separator from "../../common/Separator/Separator";
import "./contact.css";
import SocialContact from "../../common/Social-contact/Social-contact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>You can contact me on my socials</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../img/resume.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
