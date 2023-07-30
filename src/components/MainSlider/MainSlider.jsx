import React from "react";
import Slider from "react-slick";

import data from "../../data/mainSlider";

import "./mainSlider.scss";

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
    <section className="card__wrapper">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__relative">
              <img className="card__img" src={item.img} alt="" />
              <div className="card__information">
                <h2 className="header1">{item.title}</h2>
                <p className="card__paragraph body">{item.paragraph}</p>
                <div className="card__btn-wrapper">
                  <a href="/portfolio" className="button-white">
                    MORE
                  </a>
                  <a href="/aboutUs-contacts" className="button-green">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MainSlider;
