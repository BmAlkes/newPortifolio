import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  MdOutlineHomeRepairService,
  MdOutlineContactPage,
  MdClose,
  MdApps,
} from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

const Header = () => {
  // ToggleMenu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav_logo">
          <img src={logo} alt="logo site" />
        </a>
        <div className={showMenu ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active_link">
                <FaHome size={20} color="#000" className="nav_icon" />
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <GoPerson size={20} color="#000" className="nav_icon" />
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <IoDocumentTextOutline
                  size={20}
                  color="#000"
                  className="nav_icon"
                />
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <MdOutlineHomeRepairService
                  size={20}
                  color="#000"
                  className="nav_icon"
                />
                Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#portifolio" className="nav_link">
                <AiOutlinePicture size={20} color="#000" className="nav_icon" />
                Portifolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <MdOutlineContactPage
                  size={20}
                  color="#000"
                  className="nav_icon"
                />
                Contact
              </a>
            </li>
          </ul>
          <MdClose
            size={20}
            color="#000"
            className="nav_close"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="nav_toggle" onClick={() => setShowMenu(!showMenu)}>
          <MdApps size={20} color="#000" className="nav_icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
