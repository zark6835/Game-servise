import logo from "../../assets/img/footer-logo.png";
import facebook from "../../assets/img/content/footer/footer-facebook.svg";
import linkedin from "../../assets/img/content/footer/footer-linkedin.svg";
import whatsApp from "../../assets/img/content/footer/footer-whatsApp.svg";
import skype from "../../assets/img/content/footer/footer-skype.svg";
import github from "../../assets/img/content/footer/footer-github.svg";

import "./footer-styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__list-margin">
        <ul className="footer__list-wrapper container">
          <li className="footer__list-social">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
            <ul className="footer__list-item-social">
              <li>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={whatsApp} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={skype} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/zark6835">
                  <img src={github} alt="" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="footer__list">
              <h2 className="footer-title">SERVICES</h2>
            </div>
            <ul className="footer__list-item">
            <li><a href="/mobile-devrlopment" className="footer-paragraph">MOBILE APPLICATION DEVELOPMENT</a></li>
              <li><a href="/game-devrlopment" className="footer-paragraph">GAME DEVELOPMENT OUTSOURCING</a></li>
              <li><a href="/vr-devrlopment" className="footer-paragraph">VR APP DEVELOPMENT</a></li>
              <li><a href="/dedicated-devrlopment" className="footer-paragraph">DEDICATED DEVELOPERS</a></li>
              <li><a href="/sdk-devrlopment" className="footer-paragraph">SDK DEVELOPMENT</a></li>
              <li><a href="/sdk-modelings" className="footer-paragraph">3D MODELING SERVICES</a></li>
              <li><a href="/app-devrlopment" className="footer-paragraph">AR APP DEVELOPMENT</a></li>
            </ul>
          </li>
          <li>
            <div className="footer__list">
              <h2 className="footer-title">TECHNOLOGIES</h2>
            </div>
            <ul className="footer__list-item">
              <li>
                <a className="footer-paragraph" href="/android-technologies">ANDROID</a>
              </li>
              <li>
                <a className="footer-paragraph" href="/ios-technologies">IOS</a>
              </li>
              <li>
                <a className="footer-paragraph" href="/unity-technologies">UNITY</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__list-title">
              <li>
                <a className="footer-title" href="/assets-products">PRODUCTS</a>
              </li>
              <li>
                <a className="footer-title" href="/portfolio">PORTFOLIO</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="footer__list">
              <h2 className="footer-title">ABOUT US</h2>
            </div>
            <ul className="footer__list-item">
              <li>
                <a className="footer-paragraph" href="/aboutUs-contacts">CONTACTS</a>
              </li>
              <li>
                <a className="footer-paragraph" href="/aboutUs-team">TEAM</a>
              </li>
              <li>
                <a className="footer-paragraph" href="/aboutUs-join-team">JOIN THE TEAM</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="copyright ">
        <div className="copyright-wrapper container">
          <p className="copyright-paragraph">
            © 2021 - Stan’s Assets. All Right Reserved
          </p>
          <div className="copyright-padding">
            <p className="copyright-paragraph">Privacy policy</p>
            <p className="copyright-paragraph">Cookies policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
