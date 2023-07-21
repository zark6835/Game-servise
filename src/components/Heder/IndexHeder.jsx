import logo from "../../assets/img/index-logo.png";
import "./header-styles.scss";
import { addHeaderOpenClass } from '../../helpers/open/addOpenClass'

import { Link } from "react-router-dom";


const IndexHeder = () => {

  

    return ( 
        <header className="Index-Heder__bg">
        <div className="Heder__wrapper container">
          <Link to="/" className="Heder__logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="Heder__list">
          <li className="Heder__list-item">
            <div className="Heder__servises-list">
              <p className={`body2 color-blue`} onClick={addHeaderOpenClass}>SERVICES</p>
            </div>
            <ul className={`Heder__servises-list-item-index openClass`}>
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
            <p className={`body2 color-blue `} onClick={addHeaderOpenClass}>TECHNOLOGIES</p>
            </div>
            <ul className={`Heder__servises-list-item-index openClass`}>
            <li><Link to="/android-technologies" className="body2 color-blue">ANDROID</Link></li>
            <li><Link to="/ios-technologies" className="body2 color-blue">IOS</Link></li>
            <li><Link to="/unity-technologies" className="body2 color-blue">UNITY</Link></li>
            </ul>
          </li>
          <li className="Heder__list-item">
            <Link to="/assets-products" className="body2 color-blue">PRODUCTS</Link>
          </li>
          <li className="Heder__list-item">
            <Link to="/portfolio" className="body2 color-blue">PORTFOLIO</Link>
          </li>
          <li className="Heder__list-item">
          <div className="Heder__servises-list">
            <p className={`body2 color-blue`} onClick={addHeaderOpenClass}>ABOUT US</p>
          </div>
          <ul className={`Heder__servises-list-item-index openClass`}>
              <li><Link to="/aboutUs-contacts" className="body2 color-blue">CONTACTS</Link></li>
              <li><Link to="/aboutUs-team" className="body2 color-blue">TEAM</Link></li>
              <li><Link to="/aboutUs-join-team" className="body2 color-blue">JOIN THE TEAM</Link></li>
            </ul>
          </li>
          </ul>
          <Link to="/aboutUs-contacts" className="Index-Heder__btn body2">CONTACT US</Link>
        </div>
      </header> 
     );
}
 
export default IndexHeder;