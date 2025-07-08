import React, { useEffect } from 'react';
import myPic from '../assets/images/my-pic.webp';
import home from '../assets/images/home.svg';
import about from '../assets/images/about.svg';
import service from '../assets/images/service.svg';
import resume from '../assets/images/resume.svg';
import skills from '../assets/images/skills.svg';
import portfolio from '../assets/images/portfolio.svg';
import feedback from '../assets/images/feedback.svg';
import contact from '../assets/images/contact.svg';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import Contact from './Contact';

const MainSection = () => {
 
  useEffect(() => {
    
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-area ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      {false && (
        <video className="body-overlay" muted autoPlay loop>
            <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        )}

      <section className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="nav-area offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" tabIndex="-1"
  aria-hidden="true">
                <div className="logo text-center">
                  <img src= {myPic} alt="" />
                  <button type="button" className="btn-close text-reset d-md-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  <h3 className="title mt-4">Subrata Haldar</h3>
                </div>
                <ul>
                  <li><a href="#banner"><span><img src={home} alt="" /></span> Home</a></li>
                  <li><a href="#about"><span><img src={about} alt="" /></span> About Me</a></li>
                  <li><a href="#services"><span><img src={service} alt="" /></span> My Services</a></li>
                  <li><a href="#resume"><span><img src={resume} alt="" /></span> Resume</a></li>
                  <li><a href="#skills"><span><img src={skills} alt="" /></span> Skills</a></li>
                  <li><a href="#portfolio-area"><span><img src={portfolio} alt="" /></span> Portfolio</a></li>
                  <li><a href="#reviews"><span><img src={feedback} alt="" /></span> Reviews</a></li>
                  <li><a href="#contact"><span><img src={contact} alt="" /></span> Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="main-right">
                <Banner/>
                <About/>
                <Services/>
                <Resume />
                <Skills/>
                <Portfolio/>
                <Reviews/>
                <Contact/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
