import { useState } from "react";
import logo from "../../assets/img/home-logo.png";
import "./header-styles.scss";
import { Link } from "react-router-dom";

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
    <>
      <header className="Home">
        <div className="Home-Heder__bg">
          <div className="Heder__wrapper container">
            <Link to="/" className="Heder__logo">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="Heder__list">
              <li className="Heder__list-item">
                <div className="Heder__servises-list home">
                  <p className={`body2 color-white ${servisesOpen ? "open" : ""}`} onClick={openMenuServises}>
                    SERVICES
                  </p>
                </div>
                <ul className={`Heder__servises-list-item-home ${servisesOpen ? "open" : ""}`}>
                  <li>
                    <Link to="/mobile-devrlopment" className="body2 color-white">
                      MOBILE APPLICATION DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/game-devrlopment" className="body2 color-white">
                      GAME DEVELOPMENT OUTSOURCING
                    </Link>
                  </li>
                  <li>
                    <Link to="/vr-devrlopment" className="body2 color-white">
                      VR APP DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/dedicated-devrlopment" className="body2 color-white">
                      DEDICATED DEVELOPERS
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdk-devrlopment" className="body2 color-white">
                      SDK DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdk-modelings" className="body2 color-white">
                      3D MODELING SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link to="/app-devrlopment" className="body2 color-white">
                      AR APP DEVELOPMENT
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="Heder__list-item">
                <div className="Heder__servises-list home">
                  <p className={`body2 color-white ${technologiesOpen ? "open" : ""}`} onClick={openMenuTechnologies}>
                    TECHNOLOGIES
                  </p>
                </div>
                <ul className={`Heder__servises-list-item-home ${technologiesOpen ? "open" : ""}`}>
                  <li>
                    <Link to="/android-technologies" className="body2 color-white">
                      ANDROID
                    </Link>
                  </li>
                  <li>
                    <Link to="/ios-technologies" className="body2 color-white">
                      IOS
                    </Link>
                  </li>
                  <li>
                    <Link to="/unity-technologies" className="body2 color-white">
                      UNITY
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="Heder__list-item">
                <Link to="/assets-products" className="body2 color-white">
                  PRODUCTS
                </Link>
              </li>
              <li className="Heder__list-item">
                <Link to="/portfolio" className="body2 color-white" href="#">
                  PORTFOLIO
                </Link>
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
                    <Link to="/aboutUs-team" className="body2 color-white">
                      TEAM
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutUs-join-team" className="body2 color-white">
                      JOIN THE TEAM
                    </Link>
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
    </>
    
  );
};

export default HomeHeder;
