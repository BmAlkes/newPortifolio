import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://api.whatsapp.com/send?phone=9720549547355&text=Want to talk with you about a project.."
        className="home_social-icon"
        target="_blank"
      >
        <BsWhatsapp />
      </a>
      <a
        href="https://www.github.com/BmAlkes"
        className="home_social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/bmalkes"
        className="home_social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
