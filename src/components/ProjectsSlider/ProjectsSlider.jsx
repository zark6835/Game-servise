import { useRef } from "react";
import Slider from "react-slick";

import data from "../../data/projectsSlider";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./projects-slider.scss";

const ProjectsSlider = () => {
const slider = useRef(null)

  

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section className="projects">
      <h2 className="header2">Recent Projects</h2>
      <div className="projects__wrapper-carousel">
        <button className="carousel-btn__Prev" onClick={() => {slider.current.slickPrev()}}/>
        <Slider ref={slider} className='projects__slider' {...settings}>
          {data.map((item) => (
            <div className="projects__card" key={item.id}>
              <div className="projects__card-header">
                <img className="projects__card-img" src={item.img} alt="" />
              </div>
              <div className="projects__card-information">
                <h2 className="header3">{item.title}</h2>
                <p className="body">{item.pargraph}</p>
              </div>
            </div>
          ))}
        </Slider>
        <button className="carousel-btn__Next" onClick={() => {slider.current.slickNext()}}/>
      </div>
    </section>
  );
};

export default ProjectsSlider;
