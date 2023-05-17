import { useState } from "react";
import logo from "../../assets/img/index-logo.png";
import "./header-styles.scss";


const IndexHeder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen); 
  };

    return ( 
        <header className="Index-Heder__bg">
        <div className="Heder__wrapper container">
          <a href="#" className="Heder__logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="Heder__list">
            <li className="Heder__list-item">
              <div className="Heder__servises-list">
                <p className="body2 color-blue" onClick={openMenu}>SERVICES</p>
              </div>
              <ul className={`Heder__servises-list-item-index ${isOpen ? 'open' : ''}`}>
                <li><a className="body2 color-blue" href="#">MOBILE APPLICATION DEVELOPMENT</a></li>
                <li><a className="body2 color-blue" href="#">GAME DEVELOPMENT OUTSOURCING</a></li>
                <li><a className="body2 color-blue" href="#">VR APP DEVELOPMENT</a></li>
                <li><a className="body2 color-blue" href="#">DEDICATED DEVELOPERS</a></li>
                <li><a className="body2 color-blue" href="#">SDK DEVELOPMENT</a></li>
                <li><a className="body2 color-blue" href="#">3D MODELING SERVICES</a></li>
                <li><a className="body2 color-blue" href="#">AR APP DEVELOPMENT</a></li>
              </ul>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-blue" href="#">TECHNOLOGIES</a>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-blue" href="#">PRODUCTS</a>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-blue" href="#">PORTFOLIO</a>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-blue" href="#">BLOG</a>
            </li>
            <li className="Heder__list-item">
              <a className="body2 color-blue" href="#">ABOUT US</a>
            </li>
          </ul>
          <a href="#" className="Index-Heder__btn body2">CONTACT US</a>
        </div>
      </header> 
     );
}
 
export default IndexHeder;