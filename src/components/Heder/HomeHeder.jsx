import { useState } from "react";
import logo from "../../assets/img/home-logo.png";
import "./header-styles.scss";

const HomeHeder = () => {
  const [servisesOpen, setServisesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  const openMenuServises = () => {
    setServisesOpen(!servisesOpen);
  };

  const openMenuTechnologies = () => {
    setTechnologiesOpen(!technologiesOpen);
  };

  const openMenuAboutUs = () => {
    setAboutUsOpen(!aboutUsOpen);
  };

  return (
    <header className="Home">
      <div className="Home-Heder__bg">
        <div className="Heder__wrapper container">
          <a href="#" className="Heder__logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="Heder__list">
            <li className="Heder__list-item">
              <div className="Heder__servises-list home">
                <p
                  className={`body2 color-white ${servisesOpen ? "open" : ""}`}
                  onClick={openMenuServises}
                >
                  SERVICES
                </p>
              </div>
              <ul
                className={`Heder__servises-list-item-home ${
                  servisesOpen ? "open" : ""
                }`}
              >
                <li>
                  <a className="body2 color-white" href="#">
                    MOBILE APPLICATION DEVELOPMENT
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    GAME DEVELOPMENT OUTSOURCING
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    VR APP DEVELOPMENT
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    DEDICATED DEVELOPERS
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    SDK DEVELOPMENT
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    3D MODELING SERVICES
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    AR APP DEVELOPMENT
                  </a>
                </li>
              </ul>
            </li>
            <li className="Heder__list-item">
              <div className="Heder__servises-list home">
                <p
                  className={`body2 color-white ${
                    technologiesOpen ? "open" : ""
                  }`}
                  onClick={openMenuTechnologies}
                >
                  TECHNOLOGIES
                </p>
              </div>
              <ul
                className={`Heder__servises-list-item-home ${
                  technologiesOpen ? "open" : ""
                }`}
              >
                <li>
                  <a className="body2 color-white" href="#">
                    ANDROID
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    IOS
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    UNITY
                  </a>
                </li>
              </ul>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-white" href="#">
                PRODUCTS
              </a>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-white" href="#">
                PORTFOLIO
              </a>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-white" href="#">
                BLOG
              </a>
            </li>
            <li className="Heder__list-item">
              <div className="Heder__servises-list home">
                <p
                  className={`body2 color-white ${aboutUsOpen ? "open" : ""}`}
                  onClick={openMenuAboutUs}
                >
                  ABOUT US
                </p>
              </div>
              <ul
                className={`Heder__servises-list-item-home ${
                  aboutUsOpen ? "open" : ""
                }`}
              >
                <li>
                  <a className="body2 color-white" href="#">
                    CONTACTS
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    TEAM
                  </a>
                </li>
                <li>
                  <a className="body2 color-white" href="#">
                    JOIN THE TEAM
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="#" className="Home-Heder__btn body2">
            CONTACT US
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomeHeder;
