import img1 from "../../assets/img/content/portfolio/portfolio-img1.png";
import img2 from "../../assets/img/content/portfolio/portfolio-img2.png";
import img3 from "../../assets/img/content/portfolio/portfolio-img3.png";

import "./portfolio-card.scss";

const PortfolioCard = () => {
  return (
    <section className="portfolioCard">
      <ul className="portfolioCard__list">
        <li className="portfolioCard__list-item">
          <img className="portfolioCard__list-item_img_left" src={img1} alt="" />
          <div className="portfolioCard__list-item_content">
            <h3 className="header3">Ori and the will of the wisps</h3>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum, libero augue venenatis leo, in maximus ipsum dui et est.
              In in aliquet libero. In ac enim non lectus convallis feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum.
            </p>
          </div>
        </li>
        <li className="portfolioCard__list-item">
          <div className="portfolioCard__list-item_content">
            <h3 className="header3">tin hearts</h3>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum, libero augue venenatis leo, in maximus ipsum dui et est.
              In in aliquet libero. In ac enim non lectus convallis feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum.
            </p>
          </div>
          <img className="portfolioCard__list-item_img_right" src={img2} alt="" />
        </li>
        <li className="portfolioCard__list-item">
          <img className="portfolioCard__list-item_img_left" src={img3} alt="" />
          <div className="portfolioCard__list-item_content">
            <h3 className="header3">stickman trials</h3>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum, libero augue venenatis leo, in maximus ipsum dui et est.
              In in aliquet libero. In ac enim non lectus convallis feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum.
            </p>
          </div>
        </li>
        <li className="portfolioCard__list-item">
          <div className="portfolioCard__list-item_content">
            <h3 className="header3">tin hearts</h3>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum, libero augue venenatis leo, in maximus ipsum dui et est.
              In in aliquet libero. In ac enim non lectus convallis feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
              lobortis fringilla non elit. Vivamus mollis, odio ac finibus
              rutrum.
            </p>
          </div>
          <img className="portfolioCard__list-item_img_right" src={img2} alt="" />
        </li>
      </ul>
    </section>
  );
};

export default PortfolioCard;
