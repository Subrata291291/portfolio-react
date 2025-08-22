import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import reviewData from '../data/reviewData';
import star from '../assets/images/star.svg'

const Reviews = () => {
    useEffect(() => {
        const initSlider = () => {
          if ($('.review-slider').length > 0 && typeof $('.review-slider').slick === 'function') {
            $('.review-slider').slick({
              dots: true,
              infinite: true,
              centerMode: true,
              centerPadding: '50px',
              arrows: false,
              autoplay: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false,
                  }
                }
              ]
            });
          }
        };
      
        // Delay to ensure the component has mounted fully
        setTimeout(initSlider, 0);
      }, []);
      

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.3;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
    }
    if (halfStar) {
      stars.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
    }
    while (stars.length < 5) {
      stars.push(<i key={`empty-${stars.length}`} className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  return (
    <section className="reviews-area" id="reviews" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-center d-flex justify-content-center align-items-center position-relative">
          <h2>Reviews</h2>
          <h3>
            <span><img src={star} alt="" /></span> What my clients say <span><img src={star} alt="" /></span>
          </h3>
        </div>
        <div className="review-slider p-0 container">
          {reviewData.map((item) => (
            <div className="slider position-relative" key={item.id}>
              <div className="review-box">
                <ul className="d-flex">
                  <li><img src={item.image} alt={item.name} /></li>
                  <li>
                    <h4 className="mb-3">{item.name}</h4>
                    <h5>{item.position}</h5>
                  </li>
                </ul>
                <p>{item.review}</p>
                <div className="rating">
                  <ul className="d-flex">{renderStars(item.rating)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
