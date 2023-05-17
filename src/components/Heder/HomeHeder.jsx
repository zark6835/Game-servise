import { useState } from "react";
import logo from "../../assets/img/home-logo.png";
import "./header-styles.scss";


const HomeHeder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="Home-Heder__bg">
      <div className="Heder__wrapper container">
        <a href="#" className="Heder__logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="Heder__list">
          <li className="Heder__list-item">
            <div className="Heder__servises-list home">
              <p className="body2 color-white" onClick={openMenu}>SERVICES</p>
            </div>
            <ul className={`Heder__servises-list-item-home ${isOpen ? 'open' : ''}`}>
              <li><a className="body2 color-white" href="#">MOBILE APPLICATION DEVELOPMENT</a></li>
              <li><a className="body2 color-white" href="#">GAME DEVELOPMENT OUTSOURCING</a></li>
              <li><a className="body2 color-white" href="#">VR APP DEVELOPMENT</a></li>
              <li><a className="body2 color-white" href="#">DEDICATED DEVELOPERS</a></li>
              <li><a className="body2 color-white" href="#">SDK DEVELOPMENT</a></li>
              <li><a className="body2 color-white" href="#">3D MODELING SERVICES</a></li>
              <li><a className="body2 color-white" href="#">AR APP DEVELOPMENT</a></li>
            </ul>
          </li>
          <li className="Heder__list-item">
            <a className="body2 color-white" href="#">TECHNOLOGIES</a>
          </li>
          <li className="Heder__list-item">
            <a className="body2 color-white" href="#">PRODUCTS</a>
          </li>
          <li className="Heder__list-item">
            <a className="body2 color-white" href="#">PORTFOLIO</a>
          </li>
          <li className="Heder__list-item">
            <a className="body2 color-white" href="#">BLOG</a>
          </li>
          <li className="Heder__list-item">
            <a className="body2 color-white" href="#">ABOUT US</a>
          </li>
        </ul>
        <a href="#" className="Home-Heder__btn body2">CONTACT US</a>
      </div>
    </header>
  );
};

export default HomeHeder;
