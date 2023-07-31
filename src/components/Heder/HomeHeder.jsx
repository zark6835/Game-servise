import { addHeaderOpenClass } from '../../helpers/open/addHeaderOpenClass'
import { Link } from "react-router-dom";

import "./header-styles.scss";
import logo from "../../assets/img/home-logo.png";

const HomeHeder = () => {
  return (
    <>
      <header className="Home">
        <div className="Home-Heder__bg">
          <nav className="Heder__wrapper container">
            <Link to="/" className="Heder__logo">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="Heder__list">
              <li className="Heder__list-item">
                <div className="Heder__servises-list">
                  <p className='body2 color-white home' onClick={addHeaderOpenClass}>
                    SERVICES
                  </p>
                </div>
                <ul className='Heder__servises-list-item-home openClass'>
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
                <div className="Heder__servises-list">
                  <p className='body2 color-white home' onClick={addHeaderOpenClass}>
                    TECHNOLOGIES
                  </p>
                </div>
                <ul className='Heder__servises-list-item-home openClass'>
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
                <div className="Heder__servises-list">
                  <p
                    className='body2 color-white home'
                    onClick={addHeaderOpenClass}
                  >
                    ABOUT US
                  </p>
                </div>
                <ul
                  className='Heder__servises-list-item-home openClass'
                >
                  <li>
                    <Link to="/aboutUs-contacts" className="body2 color-white">
                      CONTACTS
                    </Link>
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
            <Link to="/aboutUs-contacts" className="Home-Heder__btn body2">
              CONTACT US
            </Link>
          </nav>
        </div>
      </header>
    </>
    
  );
};

export default HomeHeder;
