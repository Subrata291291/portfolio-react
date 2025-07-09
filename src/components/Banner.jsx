import React from 'react';
import hand from '../assets/images/hand.svg';
import headerImg from '../assets/images/header-img.png';
import arrow from '../assets/images/arrow.png';
import dots from '../assets/images/elements1.png';
import audioIcon from '../assets/images/elements2.png';
import audio from '../assets/images/my-audio.mp3';
import resume from '../assets/images/resume.pdf'

const Banner = () => {
  const playAudio = () => {
    const audio = document.getElementById('myAudio');
    const icon = document.getElementById('audio-icon');

    if (audio.paused || audio.ended) {
      audio.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      audio.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  };

  return (
    <section className="banner-area" id="banner">
      <div className="banner-heading">
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <h2>
              <span><img src={hand} alt="wave" /></span> Hi, I'm Subrata
            </h2>
          </li>
          <li>
            <button
              className="nav-icon d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </li>
        </ul>
      </div>

      <h1 className="mt-md-3 mt-lg-5" data-aos="fade-right">
        A Front-end <span>Developer &</span>
      </h1>

      <div className="row">
        <div className="col-lg-6">
          <div className="banner-left" data-aos="zoom-in">
            <img src={headerImg} alt="Header" className="banner-pic" />
            <img src={arrow} alt="Arrow" className="arrow" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="banner-right">
            <h4 data-aos="fade-left">
              UI/UX Designer
              <img src={dots} alt="dots" className="dots1" />
              <img src={dots} alt="dots" className="dots2" />
              <img src={dots} alt="dots" className="dots3" />
              <img src={dots} alt="dots" className="dots4" />
            </h4>
            <p className="mt-5" data-aos="fade-right" data-aos-duration="1000">
              I’m a passionate and detail-oriented UI/UX designer with a strong focus on creating intuitive and visually appealing digital experiences...
            </p>
            <button className="common-btn" onClick={() => window.open(resume, '_blank')}>
              <span><i className="fa-solid fa-download"></i></span> Download CV
            </button>
            <button id="play-audio" onClick={playAudio}>
              <img src={audioIcon} alt="Audio Icon" className="elements4" />
              <i id="audio-icon" className="fa-solid fa-play"></i>
              <span>Play Audio</span>
              <audio id="myAudio" preload="auto">
                <source src={audio} type="audio/mpeg" />
              </audio>
            </button>

            <div className="social-media">
              <h3>Follow me on:</h3>
              <ul className="d-flex">
                <li>
                  <a href="https://x.com/Subrata_291291" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/subrata-haldar-96b32b244/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
