import React from "react";
import star from "../assets/images/star.svg";
import certificationsData from "../data/certificationsData";

const Certifications = () => {
  return (
    <section className="portfolio-area" id="certification-area" data-aos="fade-up">
      <div className="container">

        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Licenses</h2>
          <h3>
            <span><img src={star} alt="" /></span>
            My Certifications
            <span><img src={star} alt="" /></span>
          </h3>
        </div>

        <div className="row mt-5">

          {certificationsData.map((item) => (
            <div className="col-6 col-md-6 col-lg-4" key={item.id}>
              <div className="tab-box">

                <div className="gallery-content" style={{ display: "block" }}>
                  <img alt={item.title} src={item.image} />

                  <ul className="d-flex justify-content-between align-items-center">

                    <li>
                      <a
                        href={item.preview}
                        data-fancybox="mygallery"
                        data-caption={item.title}
                      >
                        Quick View
                      </a>
                    </li>

                    <li>
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Credentials Link
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

export default Certifications;