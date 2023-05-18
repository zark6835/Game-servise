import { useState } from "react";
import logo from "../../assets/img/index-logo.png";
import "./header-styles.scss";


const IndexHeder = () => {
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
        <header className="Index-Heder__bg">
        <div className="Heder__wrapper container">
          <a href="#" className="Heder__logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="Heder__list">
          <li className="Heder__list-item">
            <div className="Heder__servises-list">
              <p className={`body2 color-blue ${servisesOpen ? 'open' : ''}`} onClick={openMenuServises}>SERVICES</p>
            </div>
            <ul className={`Heder__servises-list-item-index ${servisesOpen ? 'open' : ''}`}>
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
            <div className="Heder__servises-list">
            <p className={`body2 color-blue ${technologiesOpen ? 'open' : ''}`} onClick={openMenuTechnologies}>TECHNOLOGIES</p>
            </div>
            <ul className={`Heder__servises-list-item-index ${technologiesOpen ? 'open' : ''}`}>
              <li><a className="body2 color-blue" href="#">ANDROID</a></li>
              <li><a className="body2 color-blue" href="#">IOS</a></li>
              <li><a className="body2 color-blue" href="#">UNITY</a></li>
            </ul>
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
          <div className="Heder__servises-list">
            <p className={`body2 color-blue ${aboutUsOpen ? 'open' : ''}`} onClick={openMenuAboutUs}>ABOUT US</p>
          </div>
          <ul className={`Heder__servises-list-item-index ${aboutUsOpen ? 'open' : ''}`}>
              <li><a className="body2 color-blue" href="#">CONTACTS</a></li>
              <li><a className="body2 color-blue" href="#">TEAM</a></li>
              <li><a className="body2 color-blue" href="#">JOIN THE TEAM</a></li>
            </ul>
          </li>
          </ul>
          <a href="#" className="Index-Heder__btn body2">CONTACT US</a>
        </div>
      </header> 
     );
}
 
export default IndexHeder;