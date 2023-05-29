import data from '../../data/projectsSlider'
import Slider from "react-slick";

import "./projects.scss";

const Projects = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
  return (
    <section className='projects'>
        <h2 className='header2'>Recent Projects</h2>
      <Slider {...settings}>
        {data.map((item) => (
            <div className='projects__card'>
                <img className='projects__img' src={item.img} alt="" />
                <div className='projects__information'>
                    <h2 className='header3'>{item.title}</h2>
                    <p className='body'>{item.pargraph}</p>
                </div>
            </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
