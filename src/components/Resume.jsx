
import React from "react";
import { educationData, experienceData } from "../data/resumeData";
import star from '../assets/images/star.svg'

const Resume = () => {
  return (
    <section className="resume-area p-100" id="resume" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Summary</h2>
          <h3>
            <span><img src={star} alt="" /></span> My Resume <span><img src= {star} alt="" /></span>
          </h3>
        </div>

        <div className="row">
          {/* EDUCATION */}
          <div className="col-12 col-md-6">
            <h1 className="mb-4">My Education</h1>
            {educationData.map((edu, index) => (
              <div
                className={`education-box ${index % 2 !== 0 ? "mt-5 mb-5" : "mt-5"}`}
                key={index}
                data-aos="fade-right"
                data-aos-duration={index > 0 ? "1000" : "500"}
              >
                <h4>{edu.year}</h4>
                <h2>{edu.title}</h2>
                <h5>{edu.institute}</h5>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <h1 className="mb-4">My Experience</h1>
            {experienceData.map((exp, index) => (
              <div
                className={`education-box ${index % 2 !== 0 ? "mt-5 mb-5" : "mt-5"}`}
                key={index}
                data-aos="fade-left"
                data-aos-duration={index > 0 ? "1000" : "500"}
              >
                <h4>{exp.year}</h4>
                <h2>{exp.title}</h2>
                <h5>{exp.institute}</h5>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
