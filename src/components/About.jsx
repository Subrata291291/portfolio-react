
import React, { useRef } from 'react';
import aboutData from '../data/aboutData';
import star from '../assets/images/star.svg';

const About = () => {
  return (
    <section className="about-area p-100" id="about" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>{aboutData.title}</h2>
          <h3>
            <span><img src={star} alt="" /></span> {aboutData.subtitle} <span><img src={star} alt="" /></span>
          </h3>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="about-left" data-aos="fade-right">
              <h4 className="mb-md-5">
                {aboutData.heading.split(',')[0]},
                <span>{aboutData.heading.split(',')[1]}</span>
              </h4>
              {aboutData.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-right" data-aos="fade-left">
              <ul className="d-flex flex-column gap-3">
                {aboutData.personalInfo.map((info, idx) => (
                  <li key={idx}>
                    <p>
                      {info.label}{info.label === "Email" ? ':' : ''}{' '}
                      <span>{info.value}</span>
                    </p>
                  </li>
                ))}
                <button className="common-btn" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}}>
                  Hire Me
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div className="achivements-area">
          <ul className="d-flex justify-content-between text-center flex-wrap">
            {aboutData.achievements.map((item, idx) => (
              <li key={idx} data-aos="fade-up" data-aos-duration={`${2000 + idx * 300}`}>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
