import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.scss";

import data from "../../data/mainSlider";

const MainSlider = () => {
  const settings = {
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img className="card__img" src={item.img} alt="" />
          <div className="card__information">
            <h2 className="header1">{item.title}</h2>
            <p className="card__paragraph body">{item.paragraph}</p>
            <div className="card__btn-wrapper">
              <a href="#" className="button-white">MORE</a>
              <a href="#" className="button-green">Contact us</a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;
