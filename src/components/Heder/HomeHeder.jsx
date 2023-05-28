import { useState } from "react";
import logo from "../../assets/img/home-logo.png";
import "./header-styles.scss";
import { Link, Route, Routes } from "react-router-dom";

import MobilePages from "../../pages/MobilePages";
import GamePages from "../../pages/GamePages";
import VrPages from "../../pages/VrPages";
import DedicatedPages from "../../pages/DedicatedPages";
import SdkPages from "../../pages/SdkPages";
import SdkModelingsPages from "../../pages/SdkModelingsPages";
import AppPages from "../../pages/AppPages";
import Index from "../../pages/index";

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
                  <p
                    className={`body2 color-white ${
                      servisesOpen ? "open" : ""
                    }`}
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
                    <Link
                      className="body2 color-white"
                      to="/mobile-devrlopment"
                    >
                      MOBILE APPLICATION DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/game-devrlopment" className="body2 color-white" href="#">
                      GAME DEVELOPMENT OUTSOURCING
                    </Link>
                  </li>
                  <li>
                    <Link to="/vr-devrlopment" className="body2 color-white" href="#">
                      VR APP DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/dedicated-devrlopment" className="body2 color-white" href="#">
                      DEDICATED DEVELOPERS
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdk-devrlopment" className="body2 color-white" href="#">
                      SDK DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdk-modelings" className="body2 color-white" href="#">
                      3D MODELING SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link to="/app-devrlopment" className="body2 color-white" href="#">
                      AR APP DEVELOPMENT
                    </Link>
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
    </>
  );
};

export default HomeHeder;
