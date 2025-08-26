import React, { useState } from "react";
import portfolioData from "../data/portfolioData";
import star from '../assets/images/star.svg';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("e-commerce");

  const categories = ["informative", "e-commerce", "portfolio", "restaurent", "blog"];

  const filteredProjects = portfolioData.filter(
    (project) => project.category === activeTab
  );

  return (
    <section className="portfolio-area p-100" id="portfolio-area" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Portfolio</h2>
          <h3>
            <span><img src={star} alt="" /></span> My Projects{" "} <span><img src={star} alt="" /></span>
          </h3>
        </div>

        <div className="portfolio-tab">
          <ul className="tabs d-flex justify-content-center align-items-center">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`tab-link ${activeTab === cat ? "current" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                <p>{cat.charAt(0).toUpperCase() + cat.slice(1)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="row mt-5">
          {filteredProjects.map((project) => (
            <div className="col-6 col-md-6 col-lg-4" key={project.id}>
              <div className="tab-box">
                <div className="gallery-content" style={{ display: "block" }}>
                  <img src={project.image} alt={project.title} />
                  <ul className="d-flex justify-content-between align-items-center">
                    <li>
                      <a
                        href={project.preview}
                        data-fancybox="mygallery"
                        data-caption={project.title}
                        title={project.title}
                      >
                        Quick View
                      </a>
                    </li>
                    <li>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
