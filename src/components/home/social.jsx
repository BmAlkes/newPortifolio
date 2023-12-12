import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/bmalkes/"
        className="home_social-icon"
        target="_blank"
      >
        <FaLinkedin size={20} color="000" />
      </a>
      <a
        href="https://github.com/BmAlkes"
        className="home_social-icon"
        target="_blank"
      >
        <FaGithub size={20} color="000" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=9720549547355&text=I like your profile and maybe want a project`"
        className="home_social-icon"
        target="_blank"
      >
        <FaWhatsappSquare size={20} color="000" />
      </a>
    </div>
  );
};

export default Social;
