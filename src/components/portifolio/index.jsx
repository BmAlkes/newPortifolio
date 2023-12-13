import React from "react";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section container" id="portifolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Recent Projects</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
