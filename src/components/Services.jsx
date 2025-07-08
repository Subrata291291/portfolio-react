import React from 'react';
import serviceData from '../data/serviceData';
import star from '../assets/images/star.svg'

const Services = () => {
  const leftColumn = serviceData.slice(0, 3);
  const rightColumn = serviceData.slice(3);

  return (
    <section className="services-area" id="services" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Services</h2>
          <h3>
            <span><img src={star} alt="" /></span> What I Do? <span><img src={star} alt="" /></span>
          </h3>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="services-box" data-aos="fade-left">
              {leftColumn.map((service, index) => (
                <ul className="d-flex" key={index}>
                  <li>
                    <i className={service.icon}></i>
                  </li>
                  <li>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="services-box" data-aos="fade-right">
              {rightColumn.map((service, index) => (
                <ul className="d-flex" key={index}>
                  <li>
                    <i className={service.icon}></i>
                  </li>
                  <li>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
