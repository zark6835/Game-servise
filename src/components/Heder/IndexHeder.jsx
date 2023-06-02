import { useState } from "react";
import logo from "../../assets/img/index-logo.png";
import "./header-styles.scss";
import { Link } from "react-router-dom";


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
          <Link to="/" className="Heder__logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="Heder__list">
          <li className="Heder__list-item">
            <div className="Heder__servises-list">
              <p className={`body2 color-blue ${servisesOpen ? 'open' : ''}`} onClick={openMenuServises}>SERVICES</p>
            </div>
            <ul className={`Heder__servises-list-item-index ${servisesOpen ? 'open' : ''}`}>
              <li><Link to="/mobile-devrlopment" className="body2 color-blue">MOBILE APPLICATION DEVELOPMENT</Link></li>
              <li><Link to="/game-devrlopment" className="body2 color-blue">GAME DEVELOPMENT OUTSOURCING</Link></li>
              <li><Link to="/vr-devrlopment" className="body2 color-blue">VR APP DEVELOPMENT</Link></li>
              <li><Link to="/dedicated-devrlopment" className="body2 color-blue">DEDICATED DEVELOPERS</Link></li>
              <li><Link to="/sdk-devrlopment" className="body2 color-blue">SDK DEVELOPMENT</Link></li>
              <li><Link to="/sdk-modelings" className="body2 color-blue">3D MODELING SERVICES</Link></li>
              <li><Link to="/app-devrlopment" className="body2 color-blue">AR APP DEVELOPMENT</Link></li>
            </ul>
          </li>
          <li className="Heder__list-item">
            <div className="Heder__servises-list">
            <p className={`body2 color-blue ${technologiesOpen ? 'open' : ''}`} onClick={openMenuTechnologies}>TECHNOLOGIES</p>
            </div>
            <ul className={`Heder__servises-list-item-index ${technologiesOpen ? 'open' : ''}`}>
            <li><Link to="/android-technologies" className="body2 color-blue">ANDROID</Link></li>
            <li><Link to="/ios-technologies" className="body2 color-blue">IOS</Link></li>
            <li><Link to="/unity-technologies" className="body2 color-blue">UNITY</Link></li>
            </ul>
          </li>
          <li className="Heder__list-item">
            <Link to="/assets-products" className="body2 color-blue">PRODUCTS</Link>
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