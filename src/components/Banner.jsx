import React from 'react';
import hand from '../assets/images/hand.svg';
import headerImg from '../assets/images/header-img.png';
import arrow from '../assets/images/arrow.png';
import dots from '../assets/images/elements1.png';
import audioIcon from '../assets/images/elements2.png';
import audioFile from '../assets/images/my-audio.mp3';

const Banner = () => {
  const playAudio = () => {
    const audioElement = document.getElementById('myAudio');
    const icon = document.getElementById('audio-icon');

    if (audioElement.paused || audioElement.ended) {
      audioElement.play();

      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      audioElement.pause();

      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  };

  return (
    <section className="banner-area" id="banner">

      {/* Banner Heading */}
      <div className="banner-heading">
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <h2>
              <span>
                <img src={hand} alt="Waving hand" />
              </span>
              Hi, I'm Subrata
            </h2>
          </li>

          <li>
            <button
              className="nav-icon d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-label="Open navigation menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </li>
        </ul>
      </div>

      {/* Main Heading */}
      <h1 className="mt-md-3 mt-lg-5" data-aos="fade-right">
        A Frontend <span>Developer &</span>
      </h1>

      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-6">
          <div className="banner-left" data-aos="zoom-in">

            <img
              src={headerImg}
              alt="Subrata Haldar - Frontend Developer"
              className="banner-pic"
            />

            <img
              src={arrow}
              alt=""
              className="arrow"
            />

          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6">
          <div className="banner-right">

            {/* Specialization */}
            <h4 data-aos="fade-left">
              AI Application Developer
              
              <img src={dots} alt="" className="dots1" />
              <img src={dots} alt="" className="dots2" />
              <img src={dots} alt="" className="dots3" />
              <img src={dots} alt="" className="dots4" />
            </h4>

            {/* Description */}
            <p
              className="mt-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              I build responsive and user-focused web applications using
              React.js, WordPress, WooCommerce, and modern frontend
              technologies. I also develop AI-powered applications using
              LLMs, RAG, prompt engineering, embeddings, vector search,
              and API integrations.
            </p>

            {/* Download CV */}
            <button
              className="common-btn"
              onClick={() => window.open('/Subrata_Haldar_Professional_ATS_CV.pdf', '_blank')}
            >
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
              Download CV
            </button>

            {/* Audio */}
            <button
              id="play-audio"
              onClick={playAudio}
              type="button"
              aria-label="Play introduction audio"
            >
              <img
                src={audioIcon}
                alt=""
                className="elements4"
              />

              <i
                id="audio-icon"
                className="fa-solid fa-play"
              ></i>

              <span>Play Audio</span>

              <audio id="myAudio" preload="auto">
                <source
                  src={audioFile}
                  type="audio/mpeg"
                />
              </audio>
            </button>

            {/* Social Media */}
            <div className="social-media">

              <h3>Follow me on:</h3>

              <ul className="d-flex">

                <li>
                  <a
                    href="https://x.com/Subrata_291291"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/subrata-haldar-96b32b244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
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